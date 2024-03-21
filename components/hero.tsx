"use client";

import Image from "next/image";
import { useScroll, useTransform, motion, useMotionValue, animate, useMotionTemplate } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  const { scrollY } = useScroll();
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const yHero = useTransform(scrollY, [0, 200], [0, -150]);
  const opacityHero = useTransform(scrollY, [0, 300, 400, 500], [1, 0.7, 0.3, 0]);
  const opacityArrow = useTransform(scrollY, [0, 200, 300, 500], [1, 1, 0, 0]);
  const opacityBackground = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);
  const yStars = useTransform(scrollY, [0, 200], [0, -80]);

  return (
    <motion.section className="h-screen flex flex-col relative text-white items-center justify-center">
      <motion.div style={{ y: yHero, opacity: opacityHero }} className="flex flex-col items-center">
        <Image src="/images/hero-ham.png" alt="hamster at the top" width={300} height={300} />
        <h1 className="text-4xl lg:text-8xl font-bold">HamFunding</h1>
        <p className="text-2xl text-center max-w-[510px]">A hamsters meme coin that goes beyond entertainment.</p>
      </motion.div>
      <motion.div style={{ opacity: opacityArrow }}>
        <IoIosArrowDown size={40} className="animate-bounce absolute left-1/2 -translate-x-1/2 bottom-10" />
      </motion.div>
      <motion.div style={{ backgroundImage, opacity: opacityBackground }} className="w-full h-full absolute -z-10">
        <motion.div className="absolute inset-0 z-0" style={{ y: yStars }}>
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
