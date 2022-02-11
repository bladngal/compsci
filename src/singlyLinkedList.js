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

}

testProgram();