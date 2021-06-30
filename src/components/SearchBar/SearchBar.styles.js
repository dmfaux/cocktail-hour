import { FaCocktail } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--darkBg);
`;

export const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.input`
  background-color: var(--darkBg);
  color: var(--darkBgText);
  outline: 0;
  border-width: 0 0 2px;
  border-color: var(--darkBgText);
  width: 30rem;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(FaCocktail)`
  color: var(--darkBgText);
  font-size: var(--mediumFont);
  margin-right: 1rem;
`;
