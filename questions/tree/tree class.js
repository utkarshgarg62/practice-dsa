// Level order Traversal
const Queue = require("../queue/queue")
let Queue = require("../queue/queue")


class Node{
    constructor(data,left,right){
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
        }else{
            let queue = new Queue()
            queue.enqueue(this.root)
            queue.enqueue(null)
            while(!queue.isEmpty()){
                let temp = queue.dequeue()
                
            }

        }

    }
}