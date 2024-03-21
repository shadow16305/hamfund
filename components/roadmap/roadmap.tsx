"use client";

import { useScroll } from "framer-motion";
import { useEffect } from "react";
import RoadmapCard from "./roadmap-card";
import Lenis from "@studio-freight/lenis";
import { roadmapContent } from "@/constants/contants";

const Roadmap = () => {
  const { scrollY } = useScroll();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <section className="relative flex flex-col items-center gap-x-12" id="roadmap">
      <h2 className="text-4xl lg:text-[72px] text-white font-bold sticky top-24">Roadmap</h2>
      <div>
        {roadmapContent.map((item, i) => {
          const targetScale = 1 - (roadmapContent.length - i) * 0.05;
          return (
            <RoadmapCard
              key={`p_${i}`}
              i={i}
              text={item.description}
              {...item}
              progress={scrollY}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Roadmap;
