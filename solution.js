// Print Numbers from 1 to N Using Recursion;
function printNumbers(num) {
    if (num > 1) printNumbers(num - 1);
    console.log(num);
}
printNumbers(3)



// Print Numbers from N to 1 Using Recursion;
function printNumbersReverse(num) {
     console.log(num);
    if (num > 1) printNumbersReverse(num - 1);
   
}
printNumbersReverse(5)


//  Find Factorial of a Number Using Recursion;
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5));


// Find the Sum of First N Natural Numbers Using Recursion;
function sum (num) {
    if (num <= 0) throw new Error("Only natural numbers are supported");
    if (num === 1) return 1;
    return num + sum(num - 1);
}
console.log(sum(12));