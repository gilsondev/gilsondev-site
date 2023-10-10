import Image from "next/image";
import React from "react";
import Hyperlink from "../hyperlink";
import { Brain, Github, Linkedin, Mail } from "lucide-react";
import ThemeSwitcher from "../themeswitcher";

const Header = () => {
  return (
    <header className="flex items-center gap-5 py-10 sm:px-0">
      <Image
        src="/avatar.png"
        alt="Gilson Filho"
        width={96}
        height={96}
        className="rounded-full"
      />
      <div className="w-5/6">
        <h1 className="text-2xl lg:text-3xl font-bold dark:text-gray-200">
          Gilson Filho
        </h1>
        <h2 className="font-normal text-sm dark:text-gray-200">
          Fullstack Software Engineer
        </h2>
        <div className="flex gap-3 items-center pt-2">
          <Hyperlink
            className="text-xs md:text-md lg:text-base"
            href="mailto:me@gilsondev.in"
            label={
              <Mail className="dark:text-gray-200 dark:hover:text-gray-500" />
            }
            title="E-mail"
          />
          <Hyperlink
            className="text-xs md:text-md lg:text-base"
            href="https://linkedin.com/in/gilsondev"
            label={
              <Linkedin className="dark:text-gray-200 dark:hover:text-gray-500" />
            }
            target="_blank"
            title="LinkedIn"
          />
          <Hyperlink
            className="text-xs md:text-md lg:text-base"
            href="https://github.com/gilsondev"
            label={
              <Github className="dark:text-gray-200 dark:hover:text-gray-500" />
            }
            target="_blank"
            title="Github"
          />
          <Hyperlink
            className="text-xs md:text-md lg:text-base"
            href="https://notes.gilsondev.in"
            label={
              <Brain className="dark:text-gray-200 dark:hover:text-gray-500" />
            }
            title="Second Brain"
          />
        </div>
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
