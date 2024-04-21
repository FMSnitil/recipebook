const Recipe = require('../models/Recipe');

class RecipeDAO {
  async create(recipeData) {
    const recipe = new Recipe(recipeData);
    await recipe.save();
    return recipe.toObject();
  }

  async getRecipe(recipeID) {
    const recipe = await Recipe.findById(recipeID);
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    return recipe.toObject();
  }

  async updateRecipe(recipeID, newData) {
    const recipe = await Recipe.findByIdAndUpdate(recipeID, newData, { new: true });
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    return recipe.toObject();
  }

  async deleteRecipe(recipeID) {
    const recipe = await Recipe.findByIdAndDelete(recipeID);
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    return { message: 'Recipe deleted' };
  }

  async getAllRecipes() {
    const recipes = await Recipe.find();
    return recipes.map(recipe => recipe.toObject());
  }
}

module.exports = new RecipeDAO();
