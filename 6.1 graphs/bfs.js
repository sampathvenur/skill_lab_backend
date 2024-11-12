function breadthFirstSearch(graph, start) {
    const queue = [start]; // Queue to keep track of nodes to explore
    const visited = new Set([start]); // Set to track visited nodes

    while (queue.length > 0) {
        const node = queue.shift(); // Remove and get the first node in the queue
        console.log(node); // Print the current node

        // Visit all unvisited neighbors of the current node
        graph[node].forEach(neighbor => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor); // Mark neighbor as visited
                queue.push(neighbor); // Add neighbor to the queue for future exploration
            }
        });
    }
}

// Example graph represented as an adjacency list
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

// wow!! when does this tree and graph stop growing
// Perform BFS starting from node 'A'
console.log("Breadth First Search starting from node A:");
breadthFirstSearch(graph, 'A');