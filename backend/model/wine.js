const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wineSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    vintage: {
        type: String,
        require: true
    },
    varietal: {
        type: String,
        require: true
    },
    appellation: {
        type: String,
        require: true
    },
    harvestdate: {
        type: String,
        require: true
    },
    aging: {
        type: String,
        require: true
    },
    bottlingdate: {
        type: String,
        require: true
    },
    alcohol: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require:true
    },
    image: {
        type: String,
        required: true,
      },
});

module.exports = mongoose.model("wine", wineSchema);

// wine