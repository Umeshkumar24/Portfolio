import { HoverEffect } from "../ui/card-hover-effect";
import FlipText from "@/components/ui/flip-text";

export function Profiles() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <center>
        <FlipText
          className="text-4xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]"
          word="LEARNING PROFILES"
        />
      </center>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "LeetCode",
    description:
      "Solved 250+ Coding problems with 100days of Coding Badges and many more.",
    link: "https://leetcode.com/u/UmeshK24/",
  },
  {
    title: "GeeksForGeeks",
    description:
      "Solved 200+ Coding Problems and completed various courses to gain core knowledge.",
    link: "https://www.geeksforgeeks.org/user/dasumesh957/",
  },
  {
    title: "HackerRank",
    description:
      "Solved 150+ Coding problems with 7 gold badges and other certifications.",
    link: "https://www.hackerrank.com/profile/UmeshK24",
  },
  {
    title: "Coding Ninjas",
    description:
      "Gained 1lakh score points by following several guided career paths and daily challenge problems to enhannce my fundamentals.",
    link: "https://www.naukri.com/code360/profile/UmeshK24",
  },
  {
    title: "W3-Schools",
    description:
      "Completed all the available free course materials with 40+ courses on various domains, graded assignments and quizzes earning a total of 98 achievement star points",
    link: "https://www.w3profile.com/UmeshKumar",
  },
  {
    title: "Coursera",
    description:
      "Completed 30+ certification courses gaining knowledge in various fields of tech with 80+ skill scores in progress",
    link: "https://www.coursera.org/user/0084e2dcecd241cd13a0074edbf23e58",
  },
];
