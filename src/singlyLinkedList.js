class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let tempNode = new Node(val);
        if(!this.head){
            this.head = tempNode;
            this.tail = this.head;
        }
        else { 
            this.tail.next = tempNode;
            this.tail = tempNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        var last = this.tail;
        var prev = this.head;
        let current = this.next;
        while(current){
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return last;
    }

    shift(){
        if(!this.head) return undefined;

        let current = this.head;
        this.head = this.head.next;
        this.length--;

        return current;
    }

    unshift(val){
        let newHead = new Node(val);
        if(!this.head){
            this.head = newHead;
            this.tail = newHead;
        }
        else{
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;

        return this;
    }

    get(idx){
        if(idx<0 || idx >= this.length){
            return null;
        }
        var idxNode = this.head;
        let counter = 0;
        while(counter < idx){
            idxNode = idxNode.next;
            counter++;
        }
        return idxNode;
    }

    set(idx, val){

        let setNode = this.get(idx);
        //set the value to the new value and return true
        if(setNode){
            setNode.val = val;
            return true;
        }
        //if get() returned null, then this set did not work!
        return false;
    }
}

function testProgram(){
    let myList = new SinglyLinkedList();
    myList.push("hello");
   // console.log(myList);
    myList.push("cruel");
    //console.log(myList);
    myList.push("world");
    //console.log(myList);
    //console.log(myList.pop());
   // console.log(myList);
    myList.unshift("why");
    console.log(myList);
    myList.shift();
    console.log(myList);
    console.log(myList.get(1));
    console.log(myList.set(0, "goodbye"));
    console.log(myList);

}

testProgram();