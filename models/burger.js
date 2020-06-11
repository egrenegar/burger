const orm = require('../config/orm');

// call the orm functions here
orm.selectAll('*', 'burgers');

orm.insertOne();

orm.updateOne();

module.exports = 'burger.js';