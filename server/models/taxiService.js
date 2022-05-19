const mongoose = require("mongoose");

const taxiModelSchema = new mongoose.Schema({

    taxiService: { type: String, required: true },
    travelFrom: { type: String, required: true },
    travelTo: { type: String, required: true },
    vechileType: { type: String, required: true },
    name: { type: String, required: true },
    teleNo: { type: String, required: true },
    postDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("taxiDetails", taxiModelSchema);
