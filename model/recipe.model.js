const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required.']
    },
    description: {
        type: String
    },
    imagePath: {
        type: String
    },
    ingredients: [{
            // name: String,
            // amount: Number
            type: Schema.Types.ObjectId,
            ref: 'ingredient'
        }]
});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;