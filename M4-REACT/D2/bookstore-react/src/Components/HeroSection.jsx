import { Jumbotron, Container } from "react-bootstrap";
const HeroSection = (props) => (
  <Jumbotron fluid style={{ backgroundImage: "url(./book.jpg)" }}>
    <Container>
      <h1>{props.titleHero}</h1>
      <p>{props.descriptionHero}</p>
      <small className="text-muted">{props.autor}</small>
    </Container>
  </Jumbotron>
);

export default HeroSection;
