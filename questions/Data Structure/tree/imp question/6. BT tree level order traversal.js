var levelOrder = function(root) {
    let ans = []
    if(root == null) return ans
    let q = [] // queue
    q.push(root)

    while(q.length!=0){
        let size = q.length
        let level = []
        for(let i=0;i<size;i++){
            let node = q.shift()
            if(node.left !=null) q.push(node.left)
            if(node.right !=null) q.push(node.right)
            level.push(node.val)
        }
        ans.push(level)
    }
    return ans
};


// BFS Approach -
// Breadth First Search.