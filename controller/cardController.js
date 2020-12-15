// Import contact model
Card = require('../model/cardModel');

// Handle index actions
exports.index = function (req, res) {
    Card.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Cards retrieved successfully",
            data: contacts
        });
    });
};

// Handle create card actions
exports.new = function (req, res) {
    let card = new Card();
    card.value = req.body.value;
    card.suit = req.body.suit;
    card.code = req.body.code;

    // save the contact and check for errors
    card.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New card created!',
            data: card
        });
    });
};

// Handle view card info
exports.view = function (req, res) {
    Card.findById(req.params.card_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Card details loading..',
            data: contact
        });
    });
};

// Handle update card info
exports.update = function (req, res) {
    Card.findById(req.params.card_id, function (err, card) {
        if (err)
            res.send(err);
        card.value = req.body.value;
        card.suit = req.body.suit;
        card.code = req.body.code;// save the contact and check for errors
        card.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Card Info updated',
                data: card
            });
        });
    });
};

// Handle delete card
exports.delete = function (req, res) {
    Card.remove({
        _id: req.params.card_id
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Card deleted'
        });
    });
};