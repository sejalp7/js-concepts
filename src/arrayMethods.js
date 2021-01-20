const arr = [12, 13, 6, 58, 93, 11];

//MAP METHOD
const mapped = arr.map((el) => {
  return 5 * el;
});

console.log(mapped);

// Reduce Method
const reduced = arr.reduce((total, current) => {
  return total + current;
});

console.log(reduced);

// Filter
const filtered = arr.filter((el) => {
  return el % 2 === 0;
});

console.log(filtered);

// Find
const findEl = arr.find((el) => {
  return el % 3 === 0 && el % 6 === 0;
});

console.log(findEl);

// FindIndex
const findElIndex = arr.findIndex((el) => {
  return el % 3 === 0 && el % 6 === 0;
});

console.log(findElIndex);

//Splice - Modifies array in place
const spliced = arr.splice(1, 1, 133);

console.log(spliced);
console.log(arr);

//Slice - Returns a shallow copy of array
const sliced = arr.slice(1, 2);

console.log(sliced);

console.log(arr);

//Sort - Modifies the array in place
arr.sort((el1, el2) => {
  return el1 - el2;
});

console.log("sorted", arr);
