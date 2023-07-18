require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");

const app = express();

// parse data
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.in81gjk.mongodb.net/house-hunter-db`)
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } catch (err) {
        console.log(err)
    }
}

main();