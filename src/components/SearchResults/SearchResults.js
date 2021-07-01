import { Container, SearchResult } from "./SearchResults.styles";

import { useHistory } from "react-router-dom";

const SearchResults = ({ cocktails }) => {
  const history = useHistory();
  const handleClick = (cocktailId) => {
    history.push(`/cocktail/${cocktailId}`);
  };

  return (
    <Container>
      {cocktails.map((cocktail) => {
        return (
          <SearchResult
            key={cocktail.idDrink}
            onClick={() => handleClick(cocktail.idDrink)}
            image={`${cocktail.strDrinkThumb}/preview`}
          >
            {cocktail.strDrink}
          </SearchResult>
        );
      })}
    </Container>
  );
};

export default SearchResults;
