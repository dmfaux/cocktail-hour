import { Brand, Container, Logo } from "./Header.styles";

import React from "react";

const Header = () => (
  <Container>
    <Brand>
      <Logo /> Cocktail Hour
    </Brand>
  </Container>
);

export default Header;
