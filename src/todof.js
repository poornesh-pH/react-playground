import React from 'react';

export default function Todo(){
function addTodo(e){
  e.preventDefault();
console.log();
}
  return(
    <div>
    <p>Todo component - Function component</p>
    <br/>
    <form onSubmit={addTodo}>
    <input type="text" name="item" id="item" />
    <input type="submit" value="Submit"/>
    </form>
    </div>
  ) 
}