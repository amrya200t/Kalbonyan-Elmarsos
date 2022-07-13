'use strict';

// Coding Challenge #2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`accelerate: ${this.make} is going at ${this.speed} km/hr`);
  }
  brake() {
    this.speed -= 5;
    console.log(`brake: ${this.make} is going at ${this.speed} km/hr`);
  }

  get speedUS() {
    console.log(`${this.speed / 1.6} mi/h`);
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    console.log(`${speed * 1.6} km/h`);
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('ford', 120);
console.log(ford);
ford.speedUS;
ford.speedUS = 40;
ford.speedUS;
console.log(ford);
ford.accelerate();
ford.brake();
ford.accelerate();
