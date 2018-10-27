const mongoose = require('mongoose');

// Ad Schema
const adSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    local: {
        type: String,
        requires: true,
    },
    descricao: {
        type: String,
        requires: true
    },
    titulo: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now 
    },
    img: {
        type: String,
        default: "http://i.imgur.com/oaLqVTa.png"
    }
});

const Ad = module.exports = mongoose.model('Ad', adSchema);

// Get Ads
module.exports.getAds = (callback, limit) => {
    Ad.find(callback).limit(limit);
}

// Add Ads
module.exports.addAd = (ad, callback) => {
    Ad.create(ad, callback);
}