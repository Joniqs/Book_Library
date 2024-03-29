import React, { useEffect } from 'react';
import { navToggle } from '../utils/utils';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  useEffect(() => {
    const btn = document.getElementById('menu-btn');
    if (btn) {
      btn.addEventListener('click', navToggle);
    }
    return () => {
      if (btn) {
        btn.removeEventListener('click', navToggle);
      }
    };
  }, []);

  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-20'>
          <div className='hidden space-x-8 font-bold lg:flex'>
            <Link
              to='/'
              className='text-grayishViolet hover:text-veryDarkViolet'
            >
              Home
            </Link>
          </div>
          <div className='hidden space-x-8 font-bold lg:flex'>
            <Link
              to='/addbook'
              className='text-grayishViolet hover:text-veryDarkViolet'
            >
              Add Book
            </Link>
          </div>
          <div className='hidden space-x-8 font-bold lg:flex'>
            <Link
              to='/about'
              className='text-grayishViolet hover:text-veryDarkViolet'
            >
              About
            </Link>
          </div>
        </div>
        <div className='hidden lg:flex items-center space-x-6 font-bold text-grayishBlue'>
          <div className='hidden space-x-8 font-bold lg:flex'>
            <Link
              to='/login'
              className='text-grayishViolet hover:text-veryDarkViolet'
            >
              Login
            </Link>
          </div>
          <Link
            to='/signup'
            className='px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70'
          >
            Sign Up
          </Link>
        </div>
        <button
          id='menu-btn'
          className='block hamburger lg:hidden focus:outline-none'
          type='button'
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      <div
        id='menu'
        className='absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100'
      >
        <div className='flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm'>
          <Link to='/' className='w-full text-center'>
            Home
          </Link>
          <Link to='/addbook' className='w-full text-center'>
            Add Book
          </Link>
          <Link to='/about' className='w-full text-center'>
            Resources
          </Link>
          <Link
            to='/login'
            className='w-full pt-6 border-t border-gray-400 text-center'
          >
            Login
          </Link>
          <Link
            to='/signup'
            className='w-full py-3 text-center rounded-full bg-cyan'
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
