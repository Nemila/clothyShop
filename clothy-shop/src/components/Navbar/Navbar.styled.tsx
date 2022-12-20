import { Link } from "react-router-dom";
import styled from "styled-components";

type ContainerProps = {
  scrolled: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 60px;
  color: white;
  transition: 200ms ease all;
  background-color: ${(props) => (props.scrolled ? "black" : "transparent")};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: calc(100% - 48px);
  height: 100%;

  margin: 0 auto;
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  list-style-type: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const NavLogo = styled(NavLink)`
  font-weight: medium;
  font-size: 24px;
`;
