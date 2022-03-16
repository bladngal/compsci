class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }

    printNode(node){
        if(!node){
            return;
        }
        console.log(node);
        this.printNode(node.left);
        this.printNode(node.right);
    }

    insert(val){

        if(!this.root){
            this.root = new Node(val);
            return this;
        }
        var testNode = this.root;

        while(testNode){
            //if val is less than node, go left
            if(val < testNode.val){
                if(!testNode.left){
                    testNode.left = new Node(val);   
                    return this; 
                }   
                else{
                    testNode = testNode.left;
                }
            }
            //else if val is greater than node, go right
            else if(val> testNode.val){
                if(!testNode.right){
                    testNode.right = new Node(val);       
                }   
                else{
                    testNode = testNode.right;
                    return this;
                }

            }
        }  
    }
}

var bst = new binarySearchTree;
bst.insert(5);
bst.insert(2);
bst.insert(8);
console.log(bst);
bst.printNode(bst.root);