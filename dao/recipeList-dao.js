const RecipeList = require('../models/RecipeList');

async function createRecipeList(recipeListData) {
  return RecipeList.create(recipeListData);
}

async function getRecipeListsByUserId(userId) {
  return RecipeList.find({ userId });
}

async function getRecipeListByIdAndUserId(listId, userId) {
  return RecipeList.findOne({ _id: listId, userId });
}

async function addRecipeToList(listId, recipeId) {
  const recipeList = await RecipeList.findById(listId);
  if (!recipeList) {
    throw new Error('Recipe list not found');
  }
  recipeList.recipes.push(recipeId);
  return recipeList.save();
}

async function updateRecipeList(listId, listData) {
  return RecipeList.findOneAndUpdate({ _id: listId }, listData, { new: true });
}

async function deleteRecipeList(listId) {
  return RecipeList.findOneAndDelete({ _id: listId });
}

async function getRecipeListsWithRecipesByUserId(userId) {
    return RecipeList.find({ userId }).populate('recipes');
  }

module.exports = {
  createRecipeList,
  getRecipeListsByUserId,
  getRecipeListByIdAndUserId,
  addRecipeToList,
  updateRecipeList,
  deleteRecipeList,
  getRecipeListsWithRecipesByUserId
};
