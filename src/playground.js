import React, { useState } from "react";
import "./style.css";

export default function Playground() {
  let [arr, setArr] = useState([]);
  let [count, setCount] = useState(0);
  const buttonClick = num => {
    num == 0
      ? setCount(0)
      : num > 0
      ? setCount((count = count + 1))
      : setCount((count = count - 1));
  };
  function printArray() {
    return arr.map(item => <p key={item}>{item}</p>);
  }
  function formOnSubmit(e) {
    // console.log("inside form action");
    e.preventDefault();
    // staticArr.push(e.target.elements.name.value);
    // console.log('After push',staticArr)
    // staticArr.pop(e.target.elements.name.value);
    // console.log('After pop',staticArr);
    // setArr([...arr],e.target.elements.name.value);

    setArr([...arr, e.target.elements.name.value]);
    e.target.elements.name.value = "";
  }
  function resetForm() {
    setArr([]);
  }
  let [randomVal, setRandomVal] = useState(null);
  const randomOption = () => {
    setRandomVal(arr[Math.floor(Math.random() * arr.length)]);
    console.log(randomVal);
  };
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
        {count}
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
      <span>
        <i>Array Operation using useState</i>
        <br />
        <br />
        <form onSubmit={formOnSubmit}>
          <input type="text" id="name" />
          {arr.length > 0 && randomVal}
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <button onClick={randomOption}>Choose 1</button>
        <button onClick={resetForm}>Reset</button>
        {printArray()}
      </span>
      <hr />
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
