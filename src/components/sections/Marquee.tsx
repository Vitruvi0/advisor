"use client";

import { motion } from "framer-motion";

const items = [
  "Custom Software",
  "High-Performance Web",
  "AI Automation",
  "AI Agents",
  "Headless Commerce",
  "Edge Deployment",
  "LLM Integration",
  "Conversion Optimization",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="py-8 border-y border-border overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex gap-8 whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm md:text-base font-medium uppercase tracking-[0.15em] text-muted flex items-center gap-8"
          >
            {item}
            <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
