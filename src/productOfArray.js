function productoOfArray(arr) {
    if(arr.length === 0) return 1;

    return arr[0] * productoOfArray(arr.slice(1)); //slice off the first element and send on the rest

}

console.log(productoOfArray([1,2,3])); //6
console.log(productoOfArray([1,2,3,10])); //60
console.log(productoOfArray([1])); //1
console.log(productoOfArray([7,0])); //0