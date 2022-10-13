// Iterative Approach-

var reorderList = function(head) {
    if (!head || !head.next) return; 
    
    // find the middle point
    let slow=head, fast=head;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // split into two part head & part2
    let part2 = slow.next;
    slow.next = null;
    
    // reverse part 2
    let curr = part2
    let prev = null
    while(curr != null){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    part2 = prev;
    
    // merge head & part2
    while(head && part2) {
        let p1 = head.next;
        let p2 = part2.next
        head.next = part2;
        head.next.next = p1;
        part2 = p2;
        head = p1;
    }
    
    return head;
};