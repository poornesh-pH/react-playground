import React from "react";
import "./style.css";
import Todof from "./todof.js";
import Todoc from "./todoc.js";
import Playground from "./playground";
export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Todof />
      <Todoc />
      <Playground />
    </div>
  );
}
