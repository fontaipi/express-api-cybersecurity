const mongoose = require('mongoose');// Setup schema
const cardSchema = mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    suit: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

// Export Contact model
var Contact = module.exports = mongoose.model('card', cardSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}