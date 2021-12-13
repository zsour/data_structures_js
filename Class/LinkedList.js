class LinkedListNode{

    constructor(value, child){
        this.value = value;
        this.child = child;
    }
}

class LinkedList{

    constructor(){
        this.root = null;
        this.length = 0;
    }

    insert(value){
        
        if(this.root == null){
            this.root = new LinkedListNode(value, null);
        }else{
            var tmp = new LinkedListNode(value, this.root);
            this.root = tmp;
        }

        this.length++;  
    }

    remove(value){

        var node = this.root;
        var tmp = -1;


        if(node.value == value){
            tmp = node.value;
            this.root = node.child;
            this.length--;
            return tmp;
        }


        while(node.child != null){

            if(node.child.value == value){
                tmp = node.child.value;
                node.child = node.child.child;
                break;
            }   

            node = node.child;
        }
      
        this.length--;
        return tmp;
    }

    contains(value){

        var node = this.root;

        if(node.value == value){
            return 1;
        }

        while(node.child != null){

            if(node.child.value == value){
                return 1;
            }   

            node = node.child;
        }

        return 0;

    }

    printValues(){

        var node = this.root;
        var counter = 1;
        while(node != null){
            console.log("Node " + counter  + " = " + node.value);
            node = node.child;
            counter++;
        }

    }

}

