"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { useSectionName } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "Obsidian",
      value: "obsidian.png",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 to-violet-950">
          <Link href="https://obsidienclone-htnkrvwcl-mohammeds-projects-0564e50c.vercel.app/">
            Obsidian Tab
          </Link>
          <DummyContent img="/obsidian.png" />
        </div>
      ),
    },
    {
      title: "Rogue clone",
      value: "rogue",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 to-violet-950">
          <Link href="">Rogue tab</Link>
          <DummyContent img="/Rogue.png" />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 to-violet-950">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 to-violet-950">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 to-violet-950">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];
  const { ref } = useSectionName("Projects", 0.25);
  return (
    <div
      id="projects"
      ref={ref}
      className="h-[30rem] md:h-[50rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-center justify-center my-10 scroll-mt-24 transition ] px-40 md:px-10"
    >
      <SectionHeading>My Projects</SectionHeading>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ img }: { img?: string }) => {
  return (
    <Image
      src={img || "/obsidian.png"}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[90%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
