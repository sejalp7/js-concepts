// Primitive Value assignment
let string1 = "Sejal";
let string2 = string1;
console.log(string1);
console.log(string2);
console.log(string1 === string2);

string2 = "Pande";
console.log(string2);
console.log(string1);

//Object reference and assignment
let obj1 = { name: "John" };
console.log(obj1);

let obj2;
obj2 = obj1;
console.log(obj2);
obj2.name = "Alice";
console.log(obj2);

let obj4 = { name: "Mary" };
let obj3 = { ...obj4 };
let obj5 = Object.assign(obj5, obj4);
console.log(obj5);
console.log(obj3);

console.log(obj3 === obj4); //false
console.log(obj1 === obj2); //true

obj3.name = "Lily";
console.log(obj3);
console.log(obj4);
