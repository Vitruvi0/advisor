"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const footerLinks = {
  services: [
    { label: "Custom Software", href: "#services" },
    { label: "High-Performance Web", href: "#services" },
    { label: "AI Automation", href: "#services" },
    { label: "AI Ops", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  connect: [
    { label: "Contact", href: "#contact" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Twitter", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading text-2xl font-bold mb-4">Advisor</h3>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              We don&apos;t digitize. We revolutionize. Custom software, high-performance web, and AI automation under one roof.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} Advisor. All rights reserved.
          </p>
          <p className="text-xs text-background/40">
            Built with precision. Delivered with impact.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
