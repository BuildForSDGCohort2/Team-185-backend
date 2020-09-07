const mongoose = require('mongoose');

const MONGO_USERNAME = 'felixmutua';
const MONGO_PASSWORD = 'Ig7BeTfYKv4hkrCc';
const MONGO_HOSTNAME = 'cluster0.qefs5.mongodb.net';
const MONGO_DB = 'budger';


const url = `mongodb+srv://${MONGO_USERNAME}:
                                            ${MONGO_PASSWORD}@
                                            ${MONGO_HOSTNAME}/
                                            ${MONGO_DB}??retryWrites=true&w=majority`;

mongoose.connect(url, {useNewUrlParser: true});