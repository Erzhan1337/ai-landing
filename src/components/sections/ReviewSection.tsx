"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { REVIEWS } from "@/data";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const ReviewSection = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-400 mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-semibold mb-16 text-center text-white"
        >
          Community Feedback
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
