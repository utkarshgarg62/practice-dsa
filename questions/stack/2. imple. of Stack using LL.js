class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head= null
        this.size= 0
        // this.tail= null
    }
    pushBack(data){
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode 
        if(!this.head){
            this.head = newNode
        }
        this.size++
    }
    popBack(){
        if(!this.size){
            throw Error("Stack is empty")
        }
        let curr = this.head
        this.head = this.head.next
        this.size--
        curr.next = null
        return curr.value
    }
    // print(){
    //     while(this.head != null){
    //         console.log(this.value)
    //     }
    // }
}


class Stack{
    constructor(){
        this.list = new LinkedList()
    }
    push(value){
        return this.list.pushBack(value)
    }
    pop(){
        return this.list.popBack()
    }
    getTop(){
        return this.list.head
    }
    getSize(){
        return this.list.size
    }
    isEmpty(){
        return this.list.size === 0
    }
    print(){
        while(this.list.head != null){
            console.log(getTop().value)
        }
    }
}

let st = new Stack()

console.log(st.push(10))
// st.push(20)
// st.push(30)
// st.push(40)
// console.log(st.getTop().value)
// while(!st.isEmpty()){
//     console.log(st.getSize()," ==== ",st.pop())
// }