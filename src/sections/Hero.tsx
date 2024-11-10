'use client';

import Image from 'next/image';
import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { Typewriter } from 'react-simple-typewriter';

export const HeroSection = () => {
  // Google Drive link for the resume
  const resumeLink = "https://drive.google.com/file/d/1slk0n3aV2AYRr2AK8v8MLKRfjjULC0Ef/view?usp=sharing";

  // Handler for scrolling to the "about" section
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="py- md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}></div>

        {/* Hero Orbit Elements */}
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='6s'>
          <SparkleIcon className='size-8 text-pink/20' />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
          <SparkleIcon className='size-5 text-pink/20' />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
          <div className='size-2 rounded-full bg-pink/20'></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
          <SparkleIcon className='size-10 text-pink/20' />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-12 text-pink' />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-8 text-pink' />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
          <div className='size-2 rounded-full bg-pink/20'></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='8s'>
          <SparkleIcon className='size-14 text-pink/20' />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
          <div className='size-3 rounded-full bg-pink/20'></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-28 text-pink' />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} className="size-[120px] mt-2" alt="avatar" />

          <div className='bg-gray-950 border broder-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-lg'>
            <div className='bg-magenta size-2.5 rounded-full relative'>
              <div className='bg-magenta absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-semibold'>
              Yssa Amigable
            </div>
          </div>

          <div className='max-w-lg mx-auto'>
          <div className="text-center mt-8">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-0 flex justify-center">
              <span className="bg-gradient-to-r from-pink to-teal text-transparent bg-clip-text whitespace-nowrap text-center">
                <Typewriter
                  words={[
                    'Aspiring Software Developer',
                    'UX/UI Designer',
                    'Jr. Front End Developer',
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className='mt-8 text-center text-white/60 text-base md:text-lg lg:text-xl mx-auto max-w-lg'>
              With a fresh start in the field, I specialize in bringing design visions to life as dynamic, high-performance web applications. 
              I&apos;m continuously learning and building my skills from the ground up.
            </p>
          </div>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
            <button 
              onClick={scrollToAbout} 
              className='inline-flex items-center gap-2 border text-gray-900 border-transparent bg-white px-6 h-12 rounded-xl transition-transform transform active:scale-95 hover:text-white hover:bg-button-gradient'>
              <span className='font-semibold'>Explore My Work</span>   
              <ArrowDown className='size-4' />
            </button>

            <button 
              onClick={() => window.open(resumeLink, "_blank")} 
              className='inline-flex items-center gap-2 border-transparent bg-button-gradient text-white-900 h-12 px-6 rounded-xl transition-transform transform active:scale-95 hover:text-gray-900 hover:white-bg'>
              <span className='font-semibold'>View My Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};