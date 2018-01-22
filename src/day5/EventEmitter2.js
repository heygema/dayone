// @flow

type EventList = Set<Function>;
type EventMap = Map<string, EventList>;
// type Subscription = {
//   remove: () => void,
// };

class EventEmitter {
  events: EventMap = new Map();
  eventListenerData = new Map();

  addListener(eventName: string, eventListener: Function) {
    let eventList = this.events.get(eventName);
    if (eventList == null) {
      eventList = new Set();
      this.events.set(eventName, eventList);
    }
    eventList.add(eventListener);
    // let id = eventList.add(eventListener);
    // // TODO: Make an id and save something.
    let id = Math.random().toString();
    this.eventListenerData.set(id, () => {
      if (eventList) {
        eventList.delete(eventListener);
      }
    });
    return {
      array: Array.from(this.events.keys()),
      id: id,
      remove: () => {
        let eventList = this.events.get(eventName);
        if (eventList) {
          eventList.delete(eventListener);
        }
      },
    };
  }

  removeListener(eventName: string, eventListener: Function) {
    let eventList = this.events.get(eventName);
    if (eventList) {
      eventList.delete(eventListener);
    }
  }

  removeListenerByID(id: number) {
    // for (let key of this.events.keys()) {
    //   //   this.events.get(key).delete(this.eventListenerData.get(id));
    //   return key;
    let mustBeDeleted = this.eventListenerData.get(id);
    // for (let funcs of this.events.keys()) {
    //   this.events[funcs].delete(mustBeDeleted);
    // }
    if (mustBeDeleted) {
      mustBeDeleted();
    }

    // }d=is;this.eventL id=ne;Data.get(id);
  }

  emit(eventName: string) {
    let eventList = this.events.get(eventName);
    if (eventList) {
      for (let eventHandler of eventList) {
        eventHandler();
      }
    }
  }
}

export default EventEmitter;
