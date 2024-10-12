
import {NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <NavLink to={"/about"} style={({ isActive }) => ({ color: isActive ? "red" : "inherit" })}>About</NavLink>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <NavLink to={"/"} style={({ isActive }) => ({ color: isActive ? "red" : "inherit" })} className="btn btn-ghost text-xl">daisyUI</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-900" : "text-gray-900"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-900" : "text-gray-900"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-900" : "text-gray-900"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-900" : "text-gray-900"}>About</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end"><a className="btn">Button</a></div>
    </div>
  );
};

export default Header;
