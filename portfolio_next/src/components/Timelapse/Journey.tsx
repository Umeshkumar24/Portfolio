import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Journey() {
    const data = [
        {
            title: "2025 : Corporate",
            content: (
                <div>
                    <p className="text-neutral-800 font-bold dark:text-neutral-200 text-lg mb-4">
                        ASPIRING SOFTWARE ENGINEER
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://assets.aceternity.com/templates/startup-1.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/templates/startup-2.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2021 - 2025 : Bachelors",
            content: (
                <div>
                    <p className="text-neutral-800 font-bold dark:text-neutral-200 text-lg mb-4">
                        SIKSHA O ANUSANDHAN, BHUBANESWAR, ODISHA
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
                        INSTITUTE OF TECHNICAL EDUCATION AND RESEARCH
                    </p>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <p>✅ <b>B-TECH :</b> Computer Science and Engineering - CGPA: 9.56</p>
                    </div>
                    <hr />
                    <hr />
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <p> -X- <b>Cloud and Devops :</b> Learned different cloud platforms like GCP,AWS and Devops. 
                            Leveraged the devops tools to use the cloud platforms efficiently.</p>
                    </div>

                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <p>-X- <b>CyberSecurity :</b> Completed Self Paced CyberSecurity Course and learned tools like
                        SIEM tools, authorization tools and security principles.</p>
                    </div>

                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <p>-X- <b>Project Management :</b> Completed Self Paced Project Management Course and learned to use 
                        tools and technologies for collaboration and efficient management and completion of projects</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/journey/soa/soa.jpeg"
                            alt="SOA"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/journey/soa/iter.jpeg"
                            alt="ITER"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2014 - 2021: Schooling",
            content: (
                <div>
                    <p className="text-neutral-800 font-bold dark:text-neutral-200 text-lg mb-4">
                        JAWHAR NAVODAYA VIDYALAYA, BAGUDI, BALESWAR, ODISHA
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            <p>✅ <b>Higher Secondary</b> (XII:CBSE (PCMB)) - 83.4%</p>
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            <p>✅ <b>Secondary Education</b> (X:CBSE) - 94.4%</p>
                        </div>
                        <hr />
                        <hr />
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            <p> <b>-X-</b> Learned to play musical instruments</p>
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            <p><b>-X-</b> Joined and Served in Scouts and Guides</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/journey/jnv/nvs.jpeg"
                            alt="NVS"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/journey/jnv/jnv.jpg"
                            alt="JNV"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
