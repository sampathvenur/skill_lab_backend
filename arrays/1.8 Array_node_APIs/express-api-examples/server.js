const express = require('express');
const app = express();
const port = 3000;

// Example 1: Fetch and return a list of users
app.get('/users', (req, res) => {
    let users = [
        { name: 'John Doe', age: 25 },
        { name: 'Jane Doe', age: 22 },
        { name: 'Mike Ross', age: 30 }
    ];
    res.json(users);
});

// Example 2: Filter products by category
app.get('/products', (req, res) => {
    let products = [
        { name: 'Laptop', category: 'Electronics', price: 1200 },
        { name: 'Shirt', category: 'Clothing', price: 40 },
        { name: 'Phone', category: 'Electronics', price: 800 }
    ];
    let electronics = products.filter(product => product.category === 'Electronics');
    res.json(electronics);
});

// Example 3: Paginate a list of users
app.get('/paginated-users', (req, res) => {
    let users = [
        { name: 'John Doe', age: 25 },
        { name: 'Jane Doe', age: 22 },
        { name: 'Mike Ross', age: 30 },
        { name: 'Sara Smith', age: 28 },
        { name: 'Paul Walker', age: 24 }
    ];
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 2;
    let startIndex = (page - 1) * limit;
    let endIndex = page * limit;
    let paginatedUsers = users.slice(startIndex, endIndex);
    res.json(paginatedUsers);
});

// Example 4: Aggregate data from multiple sources
app.get('/aggregated-data', (req, res) => {
    let userData = [
        { name: 'John Doe', age: 25 },
        { name: 'Jane Doe', age: 22 }
    ];
    let orderData = [
        { orderId: 1, user: 'John Doe', product: 'Laptop' },
        { orderId: 2, user: 'Jane Doe', product: 'Phone' }
    ];
    let aggregatedData = userData.map(user => {
        let userOrders = orderData.filter(order => order.user === user.name);
        return { ...user, orders: userOrders };
    });
    res.json(aggregatedData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
