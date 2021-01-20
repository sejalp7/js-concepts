function User(val) {
  var name = function (i) {
    console.log(i + val);
  };
  return name;
}

var obj1 = new User("Sejal");

obj1("Welcome");
