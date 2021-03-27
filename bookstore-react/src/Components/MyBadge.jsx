import React from "react";
import { Button, Badge } from "react-bootstrap";
import CommentArea from "./ComentArea";

const MyBadge = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button
        id={props.asin}
        variant={props.colorBtn}
        onClick={() => setModalShow(true)}
      >
        Previews <Badge variant={props.colorBadge}>{props.textBadge}</Badge>
        <span className="sr-only">unread messages</span>
      </Button>
      <CommentArea show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default MyBadge;

/**
Create a SingleBook component as a function. The component receives a book object as a prop, 
and displays the cover and the title of the book. Use react-bootstrap Cards to display a book 
(The book object can be read from one of the .json book files we gave you yesterday).
 */
