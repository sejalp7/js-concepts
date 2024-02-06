//Polyfill is like a fallback for browser
//In case if the browser does not have the function, we then write a polyfill for that function

// Bind method behvaior that its polyfill should have is all functions/methods should have  access to the bind polyfill and it should return the copy of the invoked function. 
// Also the polyfill should consider if the function is parameterised and the parameter could be passed to the bind polyfill call or when the copy of the method is invoked



let obj1 = {
    fname: 'Sejal',
    lname: 'pande'
}


function printFullName(state, country) {
    console.log(this.fname, this.lname + " from " + state, country)
}

Function.prototype.myBind = function (...args)  {
    let obj = this,
    params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let pname = printFullName.myBind(obj1, 'Nashik');

pname('MH');

