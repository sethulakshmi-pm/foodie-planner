// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
      
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';

import GroceryList from './components/GroceryList';
import MealPlanner from './components/MealPlanner';
import RecipeDetail from './components/RecipeDetail';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import { searchRecipes } from './api/recipeApi';
import { useMealContext } from './contexts/MealContext';

const App = () => {
  const { recipes, setRecipes, mealPlan, setMealPlan, groceryList, setGroceryList } = useMealContext();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async (ingredients) => {
    const foundRecipes = await searchRecipes(ingredients);
    setRecipes(foundRecipes);
  };

  const handlePlanMeal = (day) => {
    setMealPlan((prev) => [...prev, { day, recipes }]);
  };

  const handleSelectRecipe = (id) => {
    setSelectedRecipe(id);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />
      {selectedRecipe && <RecipeDetail recipeId={selectedRecipe} />}
      <MealPlanner onPlanMeal={handlePlanMeal} />
      <GroceryList meals={mealPlan} />
    </div>
  );
};

export default App;
