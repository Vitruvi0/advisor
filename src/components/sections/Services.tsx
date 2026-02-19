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

const services = [
  {
    number: "01",
    title: "Custom Software Development",
    description:
      "Architected for scale. Built for performance. From complex SaaS platforms to enterprise integrations — we engineer software that compounds your competitive advantage.",
    capabilities: ["Full-Stack Development", "API Architecture", "System Design", "Cloud Infrastructure"],
  },
  {
    number: "02",
    title: "High-Performance Web",
    description:
      "Every 100ms of latency costs 1% of revenue. We build conversion-optimized, edge-deployed web experiences that load instantly and convert relentlessly.",
    capabilities: ["Next.js / React", "Core Web Vitals", "Headless CMS", "Edge Deployment"],
  },
  {
    number: "03",
    title: "AI Automation",
    description:
      "From intelligent agents to workflow automation — we don't just integrate AI. We build the intelligence layer that transforms how your business operates.",
    capabilities: ["AI Agents", "LLM Integration", "Workflow Automation", "AI Ops & Monitoring"],
  },
];

export function Services() {
  return (
    <Section id="services">
      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 md:mb-24"
        >
          <motion.p variants={eyebrowReveal} className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
            What We Build
          </motion.p>
          <motion.h2 variants={headingReveal} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
            Three disciplines.
            <br />
            <span className="text-primary">One integrated team.</span>
          </motion.h2>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-0"
        >
          {services.map((service) => (
            <div key={service.number}>
              {/* Animated divider line */}
              <motion.div variants={lineExpand} className="h-px bg-border" />

              <motion.div variants={cardReveal} className="group py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                  <div className="md:col-span-1">
                    <span className="text-xs font-medium text-muted">{service.number}</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-muted leading-relaxed mb-6 max-w-lg">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="text-xs font-medium uppercase tracking-wider text-foreground/60 border border-border px-3 py-1.5"
                        >
                          {cap}
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
