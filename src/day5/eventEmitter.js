class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  addListener(event, fn) {
    if (this.listeners[event]) {
      this.listeners[event] = [...this.listeners[event], fn];
    } else {
      this.listeners[event] = [fn];
    }
  }

  emit(event) {
    for (let item of this.listeners[event]) {
      item();
    }
  }
}

export default EventEmitter;
