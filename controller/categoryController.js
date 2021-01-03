// Import contact model
Category = require('../model/categoryModel');

// Handle index actions
exports.index = function (req, res) {
    Category.get(function (err, category) {
        if (err) {
            return res.status(500).json({
                status: "error",
                message: err,
            });
        }
        res.status(200).json({
            status: "success",
            message: "Categories retrieved successfully",
            data: category
        });
    });
};

// Handle create category actions
exports.new = function (req, res) {
    let category = new Category();
    category.name = req.body.name;

    // save the contact and check for errors
    category.save(function (err) {
        if (err)
            return res.status(500).json(err);
        res.status(201).json({
            message: 'New category created!',
            data: category
        });
    });
};

// Handle view category info
exports.view = function (req, res) {
    Category.findById(req.params.category_id, function (err, category) {
        if (err)
            return res.status(500).send(err);
        res.status(200).json({
            message: 'Category details loading..',
            data: category
        });
    });
};

// Handle update utensil info
exports.update = function (req, res) {
    Category.findById(req.params.category_id, function (err, category) {
        if (err)
            return res.status(500).send(err);
        category.name = req.body.name;
        category.save(function (err) {
            if (err)
                res.status(500).json(err);
            res.status(200).json({
                message: 'Category Info updated',
                data: category
            });
        });
    });
};

// Handle delete utensil
exports.delete = function (req, res) {
    Category.deleteMany({
        _id: req.params.category_id
    }, function (err, category) {
        if (err)
            return res.status(500).send(err);
        res.status(200).json({
            message: 'Utensil deleted',
            data: category
        });
    });
};