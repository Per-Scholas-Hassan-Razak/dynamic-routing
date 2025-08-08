import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
      <ul className="nav-list-parent">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        {}
      </ul>
    </div>
  );
};

export default NavBar;
