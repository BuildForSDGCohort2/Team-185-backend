const mongoose = require('mongoose');
//DB Variables
const MONGO_USERNAME = 'team185';
const MONGO_PASSWORD = 'team185password';
const MONGO_HOSTNAME = 'cluster0.bb8fx.mongodb.net';
const MONGO_DB = 'budger';
const db = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}??retryWrites=true&w=majority`;

//Define the connect db function
const connectDB = async () => {
	try {
		mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log('*********MongoDB Connected**********');
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
