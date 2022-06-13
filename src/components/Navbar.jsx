export default function Navbar() {
  return (
    <nav
      class="navbar is-link p-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <h2>MERN app</h2>
        </a>
      </div>

      <div class="navbar-menu navbar-end">
        <a className="navbar-item">Articles</a>
      </div>
    </nav>
  );
}
