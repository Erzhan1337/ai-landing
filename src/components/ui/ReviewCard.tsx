"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Review } from "@/types";
import { fadeInUp } from "@/lib/framer-variants";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] relative flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex gap-1 mb-4 text-brand-purple">
          {Array.from({ length: review.rating }).map((_, i) => (
            <span key={`star-${review.id}-${i}`}>
              <Star size={15} />
            </span>
          ))}
        </div>
        <p className="text-gray-300 mb-8 leading-relaxed">{review.text}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-brand-purple to-brand-pink shrink-0" />
        <div>
          <div className="font-medium text-white">{review.author}</div>
          <div className="text-sm text-gray-500">{review.role}</div>
        </div>
      </div>
    </motion.div>
  );
};
