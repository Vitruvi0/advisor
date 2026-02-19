"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  eyebrowReveal,
  headingReveal,
  cardReveal,
  lineExpand,
  staggerSlow,
} from "@/lib/motion";

const projects = [
  {
    category: "SaaS Platform",
    title: "AI-Powered Analytics Dashboard",
    description: "Full-stack platform with real-time AI insights, reducing client decision time by 60%.",
    metrics: ["4.2s → 0.8s LCP", "340% lead increase", "Next.js + AI Agents"],
  },
  {
    category: "E-Commerce",
    title: "Headless Commerce Migration",
    description: "Composable architecture rebuild delivering sub-second loads and AI-driven personalization.",
    metrics: ["98 Lighthouse", "2.1x conversion lift", "Edge-Deployed"],
  },
  {
    category: "Enterprise",
    title: "Workflow Automation Suite",
    description: "Custom AI automation replacing 12 manual processes, saving 2,400+ hours annually.",
    metrics: ["$1.2M saved/year", "12 workflows automated", "LLM Integration"],
  },
];

export function Work() {
  return (
    <Section id="work" className="bg-foreground text-background">
      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 md:mb-24"
        >
          <motion.p variants={eyebrowReveal} className="text-xs font-medium uppercase tracking-[0.2em] text-background/40 mb-4">
            Selected Work
          </motion.p>
          <motion.h2 variants={headingReveal} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
            Results that
            <br />
            <span className="text-primary">speak for themselves.</span>
          </motion.h2>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-0"
        >
          {projects.map((project, i) => (
            <div key={i}>
              <motion.div variants={lineExpand} className="h-px bg-background/10" />

              <motion.div variants={cardReveal} className="group py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                  <div className="md:col-span-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-background/40">
                      {project.category}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-background/60 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="text-xs font-medium text-primary border border-primary/30 px-3 py-1.5"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
