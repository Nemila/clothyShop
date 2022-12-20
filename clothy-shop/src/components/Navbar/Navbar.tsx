import { useState } from "react";
import NavItem from "./NavItem";
import { Container, Nav, NavLogo, NavMenu } from "./Navbar.styled";

const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Login",
    url: "/login",
  },
  {
    name: "Signup",
    url: "/signup",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(true);

  const handleScroll = (e: any) => {
    setScrolled(window.scrollY > 700 ? true : false);
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <Container scrolled={scrolled}>
      <Nav>
        <NavLogo to="/">ColthyShop</NavLogo>
        <NavMenu>
          {navLinks.map((navLink) => (
            <NavItem key={navLink.name} navLink={navLink} />
          ))}
        </NavMenu>
      </Nav>
    </Container>
  );
};

export default Navbar;
