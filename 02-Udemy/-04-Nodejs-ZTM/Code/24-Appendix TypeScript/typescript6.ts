// Type Assertion
interface catArmy {
  count: number;
  type: string;
  magic?: string; // may have it
}

let dog = {} as catArmy;
dog.count;

// Function
const newFunction = (cat: catArmy): void => {
  console.log(cat);
};

const newFunction2 = (cat: catArmy): number => {
  return 5;
};

// Class
class Animal {
  public sing2: string = "lalala";
  private sing: string = "lalala";

  constructor(sound: string) {
    this.sing = sound;
  }

  greet() {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("ROAR!");

const greeting: string = lion.greet();
console.log(greeting);

// Union
let confused: string | number | boolean = "hello";

let x = 4;
// x = 'hello'
