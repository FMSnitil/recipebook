const express = require('express');
const router = express.Router();
const RecipeDAO = require('../dao/recipe-dao');

// GET /recipes - Získání všech receptů
router.get('/', async (req, res) => {
  try {
    const recipes = await RecipeDAO.getAllRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /recipes - Vytvoření nového receptu
router.post('/', async (req, res) => {
  try {
    const newRecipe = await RecipeDAO.create(req.body);
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /recipes/:id - Získání konkrétního receptu
router.get('/:id', async (req, res) => {
  try {
    const recipe = await RecipeDAO.getRecipe(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// PATCH /recipes/:id - Aktualizace konkrétního receptu
router.patch('/:id', async (req, res) => {
  try {
    const updatedRecipe = await RecipeDAO.updateRecipe(req.params.id, req.body);
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /recipes/:id - Smazání konkrétního receptu
router.delete('/:id', async (req, res) => {
  try {
    const result = await RecipeDAO.deleteRecipe(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
