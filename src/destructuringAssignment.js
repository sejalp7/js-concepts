let user = {
  name: "Sejal",
  age: 26,
  designation: "Sr. Software Er",
  country: "India"
};

const { name, age, country } = user;

console.log(name, age, country);

function Person({ name, county, designation }) {
  console.log(`I am ${name}. I live in ${country}. I am a ${designation}`);
}

console.log(Person(user));
