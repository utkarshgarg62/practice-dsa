// Implementation of a Singly Linked List

class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    // To append (add) element in linked list
    // (For pushing element from array)
    // insertAtEndOfList
    // append 

    push(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    // To insert element at front of the list (Begginning)
    // (For pushing element from array in reverse order)
    // insertAtFrontOFList
    // prepend 

    unshift(data){
        let newNode = new Node(data)

        // If list has 0 element
        if(this.head == null){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    // To delete element from the last
    // deleteAtEndOfList

    pop(){
        // If List has 0 element
        if(this.head == null) return null

        // If List has 1 element
        if(this.head.next == null) return null

        let second_last = this.head
        while(second_last.next.next!=null){
            second_last= second_last.next
        }
        second_last.next = null
        this.tail = second_last
        this.length--
    }

    // To delete element from the front
    // deleteAtFrontOfList

    shift(){
        // If there is not element in list
        if(!this.head) return undefined

        let first_ele = this.head
        this.head = first_ele.next
        first_ele.next = null

        this.length--
        if(this.length==0) this.tail = null
    }

    // To convert Linked list into array.
    // To print the element.

    print(){
        let ans = []
        let curr = this.head
        while(curr){
            ans.push(curr.value)
            // console.log(curr.value)
            curr = curr.next
        }
        return ans.join(" ")
    }
    
}

let ll = new SinglyLinkedList()
ll.push(10)
ll.push(20)
ll.unshift(5)
ll.push(30)
ll.unshift(0)
ll.push(40)
ll.push(50)
ll.pop()
ll.shift()
console.log(ll.print())
// console.log(ll)
