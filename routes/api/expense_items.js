const express = require('express');
const router = express.Router();
const ExpenseItem = require('../../models/ExpenseItemModel');



router.get('/', (req, res) => {
    ExpenseItem.find()
        .sort({ date: -1})
        .then (expense_item => res.json(expense_item));
});


router.post('/', (req, res) => {
    const expense_item = new ExpenseItem({
        description: req.body.description,
        amount: req.body.amount   
    });
    expense_item.save().then(expense_item => res.json(expense_item));
});

router.delete('/:id', (req, res) => {
    ExpenseItem.findById(req.params.id)
        .then(item =>item.remove()
        .then(() => res.json({success: true})))
        .catch(err => res.status(404)
        .json({Success: false}));
});

router.put('/:id', (req, res, next) => {
    const newExpenseItem = new ExpenseItem({
      _id: req.params.id,
      description: req.body.description,
      amount: req.body.amount,
    });

    ExpenseItem.updateOne({_id: req.params.id}, newExpenseItem)
        .then(() => {res.status(201).json({message: 'Updated!' });})
        .catch((error) => {res.status(400).json({error: error});
      }
    );
  });



module.exports = router;



