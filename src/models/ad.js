const mongoose = require('mongoose');

// Ad Schema
const adSchema = mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    local: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true
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

// Update Ada
module.exports.updateAd = (adId, updatedAd, callback) => {
    Ad.findOneAndUpdate(adId, { $set: updatedAd }, callback);
}

// Get Ads from user id
module.exports.getAdsByUderId = (userId, callback) =>{
    Ad.find({user_id: userId}, callback);
}