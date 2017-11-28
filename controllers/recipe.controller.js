const Recipe = require('../model/recipe.model');

module.exports = {
    get(req, res) {
        res.contentType('application/json');
        Recipe.find({})
            .then((recipes) => {
                res.status(200).json(recipes);
            })
            .catch((error) => {
                res.status(401).json(error)
            });
    },
    getById(req, res) {
        res.contentType('application/json');
        Recipe.find({"_id": req.params.id})
            .then((recipes) => {
                // console.log(users);
                res.status(200).json(recipes);
            })
            .catch((error) => {
                res.status(401).json(error)
            });
    },
    create(req, res) {
        const recipeProps = req.body;

        Recipe.create(recipeProps)
            .then(recipe => {
                recipe.save();
                res.send(recipe)
            });
    }
    ,
    update(req, res, next) {
        const recipeId = req.params.id;
        const recipeProps = req.body;

        Recipe.findOneAndUpdate({_id: recipeId}, recipeProps)
            .then(() => Recipe.findById({_id: recipeId}))
            .then(recipe => res.send(recipe))
            .catch(next);
    }
    ,
    addIngredient(req, res, next) {
        const recipeId = req.params.id;
        const ingredientId = req.params.ingredientId; // ????

        updatedRecipe = Recipe.findOne({_id: recipeId});

//        updatedRecipe.ingredients.push()
    }
    ,
    deleteByName(req, res) {
        const recipeName = req.body.name;

        Recipe.findOneAndRemove({name: recipeName})
            .then(recipe => res.status(204).send(recipe));
<<<<<<< HEAD
    }
// edit(req, res, next) {
//     const recipeId = req.params.id;
//     const recipeProps = req.body;
//
//     Recipe.findByIdAndUpdate({_id: recipeId }, recipeProps)
//         .then(() => Recipe.findById({ _id: id }) )
//         .then(recipe => res.send(recipe))
//         .catch(next);
// },
//
// delete(req, res) {
//     const recipeId = req.params.id;
//
//     Recipe.findByIdAndRemove({_id: recipeId})
//         .then(recipe => res.status(204).send(recipe))
//         .catch(next);
// }
=======
    },
    // edit(req, res, next) {
    //     const recipeId = req.params.id;
    //     const recipeProps = req.body;
    //
    //     Recipe.findByIdAndUpdate({_id: recipeId }, recipeProps)
    //         .then(() => Recipe.findById({ _id: id }) )
    //         .then(recipe => res.send(recipe))
    //         .catch(next);
    // },
    //
    delete(req, res, next) {
        const recipeId = req.params.id;

        Recipe.findByIdAndRemove({_id: recipeId})
            .then(recipe => res.status(204).send(recipe))
            .catch(next);
    }
>>>>>>> caac9ea6448a6c8001bfea9e8b43575cf087ee29

}
;