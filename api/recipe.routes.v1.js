/**
 * Created by Kayvon Rahimi on 24-11-2017.
 */
var express = require('express');


const RecipeController = require('../controllers/recipe.controller');

module.exports = (app) => {
    // app.get('api/v1/about', RecipeController.about);
    app.post('/api/v1/recipes', RecipeController.create);
    app.put('/api/v1/recipes:id', RecipeController.update);
    app.put('/api/v1/recipes/addIngredient/:id', RecipeController.addIngredient);
    // app.post('/api/v1/recipes/:id', RecipeController.edit);
    app.delete('/api/v1/recipes', RecipeController.deleteByName);
};