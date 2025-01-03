// "use client";
// import { motion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";
// const variants = {
//   transition: {
//     duration: 0.5,
//     type: "spring",
//     stiffness: 150,
//     damping: 15,
//     mass: 0.1,
//   },
// };
// const Magnito = () => {
//   const mouseenter = (e) => {
//     setIsHovered(true);
//     const { clientX, clientY } = e;
//     const { width, height, left, top } = ref.current.getBoundingClientRect();
//     const x = clientX - (left + width / 2);
//     const y = clientY - (top + height / 2);
//     setPosition({
//       x,
//       y,
//     });
//   };
//   const mouseleave = () => {
//     setPosition({
//       x: 0,
//       y: 0,
//     });
//     setIsHovered(false);
//   };
//   const ref = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const { x, y } = position;
//   return (
//     <div className="relative">
//       {" "}
//       <motion.div
//         className="w-40 h-40 bg-gray-500 rounded-full items-center justify-center flex cursor-pointer overflow-hidden relative "
//         onMouseMove={mouseenter}
//         onMouseLeave={mouseleave}
//         ref={ref}
//         variants={variants}
//         animate={{ x, y }}
//         transition="transition"
//       >
//         <motion.div
//           className="absolute w-40 h-40 bg-blue-700 rounded-full -bottom-24"
//           initial={{ scale: 0.03 }}
//           animate={{ scale: isHovered ? 3 : 0.03 }}
//           variants={variants}
//           transition="transition"
//         ></motion.div>
//         <motion.h1 className="z-10">hello</motion.h1>
//       </motion.div>
//     </div>
//   );
// };

// export default Magnito;
