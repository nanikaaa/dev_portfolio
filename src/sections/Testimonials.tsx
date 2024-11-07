import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Colleague",
    position: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: memojiAvatar1,
  },
  {
    name: "Colleague",
    position: "Lorem Ipsum",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    avatar: memojiAvatar2,
  },
  {
    name: "Colleague",
    position: "Lorem Ipsum",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    avatar: memojiAvatar3,
  },
  {
    name: "Colleague",
    position: "Lorem Ipsum",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    avatar: memojiAvatar4,
  },
  {
    name: "Colleague",
    position: "Lorem Ipsum",
    text: "Ultrices consequat mi vestibulum mi; aliquam habitasse. Blandit sem nec cras placerat praesent adipiscing. Felis cursus pulvinar eu himenaeos orci quis nam amet. ",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24 pb-20">
      <div className="container">
        <SectionHeader 
          title="What Colleagues Say About Me" 
          eyebrow="Trusted Feedback"
          description="Don't just take my words for it. See what my colleagues have to say about my me."/>

        <div className="mt-16 lg:mt-24 flex overflow-x-clip py-4 -m-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => 
            <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className="max-w-xs md:p-8 md:max-w-md p-6 hover:-rotate-3 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="max-h-full"/>
                      </div>
                      <div>

                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:text-base md:mt-6">{testimonial.text}</p>  
                  </Card>
                ))}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  )
};
