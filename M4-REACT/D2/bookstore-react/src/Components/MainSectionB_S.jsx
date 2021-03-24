import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import CardBook_S from "./CardBook_S";
import WarningSign from "./WarningSign";
import MyBadge from "./MyBadge";
import Books from "../Data/fantasy.json";

const MainsSectionB_S = (props) => (
  <Row className="justify-content-center px-3">
    <MyBadge textBadge="New" colorBadge="info" colorBtn="secondary" />
    <WarningSign text="This is our dangerous sign" />
    {console.log(Books[0].img)}
    {console.log(Books[0].title)}
    <CardBook_S
      key={Books[0].asin}
      img={Books[0].img}
      title={Books[0].title}
      category={Books[0].category}
    />
  </Row>
);

export default MainsSectionB_S;
