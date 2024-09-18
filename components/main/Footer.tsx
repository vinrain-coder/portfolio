"use client";
import React, { useState } from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vinrain450@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-6">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col sm:flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] flex flex-col items-center mb-6 sm:mb-0">
            <div className="font-bold text-lg">Community</div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <FaYoutube />
              <span className="ml-2">YouTube</span>
            </a>
            <a
              href="https://github.com/vinrain-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <RxGithubLogo />
              <span className="ml-2">GitHub</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="ml-2">Discord</span>
            </a>
          </div>

          <div className="min-w-[200px] flex flex-col items-center mb-6 sm:mb-0">
            <div className="font-bold text-lg">Social Media</div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="ml-2">Instagram</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <FaFacebook />
              <span className="ml-2">Facebook</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="ml-2">LinkedIn</span>
            </a>
          </div>

          <div className="min-w-[200px] flex flex-col items-center mb-6 sm:mb-0">
            <div className="font-bold text-lg">About</div>
            <button
              onClick={handleCopyEmail}
              className={`relative flex flex-row items-center my-3 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out 
              ${copied ? 'bg-gradient-to-r from-green-400 to-green-600 text-white' : 'bg-gradient-to-r from-blue-400 to-purple-600 text-white'}
              hover:shadow-lg hover:scale-105 focus:outline-none`}
            >
              {copied ? (
                <span className="animate-bounce">Copied!</span>
              ) : (
                "Copy email"
              )}
              <div
                className={`absolute inset-0 rounded-lg opacity-50 pointer-events-none 
                ${copied ? 'bg-green-500 animate-ping' : ''}`}
              />
            </button>

            <a
              href="#"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <span className="ml-2">Become Sponsor</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center my-3 cursor-pointer"
            >
              <span className="ml-2">Let us connect</span>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p>&copy; VinRain {currentYear} Inc. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
