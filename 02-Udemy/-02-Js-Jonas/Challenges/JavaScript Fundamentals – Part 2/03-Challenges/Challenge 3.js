/* CODE CHALLENGE #03 */
const mark = {
  fullName: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI(${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s BMI(${mark.calcBMI()})`
  );
} else if (john.calcBMI() < mark.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI(${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s BMI(${john.calcBMI()})`
  );
} else {
  console.log("They are equal.");
}
