
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
              <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "text-gray-900"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/MenuPage" className={({ isActive }) => isActive ? "text-yellow-400" : "text-gray-900"}>Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/ShopPage" className={({ isActive }) => isActive ? "text-yellow-400" : "text-gray-900"}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="" className={({ isActive }) => isActive ? "text-yellow-400" : "text-gray-900"}>Our Menu</NavLink>
            </li>
            <li>
              <NavLink to="" className={({ isActive }) => isActive ? "text-yellow-400" : "text-gray-900"}>Our Shop</NavLink>
            </li>
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
            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-yellow-400" : "text-gray-900"} text-white font-normal text-xl`}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/MenuPage" className={({ isActive }) => `${isActive ? "text-yellow-400" : "text-gray-900"} text-white font-normal text-xl`}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/ShopPage" className={({ isActive }) => `${isActive ? "text-yellow-400" : "text-gray-900"} text-white font-normal text-xl`}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="" className={({ isActive }) => `${isActive ? "text-yellow-400" : "text-gray-900"} text-white font-normal text-xl`}>Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="" className={({ isActive }) => `${isActive ? "text-yellow-400" : "text-gray-900"} text-white font-normal text-xl`}>Our Shop</NavLink>
          </li>
        </ul>
      </div>
      <img src="/Images/Header.png" alt="Icon" className="hidden lg:block w-6 h-6 md:w-8 md:h-8" />
      <div className="">
        <a className="hidden lg:block text-xl font-extrabold ml-[20px] w-[115px]">Sign Out</a>
        <i className="fa-solid fa-user text-lg md:text-xl hidden lg:block"></i>
      </div>
    </div>
  );
};

export default Header;
