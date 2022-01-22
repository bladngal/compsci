function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function selectionSort(arr){
    var min;
    for(var i=0; i<arr.length-1; i++){
        min = i;
        for(var j=i+1; j<arr.length; j++){
            if(arr[j] < arr[min]) min = j;
        }
        if(min!=i) swap(arr, i, min);
        console.log(arr);
    }
}

//selectionSort([3,4,2,1]);
selectionSort([5,7,2,9,0]);