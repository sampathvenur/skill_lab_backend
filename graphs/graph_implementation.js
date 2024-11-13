class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addNode(node) {
        this.adjacencyList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1); // For undirected graph
    }
}

// sampy 🤑🥳😛
// Creating graph and add nodes/edges
const graph = new Graph();
['A', 'B', 'C', 'D', 'E'].forEach(node => graph.addNode(node)); // Add nodes
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

// Print the adjacency list
console.log(graph.adjacencyList);