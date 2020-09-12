const express = require('express');
const router = express.Router();
const Item = require('../models/item');


router.get('/', (req, res) => {
    Item.find()
        .then (items => res.json(items));
});


router.post('/', (req, res) => {
    const newItem = new Item({
        description: req.body.description,
        amount: req.body.amount   
    });
    newItem.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item =>item.remove()
        .then(() => res.json({success: true})))
        .catch(err => res.status(404)
        .json({Success: false}));
});


module.exports = router;



