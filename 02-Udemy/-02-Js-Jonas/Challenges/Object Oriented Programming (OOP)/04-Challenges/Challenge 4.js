'use strict';

// Coding Challenge #4
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
    return this;
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

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .chargeBattery(50)
  .accelerate();

rivian.speedUS;
