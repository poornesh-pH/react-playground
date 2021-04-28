import React from "react";
import "./style.css";
import Todof from "./todof";
import Todoc from "./todoc";
import Playground from "./playground";
import Playground2 from './playground2';
export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Todof />
      <Todoc />
      <Playground />
      <Playground2 />
    </div>
  );
}
