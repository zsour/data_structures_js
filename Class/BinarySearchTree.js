var canvas = document.getElementById('bst-visualize');
var ctx = canvas.getContext('2d');


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

    height(node){
        var height;
        if(node == null){
            return 0;
        }else{
               var lHeight = this.height(node.left);
               var rHeight = this.height(node.right);
     
               return (lHeight > rHeight) ? (lHeight + 1) : (rHeight + 1);
        }
    }

    getMaxWidth(node){
        var maxWidth = 0;
        var width;
        var h = this.height(node);
        var i;
  
        /* Get width of each level and compare
           the width with maximum width so far */
        for (i = 1; i <= h; i++) {
            width = getWidth(node, i);
            if (width > maxWidth)
                maxWidth = width;
        }
  
        return maxWidth;
    }

    getWidth(node, level){
        if(node == null){
            return 0;
        }

        if (level == 1){
            return 1;
        }else if (level > 1){
            return this.getWidth(node.left, level - 1)
            + this.getWidth(node.right, level - 1);
        }
            
        return 0;
    }


    draw(){
        this.visualize(this.root, 800/2, 0);
    }
    
    visualize(node, parentXPos, leftOrRight, top = 0, level = 1){    
          
        if(node == null){
            return;
        }

        if(level != 1){
            if(leftOrRight == 0){
                parentXPos -= 50;
            }else{
                parentXPos += 50;
            }
        }

        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText(node.value, parentXPos, top + 100);
        
        
        console.log(parentXPos);
        ctx.beginPath();
        ctx.strokeStyle = '#212121';
        ctx.lineWidth = 2;
        ctx.arc(parentXPos, top + 100, 10, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();


        this.visualize(node.left, parentXPos - 50, 0, top + 50, level + 1);
        this.visualize(node.right, parentXPos + 50, 1, top + 50, level + 1);
    }
}