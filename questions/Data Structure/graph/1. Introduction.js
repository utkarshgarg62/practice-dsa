// GRAPH ------------------------

// Graph is collection of two set V and E where,
// V ----> Vertices / Nodes
// E ----> Edges

// Graph is a mathematical structures that represents pair-wise relationship
// between objects where nodes are connected with edges.

// Vertex ----> Vertex is nothing but the data element which is known as nodes.
// Edges ----> Edge is a connection link between two verties


//         A ----------------> B
//         |                    \
//         |                     \
//         |                      E
//         |                     /
//         |                    /
//         C ----------------> D



// Representation of the graph-
// 1. Adjacency Matrix.
// 2. Adjacency List

// Types of graph-
// 1. Directed graph.
// 2. Undirected graph.

// UNIDIRECTED GRAPH -----------------
// Undirected graphs have edges that do not have a direction. The edges 
// indicate a two-way relationship, in that each edge can be traversed 
// in both directions. This figure shows a simple undirected graph with 
// five nodes and five edges.

//         A ----------------- B
//         |                    \
//         |                     \
//         |                      E
//         |                     /
//         |                    /
//         C ----------------- D


// DIRECTED GRAPH ------------------
// Directed graphs have edges with direction. The edges indicate a one-way 
// relationship, in that each edge can only be traversed in a single direction. 
// This figure shows a simple directed graph with five nodes and five edges.

                    
//         A --------->------- B
//         |                    \
//         |                     \
//         |                      E
//         |                     /
//         |                    /
//         C --------->------- D


// WEIGHTED GRAPH -----------------
// A weighted graph is a graph in which each branch is given a numerical weight.
//  A weighted graph is therefore a special type of labeled graph in which the 
//  labels are numbers (which are usually taken to be positive).

//                  10
//         A ----------------- B
//         |                    \ 5
//         |                     \
//      16 |                      E
//         |                     /  
//         |                    / 8
//         C ----------------- D
//                  11


// RealLife Example -
// 1.Google Map
// 2.Routing (newtorking)
// 3.Facebook (friends suggestion)
// 4.Airline -Routes


// Degree Of vertex or vertices-
//      -------A------
//            / \
//           /   \
// So, degree of A vertix is 4.
// Degree of vertex = total no of incident edge.