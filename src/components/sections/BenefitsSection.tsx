import { BENEFITS } from "@/data";
import {
  StaggerWrapper,
  FadeInUp,
  BenefitCardWrapper,
} from "@/components/animations/MotionWrappers";

export const BenefitsSection = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-400 mx-auto">
      <StaggerWrapper>
        <FadeInUp className="text-3xl md:text-4xl font-semibold mb-16 text-center text-white">
          <h2>Why Choose Us</h2>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <BenefitCardWrapper
                key={benefit.id}
                className="p-8 rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm transition-all duration-300 hover:border-brand-purple/50 hover:-translate-y-2"
              >
                <div className="text-4xl mb-6">
                  <Icon />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </BenefitCardWrapper>
            );
          })}
        </div>
      </StaggerWrapper>
    </section>
  );
};
