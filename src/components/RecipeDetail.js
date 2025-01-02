import React, { useEffect, useState } from 'react';

import { getRecipeDetail } from '../api/recipeApi';
import { useMealContext } from '../contexts/MealContext';

const RecipeDetail = ({ recipeId }) => {
  const { setFavoriteRecipes } = useMealContext();
  const [recipeDetail, setRecipeDetail] = useState(null);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      const data = await getRecipeDetail(recipeId);
      setRecipeDetail(data);
    };

    fetchRecipeDetail();
  }, [recipeId]);

  const handleSaveRecipe = () => {
    setFavoriteRecipes((prev) => [...prev, recipeDetail]);
  };

  if (!recipeDetail) return <p>Loading...</p>;

  return (
    <div>
      <h2>{recipeDetail.title}</h2>
      <img src={recipeDetail.image} alt={recipeDetail.title} />
      <p>{recipeDetail.summary}</p>
      <button onClick={handleSaveRecipe}>Save Recipe</button>
    </div>
  );
};

export default RecipeDetail;

