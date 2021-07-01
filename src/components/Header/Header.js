import { Brand, Container, Logo, Wrapper } from "./Header.styles";

import React from "react";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <Container>
      <Wrapper>
        <Brand onClick={handleClick}>
          <Logo /> Cocktail Hour
        </Brand>
      </Wrapper>
    </Container>
  );
};

export default Header;
