function* generatorGreet() {
  yield "Hi";
  yield "How are you";
  yield "Bye";
}

const greet = new generatorGreet();

console.log(greet.next().value);
console.log(greet.next().value);
console.log(greet.next().value);
console.log(greet.next().value);

function* infiniteGenerator() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const infinite = new infiniteGenerator();

console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
console.log(infinite.next().value);
