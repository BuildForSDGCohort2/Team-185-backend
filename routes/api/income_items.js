const express = require('express');
const router = express.Router();
const IncomeItem = require('../../models/IncomeItemModel');



router.get('/', (req, res) => {
    IncomeItem.find()
        .sort({ date: -1})
        .then (income_item => res.json(income_item));
});


router.post('/', (req, res) => {
    const income_item = new IncomeItem({
        description: req.body.description,
        amount: req.body.amount   
    });
    income_item.save().then(income_item => res.json(income_item));
});

router.delete('/:id', (req, res) => {
    IncomeItem.findById(req.params.id)
        .then(item =>item.remove()
        .then(() => res.json({success: true})))
        .catch(err => res.status(404)
        .json({Success: false}));
});

router.put('/:id', (req, res, next) => {
    const newIncomeItem = new IncomeItem({
      _id: req.params.id,
      description: req.body.description,
      amount: req.body.amount,
    });

    IncomeItem.updateOne({_id: req.params.id}, newIncomeItem)
        .then(() => {res.status(201).json({message: 'Updated!' });})
        .catch((error) => {res.status(400).json({error: error});
      }
    );
  });


module.exports = router;



