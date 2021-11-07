//write a function which accepts an array of positive integers and a positive integer
//and returns the length of the minimal contiguous subarray of which the sum is
//equal to or greater than the integer passed in.

function minSubArrayLenLong(arr, num) {
    if(arr.length === 0) {
        return 0;
    }

    var options = {};
    let tempTotal = 0;
    let count = 0;
    var minCount = Infinity;
    let i = 0;

    for(let j=0; j<arr.length; j++){
        //console.log('j: ', j);
        //loop through values as we slide along the array
        while(tempTotal<num && j<arr.length) {
            tempTotal += arr[i];
            //console.log('tempTotal: ', tempTotal);
            count++; 
            i++;
        }        
        if(tempTotal >= num) {
            if(count > 0){
                //console.log('count: ', count);
                minCount = Math.min(count, minCount);
            }
        }
        
        //reset counters
        i = j;
        tempTotal = 0;
        count = 0;
    }

    if(minCount === Infinity){
        console.log("no such subarray");
        return 0;
    }
    else{
        console.log("subArray length: ", minCount);
        return minCount;
    }


}

function minSubArrayLen(arr, num) {
    if(arr.length === 0) {
        return 0;
    }

    var rightPointerIndex = 0; 
    let leftPointerIndex = 0;
    let tempTotal = 0;
    let count = 0;
    var minCount = Infinity;
    //let i = 0;

    //initialize the first count
    while(tempTotal<num && rightPointerIndex<arr.length) {
        tempTotal += arr[rightPointerIndex];
        console.log('tempTotal: ', tempTotal);
        count++; 
        rightPointerIndex++;
    }   
    if(tempTotal >= num) {
        minCount = Math.min(count, minCount);
    //if counting reached the end of the array and we still didn't 
    //reach our input number, we need to return 0;
    } else {
        console.log('no subarray found');  
        return 0; 
    }
    
    //we went too far in the previous loop. Maybe need to address that there?
    rightPointerIndex--;
    while(rightPointerIndex<arr.length && leftPointerIndex<arr.length){
        //move left pointer to the right to see if the sum would still work
        console.log('move left pointer');
        tempTotal -= arr[leftPointerIndex];
        leftPointerIndex++;
        console.log('leftPointerIndex:', leftPointerIndex, 'tempTotal:', tempTotal);
        count--;
        console.log('count: ', count);
        if(tempTotal >= num) {
            minCount = Math.min(count, minCount);
        }
        //otherwise, move the right pointer one to the right and sum again
        else {
            console.log('now move right pointer');
            rightPointerIndex++;
            tempTotal += arr[rightPointerIndex];
            console.log('rightPointerIndex:', rightPointerIndex, 'tempTotal:', tempTotal);

            count++;
            console.log('count:', count);
            if(tempTotal >= num) {
                minCount = Math.min(count, minCount);
            }
        }

    }
    
    //TODO
    //now we need to see if i< the length of the array. If it is,
    //then walk the pointers down the array. Right moves 
    //right by one, left moves up one. See if the number is still >= num. 
    //If it is, move left over one more, see if total is still >=num. 
    //Check counts along the way to see if the minCount gets smaller.

    console.log("subArray length: ", minCount);
    //console.log('minSubArrayLen([1,2,3,4,5],9) //2'); 

    return minCount;

}

//minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
//minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
//minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
//minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
//minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
//minSubArrayLen([1,2,3,4,5],9) //2 
