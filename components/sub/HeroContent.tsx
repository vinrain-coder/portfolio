"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-6 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 items-center justify-center m-auto">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center justify-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-center">
            Fullstack Website Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col text-center gap-6 mt-5 text-3xl md:text-4xl font-bold text-white max-w-[600px] w-full"
        >
          <span>
            Developing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              user-friendly{" "}
            </span>
            web solutions
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] w-full text-center"
        >
          I&apos;m a Full Stack Website Developer capable of building scalable,
          responsive, and efficient web applications. Check out my projects and
          skills.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-center text-white rounded-lg max-w-[200px]"
        >
          Welcome!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className="object-contain hidden md:flex"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
