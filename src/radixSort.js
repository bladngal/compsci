function getDigit(num, i){
    return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

//takes a list of numbers, figures out the largest
//digit count, then sorts according to each digit--
//ones, tens, hundreds, etc. and finally returns the
//sorted list
function radixSort(arr){
    var maxDigits = mostDigits(arr);
    var digitBuckets = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
    };
    var tempArray = [];
    var temp;
    for(var k=0; k<maxDigits; k++){
        for(var i=0; i<arr.length; i++){
            console.log(k, i);
            //get the kth digit from the number at arr index i
            temp = getDigit(arr[i], k); 
            //put that number into the correct bucket
            if(temp){
                digitBuckets[temp].unshift(arr[i]);
                console.log(digitBuckets);
            }
        }
        for(var j=0; j<10; j++){
            //create a new array made up of the 
            //values from the digitBucket array, in order
            if(digitBuckets[j].length){
                tempArray.push(digitBuckets[j]);
                console.log(tempArray);
            }
        }
        //finally, set the array to be equal to the newly sorted array
        //and clean out the temp array to make way for the next sort
        arr = tempArray;
        tempArray =[];
    }

}

radixSort([4,234,535,200,5,900,42]);
//radixSort([4,3,2]);