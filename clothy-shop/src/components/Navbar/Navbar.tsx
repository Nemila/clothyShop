import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  let location = useLocation();
  const [scrolled, setScrolled] = useState(true);

  const handleScroll = (e: any) => {
    setScrolled(window.scrollY > 700 ? true : false);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setScrolled(false);
      window.addEventListener("scroll", handleScroll);
      return;
    }
    setScrolled(true);
    window.addEventListener("scroll", handleScroll);
  }, [location]);

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
