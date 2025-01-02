import React from 'react';

const GroceryList = ({ meals }) => {
  const allIngredients = meals.flatMap((meal) => meal.ingredients);
  const uniqueIngredients = [...new Set(allIngredients)];

  return (
    <div>
      <h3>Grocery List</h3>
      <ul>
        {uniqueIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
