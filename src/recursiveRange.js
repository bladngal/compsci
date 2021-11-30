
//create a function that returns the sum of the numbers from
// 0 to the target number
function recursiveRange(target) {
    if(target === 1) return 1;

    return target + recursiveRange(target - 1);

}

console.log(recursiveRange(6)); // 21
//console.log(recursiveRange(10)); //55
//console.log(recursiveRange(3)); //6
//console.log(recursiveRange(1)); //1