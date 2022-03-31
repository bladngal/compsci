class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
           //idx    0,  1, 2, 3, 4
    insert(val){  //10, 3, 6, 2, 12
        if(this.values.length){
            if(this.values.length<3){  //4
                if(val > this.values[0]) this.values.unshift(val)
                else this.values.push(val);
            }
            else{
                this.values.push(val);
                let index = this.values.length -1; //3
                let parentIndex = Math.floor((index-1)/2);  //1
                var temp;
                //need to check if val is greater than the initial parent
                while(this.values[index] > this.values[parentIndex]){
                    temp = this.values[index];
                    this.values[index] = this.values[parentIndex];
                    this.values[parentIndex] = temp;
                    index = parentIndex;
                    parentIndex = Math.floor((index-1)/2);
                }
                //this.values.push(val);
            }
        }
        else this.values.push(val);

        return this.values;
    }

    extractMax(){
        let rootVal = this.values[0];
        let parentIdx = 0;
        let leftChild = this.values[parentIdx*2+1];
        let rightChild = this.values[parentIdx*2+2];
        
        if(!leftChild && !rightChild) return rootVal;

        let newRoot = this.values[this.values.length-1];
        this.value[0] = newRoot;
        let largerChildIdx;

        //TODO add error checking in to see if left and right children exist and only
        // check the ones that are there

        // like: if leftChild > what's in parentIdx || rightChild > what's in parentIdx
        while(leftChild > this.values[parentIdx]  || rightChild > this.values[parentIdx]){

            if(leftChild < rightChild) largerChildIdx = parentIdx*2+2;
            else largerChildIdx = parentIdx*2+1;
            let largerChild = Math.max(leftChild, rightChild);
            if(newRoot < largerChild){
                let temp = this.values[parentIdx];
                this.values[parentIdx] = largerChild;
                this.values[largerChildIdx] = temp;
            }
        }
        return rootVal;
    }

    printHeap(){
        console.log(this.values);
    }
}

myHeap = new MaxBinaryHeap();
myHeap.insert(1);
myHeap.insert(2);
myHeap.printHeap();
myHeap.insert(10);
myHeap.printHeap();
myHeap.insert(6);
myHeap.printHeap();
myHeap.insert(3);
myHeap.printHeap();
myHeap.insert(12);
myHeap.printHeap();


