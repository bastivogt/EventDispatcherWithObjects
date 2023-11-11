"use strict";

import Counter from "./sevo/Counter.js";
import Counter2 from "./sevo/Counter2.js";

console.log("--- Counter ohne EventDispatcher ---");

const counter = Object.create(Counter);
counter.init();

counter.onCounterStart = function (evt) {
  console.log("onCounterStart count:", evt.count);
};

counter.onCounterChange = function (evt) {
  console.log("onCounterChange count:", evt.count);
};

counter.onCounterFinish = function (evt) {
  console.log("onCounterFinish count:", evt.count);
};

//counter.onCounterChange = null;

counter.run();

console.log("---------------------------------------------------");

console.log("--- Counter2 mit EventDispatcher ---");

const counter2 = Object.create(Counter2);
counter2.init();

counter2.addListener(Counter2.ON_COUNTER_START, (evt) => {
  console.log("evt", evt);
  console.log(Counter2.ON_COUNTER_START, "count:", evt.count);
  console.log("target:", evt.target);
});

counter2.addListener(Counter2.ON_COUNTER_CHANGE, (evt) => {
  console.log(Counter2.ON_COUNTER_CHANGE, "count:", evt.count);
});

counter2.addListener(Counter2.ON_COUNTER_FINISH, (evt) => {
  console.log(Counter2.ON_COUNTER_FINISH, "count:", evt.count);
});

//counter2.removeListener(Counter2.ON_COUNTER_CHANGE);

counter2.run();
