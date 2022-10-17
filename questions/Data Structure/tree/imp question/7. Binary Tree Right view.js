var rightSideView = function(root) {
    let result =[]
    function rightView(root,level){
        if(root == null) return 
        if(level == result.length) result.push(root.val)
        rightView(root.right,level+1)
        rightView(root.left,level+1)
    }
    rightView(root,0)
    return result
};