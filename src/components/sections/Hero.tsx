"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplineScene } from "@/components/shared/SplineScene";
import { SplitText } from "@/components/shared/SplitText";
import { EASE_OUT_EXPO } from "@/lib/motion";

const ease = EASE_OUT_EXPO as unknown as [number, number, number, number];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-between overflow-hidden py-24">
        {/* Eyebrow — word-by-word stagger */}
        <SplitText
          text="Custom Software · High-Performance Web · AI Automation"
          as="p"
          className="relative z-10 text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-muted text-center"
          stagger={0.06}
          delay={0.2}
        />

        {/* Spline 3D */}
        <SplineScene
          scene="https://prod.spline.design/KcxmtJWLnW9AcpOu/scene.splinecode"
          className="pointer-events-none"
        />

        {/* Brand title — word-by-word stagger */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <SplitText
            text="Advisor"
            as="h1"
            className="font-heading text-7xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.9] tracking-tighter text-center"
            stagger={0.1}
            delay={0.1}
          />
        </div>

        {/* Bottom content — tagline + CTAs */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 text-center px-6"
        >
          {/* Tagline — word-by-word stagger */}
          <SplitText
            text="We don't digitize. We revolutionize."
            as="p"
            className="text-lg md:text-xl lg:text-2xl text-muted max-w-xl mx-auto leading-relaxed mb-8"
            stagger={0.07}
            delay={0.6}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease }}
            className="flex justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3.5 bg-primary text-white text-sm font-semibold uppercase tracking-wide rounded-none hover:bg-primary-hover transition-colors"
              style={{ transitionDuration: "200ms" }}
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="px-8 py-3.5 border border-foreground/20 text-foreground text-sm font-semibold uppercase tracking-wide rounded-none hover:border-foreground/50 transition-colors"
              style={{ transitionDuration: "200ms" }}
            >
              See Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
