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
const About = () => {
  const { ref } = useSectionName("About", 1);
  return (
    <section className="scroll-mt-28" id="about" ref={ref}>
      <div>
        <SectionHeading>about me</SectionHeading>
        <div className=" flex flex-col gap-4 items-start">
          <div className="text-2xl font-semibold md:text-4xl text-gray-800 leading-normal flex-wrap dark:text-gray-300 flex md:items-center justify-center">
            <span className="flex text-center">I am Mohammed</span>{" "}
            <span className="text-center">
              A full-stack developer with solid experience in:
            </span>
          </div>
          <div className="flex flex-col lg:text-4xl text-2xl font-semibold gap-4 text-gray-700 dark:text-gray-400">
            <span className="flex items-center gap-2 ">
              <FaReact className="text-indigo-400 text-4xl" />
              React.js/Next.js
            </span>
            <span className="flex items-center gap-2 ">
              <DiNodejs className="text-indigo-400 text-4xl" />
              Node.js
            </span>
            <span className="flex items-center gap-2 ">
              <SiExpress className="text-indigo-400 text-4xl" />
              Express
            </span>
            <span className="flex items-center gap-2 ">
              <DiMongodb className="text-indigo-400 text-4xl" />
              MongoDB
            </span>

            <span className="flex items-center gap-2 ">
              {" "}
              <FaCss3Alt className="text-indigo-400 text-4xl" />
              Css
            </span>
            <span className="flex items-center gap-2 ">
              <SiTailwindcss className="text-indigo-400 text-4xl" />
              TailwindCss
            </span>
            <span className="flex items-center gap-2 ">
              <CgFramer className="text-indigo-400 text-4xl" />
              Framer motion.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
