import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],            // Array to hold recipes
  favorites: [],          // Array to hold favorite recipe IDs
  recommendations: [],   // Array to hold recommended recipes
  searchTerm: '',         // State to hold the search term
  filteredRecipes: [],    // State to hold filtered recipes
  
  // Action to set search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  
  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.filteredRecipes, newRecipe]  // Update filtered recipes as well
  })),
  
  // Action to delete a recipe
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== id) // Ensure filtered recipes are also updated
  })),
  
  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.filteredRecipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ) // Ensure filtered recipes are also updated
  })),
  
  // Action to set the recipes (e.g., for initializing or bulk updates)
  setRecipes: (recipes) => set({
    recipes,
    filteredRecipes: recipes // Update filtered recipes with the new list
  }),
  
  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  
  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Action to generate personalized recipe recommendations
  generateRecommendations: () => set(state => {
    // Example recommendation logic: suggest recipes that are not favorites
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id)
    ).slice(0, 5); // Limit recommendations to 5 items
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
