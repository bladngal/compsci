
//Implementation of the Sliding Windows Pattern
// We are looking for the largest sum of "num" number of 
// consecutive values in a given array
function findMaxSum(arr, num) {
    if(arr.length < num) {          //if the array is too small, return null
        return null;
    }

    let tempSum = 0;
    let maxSum = 0;
    
    for(let i = 0; i<num; i++) {
        maxSum += arr[i];              //load up the first set for initial maxSum
    }                                  //peeking through the window...

    for(let j=0; j<arr.length-num +1; j++){ //start at 0, last pass when j is at length-num
        console.log(tempSum, maxSum);
        tempSum = tempSum - arr[j];         //subtract the first value
        tempSum = tempSum + arr[j+num];     //slide the window to the add the new "last" value
        if(tempSum > maxSum) {
            maxSum = tempSum;
        } // or could do
        //maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

//findMaxSum([1,2,3,4,5,6,7], 3)
console.log(findMaxSum([1,2,3,4,5,6,1], 3))