let obj = {
  num: 2
};

let add = function (a, b, c) {
  return this.num + a + b + c;
};

let arr = [3, 4, 5];

//call method
console.log(add.call(obj, 3, 4, 5));

//apply method
console.log(add.apply(obj, arr));

//bind method
let bound = add.bind(obj);
console.log(bound(1, 4, 5));
