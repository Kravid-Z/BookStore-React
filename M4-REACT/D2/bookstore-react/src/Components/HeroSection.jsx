import { Jumbotron, Container } from "react-bootstrap";
const HeroSection = (props) => (
  <Jumbotron
    fluid
    className="text-white"
    style={{
      backgroundImage: "url(./book.jpg)",
      bacgkroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <Container>
      <h1>{props.titleHero}</h1>
      <p>{props.descriptionHero}</p>
      <small className="text-muted">{props.autor}</small>
    </Container>
  </Jumbotron>
);

export default HeroSection;
