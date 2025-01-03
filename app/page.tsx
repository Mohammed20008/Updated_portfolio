"use client";
import About from "@/components/About";
import { Contact } from "@/components/Contact";
import Intro from "@/components/Intro";
// import Projects from "@/components/Projects";
import SectionDevider from "@/components/SectionDevider";
// import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import { ModeToggle } from "../components/ToggleMode";
// import { Tabs } from "@/components/ui/tabs";
import { TabsDemo } from "@/components/ProjectsCards";
// import Magnito from "@/components/Magnito";

export default function Home() {
  return (
    <motion.div
      className="relative mt-8 flex max-w-5xl flex-col items-center px-10 justify-center overflow-hidden py-10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween" }}
    >
      {/* <div className=" sticky top-0 -left-20">
        <Magnito />
      </div> */}

      <Intro />
      <SectionDevider />
      <About />
      <SectionDevider />
      {/* <Projects /> */}
      <TabsDemo />
      {/* <SectionDevider /> */}
      {/* <Skills /> */}
      {/* <StickyScrollRevealDemo /> */}
      <SectionDevider />
      <Contact />
      <div className="fixed bottom-4 right-0 md:right-16">
        <ModeToggle />
      </div>
    </motion.div>
  );
}
