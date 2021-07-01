import { Container, Content, SearchIcon, Wrapper } from "./SearchBar.styles";
import { useEffect, useRef, useState } from "react";
const SESSION_KEY = "searchTerm";

const SearchBar = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);
  const pristine = useRef(true);
  const DEBOUNCE_TIMEOUT = 500;

  useEffect(() => {
    if (pristine.current) {
      pristine.current = false;
      return;
    }

    const searchTimer = setTimeout(() => {
      search(searchTerm);
      sessionStorage.setItem(SESSION_KEY, searchTerm);
    }, DEBOUNCE_TIMEOUT);

    return () => clearTimeout(searchTimer);
  }, [search, searchTerm]);

  useEffect(() => {
    if (!searchTerm && initialLoad) {
      const storedValue = sessionStorage.getItem(SESSION_KEY);
      const sessionState = storedValue ? storedValue : "";

      if (sessionState) {
        setSearchTerm(sessionState);
        return;
      }
    }

    setInitialLoad(false);
  }, [searchTerm, initialLoad]);

  return (
    <Container>
      <Wrapper>
        <SearchIcon />
        <Content
          placeholder="Search for a Cocktail e.g. Martini"
          onChange={(event) => setSearchTerm(event.currentTarget.value)}
          value={searchTerm}
          type="text"
        />
      </Wrapper>
    </Container>
  );
};

export default SearchBar;
