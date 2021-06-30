import { Container, Content, Wrapper } from "./Hero.styles";

const Hero = ({ image, title, tag }) => {
  return (
    <Container image={image}>
      <Wrapper>
        <Content>
          <h1>{title}</h1>
          <p>{tag}</p>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Hero;
