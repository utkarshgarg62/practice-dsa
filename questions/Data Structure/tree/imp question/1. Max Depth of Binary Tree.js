// Way 1-

var maxDepth = function(root) {
    function findDepth(root,depth){
        if(root == null) return depth
        depth++
        let left = findDepth(root.left,depth)
        let right = findDepth(root.right,depth)
        return Math.max(left,right)
    }
    return findDepth(root,0)
};

// Way 2-

var maxDepth = function(root) {
    if(root == null) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
};