import type { Variants, Transition } from "framer-motion";

// ── Premium Easing Curves ──────────────────────────────────────
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_OUT_QUINT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_OUT_CIRC: [number, number, number, number] = [0, 0.55, 0.45, 1];

// ── Shared Transition Presets ──────────────────────────────────
const slow: Transition = { duration: 1, ease: EASE_OUT_EXPO };
const medium: Transition = { duration: 0.8, ease: EASE_OUT_EXPO };
const fast: Transition = { duration: 0.6, ease: EASE_OUT_QUINT };

// ── Fade Variants ──────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: medium },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: slow },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: medium },
};

// ── Slide Variants ─────────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: slow },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: slow },
};

// ── Reveal (clip-path mask) ────────────────────────────────────
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 80, clipPath: "inset(20% 0% 0% 0%)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 1.1, ease: EASE_OUT_EXPO },
  },
};

// ── Scale Variants ─────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: slow },
};

// ── Line Draw (width expand) ───────────────────────────────────
export const lineExpand: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: EASE_OUT_EXPO },
  },
};

// ── Stagger Containers ─────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export const staggerSlow: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

// ── Eyebrow (subtle letter-spacing feel) ───────────────────────
export const eyebrowReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_QUINT },
  },
};

// ── Heading (dramatic reveal) ──────────────────────────────────
export const headingReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE_OUT_EXPO },
  },
};

// ── Body text ──────────────────────────────────────────────────
export const bodyReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_QUINT },
  },
};

// ── Stat counter pop ───────────────────────────────────────────
export const statPop: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

// ── Card reveal (for service/project rows) ─────────────────────
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40, x: -20 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

// ── Vertical Slide (full-height wipe) ───────────────────────────
export const slideUpFull: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 1.2, ease: EASE_OUT_EXPO },
  },
};

export const slideDownReveal: Variants = {
  hidden: { opacity: 0, y: -120 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: EASE_OUT_EXPO },
  },
};

// ── Letter stagger (for large display text) ─────────────────────
export const letterStagger: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
};

export const letterSlideUp: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};
