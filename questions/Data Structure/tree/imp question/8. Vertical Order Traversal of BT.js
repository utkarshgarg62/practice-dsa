var verticalTraversal = function(root) {

    function helper(root,x,y,result){
        if(root==null)return
        if(result[x] === undefined){
            result[x] = [[y,root.val]]
        }else{
            result[x].push ([y,root.val])
        }
        helper(root.left,x-1,y+1,result)
        helper(root.right,x+1,y+1,result)
    }
    
    let result={}
    helper(root,0,0,result)
    return Object.keys(result).sort((a, b) => a - b)
        .map(key => result[key].sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
        .map(([_, val]) => val)
        );
};