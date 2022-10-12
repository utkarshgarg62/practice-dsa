// Iterative Approach -

function reverse(head){
    let curr = head
    let prev = null
    while(curr != null){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}

// Recursive Approach -

function reverseRec(head){
    if(head == null || head.next == null) return head
    let newHead = reverseRec(head.next)
    head.next.next = head
    head.next = null
    return newHead
}