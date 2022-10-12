// 1. Insert in Binary Search Tree.
// 2. Seaching root value in Binary Search Tree.
// 3. Finding the max element in Binary Search Tree.
// 4. Printing the PreOrder Transversal.
// 5. Printing the InOrder Transversal.
// 6. Printing the PostOrder Transversal.

class Node{
    constructor(data){
        this.value = data
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    // 1. Insert in Binary Search Tree.
    insertRec(root,data){
        if(root == null){
            let node = new Node(data)
            return node
        }
        if(root.value < data){
            root.right = this.insertRec(root.right,data)
        }
        else{
            root.left = this.insertRec(root.left,data)
        }
        return root
    }

    insert(data){
        this.root = this.insertRec(this.root,data)
    }

    // 2. Seaching root value in Binary Search Tree.
    search(root,data){
        if(root== null) return null
        if(root.value > data){
            return this.search(root.left,data)
        }else if(root.value < data){
            return this.search(root.right,data)
        }
        return root
    }

    // 3. Finding the max element in Binary Search Tree.
    findMax(root){
        if(root == null) return null
        if(root.right == null) return root
        return this.findMax(root.right)
    }

    // 4. Printing the PreOrder Transversal.
    preOrder(root){
        if(root){
            console.log(root.value)
            this.inOrder(root.left)
            this.inOrder(root.right)
        }
    }

    // 5. Printing the InOrder Transversal.
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    // 6. Printing the PostOrder Transversal.
    postOrder(root){
        if(root){
            this.inOrder(root.left)
            this.inOrder(root.right)
            console.log(root.value)
        }
    }
}

let bst = new BST()

let arr = [6,4,10,3,1,5,7,19,9,8]
console.log(arr)

for(let i=0;i<arr.length;i++){
    bst.insert(arr[i])
}
console.log(bst)

bst.preOrder(bst.root)
console.log("***********")

bst.inOrder(bst.root)
console.log("***********")

bst.postOrder(bst.root)
console.log("***********")


console.log(bst.search(bst.root,10))
console.log(bst.findMax(bst.root))
