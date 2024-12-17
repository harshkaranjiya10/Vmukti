// Import Express
const express = require("express");
const app = express();

app.use(express.json());
const cors = require('cors');
app.use(cors());
// Define a route and use the /product as a path of
const mainRoute = require("./routes/index");
app.use("/products", mainRoute);

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
