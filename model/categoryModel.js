const mongoose = require('mongoose');// Setup schema
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// Export Contact model
var Category = module.exports = mongoose.model('category', categorySchema);
module.exports.get = function (callback, limit) {
    Category.find(callback).limit(limit);
}