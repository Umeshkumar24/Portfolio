import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function Projects() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          git={item.href}
          blog={item.blog}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Desc = (source:any) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
          src={source}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
    />
  </div>
);
const items = [
  {
    title: "DeskNet",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Desc source={"path"} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    href: "path",
    blog: "path",
  },
  {
    title: "Sportin 360",
    description: "Dive into the transformative power of technology.",
    header: <Desc source={"path"} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "EduNoter",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Desc source={"path"} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "RKZS || TSIT",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Desc source={"path"} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Traffic Congestion Checker",
    description: "Join the quest for understanding and enlightenment.",
    header: <Desc source={"path"} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Vlogger",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Desc source={"path"} />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Draught Prediction",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Desc source={"path"} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
