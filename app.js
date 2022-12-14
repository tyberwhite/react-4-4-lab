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
// NOTE! -- modified methods to improve efficiency
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

  eat(frequency) {
    this.weight += frequency;
    this.mood += frequency;
  }

  exercise(frequency) {
    this.weight -= frequency;
  }

  ageUp(years) {
    this.age += years;
    this.height += years;
    this.weight += years;
    this.mood -= years;
    this.bankAccount += 10 * years;
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

// 1. Instantiate a new Person named Timmy
let timmy = new Person("Timmy");

// 2. Age Timmy five years
timmy.ageUp(5);

// 3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eat(5);

// 4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exercise(5);

// 5. Age Timmy 9 years
timmy.ageUp(9);

// 6. Create a hamster named "Gus"
let gus = new Hamster("Gus");

// 7. Set Gus's owner to the string "Timmy"
gus.owner = "Timmy";

// 8. Have Timmy "buy" Gus
timmy.buyHamster(gus);

// 9. Age Timmy 15 years
timmy.ageUp(15);

// 10. Have Timmy eat twice
timmy.eat(2);

// 11. Have Timmy exercise twice
timmy.exercise(2);
