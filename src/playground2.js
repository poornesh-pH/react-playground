import React from "react";

export default function Playground2() {
  class Person {
    constructor(name = 'Anonymus', age = 0) {
      this.name = name;
      this.age = age;
    }
    getDescription() {
      return `${this.name} is ${this.age} years old.`;
    }
  }

  const me = new Person("Poornesh", 23);
  console.log(me);
  const anaonymus = new Person();

  return (
    <div>
      <h1>Playground2</h1>
      <p>{me.getDescription()}</p>
      <p>{anaonymus.getDescription()}</p>
    </div>
  );
}
