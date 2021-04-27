import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";

export default function Playground() {
  return (
    <div>
      <h1>Playground</h1>
      <span>
        <i>printing object</i> {template} <hr />
      </span>
      <span>
        <i>Conditional rendering using Logical && operation</i>
        {staticObj.name && <p>{staticObj.name}</p>}
        <hr />
      </span>
      <span>
        <i>Invoking function </i>
        {getTown(staticObj.town)}
        <hr />
      </span>
      <span>
        <i>Conditional rendering using Conditional operator(? :)</i>
        {staticObj.age > 18 ? <p>{staticObj.age}</p> : "Under 18"}
        <hr />
      </span>
      <span>
        <i>Arrow function + Coditional rendering</i>
        <p>First name : {arrowFunction("poornesh")}</p>
        <p>First name and Age : {arrowFunction("poornesh", 23)}</p>
        <hr />
      </span>
      <span>
        <i>Map Function</i>
        <p>multiplier.multiply {multiplier.multiply()}</p>
        <p>
          multiplier.customMultiply {multiplier.customMultiply([1, 4, 3], 2)}
        </p>
        <hr />
      </span>
      <span>
        <i>Counter app</i>
        <br />
        <br />
        <button id="add" onClick={() => buttonClick(-1)}>
          -1
        </button>
        <button id="sub" onClick={() => buttonClick(1)}>
          +1
        </button>
        <button
          id="reset"
          onClick={() => {
            buttonClick(0);
          }}
        >
          Reset
        </button>
        <hr />
      </span>
    </div>
  );
}

var template = (
  <div>
    <p>Poornesh</p>
    <p>Age: 23</p>
    <p>Location : Sathy </p>
  </div>
);

let staticObj = {
  name: "Poornesh",
  age: 23,
  town: "Sathy"
};

let staticArr = ["Name 1", "Name 2", "Name 3"];

function getTown(town) {
  if (town) return <p>{town}</p>;
  else return "Unknown";
}

const arrowFunction = (name, age) => {
  return age ? name + " " + age : name.split(" ")[0];
};

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  },
  customMultiply(numbers, multiplyBy) {
    return numbers.map(number => number * multiplyBy);
  }
};
let count = 0;
const buttonClick = num => {
  num == 0 ? (count = 0) : num > 0 ? count++ : count--;
  console.log(count);
};
