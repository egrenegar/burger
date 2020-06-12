const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

// write Routes here
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var dictionary = {
            burgers: data
        };
        console.log(dictionary);
        res.render('index', dictionary);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.insertOne('burger_name', req.body.burger_name, function(result) {
        console.log(result)
        res.json({id: result.insertId })
    });
});

router.put('/api/burgers/:id', function(req, res) {
    const condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.updateOne({devoured: req.body.devoured}, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;