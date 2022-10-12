// Iterative Solution-

var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(0) 
    let curr = dummyHead

    while(list1 != null && list2 != null){
        if(list1.val < list2.val){
            curr.next = list1
            list1= list1.next
            curr = curr.next
        }
        else{
            curr.next = list2
            list2= list2.next
            curr = curr.next
        }
    }
    curr.next = list1 || list2
    return dummyHead.next
};

// Recursive Solution- 

var mergeTwoLists = function(list1, list2) {
    if(list1 == null) return list2
    if(list2 == null) return list1
    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next,list2)
        return list1
    }else{
        list2.next = mergeTwoLists(list1,list2.next)
        return list2
    }
}
// TC- O(n+m)
// SC- O(n+m)