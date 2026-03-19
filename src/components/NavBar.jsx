import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav>
        <NavLink to="/">Hem</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/about">Om mig</NavLink>
        <NavLink to="/cv">CV</NavLink>
      </nav>
    </header>
  );
}
