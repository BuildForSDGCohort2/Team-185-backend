const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define schema
const IncomeItemSchema = new Schema ({
    description: {type: String, required: true},
    amount: {type: Number, required: true}
});
//Auto-generate timestamps
IncomeItemSchema.set('timestamps', true);

module.exports = mongoose.model('IncomeItem', IncomeItemSchema);