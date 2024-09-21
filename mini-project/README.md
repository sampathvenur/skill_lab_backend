```markdown
# Spam Email Filter

A simple web application that checks email content for spam keywords. Developed by **Sampath Kumar**.

## Features

- Input area for email content
- Checks for common spam keywords
- Displays a message indicating whether the email is spam
- User-friendly interface with a colorful design

## Technologies Used

- **Node.js**: For the server-side application
- **Express**: Web framework for Node.js
- **HTML/CSS**: For the frontend design
- **JavaScript**: For client-side functionality

## Project Structure

```
/mini-project
    /spam_email_filter
        /public
            index.html
            styles.css
        server.js
```

### Files

- `server.js`: Contains the backend logic for checking spam emails.
- `public/index.html`: The main HTML file for the web application.
- `public/styles.css`: CSS file for styling the web application.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sampathvenur/skill_lab_backend.git
   cd mini-project/spam_email_filter
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install express
   ```

3. **Run the Server**:
   Use `nodemon` to start the server. If you don't have `nodemon` installed globally, you can use:
   ```bash
   npx nodemon server.js
   ```
   The server will start on port 2000.

4. **Access the Application**:
   Open your web browser and navigate to:
   ```
   http://127.0.0.1:2000/index.html
   ```

## Usage Instructions

1. Enter your email content in the text area.
2. Click the "Check Spam" button.
3. The application will display whether the email is spam or not.

## License

This project is licensed under the MIT License. Feel free to modify and use it for your own purposes.

## Contact

For any inquiries, please reach out to **Sampath Kumar**.
```