const mongoose = require('mongoose');

const MONGO_USERNAME = 'team_185';
const MONGO_PASSWORD = 'backend185';
const MONGO_HOSTNAME = 'ds135726.mlab.com';
const MONGO_PORT = '35726';
const MONGO_DB = 'budger';

const url = `mongodb://${MONGO_USERNAME}:
                                            ${MONGO_PASSWORD}@
                                            ${MONGO_HOSTNAME}:
                                            ${MONGO_PORT}/
                                            ${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {useNewUrlParser: true});