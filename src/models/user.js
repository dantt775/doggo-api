const mongoose = require('mongoose');

// Ad Schema
const userSchema = mongoose.Schema({
    email: {
        type : String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        lowercase: false,
    },
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true,
    }
});

const User = module.exports = mongoose.model('User', userSchema);

// Get users
module.exports.getUsers = (callback, limit) => {
    User.find(callback).limit(limit);
}

// Get User Byid
module.exports.getUserById = (userId, callback) => {
    User.findById(userId, callback);
}

// Add User
module.exports.addUser = (user, callback) => {
    User.create(user, callback);
}

// Update user
module.exports.updateUser = (userId, updatedUser, callback) => {
    User.findOneAndUpdate(userId,{$set: updatedUser}, callback);    
}

module.exports.login = (email, passwd, callback) => {
    User.find({email: email, password: passwd}, callback);
}