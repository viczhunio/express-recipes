const express = require('express'); 
const path = require('path'); 
const cors = require('cors');
require('dotenv').config();

const recipeRoutes = require('./routes/recipes');

const app = express(); 
const PORT = process.env.PORT || 5000; 

app.use(cors());
app.use(express.json()); 

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../client/public'))); 

// API routes for recipes
app.use('/api/recipes', recipeRoutes); 

// Recipe html when accessing /api/recipes/:id
app.get('/recipes/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/recipe.html'))
}); 

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../client/public/404.html')); 
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 