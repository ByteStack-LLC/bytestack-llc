"use client";

import { JSX } from "react";
import { motion } from "motion/react";
import fede from "../../public/cropped-fede.png";
import fares from "../../public/cropped-fares.png";
import Image, { StaticImageData } from "next/image";

const team = [
  {
    image: fede,
    title: "Software Engineer || Full-Stack Developer",
    description:
      "Federico is a professional Developer with 2-3 years of of Software Engineering experience, 1-2 years of Full-Stack Development and Automation Engineering experience, and 1 year of Data Engineering experience.",
    technologies: [
      "JavaScript",
      "Python",
      "Java",
      "SQL",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Express",
      "Cypress",
    ],
  },

  {
    image: fares,
    title: "Tech Support Lead || Full-Stack Developer",
    description:
      "Fares is a professional Tech Support Lead with 3 years of IT experience, 1 year of Full-Stack Development and Automation Engineering experience, and 2 years of experience with the Microsoft Power Platform.",
    technologies: [
      "JavaScript",
      "Microsoft Power Platform",
      "React",
      "Cypress",
    ],
  },
];

const ScrollReveal = (props: { children: JSX.Element }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {props.children}
    </motion.div>
  );
};

const TeamCard: React.FC<{
  image: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
}> = ({ image, title, description, technologies }) => {
  console.log(title);
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <Image
          src={image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[164px]"
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="text-xl font-semibold">{title}</div>
            <p className="text-gray-400">{description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {technologies.map((tech: string, index: number) => (
              <span key={index} className="rounded-2xl bg-black p-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Team = () => {
  return (
    <div
      id="team"
      className="flex min-h-[200vh] w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          Meet the Team
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {team.map((teammate, index: number) => (
          <TeamCard
            key={index}
            image={teammate.image}
            technologies={teammate.technologies}
            title={teammate.title}
            description={teammate.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
