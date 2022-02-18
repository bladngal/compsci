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

    //add a new node at the end of the list
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

    //remove the last node of the list
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

    //remove node at the beginning of list
    shift(){
        if(!this.head) return undefined;

        let current = this.head;
        this.head = this.head.next;
        this.length--;

        return current;
    }

    //insert node at the beginning of list
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

    //return the node at index idx
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

    //just console.log all the values
    print(){
        let current = this.head;
        
        while(current){
            console.log(current.val);
            current = current.next; 
        }
    }

    //set the value of node at index idx to val
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

    //inserve a node with value val indo index idx
    //return true if it worked, false if it didn't
    insert(idx, val) {
        //invalid values
        if(idx < 0 || idx > this.length) return false;

        //if index of 0, just use the unshift() method
        if(idx === 0){
            this.unshift(val);
            if(this) return true;
            else return false;
        }

        //if index of length, you just add to the end using push()
        if(idx === this.length){
            this.push(val);
            if(this) return true;
            else return false;
        }
        else{
            let prevNode = this.get(idx-1);
            var isValid = false;
            if(prevNode) isValid = true;
            let newNode = new Node(val);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            length++;
            return isValid;
        }
    }

    //remove the node at index idx
    remove(idx){
        //invalid values
        if(idx < 0 || idx > this.length-1) return false;

         //if index of 0, just use the shift() method
        if(idx === 0){
            this.shift();
            if(this) return true;
            else return false;
        }
        //if index of length-1, you just remove from the end using pop()
        if(idx === this.length-1){
            this.pop();
            if(this) return true;
            else return false;
        }
            
        //get the node before the one we want to take out
        let prevNode = this.get(idx-1);
        //then get the node to remove
        let returnNode = prevNode.next;
        //set the previous node's next attribute to the correct new next
         prevNode.next = returnNode.next;
        this.length--;
        return returnNode;
                
    }

    reverse(){
            
        let current = this.head;
        let nextNode = current.next;
        let nodeAfterNext = nextNode.next;
        let origFirst = this.head;
        current.next = null;
       
// why      hello      cruel        world        
// current  nextNode   nodeAfterNext      
        while(current != this.tail){
            
            nextNode.next = current;
            current = nextNode;
            
            nextNode = nodeAfterNext;
            if(nextNode.next) nodeAfterNext = nextNode.next;  
        }
        this.head = current;
        this.tail = origFirst; //make the old head the new tail
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
    //console.log(myList);
    // myList.shift();
    // console.log(myList);
    // console.log(myList.get(1));
    // console.log(myList.set(0, "goodbye"));
   // myList.insert(4, "crazy");
    myList.print();
    myList.reverse();
    //myList.remove(2);
    myList.print();

}

testProgram();