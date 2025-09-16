# Basic Node API

This project is a simple Node.js API that allows you to save data to a text file using Express.

## Project Structure

```
basic-node-api
├── src
│   ├── app.js          # Entry point of the application
│   └── utils
│       └── fileHandler.js # Utility functions for file operations
├── package.json        # NPM configuration file
└── README.md           # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd basic-node-api
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. Send a POST request to save data to a text file. You can use tools like Postman or curl. The endpoint is:
   ```
   POST http://localhost:3000/save
   ```

3. The request body should be in JSON format:
   ```json
   {
       "data": "Your data here"
   }
   ```

## License

This project is licensed under the MIT License.