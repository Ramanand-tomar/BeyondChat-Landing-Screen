import { Star } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "BeyondChatsAI transformed our customer support. We've reduced response times by 80% while maintaining high satisfaction scores.",
    author: "Sarah Chen",
    role: "VP of Customer Success",
    company: "TechFlow Inc.",
    avatar: "SC",
  },
  {
    quote: "The AI video calling features are incredible. Real-time translation has opened up new markets we couldn't reach before.",
    author: "Marcus Rodriguez",
    role: "Head of Sales",
    company: "GlobalReach",
    avatar: "MR",
  },
  {
    quote: "Bulk WhatsApp messaging at this scale with such precision targeting? Game-changer for our marketing campaigns.",
    author: "Emily Watson",
    role: "CMO",
    company: "Growth Labs",
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
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Logos */}
        <div 
          ref={logosRef}
          className={`mb-20 scroll-animate ${logosVisible ? 'animate-in' : ''}`}
        >
          <p className="text-center text-muted-foreground mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-xl md:text-2xl font-display font-bold text-muted-foreground/40 hover:text-primary/60 transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Loved by Teams
            <br />
            <span className="gradient-text">Everywhere</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-3xl hover:shadow-[0_0_40px_hsl(204_88%_53%/0.1)] transition-all duration-500 group scroll-animate-scale stagger-${index + 1} ${gridVisible ? 'animate-in' : ''}`}
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
              <p className="text-lg text-foreground mb-8 leading-relaxed">
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
