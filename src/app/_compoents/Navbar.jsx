"use client";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Branches", href: "#" },
    { name: "Jobs", href: "#" },
  ];

  return (
    <div className="mx-auto flex justify-between items-center px-8 py-8 lg:px-20 ">
      {/* Mobile Menu Icon */}
      <button
        className="block md:hidden text-white"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <IoMenu size={24} />
      </button>
      <a href="#" className=" pl-12">
        <Image
          src="/assets/images/logo.png"
          width={150}
          height={150}
          alt="Logo"
        />
      </a>

      {/* Navbar Links */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-800 text-center md:static md:flex md:bg-transparent md:pl-[300px]`}
      >
        <ul className="flex flex-col md:flex-row gap-6 p-4 md:p-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-white rounded-full w-12 h-6 mx-auto my-4 md:justify-center hidden md:flex md:items-center text-center bg-primary md:ml-1  ">
          12
        </div>
        {/* Mobile Buttons */}
        <div className="flex flex-col gap-2 p-4 md:hidden">
          <button className="border text-white rounded-full h-8 px-4 text-[14px]">
            Contact us
          </button>
          <button className="text-white rounded-full w-full h-8 text-center bg-primary text-[14px]">
            Join us
          </button>
        </div>
        {/* Desktop Buttons */}
        <div className="hidden md:flex">
          <button className="border text-white rounded-full h-10 px-4 text-[14px]">
            Contact us
          </button>
          <button className="text-white rounded-full ml-2 w-20 h-10 text-center bg-primary text-[14px]">
            Join us
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
