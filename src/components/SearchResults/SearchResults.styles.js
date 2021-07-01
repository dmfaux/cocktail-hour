import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100vw;
`;

export const SearchResult = styled.div`
  cursor: pointer;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image});
  background-size: 100% cover;
  background-position: center;
  min-width: 200px;
  margin: 1vw 3vw;
  outline: 1px solid #ccc;
  height: 200px;
  color: white;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 0 5px 5px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 10px 10px rgba(10, 16, 20, 0.4), 0 0 2px rgba(10, 16, 20, 0.2);
    outline: none;
  }
`;
