"use client";

import { LampCeiling } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="hover:bg-gray-300 dark:hover:bg-gray-100 rounded-md p-1"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <LampCeiling
        size={32}
        className="fill-yellow-300 dark:text-gray-500 dark:fill-none"
      />
    </button>
  );
};

export default ThemeSwitcher;
