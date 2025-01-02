import React, { createContext, useContext, useState } from 'react';

const MealContext = createContext(); // Creating a context

export const MealProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [mealPlan, setMealPlan] = useState([]);
  const [groceryList, setGroceryList] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  return (
    <MealContext.Provider
      value={{
        recipes,
        setRecipes,
        mealPlan,
        setMealPlan,
        groceryList,
        setGroceryList,
        favoriteRecipes,
        setFavoriteRecipes,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

// Custom hook to use the context values
export const useMealContext = () => {
  return useContext(MealContext);
};
