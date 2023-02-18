'use client';
import Link from 'next/link';
import MyLogo from '../public/MyLogo.jpg'
import { navItems, moreDropdown } from './NavItems';
import { useState } from 'react';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false)
    return (
      <div>
        <header className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-full px-4 py-4">
            <Link href="/" className="flex items-center">
              <img src="/MyLogo.jpg" className="h-9 mr-5 rounded-xl" alt="AK Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AndKohler Hobby</span>
            </Link>
          </div>
        </header>
        <nav className="bg-gray-700">
          <div className="flex items-center justify-start px-4 py-2 md:hidden">
            <button type="button" className="block text-white focus:outline-none"
             onClick={() => setNavbar(!navbar)}
             >
              <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
                {navbar ? (
                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}  
              </svg>
            </button>
          </div>
          <div className={`md:block md:px-2 md:pb-3 md:py-2 md:mt-0 ${
            navbar ? 'px-2 pt-2 pb-4 md:p-0 block' : 'hidden'
          }`}
          >
            <ul className="md:flex md:flex-row md:mt-0 md:mr-6 md:space-x-4 md:font-medium">
              {navItems.map((item) => {
                return <li key={item.id}>
                <Link 
                  className="my-2 block ml-2 px-2 py-1 text-white font-semibold rounded hover:bg-gray-500" 
                  href={item.path} onClick={() => {setDropdown(false); setNavbar(!navbar);}}>{item.title}
                </Link>
                </li>
              })}
              <div className="bg-gray-700">
                <button onClick={() => setDropdown(!dropdown)} className="my-2 flex items-center ml-2 px-2 py-1 text-white font-semibold rounded hover:bg-gray-500">More 
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                </path>
                </svg>
                </button>
                <ul className={dropdown ? `md:absolute md:text-start mt-3 z-10` : `hidden`}
                onClick={() => setDropdown(!dropdown)}
                >
                {moreDropdown.map((item) => {
                    return (
                      <li className="bg-gray-700 pb-2" key={item.id}>
                      <Link 
                        href={item.path}
                        className="block mx-2 px-2 py-2 text-white font-semibold rounded hover:bg-gray-500"
                        onClick={() => {setDropdown(false); setNavbar(!navbar);}}
                        >
                        {item.title}
                      </Link> 
                      </li>
                      )
                    })}
                  </ul>
                </div>
            </ul>
          </div>
        </nav>  
      </div>
      );
  }
 
export default NavBar