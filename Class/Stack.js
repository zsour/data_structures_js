
class Stack{

    constructor(){
        this.stack = new LinkedList();
    }

    push(value){
        this.stack.insert(value);
    }

    pop(){

        if(this.stack.root == null){
            return -1;
        }

        var tmp = this.stack.root.value;
        this.stack.root = this.stack.root.child;
        this.stack.length--;
        return tmp;

    }

    length(){
        return this.stack.length;
    }

    printValues(){
        this.stack.printValues();
    }

}