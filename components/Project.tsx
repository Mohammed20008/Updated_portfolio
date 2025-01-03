"use client";
import Image from "next/image";
import { projectsData } from "../lib/data";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
type Projectype = (typeof projectsData)[number];
const Project = ({ project }: { project: Projectype }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  return (
    <motion.div
      className="projectStyle group overflow-hidden px-40"
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      transition={{ delay: 1 }}
    >
      <div className="h-full max-w-[300px]">
        <h2 className="font-semibold dark:text-gray-200">{project.title}</h2>
        <p className="text-gray-900 text-sm md:text-xl dark:text-gray-300 pt-4">
          {project.description}
        </p>
        <ul className="flex flex-wrap items-center gap-2 space-x-1 pt-8">
          {project.tags.map((tag, index) => (
            <li className="project" key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative -right-10 lg:-right-20 h-[250px] top-44 lg:top-10 lg:h-[400px] w-[400px] lg:w-[800px] shadow-lg transition duration-300 group-hover:-translate-x-2 group-hover:-rotate-2">
        <Image alt="img" src={project.imageUrl} fill className="rounded-md" />
      </div>
    </motion.div>
  );
};
export default Project;
