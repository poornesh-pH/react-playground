import React, { Component } from "react";

export default class Todoc extends Component {
  render() {
    let addTodoo =(e)=> {
      event.preventDefault();
      setItem(e)
    };
 
    return (
      <div>
        <p>Todo - Class Component</p>
        <form onSubmit={()=>addTodoo()}>
          <input type="text" name="item" id="item" />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
