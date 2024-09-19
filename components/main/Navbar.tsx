"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin sm:w-[70px] sm:h-[70px]"
          />
          <span className="font-bold text-2xl ml-[10px] hidden md:block text-gray-300">
            VinRain
          </span>
        </a>

        <div className="flex flex-row gap-2 justify-center md:justify-end sm:order-last sm:mr-4">
          {Socials.map((social) => (
            <a
              href={social.href}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={20}
                height={20}
                className="sm:w-[24px] sm:h-[24px] text-gray-200"
              />
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center justify-end">
          <button
            className="text-gray-300 focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div
          className={`${
            isNavOpen ? "block" : "hidden"
          } absolute top-[65px] left-0 w-full transition-all duration-300 ease-in-out transform origin-top md:static md:w-auto md:flex md:items-center md:justify-between rounded-lg p-2 text-gray-200`}
          style={{ background: 'linear-gradient(145deg, #000000, #434343)', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
        >
          <div className="flex flex-col items-start md:flex-row md:w-[auto] md:h-full md:justify-between rounded-lg bg-[#1f1f1f] md:bg-transparent">
            <a
              href="#about-me"
              className="cursor-pointer py-3 px-6 text-gray-200 md:py-2 md:px-6 hover:text-white hover:shadow-lg hover:shadow-[#2a0e61]/50 rounded-full transition duration-300 ease-in-out"
              onClick={() => setIsNavOpen(false)}
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer py-3 px-6 text-gray-200 md:py-2 md:px-6 hover:text-white hover:shadow-lg hover:shadow-[#2a0e61]/50 rounded-full transition duration-300 ease-in-out"
              onClick={() => setIsNavOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer py-3 px-6 text-gray-200 md:py-2 md:px-6 hover:text-white hover:shadow-lg hover:shadow-[#2a0e61]/50 rounded-full transition duration-300 ease-in-out"
              onClick={() => setIsNavOpen(false)}
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

