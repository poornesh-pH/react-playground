import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Todof from "./todof";
import Todoc from "./todoc";
import Playground from "./playground";
export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Todof />
      <Todoc />
      <Playground />
      <h1>Indecision App</h1>
      {options}
      <form onSubmit={formOnSubmit}>
        <input type="text" id="option" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const options = [];

const formOnSubmit = e => {
  e.preventDefault();
  options.push(e.target.elements.option.value);
  e.target.elements.option.value = "";
  console.log(options);
};
// function renderApp(){

// ReactDOM.render(<App />, document.getElementById("root"));

// }
// renderApp();
