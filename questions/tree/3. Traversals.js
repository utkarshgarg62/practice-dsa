// What is Traversal ?

// Traversal is a process to visit all the nodes of a tree and may 
// print their values too. Because, all nodes are connected via 
// edges (links) we always start from the root (head) node. That is, 
// we cannot randomly access a node in a tree. 

// Level-order Traversal- 

            //        1
            //      /   \
            //     2     3
            //    / \   / \
            //   4   5 6   7
            //      /     / \
            //     8     9   10

            //  1 2 3 4 5 6 7 8 9 10

// There are three ways which we use to traverse a tree −
// 1.Pre-order Traversal
// 2.In-order Traversal
// 3.Post-order Traversal


// 1.Pre-order Traversal- 
    
    // Node
    // Left Node
    // Right Node

            //        1
            //      /   \
            //     2     3
            //    / \   / \
            //   4   5 6   7
            //      /     / \
            //     8     9   10

            //  1 2 4 5 8 3 6 7 9 10

// 2.In-order Traversal-
    
    // Left Node
    // Node
    // Right Node

            //        1
            //      /   \
            //     2     3
            //    / \   / \
            //   4   5 6   7
            //      /       \
            //     8     9   10

            //  4 2 8 5 1 6 3 9 7 10

// 3.Post-order Traversal-
    
    // Left Node
    // Right Node
    // Node

            //        1
            //      /   \
            //     2     3
            //    / \   / \
            //   4   5 6   7
            //      /       \
            //     8     9   10

            //  4 8 5 2 6 9 10 7 3 1
    