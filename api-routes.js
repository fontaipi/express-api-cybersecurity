// Initialize express router
let router = require('express').Router();// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to DeckOfCards crafted with love!',
    });
});// Import contact controller
var cardController = require('./controller/cardController');// Contact routes
router.route('/cards')
    .get(cardController.index)
    .post(cardController.new);router.route('/cards/:card_id')
    .get(cardController.view)
    .patch(cardController.update)
    .put(cardController.update)
    .delete(cardController.delete);// Export API routes
module.exports = router;