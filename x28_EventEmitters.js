/*
Create a class that lets you:

->Subscribe to events (actions):
Provide an event name and a function to run when that event happens.
Multiple functions can be tied to the same event.
This function returns another function to stop listening to that event.

->Emit events:
Trigger an event by name, optionally passing along some data.
The functions subscribed to that event will run, and their results will be collected in an array.
If no one's listening, return an empty array.
*/

class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (cb) => cb !== callback
        );
        if (this.events[eventName].length === 0) {
          delete this.events[eventName];
        }
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events[eventName]) {
      return [];
    }
    return this.events[eventName].map((cb) => cb(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
