// Iterative Solution-

var hasCycle = function(head) {
    let slow = head
    let fast = head
    while(fast!=null && fast.next!= null){
        slow= slow.next
        fast= fast.next.next
        if(fast == slow) return true
    }
    return false
};

// This question is solved from slow and fast pointer approach.