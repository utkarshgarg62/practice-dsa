// Implementation of Graph
// Adjacency List

class Graph {
    constructor(no_of_vertices) {
        this.no_of_vertices = no_of_vertices
        this.adjList = new Map()
    }

    addVertex(v) {
        // add vertex in graph
        this.adjList.set(v, []);
    }

    addEdge(v, target) {

        // this is adding edge from v to target v->target
        this.adjList.get(v).push(target);

        // this is adding edge from target to v<-target
        this.adjList.get(target).push(v)
    }

    printGraph() {

        let keys = this.adjList.keys()
        // console.log(keys)
        for (let key of keys) {
            console.log(key, "->", this.adjList.get(key));
        }
    }
}

const graph = new Graph(5)

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("A", "E")
graph.addEdge("B", "E")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("C", "D")

graph.printGraph() 

console.log("**************")


class Graph1{
    constructor(no_of_vertices){
        this.no_of_vertices= no_of_vertices
        this.adjList = new Map()
    }
    addVertex(V){
        this.adjList.set(V,[])
    }
    addEdge(V,target){
        this.adjList.get(V).push(target)
        this.adjList.get(target).push(V)
    }
    printGraph(){
        let keys = this.adjList.keys()
        for(let key of keys){
            console.log(key,"->",this.adjList.get(key))
        }
    }
}

let g = new Graph1(6)
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("A","D")
g.addEdge("B","E")
g.addEdge("C","D")
g.addEdge("F","A")
g.addEdge("F","B")
g.addEdge("F","C")
g.addEdge("F","E")

console.log(g)
g.printGraph()