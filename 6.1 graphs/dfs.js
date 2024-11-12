function depthFirstSearch(graph, start) {
    const stack = [start]; // Stack to keep track of nodes
    const visited = new Set(); // Set to track visited nodes

    while (stack.length > 0) {
        const node = stack.pop(); // Get the last node added to the stack

        if (!visited.has(node)) {
            console.log(node); // Print the node if it hasn't been visited
            visited.add(node); // Mark it as visited

            // Push all unvisited neighbors of the current node to the stack
            graph[node].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            });
        }
    }
}

// i dont know why i'm i even writing this comments so professionally
// Example graph represented as an adjacency list
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

// Perform DFS starting from node 'A'
console.log("Depth First Search starting from node A:");
depthFirstSearch(graph, 'A');