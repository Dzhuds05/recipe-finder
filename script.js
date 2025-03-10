// Recipe data (you can add more)
const recipes = [
    {
        name: "Pancakes",
        ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Baking Powder"],
        instructions: "Mix all ingredients and cook on a pan until golden brown."
    },
    {
        name: "Spaghetti",
        ingredients: ["Spaghetti", "Tomato Sauce", "Garlic", "Olive Oil"],
        instructions: "Boil spaghetti, heat the sauce, mix together and serve."
    },
    {
        name: "Omelette",
        ingredients: ["Eggs", "Cheese", "Salt", "Butter"],
        instructions: "Whisk eggs, cook in butter, add cheese, and fold."
    }
];

// Function to display all recipes
function displayRecipes(recipesToShow) {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = ""; // Clear existing content

    recipesToShow.forEach(recipe => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");

        recipeDiv.innerHTML = `
            <h2>${recipe.name}</h2>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;

        recipeList.appendChild(recipeDiv);
    });
}

// Function to search recipes
function searchRecipes() {
    const searchQuery = document.getElementById("searchBox").value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery)
    );
    displayRecipes(filteredRecipes);
}

// Show all recipes when the page loads
document.addEventListener("DOMContentLoaded", () => displayRecipes(recipes));