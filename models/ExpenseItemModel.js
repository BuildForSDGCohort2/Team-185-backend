const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define schema
const ExpenseItemSchema = new Schema ({
    description: {type: String, required: true},
    amount: {type: Number, required: true}
});
//Auto-generate timestamps
ExpenseItemSchema.set('timestamps', true);

module.exports = mongoose.model('ExpenseItem', ExpenseItemSchema);