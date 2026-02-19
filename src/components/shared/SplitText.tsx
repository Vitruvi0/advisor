"use client";

import { motion, type Variants } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const ease = EASE_OUT_EXPO as unknown as [number, number, number, number];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: 40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease },
  },
};

interface SplitTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  stagger?: number;
  delay?: number;
}

export function SplitText({
  text,
  as: Tag = "h1",
  className = "",
  stagger = 0.08,
  delay = 0,
}: SplitTextProps) {
  const MotionTag = motion.create(Tag);
  const words = text.split(" ");

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      style={{ perspective: 600 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </MotionTag>
  );
}
