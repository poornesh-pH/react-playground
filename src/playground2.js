import React from "react";

export default function Playground2() {
  class Person {
    constructor(name = "Anonymus", age = 0) {
      this.name = name;
      this.age = age;
    }
    getDescription() {
      return `${this.name} is ${this.age} years old.`;
    }
    getGreetings() {
      return `Hi I am ${this.name}`;
    }
  }

  class Traveller extends Person {
    constructor(name, age, home) {
      super(name, age);
      this.home = home;
    }
    hasHome() {
      return !!this.home; // if home contains value it returns true, else return false.  if !undefined => true
    }
    getGreetings() {
      let greetings = super.getGreetings();
      if (this.hasHome()) {
        return (greetings = `${greetings}. I am travelling to ${this.home}`);
      } else return greetings;
    }
  }

  const me = new Person("Poornesh", 23);
  const anaonymus = new Person();
  const traveller = new Traveller("Poornesh", 23, "sathy");
  const traveller2 = new Traveller("pH", 23);
  return (
    <div>
      <h1>Playground2</h1>
      <span>
        <i>class operations</i>
        <p>{me.getDescription()}</p>
        <p>{anaonymus.getDescription()}</p>
        <p>{traveller.getGreetings()}</p>
        <p>{traveller2.getGreetings()}</p>
      </span>
    </div>
  );
}
