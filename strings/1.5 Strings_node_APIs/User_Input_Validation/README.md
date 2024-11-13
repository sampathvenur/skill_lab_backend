```markdown
# My Node User Input Validation API

This is a simple Node.js API that provides user registration functionality with input validation for email and username formats.

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
   git clone https://github.com/sampathvenur/skill_lab_backend.git
   cd Strings_node_APIs
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node server.js
   ```
   You should see a message indicating that the server is running:
   ```bash
   Server is running at http://localhost:3000
   ```

## API Endpoints

### POST /register

Register a new user.

**Request Body:**
```json
{
    "email": "user@example.com",
    "username": "user123"
}
```

**Response:**
- Success (200):
    ```json
    {
        "message": "User registered successfully!"
    }
    ```

- Error (400):
    - Invalid email format:
    ```json
    {
        "error": "Invalid email format."
    }
    ```

    - Invalid username:
    ```json
    {
        "error": "Invalid username. Must be 3 to 20 alphanumeric characters."
    }
    ```

## Testing

You can test the API using `curl`. Here are some examples:

### Valid Registration
```bash
curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"email": "user@example.com", "username": "user123"}'
```

### Invalid Email
```bash
curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"email": "invalidemail", "username": "user123"}'
```

### Invalid Username
```bash
curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"email": "user@example.com", "username": "ab"}'
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.