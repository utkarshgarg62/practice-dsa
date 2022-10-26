// 572. Subtree of Another Tree

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

var isSubtree = function(root, subRoot) {

    var isSameTree = function (s, t) {
        if (s == null && t == null) {
            return true;
        }
        if (s == null || t == null || s.val !== t.val) {
            return false;
        }
        return isSameTree(s.right, t.right) && isSameTree(s.left, t.left);
    } 

    if(root == null) return false
    return isSameTree(root,subRoot) || isSameTree(root.left,subRoot) || isSameTree(root.right,subRoot)

};