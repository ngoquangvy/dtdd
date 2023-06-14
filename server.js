// Import express
const express = require('express');

// Create an express app
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  // Send a response to the client
  res.send('Hello World!');
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('App is running on port 3000');
});