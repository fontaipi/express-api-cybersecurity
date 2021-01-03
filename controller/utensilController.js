// Import utensil model
Utensil = require('../model/utensilModel');

// Handle index actions
exports.index = function (req, res) {
    Utensil.get(function (err, utensil) {
        if (err) {
            return res.status(500).json({
                status: "error",
                message: err,
            });
        }
        res.status(200).json({
            status: "success",
            message: "Kitchenware retrieved successfully",
            data: utensil
        });
    });
};

// Handle create utensil actions
exports.new = function (req, res) {
    let utensil = new Utensil();
    utensil.name = req.body.name;
    utensil.weight = req.body.weight;
    utensil.price = req.body.price;
    utensil.category_id = req.body.category_id;

    // save the contact and check for errors
    utensil.save(function (err) {
        if (err)
            return res.status(500).json(err);
        res.status(201).json({
            message: 'New utensil created!',
            data: utensil
        });
    });
};

// Handle view utensil info
exports.view = function (req, res) {
    Utensil.findById(req.params.utensil_id, function (err, utensil) {
        if (err)
            return res.status(500).send(err);
        res.status(200).json({
            message: 'Utensil details loading..',
            data: utensil
        });
    });
};

// Handle update utensil info
exports.update = function (req, res) {
    Utensil.findById(req.params.utensil_id, function (err, utensil) {
        if (err)
            return res.status(500).send(err);
        utensil.name = req.body.name;
        utensil.weight = req.body.weight;
        utensil.price = req.body.price;
        utensil.category_id = req.body.category_id;
        utensil.save(function (err) {
            if (err)
                res.status(500).json(err);
            res.status(200).json({
                message: 'Utensil Info updated',
                data: utensil
            });
        });
    });
};

// Handle delete utensil
exports.delete = function (req, res) {
    Utensil.deleteMany({
        _id: req.params.utensil_id
    }, function (err, utensil) {
        if (err)
            return res.status(500).send(err);
        res.status(200).json({
            message: 'Utensil deleted',
            data: utensil
        });
    });
};