import React from "react";
import "./style.css";

export default function Playground() {
  return (
    <div>
      <h1>Playground</h1>
      {template}
      {staticObj.name && <p>{staticObj.name}</p>}
      {getTown(staticObj.town)}
      {staticObj.age > 18 ? <p>{staticObj.age}</p> : "Under 18"}
      {/* {staticArr} */}
      <p>First name : {arrowFunction("poornesh")}</p>
      <p>First name and Age : {arrowFunction("poornesh", 23)}</p>
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
