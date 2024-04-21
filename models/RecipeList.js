const mongoose = require('mongoose');

const recipeListSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
});

module.exports = mongoose.model('RecipeList', recipeListSchema);
