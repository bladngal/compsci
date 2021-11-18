function power(base, exp) {
    if(exp === 0) return 1;

    return base * power(base, exp - 1);

}

//console.log(power(2,0)); //1
//console.log(power(2,2)); //4
//console.log(power(2,4)); //16

console.log(power(3,3)); //27
console.log(power(3,1)); //3
console.log(power(3,0)); //1
