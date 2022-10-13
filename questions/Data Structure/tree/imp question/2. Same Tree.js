var isSameTree = function(p, q) {
    let isEqual = true
    function checkTree(p,q){
        if(p==null && q==null){
            return 
        }
        if(p===null || q===null || p.val != q.val){
            isEqual = false
            return
        }
        checkTree(p.left,q.left)
        checkTree(p.right,q.right)
    }
    checkTree(p,q)
    return isEqual

};

var isSameTree = function(p, q) {

    if(p==null && q==null) return true
    if(p==null || q==null) return false
    if(p.val != q.val) return false
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)

};