"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-variants";

export const StaggerWrapper = (props: HTMLMotionProps<"div">) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
    {...props}
  />
);

export const FadeInUp = (props: HTMLMotionProps<"div">) => (
  <motion.div variants={fadeInUp} {...props} />
);

export const BenefitCardWrapper = (props: HTMLMotionProps<"div">) => (
  <motion.div variants={fadeInUp} {...props} />
);

export const FloatingImageWrapper = (props: HTMLMotionProps<"div">) => (
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    {...props}
  />
);
