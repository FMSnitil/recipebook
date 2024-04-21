const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const RecipeListDAO = require('../dao/recipeList-dao');

router.post('/', auth, async (req, res) => {
  try {
    const recipeList = await RecipeListDAO.createRecipeList({
      ...req.body,
      userId: req.user._id
    });
    res.status(201).send(recipeList);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// router.get('/', auth, async (req, res) => {
//   try {
//     const recipeLists = await RecipeListDAO.getRecipeListsByUserId(req.user._id);
//     res.status(200).send(recipeLists);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

router.get('/', auth, async (req, res) => {
  try {
    const recipeListsWithRecipes = await RecipeListDAO.getRecipeListsWithRecipesByUserId(req.user._id);
    res.status(200).send(recipeListsWithRecipes);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/:listID', auth, async (req, res) => {
  try {
    const recipeList = await RecipeListDAO.getRecipeListByIdAndUserId(req.params.listID, req.user._id);
    if (!recipeList) {
      return res.status(404).send({ message: 'Recipe list not found' });
    }
    res.status(200).send(recipeList);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/:listID/recipes/:recipeID', auth, async (req, res) => {
  try {
    const recipeList = await RecipeListDAO.addRecipeToList(req.params.listID, req.params.recipeID);
    res.status(201).send(recipeList);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put('/:listID', auth, async (req, res) => {
  try {
    const recipeList = await RecipeListDAO.updateRecipeList(req.params.listID, req.body);
    res.status(200).send(recipeList);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete('/:listID', auth, async (req, res) => {
  try {
    await RecipeListDAO.deleteRecipeList(req.params.listID);
    res.status(200).json({ message: 'Recipe list deleted' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
