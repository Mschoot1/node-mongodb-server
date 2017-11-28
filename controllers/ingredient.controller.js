const Ingredient = require('../model/ingredient.model');

module.exports = {
    create(req, res) {
        const ingredientProps = req.body;

        Ingredient.create(ingredientProps)
            .then(ingredient => {
                ingredient.save();
                res.send(ingredient)
            });
    },
    edit(req, res, next) {
        const ingredientId =  req.body.id;
        const ingredientProps = req.body;

        Ingredient.findByIdAndUpdate({ _id: ingredientId } , ingredientProps )
            .then(() => Ingredient.findById({ _id: id }))
            .then(ingredient => res.send(ingredient))
            .catch(next);
    },
    deleteByName(req, res) {
        const ingredientName = req.body.name;

        Ingredient.findOneAndRemove({name: ingredientName})
            .then(ingredient => res.status(204).send(ingredient));
    }
};