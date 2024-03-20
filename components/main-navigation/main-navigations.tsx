"use client";

import { navLinks } from "@/constants/contants";
import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MainNavigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "w-full fixed px-6 py-3 shadow-sm z-50 text-white transition-colors duration-300",
        scrolled && "bg-off-black"
      )}>
      <div className="flex justify-between mx-auto w-full lg:max-w-[1024px] xl:max-w-[1160px] 2xl:max-w-[1320px]">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Sponge Fund logo" width={53} height={52} />
        </Link>
        <ul className="flex items-center gap-x-7">
          {navLinks.map((link) => (
            <li key={link.id} className="hover:scale-110 hover:skew-y-6 transition-all">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
