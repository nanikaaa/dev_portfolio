"use client";

import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
//import NextJSIcon from "@/assets/icons/nextjs.svg";
//import TailwindCSSIcon from "@/assets/icons/tailwindcss.svg";
//import TypeScriptIcon from "@/assets/icons/typescript.svg";
//import BootstrapIcon from "@/assets/icons/bootstrap.svg";
//import FigmaIcon from "@/assets/icons/figma.svg";
//import GitIcon from "@/assets/icons/git.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Arts",
    emoji: "🎨",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "35%",
    top: "40%",
  },
  {
    title: "Volleyball",
    emoji: "🏐",
    left: "70%",
    top: "40%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "5%",
    top: "65%",
  },
  {
    title: "Travel",
    emoji: "✈️",
    left: "45%",
    top: "70%",
  },
]

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader 
          title="A Glimpse Into My World" 
          eyebrow="About Me" 
          description="Learn more about who I am, what I do, and what inspires me."
        />
          <div className="mt-20 flex flex-col gap-8"> 
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
             <CardHeader 
              title="My Reads" 
              description="Explore the books shaping my perspectives."
            />
              <div className="w-40 h-100 mx-auto md:mt-0">
                <Image src={bookImage} alt="Book cover"/>
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="My Toolbox" 
                description="Explore the technologies and tools I use to craft digital experiences."
                className=""/>
            <ToolboxItems 
              items={toolboxItems} 
              className=""
              itemsWrapperClassName="animate-move-right [animation-duration:30s]"
            />
            <ToolboxItems 
              items={toolboxItems} 
              className="mt-6" 
              itemsWrapperClassName="animate-move-left [animation-duration:20s]"
            />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8" >
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 ">
              <CardHeader 
                title="Beyond the Code" 
                description="Explore my interests and hobbies beyond the digital realm." 
                className="px-6 py-6" />
              <div className="relative flex-1 " ref={constrainRef}>  
                {hobbies.map(hobby => (
                  <motion.div
                    key={hobby.title} 
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-pink to-teal rounded-full py-1.5 absolute "
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
        
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image 
                src={mapImage} 
                alt="map" 
                className="h-full w-full object-cover object-left-top"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink to-teal -z-20 animate-ping [animation-duration:2s]"></div>
                <Image 
                src={smileMemoji} 
                alt="smiling memoji" 
                className="size-20"/>
              </div>
            </Card>
          </div>
        </div>        
      </div>
    </div>
  )
};
