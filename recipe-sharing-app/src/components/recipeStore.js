import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  // Access recipes and filteredRecipes from the store
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    // Apply filtering when the component mounts or when the search term changes
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes available.</p>
      )}
    </div>
  );
};

export default RecipeList;
