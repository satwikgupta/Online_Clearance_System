import React from 'react'

import nita_black from '../assets/nita_black.png'

const Navbar = () => {
  return (
    <>
      <nav className="p-6 w-full h-22 text-white bg-gray-900 text-center fixed">
        <div className="flex items-center justify-center">
          <a href="https://nita.ac.in" className="flex items-center">
            <img src={nita_black} className="h-14 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              NITA Online Clearance System
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar
