const mongoose = require('mongoose');
const Schema = mongoose.Schema;// Setup schema
const utensilSchema = Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId, ref: 'category',
        required: true
    }
});

// Export Contact model
var Utensil = module.exports = mongoose.model('utensil', utensilSchema);
module.exports.get = function (callback, limit) {
    Utensil.find(callback).limit(limit);
}