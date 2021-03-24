import React from "react";
import { Alert } from "react-bootstrap";

const WarningSign = (props) => (
  <Alert variant="danger">
    <p>{props.text}</p>
  </Alert>
);

export default WarningSign;
