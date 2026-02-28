import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  StaggerWrapper,
  FadeInUp,
  FloatingImageWrapper,
} from "@/components/animations/MotionWrappers";

export const HeroSection = () => {
  return (
    <section
      id="smart-contracts"
      className="relative pt-32 lg:pt-48 flex flex-col items-center min-h-[90vh] md:min-h-screen overflow-hidden px-4"
    >
      <StaggerWrapper className="text-center max-w-4xl mx-auto z-20 relative">
        <FadeInUp className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-wide leading-tight mb-6">
          <h1>
            <span className="text-gradient uppercase">
              The Best Website Ever
            </span>
            <br />
            <span className="text-white">Scalable.</span>
          </h1>
        </FadeInUp>

        <FadeInUp className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          <p>
            Our technology performing fast blockchain (120K TPS) and it has
            guaranteed AI-based data security. Proof of Stake, its consensus
            algorithm enables unlimited speeds.
          </p>
        </FadeInUp>

        <FadeInUp className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button variant="primary">Get started</Button>
          <Button variant="secondary">Read more</Button>
        </FadeInUp>
      </StaggerWrapper>

      <div className="relative w-full max-w-400 h-100 sm:h-125 md:h-162 -mt-10 md:-mt-24 z-10 flex justify-center pointer-events-none">
        <FloatingImageWrapper className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-brand-purple/30 blur-[120px] rounded-full -z-10" />
          <Image
            src="/img.png"
            alt="AI Robots Illustration"
            fill
            className="object-contain object-top"
            priority
          />
        </FloatingImageWrapper>
      </div>
    </section>
  );
};
