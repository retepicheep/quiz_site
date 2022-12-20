import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../Images/quappLogo.svg";

const navbarStyle = {
  backgroundColor: "#000080",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: "12rem", maxHeight: "10rem" }} />
      </Container>
    </Navbar>
  );
};

export default Header;