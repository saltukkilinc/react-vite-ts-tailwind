import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

  return (
    <header className="min-h-[100px] w-full bg-blue-600 text-white flex flex-col justify-center fixed top-0  gap-3">
      <ul className="flex justify-around items-center flex-1 shrink-0">
        <HeaderItem href="home" title="Home" />
        <HeaderItem href="products" title="Products" />
        <HeaderItem href="auth" title="Sign-Up/In" />
        <HeaderItem
          title={`${isDropdownOpen ? 'Close' : 'See'} Useful Packages`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
      </ul>
      {isDropdownOpen && (
        <ul className="flex justify-around items-center flex-1 shrink-0">
          <HeaderItem href="calendar" title="Calendar" />
          <HeaderItem href="modal-sheet" title="Modal Sheet" />
          <HeaderItem href="react-pdf" title="Pdf" />
          <HeaderItem href="leaflet-map" title="Leaflet Map" />
        </ul>
      )}
    </header>
  );
};

export default Header;

type HeaderItemProps = {
  href?: string | undefined;
  title: string;
  onClick?: () => void;
};

const HeaderItem = ({ href, title, onClick }: HeaderItemProps) => {
  return (
    <li>
      <NavLink
        onClick={onClick}
        to={href as string}
        className={({ isActive }) =>
          isActive ? "text-green-400" : "text-white"
        }
        end
      >
        <button className="py-1 px-4 bg-blue-500 rounded-lg">{title}</button>
      </NavLink>
    </li>
  );
};
