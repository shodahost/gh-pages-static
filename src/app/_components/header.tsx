"use client";

import Link from "next/link";
import React, { useState } from 'react';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-stone-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4">
        <a 
          href="/" 
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/50/PixelApple.svg"
            className="h-10"
            alt="Mine Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Testin AI crap
          </span>
        </a>
        <button
          onClick={toggleNavbar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center max-md:mx-0 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className={`z-50 w-full md:block md:w-auto ${isExpanded ? 'block' : 'hidden'}`} id="navbar-default max-sm:relative">
          <ul className="flex flex-col mt-2 border border-gray-100 rounded-lg md:flex-row md:space-x-6 md:mt-0 md:border-0 max-md:bg-white dark:border-gray-700 max-md:dark:bg-gray-700 max-md:absolute left-4 right-4 text-xl">
            <li className="max-md:py-4 text-center">
              <Link href="/" className="transition-all mx-1 py-2 text-gray-700 hover:text-white rounded md:text-gray-700 dark:text-white hover:bg-red-600 hover:font-black hover:italic hover:mx-0 hover:px-4">Home</Link>
            </li>
            <li className="max-md:py-4 text-center">
              <Link href="/posts" className="transition-all mx-1 py-2 text-gray-700 hover:text-white rounded md:text-gray-700 dark:text-white hover:bg-red-600 hover:font-black hover:italic hover:mx-0 hover:px-4">Posts</Link>
            </li>
            <li className="max-md:py-4 text-center">
              <Link href="/gallery" className="transition-all mx-1 py-2 text-gray-700 hover:text-white rounded md:text-gray-700 dark:text-white hover:bg-red-600 hover:font-black hover:italic hover:mx-0 hover:px-4">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;