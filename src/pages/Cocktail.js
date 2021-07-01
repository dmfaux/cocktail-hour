import { Banner, Recipe } from "../components";
import { useEffect, useState } from "react";

import { getCocktailById } from "../services/api";
import { useParams } from "react-router-dom";

const Cocktail = () => {
  const [cocktail, setCocktail] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const { cocktailId } = useParams();

  useEffect(() => {
    async function getCocktail() {
      const cocktailResult = await getCocktailById(cocktailId);
      const cocktail = cocktailResult.drinks.length
        ? cocktailResult.drinks[0]
        : {};

      if (cocktail) {
        setCocktail(cocktail);
        const ingredientArr = [];
        let i = 1;
        while (i < 16) {
          if (cocktail[`strIngredient${i}`]) {
            ingredientArr.push({
              ingredient: cocktail[`strIngredient${i}`],
              measure: cocktail[`strMeasure${i}`],
            });
          }

          i++;
        }
        setIngredients(ingredientArr);
      }
    }

    getCocktail();
  }, [cocktailId]);

  return (
    <>
      <Banner
        image={cocktail.strDrinkThumb}
        name={cocktail.strDrink}
        type={cocktail.strAlcoholic}
        glass={cocktail.strGlass}
      />
      <Recipe
        ingredients={ingredients}
        instructions={cocktail.strInstructions}
      />
    </>
  );
};

export default Cocktail;
