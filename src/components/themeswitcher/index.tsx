"use client";

import clsx from "clsx";
import { LampCeiling } from "lucide-react";
import React from "react";

const icon = {
  light: <LampCeiling size={32} className="fill-yellow-300" />,
  dark: <LampCeiling size={32} className="dark:text-gray-300" />,
};

const ThemeSwitcher = () => {
  const [activeTheme, setActiveTheme] = React.useState<"light" | "dark">(
    localStorage.theme || "light"
  );
  const buttonClasses = clsx(
    activeTheme === "light" && "hover:bg-gray-300 rounded-md p-1",
    activeTheme === "dark" && "hover:bg-gray-100 rounded-md p-1"
  );

  const setDarkTheme = () => {
    localStorage.theme = "dark";
    setActiveTheme("dark");
    document.documentElement.classList.add("dark");
  };

  const setLightTheme = () => {
    localStorage.theme = "light";
    setActiveTheme("light");
    document.documentElement.classList.remove("dark");
  };

  React.useEffect(() => {
    if (activeTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [activeTheme]);

  return (
    <button
      className={buttonClasses}
      onClick={() =>
        activeTheme === "light" ? setDarkTheme() : setLightTheme()
      }
    >
      {icon[activeTheme]}
    </button>
  );
};

export default ThemeSwitcher;
