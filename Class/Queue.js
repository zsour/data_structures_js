
class Queue{

    constructor(){
        this.queue = new LinkedList();
    }

    push(value){
        this.queue.insert(value);
    }

    pop(){
        var node = this.queue.root;

        if(node == null){
            return -1;
        }

        while(node.child.child != null){
            node = node.child;
        }

        var tmp = node.child.value;
        node.child = null;
        this.queue.length--;
        return tmp;
        
    }

    length(){
        return this.queue.length;
    }

    printValues(){
        this.queue.printValues();
    }

}