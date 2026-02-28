import React from "react";
import { motion, Variants } from "framer-motion";
import { Review } from "../../types";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  review: Review;
}
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const ReviewCard: React.FC<TestimonialCardProps> = ({ review }) => {
  return (
    <motion.div
      variants={cardVariant}
      className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] relative flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex gap-1 mb-4 text-[var(--color-brand-purple)]">
          {[...Array(review.rating)].map((_, i) => (
            <span key={i}>
              <Star size={15} />
            </span>
          ))}
        </div>
        <p className="text-gray-300 mb-8 leading-relaxed">{review.text}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-brand-purple)] to-[var(--color-brand-pink)] shrink-0" />
        <div>
          <div className="font-medium text-white">{review.author}</div>
          <div className="text-sm text-gray-500">{review.role}</div>
        </div>
      </div>
    </motion.div>
  );
};
