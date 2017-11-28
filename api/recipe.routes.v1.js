var express = require('express');
var routes = express.Router();
const Recipe = require('../model/recipe.model');
const Ingredient = require('../model/ingredient.model');

routes.get('/recipes', function (req, res) {
    res.contentType('application/json');
    Recipe.find({})
        .then(function (recipes) {
            res.status(200).json(recipes);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

routes.get('/recipes/:id', function (req, res) {
    res.contentType('application/json');
    Recipe.findOne({"_id": req.params.id})
        .then(function (recipes) {
            res.status(200).json(recipes);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

routes.post('/recipes', function (req, res) {
    res.contentType('application/json');
    const recipeProps = req.body;

    Recipe.create(recipeProps)
        .then(recipe => {
            recipe.save();
            res.send(recipe)
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});
routes.put('/recipes/:id', function (req, res, next) {
    res.contentType('application/json');

    const recipeId = req.params.id;
    const recipeProps = req.body;

    Recipe.findOneAndUpdate({_id: recipeId}, recipeProps)
        .then(() => Recipe.findById({_id: recipeId}))
        .then(recipe => res.send(recipe))
        .catch(next);
});

routes.delete('/recipes', function (req, res, next) {
    const recipeName = req.body.name;

    Recipe.findOneAndRemove({name: recipeName})
        .then(recipe => res.status(204).send(recipe));
});
routes.delete('/recipes/:id', function (req, res, next) {
    const recipeId = req.params.id;

    Recipe.findByIdAndRemove({_id: recipeId})
        .then(recipe => res.status(204).send(recipe))
        .catch(next);
});

routes.put('/recipes/add/:id', function (req, res, done) {
    const recipeId = req.params.id;
    const ingredientProps = req.body;
    const ingredient = Ingredient.findOne({_id: ingredientProps._id});
    // const newIngredient = new Ingredient({name: ingredientProps.name, amount: ingredientProps.amount});
    Recipe.findOneAndUpdate(
        {_id: recipeId},
        {$push: {ingredients: req.body}},
        done
    );
});

module.exports = routes;