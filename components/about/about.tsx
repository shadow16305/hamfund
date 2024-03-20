"use client";

import { aboutText } from "@/constants/contants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const About = () => {
  const { scrollY } = useScroll();

  const rocketOneXTransform = useTransform(
    scrollY,
    [0, 200, 300, 400, 500, 600, 700, 800],
    [-250, 200, 500, 800, 1100, 1400, 1700, 2000]
  );
  const rocketTwoXTransform = useTransform(
    scrollY,
    [0, 200, 300, 400, 500, 600, 700, 800],
    [2000, 1700, 1400, 1100, 800, 500, 200, -250]
  );
  const xCard = useTransform(scrollY, [0, 200, 400, 500], [600, 400, 200, 0]);

  return (
    <section className="overflow-x-hidden" id="about">
      <motion.div style={{ x: rocketOneXTransform }}>
        <Image src="/images/ham-rocket.png" alt="the hamster rocke" width={300} height={250} />
      </motion.div>
      <motion.div style={{ x: xCard }} className="flex justify-center mx-auto gap-x-16 max-w-[1320px]">
        {aboutText.map((item) => (
          <p key={item.id} className="rounded-xl text-white lg:max-w-[700px]">
            {item.text}
          </p>
        ))}
      </motion.div>
      <motion.div style={{ x: rocketTwoXTransform }}>
        <Image src="/images/ham-rocket-two.png" alt="the hamster rocket" width={300} height={250} />
      </motion.div>
    </section>
  );
};

export default About;
