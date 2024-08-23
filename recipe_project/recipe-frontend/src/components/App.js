import React from "react";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";

const App = () => {
  return (
    <div className="App">
      <RecipeList />
      <AddRecipe />
    </div>
  );
};

export default App;
