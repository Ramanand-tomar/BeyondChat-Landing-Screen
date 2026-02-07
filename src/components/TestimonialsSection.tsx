import { Star } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "The AI video call platform has revolutionized our global meetings. Real-time translation in 100+ languages means we can collaborate seamlessly with teams worldwide.",
    author: "Sarah Chen",
    role: "VP of Global Operations",
    company: "TechFlow Inc.",
    avatar: "SC",
  },
  {
    quote: "Crystal-clear 4K video quality and AI-powered meeting summaries have boosted our productivity by 40%. We never miss important action items anymore.",
    author: "Marcus Rodriguez",
    role: "Head of Product",
    company: "GlobalReach",
    avatar: "MR",
  },
  {
    quote: "The live transcription feature is a game-changer. Every word is captured accurately, making our video calls accessible and searchable. Absolutely incredible!",
    author: "Emily Watson",
    role: "Director of Engineering",
    company: "Innovation Labs",
    avatar: "EW",
  },
];

const logos = [
  "TechFlow",
  "GlobalReach",
  "Growth Labs",
  "Innovate Co",
  "Scale Up",
  "Future Corp",
];

const TestimonialsSection = () => {
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  return (
    <section className="mobile-section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Logos */}
        <div 
          ref={logosRef}
          className={`mb-12 md:mb-20 scroll-animate ${logosVisible ? 'animate-in' : ''}`}
        >
          <p className="text-center text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-16">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-lg md:text-xl lg:text-2xl font-display font-bold text-muted-foreground/40 hover:text-primary/60 transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
            Loved by Teams
            <br />
            <span className="gradient-text">Everywhere</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card p-6 md:p-8 rounded-3xl hover:shadow-[0_0_40px_hsl(204_88%_53%/0.1)] transition-all duration-500 group scroll-animate-scale stagger-${index + 1} ${gridVisible ? 'animate-in' : ''}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base md:text-lg text-foreground mb-6 md:mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[hsl(220_80%_60%)] flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
