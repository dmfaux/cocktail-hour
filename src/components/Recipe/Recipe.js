import {
  Container,
  Content,
  IngredientsContainer,
  InstructionsContainer,
  Wrapper,
} from "./Recipe.styles";

const Recipe = ({ ingredients, instructions }) => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <IngredientsContainer>
            {ingredients.map((i, idx) => {
              return (
                <div key={idx} className="ingredient">
                  {i.measure} {i.ingredient}
                </div>
              );
            })}
          </IngredientsContainer>
          <InstructionsContainer>
            <h2>Instructions</h2>
            <p>{instructions}</p>
          </InstructionsContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Recipe;
