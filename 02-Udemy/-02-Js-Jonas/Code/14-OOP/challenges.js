'use strict';

// Coding Challenge #1
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`accelerate: ${this.make} is going at ${this.speed} km/hr`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`brake: ${this.make} is going at ${this.speed} km/hr`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw, mercedes);
bmw.accelerate();
bmw.brake();
bmw.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();
mercedes.brake();
 */

// Coding Challenge #2
/* 
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
 */

// Coding Challenge #3
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`accelerate: ${this.make} is going at ${this.speed} km/hr`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`brake: ${this.make} is going at ${this.speed} km/hr`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Linking prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);

console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
console.log(tesla);
tesla.brake();
 */

// Coding Challenge #4
/* 
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
 */
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
