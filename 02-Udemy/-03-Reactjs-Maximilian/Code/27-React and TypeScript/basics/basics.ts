// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// 01-PRIMITIVES
let age: number;
age = 12;
age = 12.5;

let userName: string;
userName = "Amr";

let isStudent: boolean;
isStudent = true;

// 02-MORE COMPLEX TYPES
let hobbies: string[];
hobbies = ["Sports", "Gaming"];

let person: {
  name: string;
  age: number;
};
person = {
  name: "Amr",
  age: 23,
};

let people: {
  name: string;
  age: number;
}[];

people = [
  {
    name: "Amr",
    age: 23,
  },
];

// TYPE INFERENCE
let course = "React - the Complete Guide";
// course = 123

// UNION TYPE
let courses: string | number = "React - the Complete Guide";
courses = 123;

// TYPE ALIASES
type Person = {
  name: string;
  age: number;
};

let peoples: Person[];
peoples = [
  {
    name: "Amr",
    age: 23,
  },
];

// 03-FUNCTIONS & TYPES
function adding(a: number, b: number) {
  return a + b;
}
function print(value: any) {
  console.log(value);
}

// GENERICS
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
