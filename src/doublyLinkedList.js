class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var node = new Node(val);
        if (this.length === 0){
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    //return the last node, while resetting the tail and severing 
    //ties in both directions to prev and next
    pop(){
        //if it's empty, return undefined
        if(!this.head){
            return undefined;
        }

        var returnNode = this.tail;;
        //if there is only one node, pop it and set everything to null
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            //the previous node's next should no longer point to the current tail
            //as it's about to go away
            this.tail.prev.next = null;
            //set the tail to the new tail
            this.tail = this.tail.prev;
            //sever the reference to the previous node
            returnNode.prev = null;
        }
        return returnNode;
    }

    shift(){
        if(!this.head){
            return undefined;
        }

        var oldHead = this.head;
        //if the list only has one value
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        var newHead = new Node(val);
        if(this.head){
            newHead.next = this.head;
            this.head.prev = newHead;
            this.head = newHead;
        }
        else{
            this.head = newHead;
            this.tail = newHead;
        }
        this.length++;
        return this;
    }

    get(idx){
        if(idx < 0 || idx >= this.length){
            return null;
        }
        if(idx <= this.length/2){
            var temp = this.head;
            var counter=0;
            while(counter < idx){
                temp = temp.next;
                counter++;
            }
            console.log("logging ", temp.val);
            return temp;
        }
        else{
            var counter = this.length - 1;
            var temp = this.tail;
            while(counter > idx){
                temp = temp.prev;
                counter--;
            }
            console.log("logging ", temp.val);
            return temp;
        }
    }

    //just console.log all the values
    print(){
        let current = this.head;  
        while(current){
            console.log(current.val);
            current = current.next; 
        }
    }
}

myList = new DoublyLinkedList;
//myList.push(1);
myList.print();
myList.push("hello");
myList.push("world");
myList.push("test");
myList.push("test2");
myList.print();
//myList.shift();
myList.unshift("begin");
//console.log(myList.pop());
myList.print();
myList.get(2);