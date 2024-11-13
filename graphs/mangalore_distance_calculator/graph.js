// graph.js
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class CityGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addLocation(location) {
        if (!this.adjacencyList[location]) this.adjacencyList[location] = [];
    }

    addRoute(loc1, loc2, distance) {
        this.adjacencyList[loc1].push({ node: loc2, distance });
        this.adjacencyList[loc2].push({ node: loc1, distance });
    }

    findShortestPath(start, end) {
        const distances = {};
        const pq = new PriorityQueue();
        const previous = {};
        let path = [];
        let smallest;

        for (let location in this.adjacencyList) {
            if (location === start) {
                distances[location] = 0;
                pq.enqueue(location, 0);
            } else {
                distances[location] = Infinity;
                pq.enqueue(location, Infinity);
            }
            previous[location] = null;
        }

        while (pq.values.length) {
            smallest = pq.dequeue().val;
            if (smallest === end) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.distance;
                    if (candidate < distances[nextNode.node]) {
                        distances[nextNode.node] = candidate;
                        previous[nextNode.node] = smallest;
                        pq.enqueue(nextNode.node, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

module.exports = CityGraph;