import React, { useState, useEffect } from "react";
import "./App.css"; //import css file

function App() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [error, setError] = useState("");

  // Fetch recipes from the API when the component mounts
  useEffect(() => {
    fetch("http://localhost:8000/api/recipes/")
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(
              `HTTP error! status: ${response.status}. Message: ${text}`
            );
          });
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setError("Failed to fetch recipes. Please try again later.");
      });
  }, []);

  // Handle adding a new recipe
  const handleAddRecipe = () => {
    if (!title.trim() || !ingredients.trim()) {
      setError("Both title and ingredients are required.");
      return;
    }

    fetch("http://localhost:8000/api/recipes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, ingredients }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(
              `HTTP error! status: ${response.status}. Message: ${text}`
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        setRecipes((prevRecipes) => [...prevRecipes, data]);
        setTitle("");
        setIngredients("");
        setError("");
      })
      .catch((error) => {
        console.error("Error adding recipe:", error);
        setError("Failed to add recipe. Please try again later.");
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe List</h1>
        {error && <p className="error">{error}</p>}
        <ul className="recipe-list">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <li key={recipe.id} className="recipe-item">
                <strong>{recipe.title}</strong>: {recipe.ingredients}
              </li>
            ))
          ) : (
            <li className="recipe-item">No recipes found.</li>
          )}
        </ul>
        <div className="recipe-input">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe title"
          />
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredients"
          />
          <button onClick={handleAddRecipe}>Add Recipe</button>
        </div>
      </header>
    </div>
  );
}

export default App;
