const mongoose = require("mongoose");

const houseScema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String
    },
    bedrooms: {
        type: String
    },
    bathrooms: {
        type: String
    },
    roomSize: {
        type: String
    },
    houseImage: {
        type: String
    },
    availablityDate: {
        type: String
    },
    rentPerMonth: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    discription: {
        type: String
    },
    userId: {
        type: String
    }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

const Houses = mongoose.model("House", houseScema, "housesList");

module.exports = Houses;