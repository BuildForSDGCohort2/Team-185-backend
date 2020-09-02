const User = require('../models/users');


exports.create = function (req, res) {
    let newUser = new User(req.body);
    console.log(req.body);
    newUser.save(function (err) {
        if(err) {
            res.status(400).send('Unable to save User to database');
        } else {
            res.redirect('/users/getUser');
        }
    });
};

exports.list = function (req, res) {
    User.find({}).exec(function (err, users) {
        if (err) {
            return res.send(500, err);
        }
        res.render('getUser', {
            users: users
        });
    });
};