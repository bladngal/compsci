
//Given an array of integers and a number, write a function which
//finds the maximum sum of a subarray with the length of the nunber 
//passed to the function
function maxSubarraySum(maxArray, numAddends){

    //let sumArray = [];
    maxSum = 0;

    //iniitalize the maximum sum
    for(let i=0; i<numAddends; i++) {
        maxSum += maxArray[i];
        //console.log('element ', maxArray[i]);
    }

    console.log('initial maxSum: ', maxSum);

    var leftPointer;
    var rightPointer;
    //index = addends;
    let tempSum = maxSum;
    let leftPointerIndex = 0;

    for(let rightPointerIndex=numAddends; rightPointerIndex<maxArray.length; rightPointerIndex++) {
        leftPointer = maxArray[leftPointerIndex];
        //console.log('leftPointer: ', leftPointer);
        
        rightPointer = maxArray[rightPointerIndex];
        //console.log('rightPointer', rightPointer);

        tempSum = tempSum - leftPointer + rightPointer;
        console.log('tempSum ', tempSum);
        
        //could/should do Math.max(tempSum, maxSum) here
        if(tempSum > maxSum){
            maxSum = tempSum;
            //console.log('maxSum: ', maxSum);
        }  
        
        leftPointerIndex ++;
         
    }

    console.log('Max value is: ', maxSum);
}

maxSubarraySum([100,200,300,400], 2) //700
//maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) //39
//maxSubarraySum([-3,4,0,-2,6,-1], 2) //5
//maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) //5
//maxSubarraySum([1000,2000,3000,4000], 3) //9000