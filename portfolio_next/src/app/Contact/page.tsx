'use client'

import { Focus } from "@/components/Contacts/Focus";
import { Profiles } from "@/components/Contacts/Profiles";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <>
      <Focus />
      <div className="bg-gray-800">
        <Profiles />
        <ShootingStars />
        <StarsBackground />
      </div>
    </>
  );
}
