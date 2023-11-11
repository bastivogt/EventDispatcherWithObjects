"use strict";

const EventDispatcher = {
  init() {
    this._listeners = [];
  },

  hasListener(type) {
    for (let listener of this._listeners) {
      if (listener.type === type) {
        return true;
      }
    }
    return false;
  },

  addListener(type, listener) {
    if (!this.hasListener(type)) {
      this._listeners.push({ type: type, listener: listener });
      return true;
    }
    return false;
  },

  removeListener(type) {
    if (this.hasListener(type)) {
      for (let i = 0; i < this._listeners.length; i++) {
        if (this._listeners[i].type === type) {
          this._listeners.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  },

  dispatchEvent(type, evtObj) {
    if (this.hasListener(type)) {
      for (let listener of this._listeners) {
        if (listener.type === type) {
          listener.listener(evtObj);
          return true;
        }
      }
    }
    return false;
  },
};

export default EventDispatcher;
