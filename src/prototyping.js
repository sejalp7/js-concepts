function Animal(action, type) {
  this.action = action;
  this.type = type;

  this.getAnimalDeatils = () => {
    return this.type;
  };
}

const obj1 = new Animal("fly", "bird");
const obj2 = new Animal("bark", "dog");

console.log(obj1.getAnimalDeatils());
console.log(obj2.getAnimalDeatils());

Animal.prototype.getDetails = function () {
  return this.type + this.action + " " + "prototype";
};

const obj3 = new Animal("swim", "fish");

console.log(obj3.getDetails());

console.log(obj3.__proto__ === Animal.prototype);
