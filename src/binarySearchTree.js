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
        console.log(node.val);
        if(node.left){
            console.log('left {');
            this.printNode(node.left);
            console.log('}');
        }
        if(node.right){

            console.log('right {');
            this.printNode(node.right);
            console.log('}');
        }
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
                    return this;
                }   
                else{
                    testNode = testNode.right;
                }

            }
            //if it already exists, we freak out and run around in circles
            else if(val === testNode.val){
                return undefined;
            }
        }  
    }

    find(val){

        var stillLooking = true;
        var currentNode = this.root;
        var currentVal = currentNode.val;

        while(stillLooking){
            if(val === currentVal) return true;
            else if(val < currentVal){
                if(currentVal.left){
                    currentNode = currentNode.left;
                    currentVal = currentNode.val;
                }
                else stillLooking = false;
            }
            else if(val > currentVal){
                if(currentVal.right){
                    currentNode = currentNode.right;
                    currentVal = currentNode.val;
                } else stillLooking = false;
            }
        }

    }

    //recursive function to traverse the tree preorder
    traversePreorder(node, dfsValues){
        dfsValues.push(node.val); //[10,6,3,8,15]
        if(node.left) this.traversePreorder(node.left, dfsValues);
        if(node.right) this.traversePreorder(node.right, dfsValues);
        return dfsValues;
    }

    //recursive function to traverse the tree postorder
    traversePostorder(node, dfsValues){
        if(node.left) this.traversePostorder(node.left, dfsValues);
        if(node.right) this.traversePostorder(node.right, dfsValues);
        dfsValues.push(node.val); //[3,8,6,20,15,10]
        return dfsValues;
    }

    dfsPreorder(){
        let currentNode = this.root;
        let dfsValues = [];
        if(!currentNode) return undefined;
        else{
            this.traversePreorder(currentNode, dfsValues)   
        }
        return dfsValues;
    }

    dfsPostorder(){
        let currentNode = this.root;
        let dfsValues = [];
        if(!currentNode) return undefined;
        else{
            this.traversePostorder(currentNode, dfsValues)   
        }
        return dfsValues;
    }

    dfsInorder(){
        let currentNode = this.root;
        let dfsValues = [];
        //recursive function to traverse the tree postorder
        function traverseInorder(node){
            if(node.left) traverseInorder(node.left);
            dfsValues.push(node.val); //[3,6,8,10,15,20]
            if(node.right) traverseInorder(node.right);
        }
    
        if(!currentNode) return undefined;
        else{
            traverseInorder(currentNode, dfsValues)   
        }
        return dfsValues;
    }
                                                    //10
                                            // 6            15
                                        //3         8           20

    bfs(){
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(this.root);

        while(queue.length > 0){
            node = queue.shift();
            data.push(node.val);
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);  
        }
        return data;
    }
}

var bst = new binarySearchTree;
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);
console.log(bst.bfs());
//console.log(bst);
bst.printNode(bst.root);
//bst.find(3);
//  10
// 6    15
//3 8     20
console.log(bst.dfsPreorder());
console.log(bst.dfsPostorder());
console.log(bst.dfsInorder());