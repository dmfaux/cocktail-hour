import { Container, Content, Wrapper } from "./Hero.styles";

const Hero = ({ image, isSearching }) => {
  return (
    <Container image={image} isSearching={isSearching}>
      <Wrapper>
        <Content></Content>
      </Wrapper>
    </Container>
  );
};

export default Hero;
