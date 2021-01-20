let sum = function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

console.log(sum(1)(2)(5));

//when a function, instead of taking all
//arguments at one time, takes the first one and
//return a new function that takes the second one
// and returns a new function which takes the third
//one, and so forth until all arguments have been fulfilled.

//Mainly It helps to create a higher-order function. It is extremely helpful in event handling.

//loadash can be used with vanilla JS
