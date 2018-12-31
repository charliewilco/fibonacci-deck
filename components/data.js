import React from "react";
import f from "fib";

import Coffee from "../components/coffee";

const N = 12;
const fib = Array.apply(null, { length: N })
  .map(Number.call, Number)
  .map(n => f(n))
  .map(fn => ({ value: fn, display: fn }));
console.log(fib);

export const colors = ["#E05557", "#FFBA00", "#00B6F0"];

const data = [
  {
    value: 0,
    display: 0
  },
  ...fib,
  {
    value: "?",
    display: "?"
  },
  {
    value: "∞",
    display: "∞"
  },
  {
    value: "Defer",
    display: "➳"
  },
  {
    value: "Coffee",
    display: (
      <Coffee
        style={{ margin: "-5px 0 -5px", display: "inline-block" }}
        alt="coffee pot"
      />
    )
  }
];

export default data;
