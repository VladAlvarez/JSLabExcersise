function factorial(n) {
    // guard clause -- of course if a number is negative this won't work
    if (n < 0)
        return "Factorial is not defined for negative numbers";
    // 
    else if (n == 0)
        return 1;
    // recursion -- reference itself 
    else {
        return (n * factorial(n - 1));
    }
}

console.log(factorial(5));
// console.log(factorial(7));
// console.log(factorial(-20));
// console.log(factorial(0));