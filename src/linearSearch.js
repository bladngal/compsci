//write a function which takes an array and and target number,
//searches to see if the number is in the array and returns
//the index if it is, and -1 if it is not found

function linearSearch(arr, target){
    for(i=0; i<arr.length; i++){
        if(arr[i] === target) return i;
    }
    return -1;
}

console.log(linearSearch([10,15,20,25,30], 15) );// 1
console.log(linearSearch([10,15,20,25,30], 12) ); // -1