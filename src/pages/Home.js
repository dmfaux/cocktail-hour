import { Hero, Loader, SearchBar, SearchResults } from "../components";
import { useEffect, useState } from "react";

import cocktailHero from "../assets/cocktail-hero.jpeg";
import { searchForCocktails } from "../services/api";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const search = async (searchTerm) => {
      const cocktailResults = await searchForCocktails(searchTerm);
      const cocktails = cocktailResults.drinks;
      if (cocktails) {
        setCocktails(cocktails);
      }
      setLoaded(true);
    };

    if (searchTerm) {
      setLoaded(false);
      search(searchTerm);
    } else if (cocktails.length) {
      setCocktails([]);
    }
  }, [searchTerm]);

  return (
    <>
      <Hero image={cocktailHero} isSearching={!!searchTerm} />
      <SearchBar search={setSearchTerm} />
      {searchTerm && !loaded ? (
        <Loader />
      ) : !cocktails.length && searchTerm ? (
        <div>No results</div>
      ) : (
        <SearchResults cocktails={cocktails} />
      )}
    </>
  );
};

export default Home;
