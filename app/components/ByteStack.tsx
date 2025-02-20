"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ByteStack = () => {
  return (
    <div
      id="home"
      className="px-16 min-h-screen flex w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            alt="ByteStack Logo"
            src="/globe.svg"
            width={100}
            height={100}
            className="w-[120px] cursor-pointer rounded-full shadow-xl shadow-gray-500 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-gray-300"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
            <h1 className="dark:bg-gradient-to-r dark:from-[rgba(169,241,223)] dark:to-[rgba(255,187,187)] bg-clip-text text-transparent text-5xl font-light md:text-7xl">
              ByteStack
            </h1>
            <h3 className="dark:bg-gradient-to-r dark:to-[rgba(169,241,223)] dark:from-[rgba(255,187,187)] bg-clip-text text-transparent text-2xl md:text-3x1">
              Full Stack Development || Data Engineering
            </h3>
            <p className="md:text-base text-pretty text-sm text-gray-300">
              Providing modern solutions to modern problems
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ByteStack;
