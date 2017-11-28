const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost/node-mongodb-users');
    console.log('!@#$$Connected to database mongoRecipes');
    mongoose.connection
        .once('open', () => { done() } )
        .on('error', (error) => {
            console.warn('Warning', error)
        });

});

beforeEach((done) => {
    const { recipes, ingredients } = mongoose.connection.collections;

    recipes.drop(() => {
        done();
    });
});