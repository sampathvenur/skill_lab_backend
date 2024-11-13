```markdown
# Express API Examples

This project contains multiple Express.js API examples demonstrating different use cases of handling data with arrays.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [License](#license)

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- npm (Node package manager, comes with Node.js)

## Installation

1. Clone the repository or download the source code:
   ```bash
   mkdir express-api-examples
   cd express-api-examples
   npm init -y
   npm install express
   ```

2. Create a file named `server.js` and add the following code:

```javascript
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
```

## Usage

1. Start the server:
   ```bash
   node server.js
   ```
   You should see a message indicating that the server is running:
   ```
   Server is running on port 3000
   ```

## API Endpoints

### 1. Fetch Users
- **Endpoint:** `/users`
- **Method:** GET
- **Response:**
```json
[
    { "name": "John Doe", "age": 25 },
    { "name": "Jane Doe", "age": 22 },
    { "name": "Mike Ross", "age": 30 }
]
```

### 2. Filter Products
- **Endpoint:** `/products`
- **Method:** GET
- **Response:**
```json
[
    { "name": "Laptop", "category": "Electronics", "price": 1200 },
    { "name": "Phone", "category": "Electronics", "price": 800 }
]
```

### 3. Paginate Users
- **Endpoint:** `/paginated-users?page=<page_number>&limit=<limit>`
- **Method:** GET
- **Example Request:** `/paginated-users?page=1&limit=2`
- **Response:**
```json
[
    { "name": "John Doe", "age": 25 },
    { "name": "Jane Doe", "age": 22 }
]
```

### 4. Aggregated Data
- **Endpoint:** `/aggregated-data`
- **Method:** GET
- **Response:**
```json
[
    { "name": "John Doe", "age": 25, "orders": [{ "orderId": 1, "user": "John Doe", "product": "Laptop" }] },
    { "name": "Jane Doe", "age": 22, "orders": [{ "orderId": 2, "user": "Jane Doe", "product": "Phone" }] }
]
```

## Testing

You can test the API using `curl`. Here are the commands for each endpoint:

1. **Fetch Users:**
   ```bash
   curl http://localhost:3000/users
   ```

2. **Filter Products:**
   ```bash
   curl http://localhost:3000/products
   ```

3. **Paginate Users (Page 1, Limit 2):**
   ```bash
   curl "http://localhost:3000/paginated-users?page=1&limit=2"
   ```

4. **Aggregated Data:**
   ```bash
   curl http://localhost:3000/aggregated-data
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
```
