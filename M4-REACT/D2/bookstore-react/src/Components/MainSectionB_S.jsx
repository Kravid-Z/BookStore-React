import { Container } from "react-bootstrap";
import BookList from "./BookList";
import WarningSign from "./WarningSign";
import Books from "../Data/fantasy.json";

const MainsSectionB_S = (props) => (
  <Container>
    <WarningSign text="This is our dangerous sign" />
    <BookList Books={Books} />
  </Container>
);

export default MainsSectionB_S;
