import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const FooterB_S = () => (
  <Container className="m-auto">
    <Row className="justify-content-center mt-3">
      <Col>
      <h2> Send us your Request</h2>

      </Col>
      <Col>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default FooterB_S