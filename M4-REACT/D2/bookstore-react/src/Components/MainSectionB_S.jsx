import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import BookList from "./BookList";
import WarningSign from "./WarningSign";
import Books from "../Data/fantasy.json";

const MainsSectionB_S = (props) => (
  <Row className="justify-content-center px-3">
    <WarningSign text="This is our dangerous sign" />
    <BookList Books={Books} />
  </Row>
);

export default MainsSectionB_S;
