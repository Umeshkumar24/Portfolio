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

var Desc = ({ source }: { source: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      src={source}
      width={300}
      height={300}
      className="h-full w-full object-cover"
      alt="Project image"
    />
  </div>
);

const items = [
  {
    title: "DeskNet",
    description: "The Remote Desktop Assistant of your own.",
    header: <Desc source="/projects/desknet.jpg" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/Umeshkumar24/DeskNet",
    blog: "https://dasumesh957.wordpress.com/2024/06/01/desk-net/",
  },
  {
    title: "Sportin 360",
    description: "Your Ultimate Destination for Fitness and Sports!",
    header: <Desc source="/projects/sportin.jpg" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/ITER-SIH/Team-16",
    blog: "https://dasumesh957.wordpress.com/2025/05/01/%f0%9f%8f%8b%ef%b8%8f%e2%99%82%ef%b8%8f-welcome-to-sportin360-your-ultimate-destination-for-fitness-and-sports/",
  },
  {
    title: "EduNoter",
    description: "Simplifying Study Material Sharing for Everyone!",
    header: <Desc source="/projects/edu-noter.png" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/Umeshkumar24/ADP_Noter",
    blog: "https://dasumesh957.wordpress.com/2025/05/01/edunoter/",
  },
  {
    title: "RKZS || TSIT",
    description: "Igniting Minds with Innovation and Learning",
    header: <Desc source="/projects/rkzstsit.png" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/Umeshkumar24/RKZS",
    blog: "https://dasumesh957.wordpress.com/2025/05/01/%f0%9f%8c%9f-rkzs-tsit/",
  },
  {
    title: "Bus-Tos",
    description: "College Transport Management System.",
    header: <Desc source="/projects/bus-tos.png" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/Umeshkumar24/Bus_Tos",
    blog: "https://dasumesh957.wordpress.com/2024/06/01/bustos-college-transport-management-system/",
  },
  {
    title: "Vlogger",
    description: "Let's Travel.",
    header: <Desc source="/projects/vlogger.jpg" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/Umeshkumar24/Vlogger",
    blog: "https://dasumesh957.wordpress.com/2023/08/07/chapter-two/",
  },
  {
    title: "The Draught Prediction",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Desc source="/projects/draught-prediction.jpeg" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/Umeshkumar24/ML_OPS_SDP",
    blog: "https://dasumesh957.wordpress.com/2025/05/01/the-drought-prediction/",
  },
];
