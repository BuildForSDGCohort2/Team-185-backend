const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define schema
const UserSchema = new Schema ({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

//Auto-generate timestamps
UserSchema.set('timestamps', true);

module.exports = mongoose.model('user', UserSchema);
