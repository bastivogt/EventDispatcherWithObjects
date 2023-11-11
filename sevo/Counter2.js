"use strict";

import EventDispatcher from "./EventDispatcher.js";

const Counter2 = {
  ...EventDispatcher,
  ON_COUNTER_START: "onCounterStart",
  ON_COUNTER_CHANGE: "onCounterChange",
  ON_COUNTER_FINISH: "onCounterFinish",

  init(start = 0, stop = 10, step = 1) {
    EventDispatcher.init.call(this);
    this.start = start;
    this.stop = stop;
    this.step = step;
    this._count = this.start;
  },

  run() {
    this._count = this.start;
    this.dispatchEvent(Counter2.ON_COUNTER_START, {
      target: this,
      count: this._count,
    });

    for (; this._count < this.stop; this._count += this.step) {
      this.dispatchEvent(Counter2.ON_COUNTER_CHANGE, {
        target: this,
        count: this._count,
      });
    }

    this.dispatchEvent(Counter2.ON_COUNTER_FINISH, {
      target: this,
      count: this._count,
    });
  },
};

export default Counter2;
