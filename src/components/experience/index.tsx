import Image from "next/image";
import React from "react";

const lastExperiences = [
  {
    organizationImage: "/jusbrasil.jpg",
    title: "Senior Fullstack Software Engineer - Jusbrasil",
    date: "2021 - Atual",
  },
  {
    organizationImage: "/behup.jpg",
    title: "Java Software Engineer - Behup",
    date: "2019",
  },
  {
    organizationImage: "/capgemini.jpg",
    title: "Data Engineer - Capgemini",
    date: "2019",
  },
  {
    organizationImage: "/enap.jpg",
    title: "Senior Python Developer - Enap",
    date: "2017",
  },
];

const Experience = () => {
  return (
    <div className="mt-16">
      <h3 className="text-xl font-semibold dark:text-gray-200">
        Últimas experiências
      </h3>
      <ul className="list-none flex flex-col gap-5 mt-3">
        {lastExperiences.map((experience, index) => (
          <li
            key={index}
            className="flex items-center gap-1 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md"
          >
            <Image
              src={experience.organizationImage}
              width={64}
              height={64}
              alt="Logo Jusbrasil"
              className="rounded-full"
            />
            <div className="flex flex-col gap-1 items-start">
              <h4 className="px-5 font-semibold">{experience.title}</h4>
              <span className="pl-5 text-xs">{experience.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
