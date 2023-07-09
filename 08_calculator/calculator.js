const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1,num2) {
  return num1 - num2;
};

//DON'T USE REST PARAMETER ON A ARRAY ARGUMENT
const sum = function(addend) {
	/*
  let sum = 0;
	for(let i=0;i<addend.length;i++)
  {
    sum += addend[i];
  }
  return sum;
  */
  /*
  let sum = 0;
  for(let addends of addend)
  {
  sum+=addends;
  }
  return sum;
  */
  
  return addend.reduce((a,b)=>a+b,0);
  

};

const multiply = function(...factor) {
  let product = 1;
	for(let i=0;i<factor.length;i++)
  {
    product *= factor[i];
  }
  return product;
};

const power = function(num,power) {
	return num ** power;
};

const factorial = function(num) {
  let factorial = 1;
	for(let i=2;i<=num;i++)
  {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
