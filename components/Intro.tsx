"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { TypewriterEffectDemo } from "./TypeWriterIntro";
import { useSectionName } from "@/lib/hooks";
import { useActiveSectionContext } from "./ActiveSectionProvider";
import Magnito from "./Magnito";

const Intro = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionName("Home");

  return (
    <section ref={ref} id="home" className="introSection pt-20">
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
        <h1 className=" h-40 dark:text-gray-400">
          <TypewriterEffectDemo />
        </h1>
        {/* Buttons */}
        <div className="flex-col items-center justify-center space-y-4 font-semibold md:flex-row -mt-8">
          <Button className="contactButton group">
            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here
            </Link>

            <span className="ml-1 text-xl text-gray-300 transition group-hover:ml-2 dark:text-black">
              <BsArrowRight />
            </span>
          </Button>

          <div className="flex items-center justify-center space-x-2 text-gray-700 pt-4">
            {" "}
            <Link href="/" className="link">
              <BsLinkedin />
            </Link>
            <Link href="/" className="link">
              <BsGithub />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intro;
