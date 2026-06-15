import { Link, useLocation } from "react-router-dom"

function Navbar() {

  const location = useLocation()

  return (
    <nav className="navbar">

      <div className="logo">
        Config Manager
      </div>

      <div className="nav-links">

        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "active"
              : ""
          }
        >
          Dashboard
        </Link>

        <Link
          to="/settings"
          className={
            location.pathname === "/settings"
              ? "active"
              : ""
          }
        >
          Settings
        </Link>

        <Link
          to="/search"
          className={
            location.pathname === "/search"
              ? "active"
              : ""
          }
        >
          Search
        </Link>

        <Link
          to="/user"
          className={
            location.pathname === "/user"
              ? "active"
              : ""
          }
        >
          User
        </Link>

      </div>

    </nav>
  )
}

export default Navbar