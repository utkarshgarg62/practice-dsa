// Iterative Solution- 

var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode(0)
    dummyNode.next = head
    let slow = dummyNode
    let fast = dummyNode

    for(let i=1;i<=n+1;i++){
        fast = fast.next
    }
    while(fast!= null){
        fast= fast.next
        slow= slow.next
    }
    slow.next = slow.next.next //slow is basically nth node
    return dummyNode.next
};

// This question is solved from slow and fast pointer approach.