"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { projectsData } from "@/lib/data";
import { useState } from "react";

export function TabsDemo() {
  const [activeTab, setActiveTab] = useState(
    projectsData[0].title.toLowerCase()
  );
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="tab">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="tab">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="tab">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-violet-950 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-violet-950 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="b relative mx-auto my-40 flex h-[20rem] w-full max-w-5xl flex-col items-start  justify-start [perspective:1000px] md:h-[40rem]">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  // const Project = projectsData.find((p)=>p.title.toLowerCase()===activeTab)
  return (
    <>
      {projectsData.map((project, index) => (
        <Image
          key={index}
          src={project.imageUrl}
          alt="dummy image"
          width="1000"
          height="1000"
          className="absolute -bottom-10  mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
        />
      ))}
    </>
  );
};
