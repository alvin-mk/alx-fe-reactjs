import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    // Navigate back to the recipe list or home page after deletion
    navigate('/');
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
