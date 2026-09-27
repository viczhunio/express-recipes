const pool = require('./connection.js');
const recipeData = require('../data/recipes.js');

const createRecipesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS recipes;

    CREATE TABLE IF NOT EXISTS recipes (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      ingredients TEXT[],
      instructions TEXT,
      cuisine VARCHAR(100),
      prepTime VARCHAR(100),
      difficulty VARCHAR(50),
      image VARCHAR(500)
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log('🎉 recipes table created successfully');
  } catch (err) {
    console.error('⚠️ error creating recipes table', err);
  }
};

const seedRecipesTable = async () => {
  await createRecipesTable();

  for (const recipe of recipeData) {
    const insertQuery = {
      text: `INSERT INTO recipes (title, description, ingredients, instructions, cuisine, prepTime, difficulty, image) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`
    };

    const values = [
      recipe.title,
      recipe.description,
      recipe.ingredients,  
      recipe.instructions, 
      recipe.cuisine,
      recipe.prepTime,
      recipe.difficulty,
      recipe.image
    ];

    try {
      await pool.query(insertQuery, values);
      console.log(`✅ ${recipe.title} added successfully`);
    } catch (err) {
      console.error('⚠️ error inserting recipe', err);
    }
  }

  // Close pool connection after seeding is complete
  pool.end();
};

seedRecipesTable();