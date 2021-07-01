const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const searchForCocktails = async (searchTerm) => {
  const result = await fetch(`${API_URL}/search.php?s=${searchTerm}`);

  return await result.json();
};

export const getCocktailById = async (cocktailId) => {
  const result = await fetch(`${API_URL}/lookup.php?i=${cocktailId}`);
  return await result.json();
};
