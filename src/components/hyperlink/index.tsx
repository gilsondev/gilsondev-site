import clsx from "clsx";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

interface HyperlinkProps {
  href: string | HTMLAnchorElement;
  text: string;
  target?: string;
  className?: string;
}

const Hyperlink = ({
  href,
  text,
  className,
  target = "self",
}: HyperlinkProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        "flex gap-1 items-center hover:text-gray-500 text-md sm:text-lg lg:text-base underline group"
      )}
      target={target}
    >
      {text}
      <ExternalLink
        size={12}
        className="group-hover:text-gray-500 mb-4 -ml-1"
      />
    </Link>
  );
};

export default Hyperlink;
