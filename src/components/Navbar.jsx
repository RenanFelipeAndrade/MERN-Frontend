import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  return (
    <nav
      className="navbar is-link p-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to={"/"} className="navbar-item" href="#">
          <h2>MERN app</h2>
        </Link>
        <a
          role="button"
          className={`navbar-burger ${burgerIsActive && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarItems"
          onClick={() => {
            setBurgerIsActive(!burgerIsActive);
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarItems"
        className={`navbar-menu ${burgerIsActive && "is-active"}`}
      >
        <div className="navbar-end">
          <Link className="navbar-item" to={"/articles"}>
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};
