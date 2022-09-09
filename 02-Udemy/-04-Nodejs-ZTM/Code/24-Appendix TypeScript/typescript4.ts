// Tuple
let tuple: [string, number];
tuple = ["age", 23];
console.log(tuple);

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}

const sizeName: string = Size[2];
const sizeNumber: number = Size.Small;
console.log(sizeName, sizeNumber);

//  Any
let whatever: any = "Aghhhhhh Nooooo!!!";
whatever = true;
whatever = tuple;

console.log(whatever);

// void
let sing = (): void => {
  console.log("lalalalallalal");
};

// never
let error = (): never => {
  throw Error("oops!");
};
