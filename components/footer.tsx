import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center text-white lg:max-w-[1024px] xl:max-w-[1160px] 2xl:max-w-[1320px] mx-auto pb-4 gap-y-4">
      <div className="flex items-center gap-x-4">
        <Image src="/images/logo.svg" alt="logo" width={54} height={54} />
        <h3 className="font-bold text-3xl">HamiFunding</h3>
      </div>
      <p>2024 HamiFunding. All rights reserved.</p>
      <div className="flex items-center gap-x-4">
        <Link href="" className="hover:-translate-y-1 transition-all">
          <FaTelegram size={36} />
        </Link>
        <Link href="" className="hover:-translate-y-1 transition-all">
          <FaInstagram size={36} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
