import { Link } from "react-router-dom";

export default function Navbar() {
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
      </div>

      <div className="navbar-menu navbar-end">
        <Link className="navbar-item" to={"/articles"}>
          Blog
        </Link>
      </div>
    </nav>
  );
}
