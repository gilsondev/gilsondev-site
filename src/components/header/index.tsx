import Image from "next/image";
import React from "react";
import Hyperlink from "../hyperlink";
import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center gap-5 py-10 sm:px-0">
      <Image
        src="/avatar.jpeg"
        alt="Gilson Filho"
        width={96}
        height={96}
        className="rounded-full"
      />
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold">Gilson Filho</h1>
        <h2 className="font-normal text-sm">Fullstack Software Engineer</h2>
        <div className="flex gap-3 items-center pt-2">
          <Hyperlink
            className="text-xs md:text-md lg:text-base"
            href="mailto:me@gilsondev.in"
            label={<Mail />}
          />
          <Hyperlink
            className="text-xs md:text-md lg:text-base"
            href="https://linkedin.com/in/gilsondev"
            label={<Linkedin />}
            target="_blank"
          />
          <Hyperlink
            className="text-xs md:text-md lg:text-base"
            href="https://github.com/gilsondev"
            label={<Github />}
            target="_blank"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
