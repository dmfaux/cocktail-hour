import {
  CocktailGlass,
  CocktailSummary,
  CocktailThumb,
  CocktailType,
  Container,
  Content,
  Wrapper,
} from "./Banner.styles";

const Banner = ({ image, name, type, glass }) => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <CocktailThumb>
            {image ? (
              <img src={`${image}/preview`} alt={name} height="200" />
            ) : null}
          </CocktailThumb>
          <CocktailSummary>
            <h1>{name}</h1>
            <CocktailGlass>Served in a {glass}</CocktailGlass>
            <CocktailType>{type}</CocktailType>
          </CocktailSummary>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Banner;
