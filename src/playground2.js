import React from "react";

export default function Playground2() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    getDescription() {
      return `${this.name} is ${this.age} years old.`;
    }
  }

  const me = new Person("Poornesh", 23);
  console.log(me);

  return (
    <div>
      <h1>Playground2</h1>
      <p>{me.getDescription()}</p>
    </div>
  );
}
