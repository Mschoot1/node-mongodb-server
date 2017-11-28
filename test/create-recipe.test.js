const assert = require('assert');
const Recipe = require('../model/recipe.model');

// var describe = require("mocha").describe;
describe('Creating recipe records', () => {
    xit('saves a recipe', (done) => {
        const recipeLasagna  = new Recipe({ name: 'Lasagna' });

        recipeLasagna.save()
            .then(() => {
                assert(!recipeLasagna.isNew);
                done();
            });
    });
});
