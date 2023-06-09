import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='h-[100px] bg-blue-700 text-white flex flex-col justify-center fixed bottom-0 left-0 right-0'>
      <nav className='px-[20px] py-[10px]'>
        <ul className='flex gap-x-4'>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Community</a></li>
          <li className='ml-auto'><Link to={'/home'}>Home</Link></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
