import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],          // Array to hold recipes
  searchTerm: '',       // State to hold the search term
  filteredRecipes: [],  // State to hold filtered recipes
  
  // Action to set search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  
  // AddRecipe action (already existing)
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.filteredRecipes, newRecipe]  // Update filtered recipes as well
  })),
}));

export default useRecipeStore;
