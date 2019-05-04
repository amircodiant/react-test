import React, { Component } from 'react';
import {
  Form,
  Button,
  Navbar,
  Nav,
  FormControl,
  ButtonToolbar,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';

class MenuBar extends Component {
  render() {
    return (
      <Navbar bg="info" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>                 */}
        <ButtonToolbar>
          <DropdownButton title="Action" variant="light" id="dropdown-variants-light" key="light">
            <Dropdown.Item eventKey="1">Logout</Dropdown.Item>
            <Dropdown.Item eventKey="2">Profile</Dropdown.Item>
          </DropdownButton>
        </ButtonToolbar>
      </Navbar>
    );
  }
}

export default MenuBar;
