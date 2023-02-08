'use client';
import { useState } from "react";
import Link from 'next/link';
import MyLogo from '../public/MyLogo.jpg'

const NavBar = () => {
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
            <ul className="md:flex md:flex-row md:mt-0 md:mr-6 md:space-x-4 md:font-medium ">
              <li>
                <Link href="/warhammer-40k" onClick={() => setNavbar(!navbar)} className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-500">Warhammer 40K</Link>
              </li>
              <li>
                <Link href="/warhammer-aos" onClick={() => setNavbar(!navbar)} className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-500">Warhammer AoS</Link>
              </li>
              <li>
                <Link href="/bandai" onClick={() => setNavbar(!navbar)} className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-500 md:">Bandai</Link>
              </li>
              <li>
                <Link href="/revell" onClick={() => setNavbar(!navbar)} className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-500">Revell</Link>
              </li>
              <li>
                <Link href="/star-wars-legion" onClick={() => setNavbar(!navbar)} className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-500">Star Wars: Legion</Link>
              </li>
              <li>
                <Link href="/tamiya" onClick={() => setNavbar(!navbar)} className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-500">Tamiya</Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      );
  }
 
export default NavBar