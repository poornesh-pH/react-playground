import React, { Component } from "react";

export default class Todoc extends Component {
  state = {
    item: ""
  };
  render() {
    let addTodoo = e => {
      e.preventDefault();
      console.log(e.item)
    };
    return (
      <div>
        <p>Todo - Class Component</p>
        <form onSubmit={addTodoo}>
          <input type="text" name="item" id="item" />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
