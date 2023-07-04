import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[100px] bg-blue-600 text-white flex flex-col justify-center fixed top-0 left-0 right-0">
      <ul className="flex justify-around items-center">
        <li>
          <NavLink to={"home"} className={({isActive}) => isActive ? "text-green-400" : "text-white"} end>
            <button className="py-1 px-4 bg-blue-500 rounded-lg">Home</button>
          </NavLink>
        </li>
        <li>
          <NavLink to={"products"} className={({isActive}) => isActive ? "text-green-400" : "text-white"} end>
            <button className="py-1 px-4  bg-blue-500 rounded-lg">Products</button>
          </NavLink>
        </li>
        <li>
          <NavLink to={"auth"} className={({isActive}) => isActive ? "text-green-400" : "text-white"} end>
            <button className="py-1 px-4  bg-blue-500 rounded-lg">Sign-Up/In</button>
          </NavLink>
        </li>
        <li>
          <NavLink to={"calendar"} className={({isActive}) => isActive ? "text-green-400" : "text-white"} end>
            <button className="py-1 px-4  bg-blue-500 rounded-lg">Go to Calendar Page</button>
          </NavLink>
        </li>
        <li>
          <NavLink to={"modal-sheet"} className={({isActive}) => isActive ? "text-green-400" : "text-white"} end>
            <button className="py-1 px-4  bg-blue-500 rounded-lg">Go to Modal Sheet Page</button>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
