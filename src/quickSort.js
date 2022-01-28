//takes an arr, a start index and an end index
//returns the pivot index
function pivot(arr, start, end){
    var pivot = 0;
    for(let i=start+1; i<end; i++){
        if(arr[i] < arr[start]){
            pivot++;
            //do we need to swap this value?
            if(i != pivot){
                swap(arr, i+1, pivot);
            }
        }
    }
    swap(arr, start, pivot);
    return pivot;
}

function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

console.log(pivot([5,4,3,2,1,8], 0, 5));