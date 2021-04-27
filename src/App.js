import React from "react";
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
    </div>
  );
}
