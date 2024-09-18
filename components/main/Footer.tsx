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
      setCopied(false); // Reset animation after 2 seconds
    }, 2000);
  };

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            {/* YouTube */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">YouTube</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/vinrain-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>

            {/* Discord */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mt-2">
            <div className="font-bold text-[16px">Social Media</div>

            

            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaFacebook />
              <span className="text-[15px] ml-[6px]">Facebook</span>
            </a>
            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mt-2">
            <div className="font-bold text-[16px]">About</div>

            {/* Email Copy */}
            <div
              onClick={handleCopyEmail}
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">
                {copied ? (
                  <span className="animate-bounce text-green-500 font-semibold">Copied!</span>
                ) : (
                  "Copy email"
                )}
              </span>
            </div>

            {/* Other Links */}
            <a
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">Let us connect</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] mt-[20px] text-[15px] text-center">
          <p>&copy; VinRain {currentYear} Inc. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;