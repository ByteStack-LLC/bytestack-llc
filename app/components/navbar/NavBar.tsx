"use client";

import Link from "next/link";
//import ThemeToggle from "../ui/theme-toggle";
import { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
//import { FaInfoCircle } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-500 bg-gray-800 px-16 py-6 text-white backdrop-blur-md md:justify-items-stretch">
      <Link
        href="/"
        className=" opacity-80 text-2xl bg-gradient-to-r from-[rgba(169,241,223)] to-[rgba(255,187,187)] bg-clip-text text-transparent font-semibold transition-all duration-300 hover:opacity-100 hover:text-gray-800 hover:scale-110 hover:bg-clip-text hover:text-transparent"
      >
        ByteStack
      </Link>

      <ul className="hidden md:flex gap-12">
        <Link
          href="/#home"
          className="cursor-pointer text-white opacity-80 font-semibold transition-all duration-300 hover:opacity-100 hover:scale-110"
        >
          <li>Home</li>
        </Link>
        <Link
          href="/#tech"
          className="cursor-pointer text-white opacity-80 font-semibold transition-all duration-300 hover:opacity-100 hover:scale-110"
        >
          <li>Tech</li>
        </Link>
        <Link
          href="/#team"
          className="cursor-pointer text-white opacity-80 font-semibold transition-all duration-300 hover:opacity-100 hover:scale-110"
        >
          <li>Team</li>
        </Link>
        <Link
          href="/#contact"
          className="cursor-pointer text-white opacity-80 font-semibold transition-all duration-300 hover:opacity-100 hover:scale-110"
        >
          <li>Contact</li>
        </Link>
      </ul>
      {/*<ThemeToggle />
      <ul className="hidden md:flex gap-4 items-center">
        <Link
          href="/about"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-400 hover:scale-110"
        >
          <li>
            <FaInfoCircle />
          </li>
        </Link>
      </ul>*/}

      {isOpen ? (
        <BiX
          className="block md:hidden cursor-pointer text-white text-4xl"
          onClick={menuOpen}
        />
      ) : (
        <BiMenu
          className="block md:hidden cursor-pointer text-white text-4xl"
          onClick={menuOpen}
        />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-500 bg-gray-800 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <Link
              href="#home"
              className="cursor-pointer text-white opacity-80 font-semibold transition-all duration-300 hover:opacity-100 hover:scale-110"
            >
              <li>Home</li>
            </Link>
            <Link
              href="#tech"
              className="cursor-pointer text-white opacity-80 font-semibold transition-all duration-300 hover:opacity-100 hover:scale-110"
            >
              <li>Tech</li>
            </Link>
            <Link
              href="#services"
              className="cursor-pointer text-white opacity-80 font-semibold transition-all duration-300 hover:opacity-100 hover:scale-110"
            >
              <li>Services</li>
            </Link>
            <Link
              href="#contact"
              className="cursor-pointer text-white opacity-80 font-semibold transition-all duration-300 hover:opacity-100 hover:scale-110"
            >
              <li>Contact</li>
            </Link>
          </ul>
          {/*<ul className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-400 hover:scale-110"
            >
              <li>
                <FaInfoCircle />
              </li>
            </Link>
          </ul>*/}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
