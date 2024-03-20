import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const ScrollArrow = () => {
  return (
    <Link href="#about" className="absolute left-1/2 -translate-x-1/2 bottom-10">
      <IoIosArrowDown size={40} className="animate-bounce" />
    </Link>
  );
};

export default ScrollArrow;
