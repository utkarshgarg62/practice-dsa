// Recursion Approach-

var invertTree = function(root) {
    function invert(root){
        if(root==null) return
        [root.left,root.right] = [root.right,root.left]
        invertTree(root.left)
        invertTree(root.right)
    }
    invert(root)
    return root
};