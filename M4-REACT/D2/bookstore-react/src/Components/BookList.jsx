import { Col, Container, Row } from "react-bootstrap";
import CardBook_S from "./CardBook_S.jsx";
import React from "react";

class BookList extends React.Component {
  state = {};

  render() {
    return (
      <Row>
        <Col xs={{ span: 6, offset: 3 }}>
          {this.props.Books.map((book) => (
            <CardBook_S
              key={book.asin}
              img={book.img}
              title={book.title}
              category={book.category}
            />
          ))}
        </Col>
      </Row>
    );
  }
}

// const BookList = (props) => (
//   <Row>
//     <Col xs={{ span: 6, offset: 3 }}>
//       {props.Books.map((book) => (
//         <CardBook_S
//           key={book.asin}
//           img={book.img}
//           title={book.title}
//           category={book.category}
//         />
//       ))}
//     </Col>
//   </Row>
// );

export default BookList;
