const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required.']
    },
    amount: {
        type: Number,
            required: [true, 'Enter an amount.']
    }
});

const Ingredient = mongoose.model('ingredient', IngredientSchema);

module.exports = Ingredient;