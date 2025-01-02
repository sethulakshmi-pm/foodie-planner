import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState('');

  const handleSearch = () => {
    if (ingredients.trim()) {
      onSearch(ingredients);
    }
  };

  return (
    <Container>
      <TextField
        label="Enter ingredients"
        variant="outlined"
        fullWidth
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Container>
  );
};

export default SearchBar;
