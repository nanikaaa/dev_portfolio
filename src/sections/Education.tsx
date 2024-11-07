"use client";

import SectionHeader from '@/components/SectionHeader';
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/Card';
import StarIcon from '@/assets/icons/star.svg';

const educationData = [
  { 
    type: "education", 
    monthYear: "March 2014", 
    title: "Nuro Central Elementary School", 
    subtitle: "",  
    gwa: "", 
    description: "Completed primary education with honors, demonstrating academic excellence." 
  },
  { 
    type: "education", 
    monthYear: "March 2018", 
    title: "Notre Dame of Upi, Inc.", 
    subtitle: "",  
    gwa: "", 
    description: "Graduated from junior high school with high honors, awarded for leadership and excellence in sports." 
  },
  { 
    type: "education", 
    monthYear: "June 2020", 
    title: "Polytechnic University of the Philippines", 
    subtitle: "Science, Technology, Engineering, and Mathematics (STEM)", 
    gwa: "", 
    description: "Completed senior high school in the STEM academic track, building a strong foundation in technical disciplines." 
  },
  { 
    type: "education", 
    monthYear: "October 2024", 
    title: "Polytechnic University of the Philippines", 
    subtitle: "Bachelor of Science in Information Technology", 
    gwa: "1.30", 
    description: "Graduated with a Bachelor's degree in Information Technology, achieving a General Weighted Average of 1.30." 
  },
];

const workExperienceData = [
  { 
    type: "work", 
    monthYear: "July - September 2020", 
    title: "Office Staff",  
    subtitle: "",  
    gwa: "", 
    description: "Provided administrative support and assisted in day-to-day operations, enhancing organizational efficiency." 
  },
  { 
    type: "work", 
    monthYear: "July - September 2021", 
    title: "Youth Councilor",  
    subtitle: "",  
    gwa: "", 
    description: "Engaged in community development initiatives and contributed to local youth programs, supporting community welfare." 
  },
  { 
    type: "work", 
    monthYear: "February - April 2024", 
    title: "Data Encoder",  
    subtitle: "",  
    gwa: "", 
    description: "Accurately input and managed data, ensuring database integrity and supporting data-driven decision-making." 
  },
  { 
    type: "work", 
    monthYear: "April - July 2024", 
    title: "Front-End Developer Intern",  
    subtitle: "",  
    gwa: "", 
    description: "Developed responsive web interfaces, enhancing user experience and supporting mobile-friendly design." 
  },
];

// Combine and sort the data by date
const combinedData = [...educationData, ...workExperienceData].sort((a, b) => Date.parse(a.monthYear) - Date.parse(b.monthYear));

// Animation variants for scroll reveal
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const EducationSection = () => {
  return (
    <div className="py-20 lg:py-28 ">
      <div className="container pt-10 pb-20 relative z-10">
        <SectionHeader
          title="Education & Experience"
          eyebrow="My Journey"
          description="Highlighting the education I've received and the work experiences I've gained."
        />
      
        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Skeleton Stick Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-teal to-pink h-full" style={{ minHeight: '100%' }}></div>

          {/* Combined Timeline */}
          <div className="flex flex-col space-y-12 col-span-3 relative">
            {combinedData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.2, delay: index * 0.2 }}
                  variants={cardVariants}
                  className={`flex items-center ${isLeft ? 'justify-start mr-20' : 'justify-end ml-20'} relative`}
                >
                  {/* Card */}
                  <Card className="p-6 w-full max-w-lg relative shadow-lg">
                    <div className="inline-flex items-center gap-2">
                      <StarIcon className="size-6 text-pink" />
                      <h4 className="bg-gradient-to-r from-pink to-teal bg-clip-text text-sm uppercase text-transparent tracking-widest">{item.monthYear}</h4>
                    </div>
                    <h5 className="font-bold sm:text-base lg:text-lg text-gray-100">{item.title}</h5>

                    <h6 className="text-white text-sm ml-0 pb-0">{item.subtitle}</h6>
                    <hr className="border-t-2 border-white/5 pb-2 mt-2"  />

                    {item.gwa && (
                      <button className="mt-2 pl-1 pr-1 inline-flex items-center gap-2 border-transparent bg-slate-50 relative z-0 rounded-md text-gray-950 font-semibold sm:text-sm lg:text-md">GWA : {item.gwa}</button>
                    )}
                    <p className="mt-2 sm:text-sm md:text-base text-gray-400">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
