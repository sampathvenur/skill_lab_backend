const express = require('express');
const CityGraph = require('./graph');  // importing sampy's graph logic

const app = express();
const port = 3000;

// Initialize the graph
const cityGraph = new CityGraph();

// Add cities and distance between them
cityGraph.addLocation("Mangalore");
cityGraph.addLocation("Udupi");
cityGraph.addLocation("Manipal");
cityGraph.addLocation("Puttur");
cityGraph.addLocation("Sullia");

cityGraph.addRoute("Mangalore", "Udupi", 60);
cityGraph.addRoute("Udupi", "Manipal", 10);
cityGraph.addRoute("Manipal", "Puttur", 35);
cityGraph.addRoute("Puttur", "Sullia", 40);
cityGraph.addRoute("Mangalore", "Puttur", 45);
cityGraph.addRoute("Udupi", "Sullia", 80);

// API endpoint to calculate the shortest path
app.get('/shortest-path', (req, res) => {
    const { start, end } = req.query;

    if (!start || !end) {
        return res.status(400).json({ error: 'Both "start" and "end" locations are required' });
    }

    // getting the shortest path
    const path = cityGraph.findShortestPath(start, end);

    if (path.length === 0) {
        return res.status(404).json({ error: `No path found from ${start} to ${end}` });
    }

    return res.json({ start, end, path });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});