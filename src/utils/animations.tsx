// src/utils/animations.ts
import { Variants } from "framer-motion";

export const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5 }
  }
};

export const fadeSimple: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45 } }
};
