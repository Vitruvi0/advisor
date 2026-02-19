"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  eyebrowReveal,
  headingReveal,
  bodyReveal,
  statPop,
  staggerSlow,
} from "@/lib/motion";

const stats = [
  { value: "95+", label: "Lighthouse Score" },
  { value: "<2.5s", label: "LCP Target" },
  { value: "3x", label: "Conversion Lift" },
  { value: "100%", label: "Senior Engineers" },
];

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={eyebrowReveal}
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4"
            >
              Why Advisor
            </motion.p>
            <motion.h2
              variants={headingReveal}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            >
              The integrated partner
              <br />
              <span className="text-primary">the mid-market has been missing.</span>
            </motion.h2>
            <motion.p
              variants={bodyReveal}
              className="text-muted text-lg leading-relaxed mb-6"
            >
              Most agencies specialize in one thing. You end up coordinating three vendors just to launch a product. We eliminated that friction.
            </motion.p>
            <motion.p
              variants={bodyReveal}
              className="text-muted text-lg leading-relaxed"
            >
              Custom software. High-performance web. AI automation. Senior engineers on every project. Every sprint tied to a business metric. If it doesn&apos;t move revenue, we don&apos;t ship it.
            </motion.p>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-8 content-center"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statPop}
                className="border-l-2 border-primary pl-6"
              >
                <p className="font-heading text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
