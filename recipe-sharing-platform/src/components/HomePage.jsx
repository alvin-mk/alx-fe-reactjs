import { useState, useEffect } from 'react';
import data from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-32 sm:h-48 object-cover rounded"
            />
            <h2 className="text-xl sm:text-2xl font-semibold mt-2">{recipe.title}</h2>
            <p className="text-gray-600 mt-1 sm:mt-2">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
