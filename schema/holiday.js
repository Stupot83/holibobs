const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const holidaySchema = new Schema({
    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date, 
        required: true
    },

    location: {
        type: String,
        required: true
    }
});

const Holiday = mongoose.model("holidays", holidaySchema);
module.exports = Holiday;