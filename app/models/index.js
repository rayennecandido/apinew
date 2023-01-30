const dbConfig = require("../config/db.config.js");

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.cliente = require("./cliente.model.js")(mongoose);

module.exports = db;