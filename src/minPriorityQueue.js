class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class MinPriorityQueue{
    constructor(){
        this.values = [];
    }
           //idx    0,  1, 2, 3, 4
    enqueue(val, priority){  //10, 3, 6, 2, 12
        if(this.values.length){
            if(this.values.length<3){  //4
                if(priority < this.values[0].priority) this.values.unshift(new Node(val, priority));
                else this.values.push(new Node(val, priority));
            }
            else{
                this.values.push(new Node(val, priority));
                let index = this.values.length -1; //3
                let parentIndex = Math.floor((index-1)/2);  //1
                var temp;
                //need to check if priority is less than the initial parent
                while(this.values[index].priority < this.values[parentIndex].priority){
                    temp = this.values[index];
                    this.values[index] = this.values[parentIndex];
                    this.values[parentIndex] = temp;
                    index = parentIndex;
                    parentIndex = Math.floor((index-1)/2);
                }
                //this.values.push(val);
            }
        }
        else this.values.push(new Node(val, priority));

        return this.values;
    }

    dequeue(){
        let rootVal = this.values[0];
        let parentIdx = 0;
        let leftChild = this.values[parentIdx*2+1].priority;
        let rightChild = this.values[parentIdx*2+2].priority;
        let newRoot = this.values.pop();
        
        if(!leftChild && !rightChild) return rootVal;

        
        this.values[0] = newRoot;
        var smallerChildIdx;
        let smallerChild = Math.min(leftChild, rightChild);

        while(leftChild < newRoot.priority || rightChild < newRoot.priority){

            if(leftChild < rightChild) smallerChildIdx = parentIdx*2+2;
            else smallerChildIdx = parentIdx*2+1;
            if(newRoot.priority > smallerChild){
                this.values[parentIdx] = smallerChild;
                this.values[smallerChildIdx] = newRoot;
                parentIdx = smallerChildIdx;
                newRoot = this.values[parentIdx];
            }
            if(this.values[parentIdx*2+1]){
                leftChild = this.values[parentIdx*2+1].priority;
            }
            else leftChild = null;
            if(this.values[parentIdx*2+2]){
                rightChild = this.values[parentIdx*2+2].priority;
            }
            else rightChild = null;

        }
        return rootVal;
    }

    printQueue(){
        console.log(this.values);
    }
}

myHeap = new MinPriorityQueue();
myHeap.enqueue("head exploded", 1);
myHeap.enqueue("Head hurts", 2);
myHeap.printQueue();
console.log(myHeap.dequeue());
myHeap.printQueue();
/*myHeap.printQueue();
myHeap.enqueue("hangnail", 10);
myHeap.enqueue("tummy ache", 6);

console.log(myHeap.dequeue());
myHeap.printQueue();
*/

