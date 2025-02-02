/**
 * Created by Kayvon Rahimi on 24-11-2017.
 */
var express = require('express');
var routes = express.Router();
const Ingredient = require('../model/ingredient.model');

routes.get('/ingredients', function (req, res) {
    res.contentType('application/json');
    Ingredient.find({})
        .then(function (ingredients) {
            res.status(200).json(ingredients);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

routes.get('/ingredients/:id', function (req, res) {
    res.contentType('application/json');
    Ingredient.findOne({"_id": req.params.id})
        .then(function (ingredient) {
            res.status(200).json(ingredient);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

routes.post('/ingredients', function (req, res) {
    res.contentType('application/json');
    const ingredientProps = req.body;

    Ingredient.create(ingredientProps)
        .then(ingredient => {
            ingredient.save();
            res.send(ingredient)
        });
});
routes.put('/ingredients/:id', function (req, res, next) {
    res.contentType('application/json');
    const ingredientId = req.params.id;
    const ingredientProps = req.body;

    Ingredient.findOneAndUpdate({_id: ingredientId}, ingredientProps)
        .then(() => Ingredient.findById({_id: ingredientId}))
        .then(ingredient => res.send(ingredient))
        .catch(next);
});
routes.delete('/ingredients', function (req, res, next) {
    res.contentType('application/json');
    const ingredientName = req.body.name;

    Ingredient.findOneAndRemove({name: ingredientName})
        .then(ingredient => res.status(204).send(ingredient));
});

routes.delete('/ingredients/:id', function (req, res, next) {
    res.contentType('application/json');
    const ingredientId = req.params.id;

    Ingredient.findByIdAndRemove({_id: ingredientId})
        .then(ingredient => res.status(204).send(ingredient))
        .catch(next);
});


module.exports = routes;