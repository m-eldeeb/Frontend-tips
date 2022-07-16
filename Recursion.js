/*

 # Recursion 
   -- recursion is when a function call itself 

 # why?
   -- a great technique to simplify your solution
   -- if you find yourself breaking down your problem into smaller versions of the same problem

# Every recursive solution needs to have a [Base Case] (a condition to terminate the recursion)

*/

/*
 # Recursive fibonacci sequence

 # time complexity ==> O(2^n)
*/

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(6));

/*
 # Recursive factorial 
 # time complexity ==> O(n)
*/

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
