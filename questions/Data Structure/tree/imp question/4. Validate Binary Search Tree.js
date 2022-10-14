
var isValidBST = function(root) {
    let max = Infinity
    let min = -Infinity
 
    function isValid(root, min, max){
        if(root == null) return true
        if(root.val >= max || root.val <= min) return false
        return isValid(root.left, min , root.val) && isValid(root.right, root.val , max)
    }
 
    return isValid(root, min,max)
 };

// Explaination --------------

//         [-Infi,Infi]
//               A 
//             /   \
//            B     c
//      [-Infi,A]   [A,Infi]
//           / \ 
//          D   E
//    [-Infi,B]  [B,A]