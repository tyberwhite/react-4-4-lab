// Wednesday, Dec 14th, 2022
// Day 21
// React 4.4 -- Lab
// J.T.W.

///////////////////////////////////
// SECTION 1
// Creating Classes & Factories
///////////////////////////////////

// Create Hamster Class
class Hamster {
  constructor(name) {
    this.name = name;
    this.owner = "";
    this.price = 15;
  }

  wheelRun() {
    console.log("squeak squeak");
  }

  eatFood() {
    console.log("nibble nibble");
  }

  getPrice() {
    return this.price;
  }
}

// Create Person Class
class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet() {
    console.log(`Hi! My name is ${this.name}`);
  }

  eat() {
    this.weight++;
    this.mood++;
  }

  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }

  buyHamster(hamster) {
    if (this.bankAccount >= hamster.getPrice()) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.getPrice();
    } else {
      console.log("You do not have enough money!");
    }
  }
}
