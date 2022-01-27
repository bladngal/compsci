function mergeArrays(arr1, arr2) {
    console.log(arr1, arr2);
    var i = 0;
    var j = 0;
    let mergedArray = [];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedArray.push(arr2[j]);
            j++
        }
    }
    while(i<arr1.length){
            mergedArray.push(arr1[i]);
            i++;
    }
    while(j<arr2.length){
            mergedArray.push(arr2[j]);
            j++
    }
    return mergedArray;
}

//take an array and break it in half, returning two smaller arrays
//recursively do this for each half, breaking them down into smaller arrays
//once each array has 1 or 0 elements in it, merge those arrays together
//then just keep on keepin' on until all the arrays magically roll back
//up the stack and merge themselves together
function mergeSort(arr){
    if(arr.length <=1) return arr;

    var middle = Math.floor(arr.length/2);
    var arr1 = mergeSort(arr.slice(0, middle));
    var arr2 = mergeSort(arr.slice(middle, arr.length));
    return mergeArrays(arr1, arr2);
}

console.log(mergeSort([6,9,1,3]));
//console.log(mergeSort([5,8,2,4,10,30,20]));
    