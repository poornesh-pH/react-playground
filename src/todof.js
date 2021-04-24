import React, { useState } from "react";

export default function Todo() {
  const [title, setTitle] = useState();
  const [titlebool, setTitlebool] = useState(true);
  const [again, setAgain] = useState("");
  const [items, setItems] = useState([]);
  const titleChange = () => {
    setTitlebool(!titlebool);
    console.log(titlebool);
    if (titlebool === true) {
      setTitle("using useState()");
      setAgain("again");
    } else {
      setTitle("");
      setAgain("");
    }
  };

  function addTodo(e) {
    e.preventDefault();
    setItems();
  }
  return (
    <div>
      <p>Todo component - Function component {title}</p>
      <button onClick={() => titleChange(item)}>Click me {again}</button>
      <br />
      <br />
      <form onSubmit={addTodo}>
        <input type="text" name="item" id="item" />
        <input type="submit" value="Submit" />
      </form>
      {/* <p>{items}</p> */}
    </div>
  );
}
