import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import AnimatedBeamMultipleOutputDemo from "../AnimatedBeam";
import { AnimatedListDemo } from "../AnimatedListDemo";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import Marquee from "../ui/marquee";

const files = [
  {
    name: "GPT",
    body: "Developed by OpenAI, GPT (Generative Pre-trained Transformer) generates human-like text based on input prompts. Applications include chatbots, content creation, and language translation."
  },
  {
    name: "DALL-E",
    body: "Developed by OpenAI, DALL-E generates images from textual descriptions. Applications include art creation, design, and visual content generation."
  },
  {
    name: "Stable Diffusion",
    body: "Developed by Stability AI, Stable Diffusion generates high-quality images from text prompts. Applications include art, design, and creative content generation."
  },
  {
    name: "MidJourney",
    body: "Developed by MidJourney, this model generates artistic images from text prompts. Applications include art, design, and creative projects."
  },
  {
    name: "LLaMA",
    body: "Developed by Meta AI, LLaMA (Large Language Model Meta AI) generates text and can be fine-tuned for various NLP tasks. Applications include text generation, summarization, and translation."
  },
  {
    name: "Gemini",
    body: "Developed by Google DeepMind, Gemini generates text and can be used for various NLP applications. Applications include chatbots, content creation, and language understanding."
  },
  {
    name: "Sora",
    body: "Developed by various developers, Sora generates videos from text descriptions. Applications include video content creation, animation, and multimedia projects."
  },
  {
    name: "Copilot",
    body: "Developed by Microsoft, Copilot assists in code generation and completion. Applications include software development, coding assistance, and productivity tools."
  }
];

const features = [
  {
    Icon: FileTextIcon,
    name: "AI and ML",
    description: "Use the Principle of Data Science, Machine Learning and Deep Learning to develop AI systems.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <center>
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium dark:text-white ">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </center>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Project Management",
    description: "Manage Project Efficiently",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Devops",
    description: "Integrate 10+ Devops tools to keep the production running",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Consistency",
    description: "Learn Everyday and keep growing.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function Skills() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
