import React from "react";

const techStacks = [
  "NextJS",
  "React",
  "JavaScript",
  "TypeScript",
  "TailwindCSS",
  "NodeJS",
  "ExpressJS",
  "GraphQL",
  "PostgreSQL",
  "Scala",
  "Apache Kafka",
  "Apache Spark",
  "Apache Airflow",
  "Java",
  "Spring Boot",
  "Python",
  "Django",
  "FastAPI",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Google Cloud",
  "BigQuery",
  "Pandas",
];

const TechStacks = () => {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold dark:text-gray-200">Tech Stack</h3>
      <ul className="list-none flex flex-wrap justify-center gap-1 mt-3 w-full">
        {techStacks.map((techStack, index) => (
          <li key={index}>
            <span className="bg-gray-100 hover:bg-gray-500 hover:text-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-gray-300 dark:text-gray-400 border border-gray-500">
              {techStack}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStacks;
