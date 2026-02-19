"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  eyebrowReveal,
  revealUp,
  bodyReveal,
  fadeInUp,
} from "@/lib/motion";

export function CTA() {
  return (
    <Section id="contact">
      <Container size="narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <motion.p
            variants={eyebrowReveal}
            className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4"
          >
            Start Building
          </motion.p>
          <motion.h2
            variants={revealUp}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-8"
          >
            Ready to stop
            <br />
            <span className="text-primary">coordinating vendors?</span>
          </motion.h2>
          <motion.p
            variants={bodyReveal}
            className="text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed mb-12"
          >
            One partner. Custom software, high-performance web, and AI automation.
            Let&apos;s talk about what measurable impact looks like for your business.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" href="mailto:hello@advisor.dev">
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" href="#services">
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
