"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        
        {/* Logo and Connect Button */}
        <a href="#about-me" className="flex items-center">
          <Image
            src="/blue.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-medium ml-2 hidden md:block bg-violet-500 bg-opacity-30 p-1 rounded text-white">
            <a href="https://linktr.ee/smasoom" target="blank">Lets Connect</a>
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-row items-center justify-between w-auto md:w-[500px] h-full">
          <div className="flex items-center justify-between w-full border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200">
            <a href="#about" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#project" className="cursor-pointer">
              Projects
            </a>
            <a href="#portfolio" className="cursor-pointer">
              Portfolio
            </a>
            <a href="#education" className="cursor-pointer">
              Education
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-4">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="transition-opacity duration-150"
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden w-full bg-[#0300145e] px-4 py-2 text-gray-200">
          <a href="#about" className="block py-2">About me</a>
          <a href="#skills" className="block py-2">Skills</a>
          <a href="#projects" className="block py-2">Projects</a>
          <a href="#portfolio" className="block py-2">Portfolio</a>
          <a href="#education" className="block py-2">Education</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
