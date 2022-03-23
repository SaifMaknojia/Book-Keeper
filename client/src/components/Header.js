import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand>BookList Form</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
