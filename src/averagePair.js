// given a sorted array and a target average, determine if
// there is a pair of values in the array where the average of 
// pair equals the target average
function averagePair(inArray, targetAverage) {
    let valueArray = {};

    let leftPointer = 0;
    let rightPointer = inArray.length -1;
    console.log(inArray[leftPointer]);
    console.log(inArray[rightPointer]);
    let average = (inArray[leftPointer] + inArray[rightPointer])/2;
    console.log('average', average);
    console.log('targetAverage', targetAverage);
    while(leftPointer < rightPointer) {
        if(average === targetAverage) {
            console.log(true);
            return true;
        }
        else if(average < targetAverage) {
            leftPointer ++;
            console.log('left pointer ', leftPointer);
        } 
        else {
            rightPointer = rightPointer -1
            console.log('right pointer ', rightPointer);
        }
        average = (inArray[leftPointer] + inArray[rightPointer])/2;
        console.log('new average ', average);

    }

    console.log(false);
    return false;

}

//averagePair([1,2,3], 2.5); //true
//averagePair([1,3,3, 5, 6, 7,10, 12,19], 8); //true
//averagePair([-1,0,3, 4, 5, 6],4.1); //false
//averagePair([],4) //false
averagePair([1,2,3,4,4], 2); //true