const express = require('express');
const router = express.Router();
const user = require('../controllers/users');


router.post('/addUser', function(req, res) {
    user.create(req,res);
});

router.get('/getUser', function(req, res) {
    user.list(req,res);
});

module.exports = router;