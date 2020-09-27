const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')

//Define schema
const UserSchema = new Schema ({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

//Auto-generate timestamps
UserSchema.set('timestamps', true);
UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('userModel', UserSchema);
