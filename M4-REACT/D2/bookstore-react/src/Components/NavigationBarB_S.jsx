import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavigationBarB_S = (props) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
    <div>
      <span className="text-white-50">
        <i class="fas fa-book-open"></i>
      </span>
    </div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search your Book"
          className="mr-sm-2"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBarB_S;
