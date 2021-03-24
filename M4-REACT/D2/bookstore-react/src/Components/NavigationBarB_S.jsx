import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BsBookHalf } from "react-icons/bs";
const NavigationBarB_S = (props) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
    <div>
      <BsBookHalf className="text-white" />
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
          value={props.search}
          onChange={(e) => props.setState(e)}
          placeholder="Search your Book"
          className="mr-sm-2"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBarB_S;
