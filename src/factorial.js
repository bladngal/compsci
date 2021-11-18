function factorial(base) {
    if(base === 1) return 1;

    return base * factorial(base - 1);

}

console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(4)); //24
console.log(factorial(7)); //5040
