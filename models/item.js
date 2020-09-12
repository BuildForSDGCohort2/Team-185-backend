const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define schema
const ItemSchema = new Schema ({
    description: {type: String, required: true},
    amount: {type: Number, required: true}
});


//Auto-generate timestamps
ItemSchema.set('timestamps', true);

module.exports = mongoose.model('Item', ItemSchema);