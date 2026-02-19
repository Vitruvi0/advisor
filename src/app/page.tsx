"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplineScene } from "@/components/shared/SplineScene";
import { Container } from "@/components/ui/Container";
import {
  letterStagger,
  letterSlideUp,
  fadeInUp,
  staggerContainer,
  cardReveal,
  lineExpand,
  eyebrowReveal,
  bodyReveal,
} from "@/lib/motion";

const BRAND = "ADVISOR";

const services = [
  {
    number: "01",
    title: "Custom Software Development",
    description:
      "End-to-end product engineering — from MVPs to enterprise platforms. We build systems that scale with your ambition.",
    capabilities: [
      "SaaS Platforms",
      "Internal Tools",
      "API Architecture",
      "Cloud Infrastructure",
      "DevOps & CI/CD",
      "Legacy Modernization",
    ],
  },
  {
    number: "02",
    title: "High-Performance Web",
    description:
      "Websites engineered for speed, conversion, and search dominance. Sub-second loads. Lighthouse 95+. Revenue-driving design.",
    capabilities: [
      "Next.js / React",
      "Headless CMS",
      "Performance Optimization",
      "Conversion Design",
      "SEO Architecture",
      "Analytics Integration",
    ],
  },
  {
    number: "03",
    title: "AI Automation",
    description:
      "Intelligent systems that eliminate manual work and unlock new capabilities. Custom AI agents, workflows, and integrations.",
    capabilities: [
      "AI Agents",
      "Workflow Automation",
      "LLM Integration",
      "Data Pipelines",
      "Predictive Analytics",
      "Process Intelligence",
    ],
  },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <>
      {/* ── Hero — Clean landing: ADVISOR + Spline only ── */}
      <section ref={heroRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Spline 3D Background */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0"
          >
            <SplineScene
              scene="https://prod.spline.design/KcxmtJWLnW9AcpOu/scene.splinecode"
              className="pointer-events-none"
            />
          </motion.div>

          {/* Big Bold ADVISOR — letter-by-letter vertical slide */}
          <motion.div
            style={{ y: textY }}
            className="relative z-10 flex items-center justify-center"
          >
            <motion.h1
              variants={letterStagger}
              initial="hidden"
              animate="visible"
              className="font-heading text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-bold leading-[0.85] tracking-tighter text-foreground select-none"
            >
              {BRAND.split("").map((letter, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    variants={letterSlideUp}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="py-32 md:py-40">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.article
                key={service.number}
                variants={cardReveal}
                className="group"
              >
                {index === 0 && (
                  <motion.div
                    variants={lineExpand}
                    className="h-px bg-foreground/10 mb-16"
                  />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 lg:py-20">
                  <div className="lg:col-span-2">
                    <span className="font-heading text-5xl md:text-6xl font-bold text-foreground/10 group-hover:text-primary transition-colors duration-500">
                      {service.number}
                    </span>
                  </div>

                  <div className="lg:col-span-5">
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                      {service.title}
                    </h2>
                    <p className="text-muted text-base md:text-lg leading-relaxed max-w-lg">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5 flex flex-wrap gap-3 items-start content-start">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-4 py-2 border border-foreground/10 text-xs font-medium uppercase tracking-wide text-muted group-hover:border-foreground/30 group-hover:text-foreground transition-all duration-500"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  variants={lineExpand}
                  className="h-px bg-foreground/10"
                />
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Approach Section ── */}
      <section className="py-32 md:py-40 bg-foreground text-background">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
          >
            <div>
              <motion.p
                variants={eyebrowReveal}
                className="text-xs font-medium uppercase tracking-[0.25em] text-background/50 mb-6"
              >
                Our Approach
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                One team.
                <br />
                Three pillars.
                <br />
                <span className="text-primary">Measurable outcomes.</span>
              </motion.h2>
            </div>

            <motion.div variants={bodyReveal} className="flex items-end">
              <p className="text-background/70 text-lg md:text-xl leading-relaxed">
                Most agencies specialize in one thing and outsource the rest.
                Advisor integrates custom software, high-performance web, and
                AI automation under one roof — eliminating the coordination tax
                and delivering compound results that siloed vendors can&apos;t match.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24"
          >
            {[
              {
                step: "01",
                title: "Discover",
                text: "Deep-dive into your business, users, and competitive landscape to define the highest-impact opportunities.",
              },
              {
                step: "02",
                title: "Build",
                text: "Rapid, iterative development with weekly demos. No black boxes — full transparency from sprint one.",
              },
              {
                step: "03",
                title: "Scale",
                text: "Launch, measure, optimize. Continuous improvement driven by real data and real business outcomes.",
              },
            ].map((item) => (
              <motion.div key={item.step} variants={cardReveal}>
                <span className="font-heading text-6xl font-bold text-background/10">
                  {item.step}
                </span>
                <h3 className="font-heading text-2xl font-bold mt-4 mb-4">
                  {item.title}
                </h3>
                <p className="text-background/60 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-32 md:py-40">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.p
              variants={eyebrowReveal}
              className="text-xs font-medium uppercase tracking-[0.25em] text-muted mb-6"
            >
              Ready to start?
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
            >
              Let&apos;s build something
              <br />
              <span className="text-primary">extraordinary.</span>
            </motion.h2>
            <motion.div
              variants={bodyReveal}
              className="flex justify-center gap-4"
            >
              <a
                href="/contact"
                className="px-8 py-3.5 bg-primary text-white text-sm font-semibold uppercase tracking-wide hover:bg-primary-hover transition-colors"
                style={{ transitionDuration: "200ms" }}
              >
                Start a Project
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
