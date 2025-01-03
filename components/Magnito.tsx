"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
const variants = {
  transition: {
    duration: 0.5,
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  },
};
const Magnito = ({ setTimeOfLastClick, setActiveSection }: any) => {
  const mouseenter = (e: { clientX: any; clientY: any }) => {
    setIsHovered(true);
    const { clientX, clientY } = e;
    if (ref.current) {
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({
        x,
        y,
      });
    }
  };
  const mouseleave = () => {
    setPosition({
      x: 0,
      y: 0,
    });
    setIsHovered(false);
  };
  const ref = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { x, y } = position;
  return (
    <div className="relative">
      {" "}
      <motion.div
        className="md:w-40 md:h-40 w-24 h-24 bg-gray-950 dark:bg-gradient-to-r dark:text-black rounded-full items-center justify-center flex cursor-pointer overflow-hidden relative border-none  shadow-gray-800 shadow-xl"
        onMouseMove={mouseenter}
        onMouseLeave={mouseleave}
        ref={ref}
        variants={variants}
        animate={{ x, y }}
        transition={variants.transition}
      >
        <motion.div
          className="absolute w-40 h-40 bg-indigo-700 rounded-full -bottom-24"
          initial={{ scale: 0.03 }}
          animate={{ scale: isHovered ? 3 : 0.03 }}
          variants={variants}
          transition={variants.transition}
        ></motion.div>
        <motion.div className="z-10 border-none">
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="text-gray-300"
          >
            Contact me
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Magnito;
