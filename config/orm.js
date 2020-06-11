const connection = require('./connection');
// create the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods you will need to use in order to retrieve and store data in your database.

const orm = {
    selectAll: function (whatToSelect, table) {
        const queryString = 'SELECT ?? FROM ??';
        connection.query(queryString, [whatToSelect, table], function (err, res) {
            if (err) throw err;
            console.table(res);
        });
    },

    insertOne: function () {
        const queryString = '';
        connection.query(queryString, [], function (err, res) {
            if (err) throw err;
            console.table(res);
        });
    },

    updateOne: function () {
        const queryString = '';
        connection.query(queryString, [], function (err, res) {
            if (err) throw err;
            console.table(res);
        });
    }
}


module.exports = orm;