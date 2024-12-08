import Image from "next/image";
import Link from "next/link";
import React from "react";


const Header = () => {
  return (
    <div className="w-full h-auto bg-black">
      {/* Container */}
      <div className="max-w-[1320px] mx-auto py-6 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-center">
          <div className="flex items-center">
            <p className="text-yellow-500 text-xl md:text-2xl font-bold leading-8">
              Food
            </p>
            <span className="text-white text-xl md:text-2xl font-bold leading-8">
              tuck
            </span>
          </div>
        </div>

        {/* Navigation and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          {/* Navigation */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-white text-sm md:text-base">
            <li className="hover:text-yellow-500 cursor-pointer"><Link href='/'>Home</Link></li>
            <li className="hover:text-yellow-500 cursor-pointer"><Link href='/Menu'>Menu</Link></li>
            <li className="hover:text-yellow-500 cursor-pointer"><Link href='/Blog'>Blog</Link></li>
            <li className="hover:text-yellow-500 cursor-pointer"><Link href='/Pages'>Pages</Link></li>
            <li className="hover:text-yellow-500 flex items-center gap-1 cursor-pointer">
              About
              <select
                className="bg-transparent text-white text-sm cursor-pointer"
                name="about"
                id="ab"
              >
                {/* <option value="about">About</option> */}
                {/* <option value="team">Our Team</option> */}
              </select>
            </li>
            <li className="hover:text-yellow-500 cursor-pointer"><Link href='/Shop'>Shop</Link></li>
            <li className="hover:text-yellow-500 cursor-pointer"><Link href='/Contact'>Contact</Link></li>
          </ul>

          {/* Search and Cart */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <input
              className="w-full md:w-[310px] h-12 px-4 border-2 border-[#FF9F0D] bg-transparent text-white rounded-full placeholder:text-white placeholder:opacity-75 focus:outline-none"
              type="search"
              name="Search box"
              id="Sb"
              placeholder="Search..."
            />
            <Image
              src="/Handbag.png"
              alt="Cart"
              width={24}
              height={24}
              className="h-6 w-6 md:h-[24px] md:w-[24px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
