function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function bubbleSort(arr){
    console.log('Beginning array:', arr);
    for(var i = 0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    console.log('Ending array:', arr);
}

//bubbleSort([6,3,9,1]);
//bubbleSort([6,9,3,12,2]);
bubbleSort([30,2,1,99,1,7]);

