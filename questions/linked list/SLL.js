class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head= null
        this.tail= null
        this.length= 0
    }
    push(data){
        let SNode = new Node(data)
        if(this.head == null){
            this.head= SNode
            this.tail= SNode
        }else{
            this.tail.next= SNode
            this.tail = SNode
        }
        this.length++
    }
    unshift(data){
        let SNode = new Node(data)
        if(this.head==null){
            this.head= SNode
            this.tail= SNode
        }
        else{
            let temp = this.head
            this.head= SNode
            SNode.next= temp
        }
        this.length++
    }
    shift(){
        if(this.head == null) return null
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        if(this.head == null) this.tail = null
        this.length--
    }
    pop(){
        let curr = this.head
        while(curr.next.next != null){
            curr= curr.next
        }
        curr.next=null
        this.tail = curr
        this.length--
    }
    print(){
        let res = []
        let curr = this.head
        while(curr!=null){
            res.push(curr.value)
            curr=curr.next
        }
        return res.join(" ")
    }
}

let sll = new SinglyLinkedList()

sll.push(10)
sll.push(20)
sll.unshift(0)
sll.pop()

console.log(sll.print())
console.log(sll)