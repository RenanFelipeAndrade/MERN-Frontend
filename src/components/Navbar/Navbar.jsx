import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Navbar = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const { userData } = useAuth();

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
          {userData.googleId ? (
            <>
              <Link className="navbar-item" to={"/articles"}>
                Blog
              </Link>

              <Link className="navbar-item" to={"/logout"}>
                Logout
              </Link>
            </>
          ) : (
            <Link className="navbar-item" to={"/login"}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
