import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url(${({ image }) => (image ? image : null)}) no-repeat top center fixed;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 500px;
  max-width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  max-width: var(--maxWidth);
  padding: 1rem;
`;

export const Content = styled.div`
  z-index: 100;
  max-width: 700px;
  min-height: 100px;
  color: var(--darkBgText);
  h1 {
    font-size: var(--massiveFont);
    margin: 0;
  }
`;
