User = require('..//models/user');

// Get users
module.exports.getUsersRoute = (app) => {
    app.get('/api/doggo/usuarios', (req, res) => {
        User.getUsers((err, users) => {
            if (err) {
                res.json(err);
            } else {
                res.json(users);
            }
        })
    })
}

// Get user by id
module.exports.getUserByIdRoute = (app) => {
    app.get('/api/doggo/usuarios/:id', (req, res) => {
        let userId = req.params.id;
        User.getUserById(userId, (err, user) => {
            if (err) {
                res.json(err);
            } else {
                res.json(user);
            }
        })
    })
}

// Add user
module.exports.addUserRoute = (app) => {
    app.post('/api/doggo/usuarios', (req, res) => {
        let newUser = req.body;
        User.addUser(newUser, (err, newUser) => {
            if (err) {
                res.json(err);
            } else {
                res.json(newUser);
            }
        })
    })
}



// Update user
module.exports.updateUserRoute = (app) => {
    app.put('/api/doggo/usuarios/:id', (req, res) => {
        let userId = req.params.id
        let updatedUser = req.body;
        User.updateUser(userId, updatedUser, (err, user) => {
            if (err) {
                res.json(err);
            } else {
                res.json(updatedUser);
            }
        })
    })


}





