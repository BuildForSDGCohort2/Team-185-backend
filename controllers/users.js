const User = require('../models/users');
const bcrypt = require("bcrypt");


exports.create = function (req, res) {

    let newUser  = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const salt =  bcrypt.genSalt(20);
    newUser.password =  bcrypt.hash(newUser.password, salt);
    console.log(req.body);
    newUser.save(function (err) {
        if(err) {
            res.status(400).send('Unable to save User to database');
        } else {
            res.send({
                name: newUser.name,
                email: newUser.email,
                password: newUser.password
            });
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