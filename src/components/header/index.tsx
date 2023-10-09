import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hyperlink from "../hyperlink";

const Header = () => {
  return (
    <header className="flex items-center gap-5 px-5 py-10 sm:px-24 lg:px-96 lg:mx-28">
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
            className="text-xs"
            href="mailto@me@gilsondev.in"
            text="E-mail"
          />
          <Hyperlink
            className="text-xs"
            href="https://linkedin.com/in/gilsondev"
            text="LinkedIn"
            target="_blank"
          />
          <Hyperlink
            className="text-xs"
            href="https://github.com/gilsondev"
            text="Github"
            target="_blank"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
