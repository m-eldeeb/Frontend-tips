/*
 # Math Algorithms
   -- fibonacci sequence
   -- factorial of numbers
   -- prime numbers
   -- power of two
   -- recrusion
   -- fibonacci sequence with recrusion
   -- factorial of numbers with recrusion

*/

/* Fibonacci sequence */

// function Fibonacci(number) {
//   let fib = [0, 1];
//   for (let i = 2; i < number; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// console.log(Fibonacci(2));
// console.log(Fibonacci(5));
// console.log(Fibonacci(8));

/********************************************************** */
/********************************************************** */

/* Factorial of numbers */

// function factorial(number) {
//   let result = 1;
//   for (let i = 2; i <= number; i++) {
//     result = result * i;
//   }
//   return result;
// }

// console.log(factorial(1));
// console.log(factorial(0));
// console.log(factorial(5));

/********************************************************** */
/********************************************************** */

/*
# Definition of a prime number:

  # A number divisible by only 2 (different) numbers
    -- one 
    -- The number itself.

  # Following that definition we can see that 1 is divisible by 1, and itself. But the 2 numbers are the same. 
    So it is not a prime.

  # Zero can never be a prime number as it can be divided by 1, and any other number. It has an infinite number
    of divisors and therefore  doesn't meet the definition.

 */

/* Prime numbers */

// function isPrime(number) {
//   if (number < 2) return false;
//   for (let i = 2; i <= number; i++) {
//     if (number % i == 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(5));

/*
  # Enhance or prime number function
    -- if n = a * b and a <= b  ====> a <= sqrt(n) and b >= sqrt(n) 
    -- time complexity ===> O (sqrt(n))
*/

// function isPrime(number) {
//   if (number < 2) return false;
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i == 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(16));

/*
  # Enhance or prime number function
*/

// function isPrime(number) {
//   if (number < 2) return false;
//   for (let i = 2; i * i <= number; i++) {
//     if (number % i == 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(16));

/********************************************************** */
/********************************************************** */

/* 
  # power of two
   -- 8 = 2 * 2 * 2     ===> 2 ^ 3
   -- 10 = 2 * 2 * .... ===> 2 ^ ????
*/

// function isPowerOfTwo(number) {
//   if (number < 1) return false;
//   while (number > 1) {
//     if (number % 2 !== 0) return false;
//     number /= 2;
//   }
//   return true;
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(10));

/* 
  # Enhance power of two using bitwise operator 
*/

// function isPowerOfTwo(number) {
//   if (number < 1) return false;

//   return (number & (number - 1)) === 0;
// }
// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(10));
