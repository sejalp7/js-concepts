let obj1 = {
    fname: 'Sejal',
    lname: 'Pande'
}

let obj2 = {
    fname: 'Sejal',
    lname: 'Bhavsar'
}

function printFullName (city, state) {
  console.log(this.fname, this.lname + " from " + city, state);
}


//function burrowing
/* call function takes the reference to the this objection as the first parameter*/

// printFullName.call(obj1);

// printFullName.call(obj2);

/* call method takes the reference to the this objection as the first parameter and list of comma seaparated parameters if the invoking function is parameterised*/
printFullName.call(obj1, 'Nashik', 'MH');

printFullName.call(obj2, 'Giessen', 'DE');

//APPLY METHOD
/* apply method takes the reference to the this objection as the first parameter and array list of parameters if the invoking function is parameterised*/
printFullName.apply(obj1, ['Nashik', 'MH']);

printFullName.apply(obj2, ['Giessen', 'DE']);


//BIND METHOD
// Takes the reference to the this object as parameter and returns the copy of the function that can be invoked afterwards
let pname = printFullName.bind(obj1, 'Nashik', 'MH');
// Logs the function 
console.log(pname);

// invoke the copy of function returned by bind method
pname();