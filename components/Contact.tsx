"use client";
import { FaPaperPlane } from "react-icons/fa";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useSectionName } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { sendEmail } from "./SendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./ui/SubmitBtn";
import toast from "react-hot-toast";
import { BackgroundBeams } from "./ui/background-beams";
const Contact = () => {
  const { ref, inView = 0.8 } = useSectionName("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="relative flex w-full md:px-10 flex-col bg-transparent"
      initial={{
        opacity: 0,
        y: -100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      }}
      viewport={{
        once: true,
      }}
    >
      <BackgroundBeamsDemo />
    </motion.section>
  );
};

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[30rem] w-full rounded-md dark:bg-neutral-950 relative flex bg-gray-800 flex-col items-center justify-center antialiased">
      <form
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
        className="flex w-full flex-col space-y-4 relative z-10 px-4"
      >
        <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-8">
          Contact Me
        </h1>
        <input
          type="email"
          className="h-10 rounded bg-opacity-60 p-4 focus:outline-none bg-transparent ring-[0.5px] ring-slate-500 bg-gray-800 backdrop-blur-sm"
          required
          name="email"
          placeholder="Enter your email"
        />
        <textarea
          name="message"
          id=""
          className="h-40 rounded bg-opacity-60 p-4 focus:outline-none bg-transparent ring-[0.5px] ring-slate-500 bg-gray-800 backdrop-blur-sm"
          required
          placeholder="Enter your message"
        />
        <SubmitBtn />
      </form>
      <BackgroundBeams />
    </div>
  );
}

export { Contact };
