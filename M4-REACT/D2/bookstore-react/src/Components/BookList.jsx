import { Col, Container, Row } from "react-bootstrap";
import CardBook_S from "./CardBook_S.jsx";
import React from "react";

class BookList extends React.Component {
  state = {};

  render() {
    return (
      <Row className="justify-content-center">
        {this.props.Books.map((book) => (
          <Col xs={10} md={3} key={book.asin}>
            <CardBook_S
              img={book.img}
              title={book.title}
              category={book.category}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

export default BookList;
