import clsx from "clsx";
import { useTranslations } from "next-intl";
import React from "react";
import { techStacks } from "./stacks";

const TechStacks = () => {
  const t = useTranslations("TechStacks");
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold dark:text-gray-200">{t("title")}</h3>
      <ul className="list-none flex flex-wrap justify-center gap-1 mt-3 w-full">
        {techStacks.map((techStack, index) => (
          <li key={index}>
            <span
              className={clsx(
                techStack.backgroundHover,
                techStack.textHover,
                techStack.darkBackgroundHover,
                techStack.darkTextHover,
                "bg-gray-100 dark:bg-gray-700 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-gray-500"
              )}
            >
              {techStack.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStacks;
