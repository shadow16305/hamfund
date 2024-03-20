import { navLinks } from "@/constants/contants";
import Image from "next/image";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <nav className="lg:w-[1024px] xl:w-[1160px] 2xl:w-[1320px] bg-off-white fixed left-1/2 -translate-x-1/2 mt-6 flex justify-between rounded-[32px] px-6 py-3 shadow-sm z-50">
      <Link href="/">
        <Image src="/images/logo.svg" alt="Sponge Fund logo" width={53} height={52} />
      </Link>
      <ul className="flex items-center gap-x-7">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
