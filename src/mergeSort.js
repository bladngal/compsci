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
//once each array has 1 or 0 elements in it, merge those arrays together
function mergeSort(arr){
    var middle = Math.floor(arr.length/2);
    var arr1 = arr.slice(0, middle);
    var arr2 = arr.slice(middle, arr.length);
    var mergedArray;
    if(arr1.length <=1 && arr2.length <=1){
        mergedArray = mergeArrays(arr1, arr2);
    }
    else{
        arr1 = mergeSort(arr1);
        arr2 = mergeSort(arr2);
    }
    return mergedArray;
}

console.log(mergeArrays([1,3,6,9], [2,5,7,10]));
console.log(mergeArrays([1,13,26], [2,5,7,10]));