const express = require("express");
const cors = require("cors");

const app = express();

// parse data
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.listen(port, () => {
    console.log("Server is running on port", port)
})