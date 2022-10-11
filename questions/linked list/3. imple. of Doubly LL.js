// Implementation of a Doubly Linked List

class Node {
    constructor(data) {
        this.value = data
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(data) {
        let newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail.next
            this.tail = newNode
        }
        this.length++
    }
    unshift(data) {
        let newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
    }
    pop() {
        // If List has 0 element
        if (this.head == null) return null

        // If List has 1 element
        if (this.head.next == null) return null

        let second_last = this.head
        while (second_last.next.next != null) {
            second_last = second_last.next
        }
        second_last.next = null
        this.tail = second_last
        this.length--
    }

    // To delete element from the front
    // deleteAtFrontOfList

    shift() {
        // If there is not element in list
        if (!this.head) return undefined

        let first_ele = this.head
        this.head = first_ele.next
        first_ele.next = null

        this.length--
        if (this.length == 0) this.tail = null
    }

    print() {
        let ans = []
        let curr = this.head
        while (curr) {
            ans.push(curr.value)
            // console.log(curr.value)
            curr = curr.next
        }
        return ans.join(" ")
    }

    reverse() {
        if(this.head == null) return undefined
        let node = this.head
        this.head = this.tail
        this.tail = node
        
        let counter = 0
        let prev = null
        let next;
        while(counter < this.length){
            next = node.next
            node.prev = next
            node.next = prev
            prev = node 
            node = next
            counter++
        }
    }

}

let ll = new DoublyLinkedList()

ll.push(20)
ll.push(30)
ll.push(40)
// ll.push(50)
// ll.unshift(10)
// ll.push(60)
// ll.pop()
// ll.pop()

console.log(ll.print())
// console.log(ll)

ll.reverse()
console.log(ll.print())
// console.log(ll)

