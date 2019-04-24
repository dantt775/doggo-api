const bcrypt = require('bcrypt');

User = require('..//models/user');

const SALT_ROUNDS = 10;

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

//Log in user
module.exports.login = (app) => {
    app.post('/api/doggo/login', (req, res) => {
        let email = req.body.email;
        let passwd = req.body.password;
        User.login(email, passwd, (err, user) => {
            if (err) {
                res.json(err);
            } else {
                if (user.length == 0) {
                    res.json('Usuário ou senha inválido');
                } else {
                    res.json(user);
                }
            }
        })
    })
}


// Add user
module.exports.addUserRoute = (app) => {
    app.post('/api/doggo/usuarios', (req, res) => {
        let newUser = req.body;
     //   bcrypt.hash(newUser.password, SALT_ROUNDS, (err, hash) => {
         //   if (err) {
        //        res.json(err);
        //    } else {
        //        newUser.password = hash;
                User.addUser(newUser, (err, newUser) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(newUser);
                    }
                })
        //    }

      //  });


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





