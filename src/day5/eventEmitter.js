// @flow

type EmmitFunction = mixed => mixed;

type ListenersType = {
  [string]: Array<EmmitFunction>,
};

class EventEmitter {
  listeners: ListenersType = {};

  addListener(event: string, fn: EmmitFunction) {
    if (this.listeners[event]) {
      this.listeners[event] = [...this.listeners[event], fn];
    } else {
      this.listeners[event] = [fn];
    }
  }

  emit(event: string) {
    for (let item of this.listeners[event]) {
      item();
    }
  }
}

// class EventEmitter2 {
//   listeners = new Map();

//   addListener() {}

//   emit() {}
// }

export default EventEmitter;
