// Import Express
const express = require("express");
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

const cors = require('cors'); // CORS allows the server to handle requests from different domains
app.use(cors()); // Use CORS middleware to enable cross-origin requests

// Define a route and use the /product as a path of
const mainRoute = require("./routes/index");
app.use("/products", mainRoute);

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
