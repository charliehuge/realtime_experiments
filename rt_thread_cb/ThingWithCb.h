#pragma once

#include <functional>
#include "ea_data_structures.h"
#include "../common/SpinLock.h"
#include "../common/SPSCQ.h"

template<class CbData>
class ThingWithCb {
public:
  using Cb = std::function<void(const CbData& cbData)>;

  virtual void setCb(const Cb& cb) = 0;

  using PreAcquireFiller = std::function<void()>;

  using PostAcquireFiller = std::function<void()>;

  void rtProcess(const PreAcquireFiller& preAcquireFiller, const PostAcquireFiller& postAcquireFiller) {
    preAcquireFiller();
    useCb(postAcquireFiller);
  }

protected:
  virtual void useCb(const PostAcquireFiller& postAcquireFiller) = 0;

  Cb _cb{nullptr};
};

template<class CbData>
class ThingWithCbAndSpinlock : public ThingWithCb<CbData> {
public:
  using Cb = typename ThingWithCb<CbData>::Cb;

  void setCb(const Cb& cb) override {
    if (std::this_thread::get_id() == _cbThread.load(std::memory_order::acquire)) {
      this->_cb = cb;
    }
    else {
      _spinLock.lock();
      this->_cb = cb;
      _spinLock.unlock();
    }
  }

protected:
  using PostAcquireFiller = typename ThingWithCb<CbData>::PostAcquireFiller;

  void useCb(const PostAcquireFiller& postAcquireFiller) override {
    if (_spinLock.tryLock()) {
      if (this->_cb != nullptr) {
        postAcquireFiller();
        _cbThread = std::this_thread::get_id();
        this->_cb(CbData());
      }
      _spinLock.unlock();
    }
  }

private:
  SpinLock _spinLock;
  std::atomic<std::thread::id> _cbThread{};
};

template<class CbData>
class ThingWithCbAndSPSCQ : public ThingWithCb<CbData> {
public:
  using Cb = typename  ThingWithCb<CbData>::Cb;

  void setCb(const Cb& cb) override {
    _q.push(cb);
  }

protected:
  using PostAcquireFiller = typename ThingWithCb<CbData>::PostAcquireFiller;

  void useCb(const PostAcquireFiller& postAcquireFiller) override {
    _q.popLast(this->_cb);
    if (this->_cb != nullptr) {
      postAcquireFiller();
      this->_cb(CbData());
    }
  }

private:
  SPSCQ<Cb, 2> _q;
};

template<class CbData>
class ThingWithCbAndEyalAmirFifo : public ThingWithCb<CbData> {
public:
  using Cb = typename  ThingWithCb<CbData>::Cb;

  void setCb(const Cb& cb) override {
    _q.push(cb);
  }

protected:
  using PostAcquireFiller = typename ThingWithCb<CbData>::PostAcquireFiller;

  void useCb(const PostAcquireFiller& postAcquireFiller) override {
    this->_cb = _q.pull();
    if (this->_cb != nullptr) {
      postAcquireFiller();
      this->_cb(CbData());
    }
  }

private:
  EA::Fifo<Cb, 5> _q;
};
