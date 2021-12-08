//accepts a sorted array and a search target
//returns the index of the value or -1 if not found
function binarySearch(arr, target) {
    var leftPointer = 0;
    var rightPointer = arr.length - 1;
    var testPointer;
    while(leftPointer < rightPointer){
        //console.log('leftPointer', leftPointer);
        //console.log('rightPointer', rightPointer);
        testPointer = leftPointer + Math.floor((rightPointer - leftPointer)/2);
        //console.log('testPointer', testPointer);
        
        if(arr[testPointer] === target) return testPointer;
        //if not found, move a pointer
        if(arr[testPointer] < target){
            leftPointer = testPointer + 1;
        }
        // arr[testPointer] > target
        else {
            rightPointer = testPointer - 1;
        } 
        if(leftPointer === rightPointer){
            if(arr[leftPointer] === target) return leftPointer;
        }
        
    }
    //we exited without finding the value, so return not found code 
    return -1;
}

//console.log(binarySearch([1,2,3,4,5], 2)); // 1
//console.log(binarySearch([1,2,3,4,5], 3)); // 2
console.log(binarySearch([1,2,3,4,5], 5)); // 4
//console.log(binarySearch([1,2,3,4,5], 6)); // -1