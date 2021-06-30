import { Container, Content, SearchIcon, Wrapper } from "./SearchBar.styles";
import { useEffect, useRef, useState } from "react";

const SearchBar = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const pristine = useRef(true);
  const DEBOUNCE_TIMEOUT = 500;

  useEffect(() => {
    if (pristine.current) {
      pristine.current = false;
      return;
    }

    const searchTimer = setTimeout(() => {
      search(searchTerm);
    }, DEBOUNCE_TIMEOUT);

    return () => clearTimeout(searchTimer);
  }, [search, searchTerm]);

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
