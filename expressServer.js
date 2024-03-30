const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 1337;

// Enable CORS with the same options
const corsOptions = {
  origin: 'https://lambdachiuri-node.onrender.com'
};
app.use(cors(corsOptions));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for your application (assuming you have an index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle undefined routes with a custom 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
