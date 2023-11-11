"use strict";

const Counter = {
  init(start = 0, stop = 10, step = 1) {
    this.start = start;
    this.stop = stop;
    this.step = step;
    this._count = this.start;

    this.onCounterStart = null;
    this.onCounterChange = null;
    this.onCounterFinish = null;
  },

  run() {
    this._count = this.start;
    if (typeof this.onCounterStart === "function")
      this.onCounterStart({ target: this, count: this._count });

    for (; this._count < this.stop; this._count += this.step) {
      if (typeof this.onCounterChange === "function")
        this.onCounterChange({ target: this, count: this._count });
    }

    if (typeof this.onCounterFinish === "function")
      this.onCounterFinish({ target: this, count: this._count });
  },
};

export default Counter;
