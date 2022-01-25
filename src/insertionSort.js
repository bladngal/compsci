function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function insertionSort(arr){
    var swapWith;
    var insert;
    for(var i = 0; i<arr.length; i++){
        for(var j=i+1; j>0; j--){
            if(arr[j] < arr[j-1]){
                swap(arr, j, j-1);
            }        
        }
    }
    
    
    return arr;
}

//selectionSort([3,4,2,1]);
console.log(insertionSort([5,7,2,9,0]));