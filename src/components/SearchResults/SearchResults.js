import { Container, SearchResult } from "./SearchResults.styles";

const SearchResults = ({ cocktails }) => {
  return (
    <Container>
      {cocktails.map((cocktail) => {
        return (
          <SearchResult
            key={cocktail.idDrink}
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
