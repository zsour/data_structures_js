class BinarySearchTreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree{
    constructor(){
        this.root = new BinarySearchTreeNode(null);
        this.size = 0;
    }

    contains(value){

        var node = this.root;

        while(node != null){
        
            if(node.value == value){
                return 1;
            }

            if(value < node.value){
                node = node.left;
            }else if(value > node.value){
                node = node.right;
            }

        }


        return 0;
    }

    insert(value){

        var node = this.root;
        
        if(node.value == null){
            node.value = value;
            this.size++;
        }else{
            while(node != null){
                if(node.value > value){
                    if(node.left == null){
                        node.left = new BinarySearchTreeNode(value); 
                        this.size++;
                        return;
                    } 
                    node = node.left;
                }else{
                    if(node.right == null){
                        node.right = new BinarySearchTreeNode(value);
                        this.size++; 
                        return;
                    } 
                    node = node.right;
                }
            } 
        }
        
    }

    remove(){
        
    }
}