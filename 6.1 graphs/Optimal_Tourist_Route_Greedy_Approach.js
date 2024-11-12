class Graph {
    constructor() {
        this.adjacencyMatrix = [];
        this.locations = [];
    }

    // Add a location (destination)
    addLocation(name) {
        this.locations.push(name);
        // Initialize distances as Infinity
        for (let row of this.adjacencyMatrix) {
            row.push(Infinity);
        }
        this.adjacencyMatrix.push(new Array(this.locations.length).fill(Infinity));
    }

    // Add a distance between two locations (symmetric for undirected)
    addEdge(from, to, distance) {
        const fromIndex = this.locations.indexOf(from);
        const toIndex = this.locations.indexOf(to);
        this.adjacencyMatrix[fromIndex][toIndex] = distance;
        this.adjacencyMatrix[toIndex][fromIndex] = distance;
    }

    // Greedy Algorithm to find a simple tour
    findOptimalRoute(startLocation) {
        const visited = new Set();
        let currentLocation = startLocation;
        const path = [currentLocation];
        let totalDistance = 0;

        visited.add(currentLocation);

        while (visited.size < this.locations.length) {
            let nearestLocation = null;
            let minDistance = Infinity;
            const currentLocationIndex = this.locations.indexOf(currentLocation);

            // Find the nearest unvisited location
            for (let i = 0; i < this.locations.length; i++) {
                if (!visited.has(this.locations[i]) && this.adjacencyMatrix[currentLocationIndex][i] < minDistance) {
                    minDistance = this.adjacencyMatrix[currentLocationIndex][i];
                    nearestLocation = this.locations[i];
                }
            }

            // Move to the nearest location
            path.push(nearestLocation);
            totalDistance += minDistance;
            visited.add(nearestLocation);
            currentLocation = nearestLocation;
        }

        // Return to the starting point (optional)
        const returnDistance = this.adjacencyMatrix[this.locations.indexOf(currentLocation)][this.locations.indexOf(startLocation)];
        totalDistance += returnDistance;

        path.push(startLocation); // Closing the tour
        return { path, totalDistance };
    }
}

// Example usage:
const graph = new Graph();

// Add locations (destinations)
graph.addLocation("A");
graph.addLocation("B");
graph.addLocation("C");
graph.addLocation("D");
graph.addLocation("E");

// Add distances between locations (adjacency matrix)
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("A", "D", 5);
graph.addEdge("A", "E", 10);
graph.addEdge("B", "C", 1);
graph.addEdge("B", "D", 3);
graph.addEdge("B", "E", 7);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "E", 8);
graph.addEdge("D", "E", 6);

// Find the optimal route starting from location "A"
const result = graph.findOptimalRoute("A");

console.log("Optimal Route:", result.path.join(" -> "));
console.log("Total Distance:", result.totalDistance);