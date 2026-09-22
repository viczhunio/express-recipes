const express = require('express'); 
const path = require('path'); 
const recipes = require('./data/recipes');

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/api/recipes', (req, res) => 
{
    res.json(recipes); 
}); 

app.get('/api/recipes/:id', (req, res) => {
    const recipe = recipes.find(r => r.id === req.params.id);
    if (recipe) {
        res.json(recipe); 
    } else {
        res.status(404).json({ error: 'Recipe not found' });
    }
}); 

// Detailed recipe page route
app.get('/recipes/:id', (req, res) => {
    const recipe = recipes.find(r => r.id === req.params.id);
    if (recipe) {
        res.sendFile(path.join(__dirname, 'public', 'recipe.html'));
    } else {
        res.status(404).send('Recipe not found'); // ?? 
    }
}); 

// Fallback / Catchall 
app.use(function(req, res) {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
}); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 