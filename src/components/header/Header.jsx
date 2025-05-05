import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { IoMenu, IoSearch } from 'react-icons/io5'
const Header = () => {
  return (
    <div className='container mx-auto p-5'>
      <header className='flex items-center justify-between gap-20'>
        <nav className='max-md:hidden'>
          <ul className='flex items-center justify-center gap-20 max-lg:gap-5'>
            <NavLink
              to={'/'}
              className='text-xl text-black duration-300 whitespace-nowrap hover:text-red-500 max-xl:text-lg'
            >
              Home
            </NavLink>
            <NavLink
              to={'/shop'}
              className='text-xl text-black duration-300 whitespace-nowrap hover:text-red-500 max-xl:text-lg'
            >
              Shop All
            </NavLink>
            <NavLink
              to={'/blog'}
              className='text-xl text-black duration-300 whitespace-nowrap hover:text-red-500 max-xl:text-lg'
            >
              Blog
            </NavLink>
          </ul>
        </nav>
        <Link className='w-52 max-sm:w-44' to={'/'}>
          <img className='w-full' src={logo} alt='logo' />
        </Link>

        <div className='flex items-center gap-16 max-lg:gap-5 max-md:hidden'>
          <NavLink
            className='text-xl text-black duration-300 whitespace-nowrap hover:text-red-500 max-lg:text-xl'
            to={'/about'}
          >
            About Us
          </NavLink>
          <form className='flex items-center justify-center bg-[#EDF2F4] w-auto h-10 px-2 rounded-lg'>
            <input
              required
              className='bg-transparent border-none outline-none text-blue-900 text-lg indent-2 max-xl:hidden'
              type='search'
              placeholder='Search Product'
            />
            <Link to={'/search'} className='bg-transparent text-xl'>
              <IoSearch />
            </Link>
          </form>
        </div>
        <button className='text-2xl cursor-pointer hidden max-md:block'>
          <IoMenu />
        </button>
      </header>
    </div>
  )
}

export default Header
