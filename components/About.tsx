"use client";
import { FaCss3Alt } from "react-icons/fa";
import { CgFramer } from "react-icons/cg";
import { SiTailwindcss } from "react-icons/si";

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import SectionHeading from "./SectionHeading";
import { useSectionName } from "@/lib/hooks";
import { GrReactjs } from "react-icons/gr";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { SeparatorHorizontal } from "lucide-react";
import { LuSeparatorHorizontal } from "react-icons/lu";
const About = () => {
  const { ref } = useSectionName("About", 1);
  return (
    <section className="scroll-mt-28" id="about" ref={ref}>
      <div>
        <SectionHeading>about me</SectionHeading>
        <div className=" flex flex-col gap-4 items-start">
          <div className="text-2xl font-semibold md:text-4xl text-gray-800 leading-normal flex-wrap dark:text-gray-300 flex md:items-center justify-center">
            <span className="flex text-center">I am Mohammed</span>{" "}
            <span className="flex flex-wrap px-10 text-center">
              A full-stack developer with solid experience in:
            </span>
          </div>
          <div className="w-full h-[1px] bg-gray-600" />
          <div className="flex flex-col lg:text-4xl text-2xl font-semibold gap-4 text-gray-700 dark:text-gray-400 px-20">
            <div className="flex items-center gap-2 ">
              <FaReact className="text-indigo-400 text-4xl" />
              React.js/Next.js
            </div>
            <div className="flex items-center gap-2 ">
              <DiNodejs className="text-indigo-400 text-4xl" />
              Node.js
            </div>
            <div className="flex items-center gap-2 ">
              <SiExpress className="text-indigo-400 text-4xl" />
              Express
            </div>
            <div className="flex items-center gap-2 ">
              <DiMongodb className="text-indigo-400 text-4xl" />
              MongoDB
            </div>

            <div className="flex items-center gap-2 ">
              {" "}
              <FaCss3Alt className="text-indigo-400 text-4xl" />
              Css
            </div>
            <div className="flex items-center gap-2 ">
              <SiTailwindcss className="text-indigo-400 text-4xl" />
              TailwindCss
            </div>
            <div className="flex items-center gap-2 ">
              <CgFramer className="text-indigo-400 text-4xl" />
              Framer motion.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
