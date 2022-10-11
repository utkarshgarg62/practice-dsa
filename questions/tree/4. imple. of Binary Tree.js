// Level order Traversal
let Queue = require("../queue/2. imple. of Queue")

class Node{
    
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree{

    constructor(){
        this.root = null
        this.size = 0
    }

    insert(data){
        let node = new Node(data)
        if(this.root == null){
            this.root = node
        }
        else{
            let queue = new Queue()
            queue.enqueue(this.root)
            queue.enqueue(null)
            while(!queue.isEmpty()){
                let temp = queue.dequeue()
                console.log(temp)
                if(temp.left){
                    queue.enqueue(temp.left)
                }
                else{
                    temp.left = node
                    return
                }
                if(temp.right){
                    queue.enqueue(temp.right)
                }
                else{
                    temp.right = node
                    return
                }
            }

        }
    }
}

let Bt = new BinaryTree()

Bt.insert(1)
Bt.insert(2)
Bt.insert(3)
Bt.insert(4)
Bt.insert(5)
Bt.insert(6)
Bt.insert(7)

console.log(Bt)