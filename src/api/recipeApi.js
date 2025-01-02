import axios from 'axios';

// const API_KEY = 'ZZZae370b9a84d849bdb62404b3ea6956bb';
const API_KEY = '';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async (ingredients) => {
  try {
    const response = await axios.get(`${BASE_URL}/findByIngredients`, {
      params: {
        ingredients,
        number: 20, // Number of recipes to fetch
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

export const getRecipeDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}/information`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return null;
  }
};
