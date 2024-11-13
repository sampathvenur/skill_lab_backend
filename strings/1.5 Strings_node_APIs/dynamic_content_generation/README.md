```markdown
# My Greeting API

This is a simple Node.js API that generates personalized greeting messages based on user data.

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
   cd dynamic_content_generation
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
   ```
   Server is running at http://localhost:3000
   ```

## API Endpoints

### POST /greet

Generate a personalized greeting message.

**Request Body:**
```json
{
    "name": "Alice"
}
```

**Response:**
- Success (200):
    ```json
    {
        "message": "Hello, Alice! Welcome to our website!"
    }
    ```

- Error (400):
    - Invalid name:
    ```json
    {
        "error": "Invalid name provided."
    }
    ```

## Testing

You can test the API using `curl`. Here are some examples:

### Valid Greeting
```bash
curl -X POST http://localhost:3000/greet -H "Content-Type: application/json" -d '{"name": "Alice"}'
```

### Invalid Input (Missing Name)
```bash
curl -X POST http://localhost:3000/greet -H "Content-Type: application/json" -d '{}'
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
```