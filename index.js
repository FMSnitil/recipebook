const express = require('express');
const mongoose = require('mongoose');
const recipeListsRouter = require('./routes/recipeLists');
const recipesRouter = require('./routes/recipe');
const authRouter = require('./routes/auth');

const app = express();


app.use(express.json());
app.use('/auth', authRouter);



mongoose.connect('mongodb+srv://admin:admin@recipebook.dpbt1ja.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

app.use('/recipe-lists', recipeListsRouter);
app.use('/recipes', recipesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
