// Wednesday, Dec 14th, 2022
// Day 21
// React 4.4 -- Lab
// J.T.W.

///////////////////////////////////
// SECTION 1
// Creating Classes & Factories
///////////////////////////////////

// Create Hamster class
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
