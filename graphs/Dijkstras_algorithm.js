class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.values.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.values.shift();
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addNode(node) {
        this.adjacencyList[node] = [];
    }

    addEdge(node1, node2, weight) {
        this.adjacencyList[node1].push({ node: node2, weight });
        this.adjacencyList[node2].push({ node: node1, weight });
    }

    dijkstra(start, end) {
        const distances = {};
        const previous = {};
        const queue = new PriorityQueue();
        const path = [];

        // Initialize distances for all nodes (infinity initially, except start node)
        for (let node in this.adjacencyList) {
            if (node === start) {
                distances[node] = 0;
                queue.enqueue(node, 0); // Start node gets priority 0
            } else {
                distances[node] = Infinity;
            }
            previous[node] = null; // No previous node initially
        }

        while (queue.values.length) {
            const smallest = queue.dequeue().val; // Get the node with the smallest distance

            if (smallest === end) {
                // Reconstruct the path by following previous nodes
                let currentNode = smallest; // Use let to allow reassignment of currentNode
                while (previous[currentNode]) {
                    path.push(currentNode);
                    currentNode = previous[currentNode];
                }
                break;
            }

            // Update distances to neighbors
            for (let neighbor of this.adjacencyList[smallest]) {
                const nextNode = neighbor.node;
                const weight = neighbor.weight;
                const alternative = distances[smallest] + weight;

                if (alternative < distances[nextNode]) {
                    distances[nextNode] = alternative;
                    previous[nextNode] = smallest;
                    queue.enqueue(nextNode, alternative); // Add the neighbor to the priority queue with updated priority
                }
            }
        }

        // Add the start node to the path and return the reversed path
        path.push(start);
        return path.reverse();
    }
}

// Example usage
const graph = new WeightedGraph();
['A', 'B', 'C', 'D', 'E'].forEach(graph.addNode.bind(graph)); // Add nodes to the graph

// Add edges with weights
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 5);
graph.addEdge('B', 'D', 10);
graph.addEdge('C', 'D', 3);
graph.addEdge('C', 'E', 1);
graph.addEdge('D', 'E', 7);

// Find the shortest path from node 'A' to node 'E'
console.log("Shortest path from A to E:", graph.dijkstra('A', 'E'));  // Expected: ['A', 'C', 'E']