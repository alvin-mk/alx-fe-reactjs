import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-red-500">Recipe not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center sm:text-3xl md:text-4xl">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded mb-4 shadow-lg sm:h-80 md:h-96"
      />
      <p className="text-gray-600 mb-4 text-lg sm:text-xl shadow p-4 rounded">{recipe.summary}</p>
      
      <h2 className="text-xl font-semibold mt-6 sm:text-2xl md:text-3xl">Ingredients</h2>
      <ul className="list-disc ml-6 mt-2 text-gray-700 shadow p-4 rounded">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="mb-1">{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 sm:text-2xl md:text-3xl">Instructions</h2>
      <ol className="list-decimal ml-6 mt-2 text-gray-700 shadow p-4 rounded">
        {recipe.instructions.map((instruction, index) => (
          <li key={index} className="mb-2">{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
