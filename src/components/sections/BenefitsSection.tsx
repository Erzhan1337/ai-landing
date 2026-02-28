"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Benefit } from "@/types";
import { BENEFITS } from "@/data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const BenefitsSection = () => {
  return (
    <section className="py-24 px-6 max-w-400 mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold mb-16 text-center text-white"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit: Benefit) => (
            <motion.div
              key={benefit.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm hover:border-brand-purple/50 transition-colors"
            >
              <div className="text-4xl mb-6">{<benefit.icon />}</div>
              <h3 className="text-xl font-medium mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
