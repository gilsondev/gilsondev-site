import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-5 items-center px-5 py-5 lg:px-16">
      <Link href="/">
        <Image src="/logo.svg" alt="Gilson Filho" width={36} height={36} />
      </Link>
      <nav>
        <Link href="#" className="hover:text-gray-500 text-xs lg:text-base">
          Meus Projetos
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
