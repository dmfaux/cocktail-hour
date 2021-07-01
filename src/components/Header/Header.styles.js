import { FaCocktail } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  background: var(--darkBg);
  color: var(--darkBgText);
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: var(--maxWidth);
  max-width: var(--maxWidth);
`;

export const Logo = styled(FaCocktail)`
  font-size: var(--largeFont);
  margin-right: 1rem;
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--largeFont);
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  cursor: pointer;
`;
