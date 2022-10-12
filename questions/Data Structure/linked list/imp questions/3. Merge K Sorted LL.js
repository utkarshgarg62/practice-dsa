// Iterative Approach-

var mergeKLists = function(lists) {

    function merge(l1,l2){
       let dummyHead = new ListNode(0)
       let curr = dummyHead

       while(l1!=null && l2!=null){
           if(l1.val < l2.val){
               curr.next = l1
               l1 = l1.next
               curr = curr.next
           }else{
               curr.next = l2
               l2 = l2.next
               curr = curr.next
           }
       }
       curr.next = l1 || l2
       return dummyHead.next
    }
    
    if(lists.length==0) return null
    while(lists.length > 1){
        let a = lists.shift()
        let b = lists.shift()
        let meregedList = merge(a,b)
        lists.push(meregedList)
    }
    return lists[0]
};


// Recursive Approach-

var mergeKLists = function(lists) {

    function merge(l1,l2){
        if(l1==null)return l2
        if(l2==null)return l1
        if(l1.val < l2.val){
            l1.next = merge(l1.next,l2)
            return l1
        }
        else{
            l2.next = merge(l1,l2.next)
            return l2
        }
    }

    if(lists.length==0) return null
    while(lists.length > 1){
        let a = lists.shift()
        let b = lists.shift()
        let meregedList = merge(a,b)
        lists.push(meregedList)
    }
    return lists[0]

};