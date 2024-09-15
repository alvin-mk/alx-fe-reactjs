import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

const HomePage = () => {
 const [recipes, setRecipes] = useState([]);

 useEffect(() => {
   setRecipes(data);
 }, []);

 return (
   <div className="container mx-auto p-4">
     <h1 className="text-2xl font-bold mb-4 text-center sm:text-3xl md:text-4xl">
       Recipe Sharing Platform
     </h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
       {recipes.map((recipe) => (
         <div key={recipe.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
           <img
             src={recipe.image}
             alt={recipe.title}
             className="w-full h-32 object-cover rounded sm:h-40 md:h-48"
           />
           <h2 className="text-xl font-semibold mt-2 sm:text-2xl md:text-3xl">{recipe.title}</h2>
           <p className="text-gray-600 mt-1 sm:text-lg md:text-xl">{recipe.summary}</p>
           {/* Link to the recipe detail page */}
           <Link
             to={`/recipe/${recipe.id}`}
             className="text-blue-500 hover:text-blue-700 mt-2 block"
           >
             View Recipe
           </Link>
         </div>
       ))}
     </div>
   </div>
 );
};

export default HomePage;
