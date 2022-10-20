/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const Header = ({ children }) => {
  return (
    <div className="space-y-8">
      <nav className="flex items-center justify-around bg-white p-3 shadow-sm border-b shadow-gray-400 z-50 sticky top-0">
        <Link href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            alt="Logo"
            className="h-10 cursor-pointer"
          />
        </Link>
        <div className="md:inline-flex items-center bg-gray-100 h-8 rounded-lg hidden">
          <MagnifyingGlassIcon className="icon h-9 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-gray-500"
          />
        </div>
        <div className="flex items-center">
          <Link href="/">
            <HomeIcon className="icon" />
          </Link>
          <PlusCircleIcon className="icon" />
          <div className="ml-5 cursor-pointer">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/2463/2463510.png"
              width={40}
              height={40}
              alt="Me"
            />
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Header;
