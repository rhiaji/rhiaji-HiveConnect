const express = require("express");
const app = express();
app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use(express.static(__dirname + "/public"));

app.use("/", userRoutes);

// Start the server
const port = process.env.PORT || 5002;

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Signal that the server is ready
server.on("listening", () => {
  console.log("Server is fully initialized and running.");
});
