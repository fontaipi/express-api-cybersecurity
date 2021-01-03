// Initialize express router
let router = require('express').Router();// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is Working',
        message: 'Welcome to DeckOfKitchenware',
    });
});// Import contact controller

var categoryController = require('./controller/categoryController');// Category routes
var utensilController = require('./controller/utensilController');// Utensil routes

router.route('/categories')
    .get(categoryController.index)
    .post(categoryController.new);
router.route('/categories/:category_id')
    .get(categoryController.view)
    .patch(categoryController.update)
    .put(categoryController.update)
    .delete(categoryController.delete);// Export API routes

router.route('/utensils')
    .get(utensilController.index)
    .post(utensilController.new);
router.route('/utensils/:utensil_id')
    .get(utensilController.view)
    .patch(utensilController.update)
    .put(utensilController.update)
    .delete(utensilController.delete);// Export API routes


module.exports = router;