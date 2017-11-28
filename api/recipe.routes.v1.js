var express = require('express');

var routes = express.Router();
var mongodb = require('../config/mongo.db');
var User = require('../model/recipe.model');

const RecipeController = require('../controllers/recipe.controller');

module.exports = (app) => {
    app.get('/api/v1/recipes', RecipeController.get);
    app.get('/api/v1/recipes/:id', RecipeController.getById);
    app.post('/api/v1/recipes', RecipeController.create);
    app.put('/api/v1/recipes/:id', RecipeController.update);
    app.put('/api/v1/recipes/addIngredient/:id', RecipeController.addIngredient);
    // app.post('/api/v1/recipes/:id', RecipeController.edit);
    app.delete('/api/v1/recipes', RecipeController.deleteByName);
    app.delete('/api/v1/recipes/:id', RecipeController.delete);
};