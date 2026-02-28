import React from "react";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { REVIEWS } from "@/data";
import {
  StaggerWrapper,
  FadeInUp,
} from "@/components/animations/MotionWrappers";

export const ReviewSection = () => {
  return (
    <section id="solutions" className="py-24 px-6 bg-[#0a0a0a]">
      <StaggerWrapper className="max-w-400 mx-auto">
        <FadeInUp className="text-3xl md:text-4xl font-semibold mb-16 text-center text-white">
          <h2>Community Feedback</h2>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-8">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </StaggerWrapper>
    </section>
  );
};
