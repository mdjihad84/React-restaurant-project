
import {NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar bg-black text-white py-4 px-4 md:px-6 fixed top-0 w-full z-40 opacity-90">
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
        <div className="hidden md:block leading-8">
            <h3 className="text-[24px] md:text-[32px] font-black">BISTRO BOSS</h3>
            <h4 className="text-lg md:text-2xl font-normal tracking-widest">Restaurant</h4>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-white" : "text-gray-900"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/MenuPage" className={({ isActive }) => isActive ? "text-white" : "text-gray-900"}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/ShopPage" className={({ isActive }) => isActive ? "text-white" : "text-gray-900"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-white" : "text-gray-900"}>Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-white" : "text-gray-900"}>Our Shop</NavLink>
          </li>
        </ul>
      </div>
      <div className=""><a className="hidden lg:block text-xl font-extrabold">Sign Out</a></div>
    </div>
  );
};

export default Header;
