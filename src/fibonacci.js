

//pass in the previous two numbers in the Fibonacci sequence
//and the counter for the nth element, which will count down to the end point
function calculateNext(arr, counter) {
    //console.log('counter:', counter);
    if(counter === 1) return arr[1];

    //find the sum of the two numbers
    let sum = arr[0] + arr[1];
    //decrememt the counter
    return calculateNext([arr[1], sum], --counter);
    

}

//create a function called fib which accepts a number and returns the nth
//number in the Fibonacci sequence. 1,1,2,3,5,8... where every sequencial
//number is equal to the sum of the two previous numbers.
function fib(nth) {
    //kickstart the array
    let arr = [0,1];
    return calculateNext(arr, nth);

}

//console.log(fib(2)) //1
console.log(fib(4)) //3
console.log(fib(10)) //55
console.log(fib(28)) //317811
console.log(fib(35)) //9227465

