import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  min-width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: var(--maxWidth);
`;

export const Content = styled.div`
  display: flex;
  width: var(--maxWidth);
  padding-top: 1rem;
`;

export const IngredientsContainer = styled.div`
  width: 33%;

  .ingredient {
    padding: 0.5rem 0rem;
    border-bottom: 1px dotted #eee;
    width: 90%;
  }
`;
export const InstructionsContainer = styled.div``;
