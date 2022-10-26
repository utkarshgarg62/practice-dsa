
// 230. Kth Smallest Element in a BST

// Input: root = [3,1,4,null,2], k = 1
// Output: 1


var kthSmallest = function(root, k) {
    
    var inorder = function(root) {
        if (root == null) {
            return [];
        }
        var left = inorder(root.left);
        var right = inorder(root.right);
        return [...left, root.val, ...right]
    }
    
    return inorder(root)[k - 1]
};