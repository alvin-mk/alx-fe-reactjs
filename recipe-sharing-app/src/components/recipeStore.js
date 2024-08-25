import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  
  // Add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe]
  })),
  
  // Update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  // Delete a recipe
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)
  })),
  
  // Set initial recipes (if needed)
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
