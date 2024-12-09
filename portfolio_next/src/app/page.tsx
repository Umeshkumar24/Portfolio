'use client'

import { motion } from "framer-motion";
import { Certifications } from "@/components/Credentials/Certifications";
import { Projects } from "@/components/Credentials/Projects";
import { Skills } from "@/components/Credentials/Skills";
import { Tools } from "@/components/Credentials/Tools";
import { Trainings_interns } from "@/components/Credentials/Trainings_interns";
import { Description } from "@/components/Head/Description";
import BlurIn from "@/components/ui/blur-in";
import HyperText from "@/components/ui/hyper-text";
import { ShootingStars } from "@/components/ui/shooting-stars";
import SparklesText from "@/components/ui/sparkles-text";
import { StarsBackground } from "@/components/ui/stars-background";
import WordRotate from "@/components/ui/word-rotate";
import { LampContainer } from "@/components/ui/lamp";

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 z-0">
        <Description />
        <ShootingStars />
        <StarsBackground />
        <div className="m-10 p-10">
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              KEY <br /> PROJECTS
            </motion.h1>
          </LampContainer>
          <Projects />
        </div>

        <div className="m-10 p-10">
          <center><SparklesText text="SKILLSET" className="text-white" /></center>
          <Skills />
        </div>

        <div className="m-10 p-10">
          <center>
            <WordRotate
              className="text-5xl font-bold text-white dark:text-white"
              words={["Tools", "Technologies", "Frameworks"]}
            />
          </center>
          <Tools />
        </div>

        <div>
          <center>
            <HyperText
              className="text-4xl font-bold text-white"
              text="Trainings and Internships"
            />
          </center>
          <Trainings_interns />
        </div>

        <div>
          <center>
            <BlurIn
              word="Certifications"
              className="text-4xl font-bold text-white"
            />
          </center>
          <Certifications />
        </div>
      </div>
    </>
  );
}
