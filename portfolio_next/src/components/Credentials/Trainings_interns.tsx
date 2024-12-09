"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "The Sparks Foundations (June:2023)",
    description:
      "Built a payment integration system with full stack designing and development to be integrated for online fund transfer and donations.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/certificates/internships/sparks.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Cognizant Digital Nurture 3.0",
    description:
      "Learnt about the project development lifecycle and Full stack approach of Designing web based Projects. Built projects with the help of JAVA and SpringBoot. Learned to use JWT authentication tokens, Spring JPA and Hibernate Connections.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          COGNIZANT DIGITAL NURTURE <br /> JAVA FSE
        </div>
      </div>
    ),
  },
  {
    title: "Celebal Technologies",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/certificates/internships/celebal.jpg"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  // {
  //   title: "Running out of content",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //       Running out of content
  //     </div>
  //   ),
  // },
];
export function Trainings_interns() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
