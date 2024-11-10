import project1 from "@/assets/images/project1.gif";
import project2 from "@/assets/images/project2.gif";
import project3 from "@/assets/images/project3.gif";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "CareFilo",
    year: "2024",
    title: "Patient Appointment System",
    results: [
      { title: "Developed with Next.js and Tailwind CSS for a responsive, modern UI" },
      { title: "Integrated Appwrite for secure and efficient backend functionality" },
      { title: "Enhanced user interaction using optimized API calls and React components" },
    ],
    link: "https://care-filo-7amc.vercel.app/",
    image: project1,
  },
  {
    company: "Cloning iPhone 15",
    year: "2024",
    title: "Brand Blog Website",
    results: [
      { title: "Built with React.js and TypeScript for scalable, high-performance code" },
      { title: "Utilized Tailwind CSS to streamline styling and enhance mobile responsiveness" },
      { title: "Optimized page load speed with image and asset preloading via Next.js" },
    ],
    link: "https://iphone15-blog.vercel.app/",
    image: project2,
  },
  {
    company: "Blossom Trees",
    year: "2024",
    title: "Brand Marketing Website",
    results: [
      { title: "Leveraged Bootstrap and jQuery for quick, responsive layout creation" },
      { title: "Implemented smooth animations with jQuery to engage visitors" },
      { title: "Focused on cross-browser compatibility, ensuring a seamless experience" },
    ],
    link: "https://blossom-trees.netlify.app/",
    image: project3,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 pt-10 lg:py-24">
      <div className="container pt-10">
        <SectionHeader 
          title="Featured Projects" 
          eyebrow="Skill-Building Projects"
          description="See how I brought ideas to life and developed my skills through various practice projects."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                  top: `calc(64px + ${projectIndex * 40}px`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from bg-pink to-teal inline-flex gap-2 
                  font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="w-5 h-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex 
                      items-center justify-center gap-2 mt-8 hover:bg-gray-200 transition-all"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </button>
                  </a>
                </div>   
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none 
                    rounded-lg border border-gray-200 shadow-lg"
                    unoptimized
                    loading="lazy"
                    priority={false}
                    style={{
                      borderRadius: '15px',
                      boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)', 
                    }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
