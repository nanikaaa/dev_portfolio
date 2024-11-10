// pages/Learning.tsx
"use client";

import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import Image, { StaticImageData } from 'next/image';
import { Card } from '@/components/Card';
import react1 from "@/assets/images/react1.jpg";
import react2 from "@/assets/images/react2.jpg";
import oracle from "@/assets/images/oracle.jpg";

interface Certificate {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
}

const Learning: React.FC = () => {
  const certificatesData: Certificate[] = [
    {
      title: 'React: Introduction Course',
      description: 'Completed a foundational course on React, covering core principles and hands-on practice with components, props, state management, and JSX',
      image: react1,
      link: 'https://www.codecademy.com/profiles/byte8314163975/certificates/1bf3e70ae92b43c2a3add66cbfaec661'
    },
    {
      title: 'React: Lifecycle Methods Course',
      description: 'A focused course on React lifecycle methods, detailing component lifecycle phases and best practices for managing state and side effects.',
      image: react2,
      link: 'https://www.codecademy.com/profiles/byte8314163975/certificates/d2c01edb69ee42179f3ca8e1cd1a47a0'
    },
    {
      title: 'Generative AI Certified Professional',
      description: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
      image: oracle,
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=A76C7785C9F2D18195C91AB85565F4DD152656462092CC87DE1AAD0BF4EF7367'
    },
  ];

  return (
    <div className='pt-10'>
      <SectionHeader
        title='Continuous Learning & Upskilling'
        eyebrow='Skill Growth Journey'
        description="Explore how I've expanded my knowledge and honed my abilities through dedicated learning and practice in various fields."
      />

      <div className="justify-center flex-items grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 mt-10 sm:gap-4 lg:gap-2 sm:px-20 lg:px-80">
        {certificatesData.map((certificate, index) => (
          <a
            key={index}
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <Card className="sm:h-[460px] lg:h-[460px] lg:w-[320px] ">
              <div className='flex flex-col items-center py-4 px-4'>
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={280}
                  height={180}
                  className="rounded-lg"
                />
                <div className='text-white text-center mt-4 sm:mt-2 py-2 px-2'>
                  <h3 className='lg:text-xl sm:text-md font-semibold'>{certificate.title}</h3>
                </div>
                <div className='text-white text-sm mt-4 sm:mb-4 pb-4 sm:pb-2 px-2 text-center'>
                  <p className='text-gray-400 text-sm sm:text-base'>
                    {certificate.description}
                  </p>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Learning;