import React from "react";
import Image from "next/image";
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 shadow-md md:px-10 bg-white">
      {/* Left */}
      <div className="cursor-pointer relative flex items-center h-10 my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex sm:border-2 rounded-full items-center py-2 md:shadow-sm">
        <input
          className="pl-5 bg-transparent outline-none flex-grow placeholder-grey-400 text-md text-grey-600"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden h-7 bg-red-400 text-white rounded-full p-1 lg:inline-flex md:mx-2 cursor-pointer" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer"/>

          <div className="flex items-center space-x-2 p-2 border-2 rounded-full" >
              <MenuIcon className="h-6 cursor-pointer"/>
              <UserCircleIcon className="h-6 cursor-pointer"/>
          </div>
      </div>
    </header>
  );
}

export default Header;
