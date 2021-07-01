import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  min-width: 100vw;
  background-color: var(--highlightBg);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: var(--maxWidth);
  height: 300px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: var(--maxWidth);
`;

export const CocktailThumb = styled.div`
  margin-right: 3rem;
  img {
    box-shadow: 0 5px 5px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
    animation: fadeIn 1s;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const CocktailSummary = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  color: var(--accentBgText);

  h1 {
    font-size: var(--massiveFont);
    margin: 0;
    min-width: 100%;
  }
`;

export const CocktailType = styled.div`
  height: fit-content;
  background-color: blue;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
`;

export const CocktailGlass = styled.div`
  height: fit-content;
  background-color: orange;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  margin-right: 1rem;
`;
