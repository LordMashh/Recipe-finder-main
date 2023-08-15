import React from 'react';

const RecipeDetailsCard = ({ recipes }) => {
  console.log(recipes); // Check the structure of the recipes array

  if (!recipes || recipes.length === 0) {
    return <p className="text-center text-gray-500 py-8">No recipes available.</p>;
  }

  return (
    <div className="recipe-details-container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 bg-white rounded-lg shadow-md">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-details-card bg-gray-300 p-4 text-left p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{recipe.title.toString()}</h2>
          <p className="text-gray-600 mb-2">Servings: {recipe.servings.toString()}</p>
          <h3 className="text-lg font-semibold mb-1">Ingredients:</h3>
          <ul className="list-disc pl-6">
            {recipe.ingredients &&
              recipe.ingredients.split('|').map((ingredient, ingredientIndex) => (
                <li key={ingredientIndex} className="text-gray-600">
                  {ingredient.toString()}
                </li>
              ))}
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-1">Instructions:</h3>
          <p className="text-gray-700">{recipe.instructions.toString()}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeDetailsCard;
