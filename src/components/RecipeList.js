import { motion } from 'framer-motion';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0 }}  // Start with 0 opacity
            animate={{ opacity: 1 }}  // Fade in to full opacity
            transition={{ duration: 0.5 }}
            onClick={() => onSelectRecipe(recipe.id)}
            style={{ marginBottom: '20px', cursor: 'pointer' }}
          >
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.summary}</p>
          </motion.div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
