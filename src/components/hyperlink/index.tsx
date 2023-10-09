import clsx from "clsx";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

interface HyperlinkProps {
  href: string | HTMLAnchorElement;
  label: string | React.ReactNode;
  target?: string;
  className?: string;
}

const Hyperlink = ({
  href,
  label,
  className,
  target = "self",
}: HyperlinkProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        "flex gap-1 items-center hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-500 underline group"
      )}
      target={target}
    >
      {label}
      {typeof label === "string" && (
        <ExternalLink
          size={12}
          className="group-hover:text-gray-500 mb-4 -ml-1"
        />
      )}
    </Link>
  );
};

export default Hyperlink;
