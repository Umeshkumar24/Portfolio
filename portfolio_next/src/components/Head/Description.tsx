"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";

export function Description() {
  const words = [
    {
      text: "👋",
    },
    {
      text: "Hey",
    },
    {
      text: "Everyone",
    },
    {
      text: "Umesh",
      className: "text-green-500 dark:text-blue-500",
    },
    {
      text: "this",
    },
    {
      text: "side",
    },
  ];

  const desc = `I am a Computer Science Graduate and a developer having expertise in Machine Learning and Full Stack  
  Development. Curious problem solver with interests in new technologies and inventions. Collaborative, 
  Open-minded and Quick-learner. `;

  const notions = ["Coder", "Programmer", "Developer", "Engineer"];

  return (
    <>
      <div>
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center mt-20">
              <TypewriterEffectSmooth words={words} />
            </div>
            <div className="font-bold text-bold md:text-4xl text-neutral-200 py-4">
              Welcome here, I am a<FlipWords words={notions} /> <br />
            </div>

            <Image
              src="/imgme.png"
              className="h-30 w-30 flex-shrink-0 rounded-full"
              width={200}
              height={200}
              alt="Avatar"
            />
            <center>
              <div className="p-6 m-6 ">
                <TextGenerateEffect words={desc} />
              </div>
            </center>
          </motion.div>
        </AuroraBackground>
      </div>
    </>
  );
}
