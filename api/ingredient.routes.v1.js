/**
 * Created by Kayvon Rahimi on 24-11-2017.
 */
var express = require('express');

const IngredientController = require('../controllers/ingredient.controller');

module.exports = (app) => {
    app.post('/api/v1/ingredients', IngredientController.create);
    // app.post('/api/v1/ingredients', IngredientController.update);
    app.post('/api/v1/ingredients/:id', IngredientController.edit);
    app.delete('/api/v1/ingredients/:id', IngredientController.deleteByName);
};