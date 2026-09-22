const recipes = [
    {
        id: "guacamole", 
        title: "Classic Fresh Guacamole",
        description: "This classic guacamole recipe is made with ripe avocados, fresh lime juice, and a touch of salt. It's perfect for dipping tortilla chips or spreading on toast.",
        ingredients: [
            "3 ripe avocados",
            "1 lime, juiced",
            "1/2 teaspoon salt",
            "1/2 cup diced onion",
            "2 tablespoons chopped fresh cilantro",
        ], 
        cuisine: "Mexican",
        prepTime: "10 minutes", 
        difficulty: "Easy",
        instructions: "In a medium bowl, mash the avocados with a fork. Add lime juice and salt, and mix well. Stir in diced onion and chopped cilantro. Serve immediately or cover with plastic wrap and refrigerate until ready to serve.",
        image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2020/01/Guacamole-2.jpg"
    }, 
    {
        id: "vodka-pasta", 
        title: "Creamy Vodka Pasta",
        description: "This creamy vodka pasta recipe is a delicious and indulgent dish made with penne pasta, a rich tomato cream sauce, and a splash of vodka for added depth of flavor.",
        ingredients: [
            "1 pound penne pasta",
            "2 tablespoons olive oil",
            "1/2 cup diced onion",
            "2 cloves garlic, minced",
            "1/2 teaspoon red pepper flakes",
            "1/2 cup vodka",
            "1 can (28 ounces) crushed tomatoes",
            "1 cup heavy cream",
            "1/2 cup grated Parmesan cheese",
            "Salt and pepper to taste",
        ], 
        cuisine: "Italian", 
        prepTime: "30 minutes",
        difficulty: "Medium",
        instructions: "Cook the penne pasta according to package instructions. In a large skillet, heat olive oil over medium heat. Add diced onion and cook until softened. Stir in minced garlic and red pepper flakes, and cook for 1 minute. Pour in vodka and let it simmer for 2-3 minutes. Add crushed tomatoes and bring to a simmer. Stir in heavy cream and grated Parmesan cheese, and season with salt and pepper. Toss the cooked pasta in the sauce until well coated. Serve hot.",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Pasta-alla-vodka-f1d2e1c.jpg"
    }, 
    {
        id: "orange-chicken", 
        title: "Crispy Orange Chicken",
        description: "This crispy orange chicken recipe is a flavorful and tangy dish made with bite-sized pieces of chicken coated in a sweet and savory orange sauce.",
        ingredients: [
            "1 pound boneless, skinless chicken breasts, cut into bite-sized pieces",
            "1/3 cup cornstarch",
            "1/3 cup all-purpose flour",
            "1/2 teaspoon salt",
            "2 tablespoons Soy Sauce",
            "1/2 teaspoon Red Chili Flakes", 
            "1/4 teaspoon garlic powder", 
            "3 eggs, whisked", 
            "1/4 cup vegetable oil",
            "1/4 cup sugar",
            "Orange zest from 1 orange"
        ], 
        cuisine: "Chinese",
        prepTime: "35 minutes",
        difficulty: "Medium",
        instructions: "In a medium bowl, combine cornstarch, flour, salt, soy sauce, red chili flakes, and garlic powder. Dip chicken pieces into the whisked eggs, then coat them in the flour mixture. Heat vegetable oil in a large skillet over medium-high heat. Fry the coated chicken pieces until golden brown and cooked through. In a separate saucepan, combine sugar and orange zest to make the orange sauce. Pour the sauce over the fried chicken and toss to coat. Serve hot with steamed rice or vegetables.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DeLcZEwnUY14OpX5tar5ga0SuXQBhPZPbn49F5yYBw&s=10"
    }, 
    {
        id: "banana-smoothie", 
        title: "Healthy Banana Smoothie",
        description: "This healthy banana smoothie recipe is a quick and easy way to enjoy a nutritious breakfast or snack. It's made with ripe bananas, Greek yogurt, and a touch of honey for natural sweetness.",
        ingredients: [
            "2 ripe bananas",
            "1 cup Greek yogurt",
            "1/2 cup milk (dairy or non-dairy)",
            "1 tablespoon honey",
            "1/2 teaspoon vanilla extract",
            "Ice cubes (optional)"
        ],
        cuisine: "American",
        prepTime: "5 minutes",
        difficulty: "Easy",
        instructions: "In a blender, combine ripe bananas, Greek yogurt, milk, honey, and vanilla extract. Blend until smooth and creamy. If desired, add ice cubes and blend again for a colder smoothie. Pour into glasses and serve immediately.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6BjB9gwh0WcIXe-zMC-wzV3mNAx8IWUZlpoLUJRu6A&s=10"
    }, 
    {
        id: "greek-salad",
        title: "Greek Chicken Salad",
        description: "This Greek chicken salad recipe is a refreshing and healthy dish made with grilled chicken, fresh vegetables, feta cheese, and a tangy Greek dressing.",
        ingredients: [
            "2 boneless, skinless chicken breasts",
            "1 tablespoon olive oil",
            "1 teaspoon dried oregano",
            "Salt and pepper to taste",
            "4 cups mixed salad greens",
            "1 cup cherry tomatoes, halved",
            "1/2 cup cucumber, sliced",
            "1/4 cup red onion, thinly sliced",
            "1/4 cup Kalamata olives, pitted",
            "1/4 cup feta cheese, crumbled",
            "2 tablespoons Greek dressing"
        ],
        cuisine: "Greek",
        prepTime: "20 minutes",
        difficulty: "Easy",
        instructions: "Preheat the grill to medium-high heat. Season the chicken breasts with olive oil, dried oregano, salt, and pepper. Grill the chicken for 6-8 minutes per side or until fully cooked. Remove from the grill and let it rest for a few minutes before slicing. In a large bowl, combine mixed salad greens, cherry tomatoes, cucumber, red onion, Kalamata olives, and feta cheese. Add the sliced grilled chicken on top and drizzle with Greek dressing. Toss gently to combine and serve immediately.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQc-o-SegefZ2uwN_MtOuJzcJ82pQLOQ0P70oiiwWRRbfLL80yBqqDVPZ_&s=10"
    }
]; 

module.exports = recipes; 