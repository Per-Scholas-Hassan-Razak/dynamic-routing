import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/contexts";

const NavBar = () => {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <div className="nav-container">
      <ul className="nav-list-parent">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>{" "}
        {isAuthenticated ? (
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        ) : null}
        <li>
          <button onClick={isAuthenticated ? logout : login}>
            {isAuthenticated ? "logout" : "login"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
