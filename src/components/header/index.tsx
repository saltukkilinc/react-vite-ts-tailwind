import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

  return (
    <header className='fixed top-0 flex min-h-[100px] w-full flex-col justify-center gap-3 bg-blue-600  text-white'>
      <ul className='flex flex-1 shrink-0 items-center justify-around'>
        <HeaderItem href='home' title='Home' />
        <HeaderItem href='products' title='Products' />
        <HeaderItem href='auth' title='Sign-Up/In' />
        <HeaderItem
          title={`${isDropdownOpen ? 'Close' : 'See'} Useful Packages`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
      </ul>
      {isDropdownOpen && (
        <ul className='flex flex-1 shrink-0 items-center justify-around'>
          <HeaderItem href='calendar' title='Calendar' />
          <HeaderItem href='modal-sheet' title='Modal Sheet' />
          <HeaderItem href='react-pdf' title='Pdf' />
          <HeaderItem href='leaflet-map' title='Leaflet Map' />
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
        className={({ isActive }) => (isActive ? 'text-green-400' : 'text-white')}
        end
      >
        <button className='rounded-lg bg-blue-500 px-4 py-1'>{title}</button>
      </NavLink>
    </li>
  );
};
