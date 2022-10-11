// Types of Data Structure.
// 1.Linear Data Structure (array,stack,queue,string,linkedlist).
// 2.Non-Linear Data Structure (tree,graph).
// 3.User Defined Data Structore (JS-Obj,JS-Class).

// 1.Linear DS- Data stored in a sequential order. Ex- in array.
// 2.Non-Linear DS- Data stored in a nonsequential order. Ex- in graph, tree.

// Purpose of Data Structure, why ds is used?
// 1.Seaching fast
// 2.Insertion fast
// 3.Deletion fast
// 4.Updation fast

// LINKED LIST ------
// Linked List is Linear Data structure, consists of nodes.
// Data stored in a non-contiguous order but contains the address of previous or next node.
// Node consists of data and next or previous node information(address).

// There are 4 types of linkedList - 
// 1. Singly linkedList.
// 2. Doubly linkedList.
// 3. Circular linkedList.
// 4. Circular Doubly linkedList.

Example - 
10 --> 16 --> 20

// Psuedo Code for Linked List
let linkedList = {
    head : {
        value : 10,
        next : {
            value : 16,
            next : {
                value : 20,
                next : null
            }
        }
    }
}