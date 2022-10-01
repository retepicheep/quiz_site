import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../Images/quappLogo.svg";

const navbarStyle = {
  backgroundColor: "#000080",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="dark">
      <Container>
        <Logo alt={title} style={{ maxWidth: "12rem", maxHeight: "12rem" }} />
      </Container>
    </Navbar>
  );
};

export default Header;