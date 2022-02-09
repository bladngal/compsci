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
}

function testProgram(){
    let myList = new SinglyLinkedList();
    myList.push("hello");
    console.log(myList);
    myList.push("cruel");
    console.log(myList);
    myList.push("world");
    console.log(myList);
}

testProgram();