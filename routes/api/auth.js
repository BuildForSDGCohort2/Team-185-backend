const express = require('express');
const router = express.Router();
const User = require('../../models/userModel');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require ('config');
const auth = require ('../../middleware/auth')

//@route    Post api/auth
//@desc     Auth user
//@access   Public
router.post('/', function(req, res) {
    const {name, email, password} = req.body;
    //User  validation
    if(!email || !password){
        return res.status(400)
        .json ({msg: 'Please enter all fields'});
    }
    //Check for existing user
    User.findOne({email})
    .then(user => {
        //if user exists
        if(!user) return res.status(400)
        .json({msg: 'User does not exist'})

        //Validate password
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(!isMatch) return res.status(400)
                .json({msg: 'Invalid Credentials'})

                //getting the user token
                jwt.sign(
                    {id: user.id},
                    config.get('jwtSecret'),
                    {expiresIn: 3600},
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            user : {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                password: user.password
                            }
                        })
                    }
                )
           })      
    })
});

//@route    GET api/auth/user
//@desc     Get user data
//@access   Private

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})

router.get('/getUser', function(req, res) {
    user.list(req,res);
});

module.exports = router;