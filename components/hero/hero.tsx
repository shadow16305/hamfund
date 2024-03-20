"use client";

import Image from "next/image";
import ScrollArrow from "./scroll-arrow";
import { useScroll, useTransform, motion } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();

  const yBackground = useTransform(scrollY, [0, 200], [0, -100]);
  const opacityBackground = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);
  const yHero = useTransform(scrollY, [0, 200], [0, -150]);
  const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 400]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);
  const colorText = useTransform(yText, [0, 100], ["#FFFFFF", "#000000"]);
  const opacityArrow = useTransform(scrollY, [0, 200, 300, 500], [1, 1, 0, 0]);

  return (
    <section className="h-screen flex flex-col relative text-white items-center justify-center">
      <motion.div style={{ scale: scaleText, y: yText, color: colorText }} className="flex flex-col items-center">
        <h1 className="font-sans text-[96px]">SpongeFund</h1>
        <p className="text-2xl text-center max-w-[510px]">Spongebob’s meme coin that goes beyond entertainment.</p>
      </motion.div>
      <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute left-0 bottom-0">
        <Image src="/images/hero-sponge.png" alt="spongebob at the top" width={408} height={408} />
      </motion.div>
      <motion.div className="absolute w-full h-full -z-10" style={{ opacity: opacityBackground, y: yBackground }}>
        <Image src="/images/hero-bg.png" alt="hero background" fill />
      </motion.div>
      <motion.div style={{ opacity: opacityArrow }}>
        <ScrollArrow />
      </motion.div>
    </section>
  );
};

export default Hero;
