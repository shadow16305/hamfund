"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import { useRef } from "react";

interface RoadmapCardProps {
  phase: number;
  text: string;
  color: string;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ i, text, color, progress, range, targetScale, phase }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center sticky top-0">
      <motion.div
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="flex flex-col items-center relative h-fit w-[700px] rounded-xl p-12 origin-top">
        <h2 className="text-center m-0 text-2xl">Phase {phase}</h2>
        <div className="flex justify-center text-center h-full">
          <div className="w-2/3 relative top-[10%]">
            <p>{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadmapCard;
