import { Container } from "react-bootstrap";
import BookList from "./BookList";
import WarningSign from "./WarningSign";
import Fantasy from "../Data/fantasy.json";
import History from "../Data/history.json";
import Horror from "../Data/horror.json";
import Romance from "../Data/romance.json";
import Scifi from "../Data/scifi.json";

const allBooks = [...Fantasy, ...History, ...Horror, ...Romance, ...Scifi];

const MainsSectionB_S = (props) => {
  return (
    <Container>
      <WarningSign text="This is our dangerous sign" />
      <BookList Books={allBooks} />
    </Container>
  );
};

export default MainsSectionB_S;
