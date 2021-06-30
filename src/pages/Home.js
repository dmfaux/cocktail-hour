import { Hero, Loader, SearchBar, SearchResults } from "../components";
import { useEffect, useState } from "react";

import cocktailHero from "../assets/cocktail-hero.jpeg";
import { searchForCocktails } from "../services/api";

const Home = () => {
  const [hero, setHero] = useState(cocktailHero);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const search = async (searchTerm) => {
      const cocktailResults = await searchForCocktails(searchTerm);
      setCocktails(cocktailResults.drinks);
      setLoaded(true);
    };

    if (searchTerm) {
      setLoaded(false);
      search(searchTerm);
    }
  }, [searchTerm]);

  return (
    <>
      <Hero image={hero} title={null} tag={null} />
      <SearchBar search={setSearchTerm} />
      {searchTerm && !loaded ? (
        <Loader />
      ) : (
        <SearchResults cocktails={cocktails} />
      )}
    </>
  );
};

export default Home;
