import { NavLink } from "./Navbar.styled";

type Props = {
  navLink: {
    name: string;
    url: string;
  };
};

const NavItem = ({ navLink }: Props) => {
  return (
    <li>
      <NavLink to={navLink.url}>{navLink.name}</NavLink>
    </li>
  );
};

export default NavItem;
