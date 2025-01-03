"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { TypewriterEffectDemo } from "./TypeWriterIntro";
import { useSectionName } from "@/lib/hooks";
import { useActiveSectionContext } from "./ActiveSectionProvider";
import { Cover } from "./ui/cover";
import Magnito from "./Magnito";
// import Magnito from "./Magnito";

const Intro = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionName("Home");

  return (
    <section ref={ref} id="home" className="introSection pt-20 px-40">
      {/* <Magnito /> */}
      <div className="relative h-40 w-40 flex items-center justify-center">
        <div>
          <Image
            alt="logo"
            src="/profile.jpg"
            fill
            className="rounded-full border-4 border-gray-800 object-cover shadow-2xl shadow-black drop-shadow-2xl opacity-85"
          />
        </div>

        <motion.span
          className="absolute bottom-0 right-0 text-4xl md:text-4xl opacity-80"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          👋
        </motion.span>
      </div>
      <div className=" text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white mb-8 leading-relaxed flex flex-col items-center flex-wrap">
          <span className="flex flex-wrap">Towards awesome apps with</span>

          <Cover>React.js</Cover>
          {/* <TypewriterEffectDemo /> */}
        </h1>
        {/* Buttons */}
        <div className="flex-col items-center justify-center space-y-4 font-semibold md:flex-row -mt-8">
          <div className="flex items-center justify-center space-x-2 text-gray-700 pt-4">
            {" "}
            <Link href="/" className="link">
              <BsLinkedin />
            </Link>
            <Link href="/" className="link">
              <BsGithub />
            </Link>
            <Magnito
              setActiveSection={setActiveSection}
              setTimeOfLastClick={setTimeOfLastClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intro;
