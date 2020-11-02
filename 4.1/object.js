"use strict"; 

//Hello, object --I did w/ more than one line to start 
let user = {
    name: "John" , 
    surname: "Smith" 
}

console.log(user)
user.name = "Pete";
console.log(user)
delete user.name;
console.log(user);


//one line at a time
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//check for emptiness 
//Write the function isEmpty(obj) which returns true if the object has no properties
//false otherwise

function isEmpty (obj) {
  for (let key in obj) {
    return false;
  }
    return true;
}


//Sum object properties 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
//If salaries is empty, then the result must be 0.


//console.log(salaries);

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum); 


//Multiply numeric property values by 2

function multiplyNumeric (menu) {
    for (let key in menu) {
        if (typeof menu[key] == "number") {
            menu[key] *= 2;
        } 
    }
}

//answer:
//create function
function multiplyNumeric(obj) {
  //use a for let in loop to loop through the keys in the object
  for (let key in obj) {
    //if the typeof the key in the object is equal to a number
    if (typeof obj[key] == 'number') {
      //take the value in the object and multiple by 2
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
