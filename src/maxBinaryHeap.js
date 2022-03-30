class maxBinaryHeap{
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
                //TODO need to check if val is greater than the initial parent
                while(this.values[index] > this.values[parentIndex]){
                    temp = this.values[index];
                    this.values[index] = this.values[parentIndex];
                    this.values[parentIndex] = temp;
                    index = parentIndex;
                    parentIndex = (Math.floor(index-1)/2);
                }
                //this.values.push(val);
            }
        }
        else this.values.push(val);

        return this.values;
    }

    printHeap(){
        console.log(this.values);
    }
}

myHeap = new maxBinaryHeap();
//myHeap.insert(1);
myHeap.insert(2);
myHeap.insert(10);
myHeap.insert(6);
myHeap.insert(3);
myHeap.insert(12);
myHeap.printHeap();


