"use strict"; 


//Using "this" in object literal
//The result is an error b/c it's being called as a function, not as a method
//with .notation


//create a calculator
//Create an object calculator with three methods:

//read() prompts for two values and saves them as object properties.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.

/*let calculator = {
  ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

  

  //chaining
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  }
  
  ladder.up().up().down().up().down().showStep(); // 1