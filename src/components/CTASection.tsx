import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="mobile-section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={ref}
            className={`glass-card mobile-padding-lg rounded-3xl text-center relative overflow-hidden scroll-animate-scale ${isVisible ? 'animate-in' : ''}`}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-primary via-[hsl(220_80%_60%)] to-primary opacity-30" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Try out for free
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-foreground">
                Ready to Transform Your
                <br />
                <span className="gradient-text">Video Meetings?</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10">
                Join thousands of teams already using our AI-powered video call platform to collaborate smarter, faster, and across any language.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" className="group">
                  Try out for free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

            </div>

            {/* Decorative Elements - Hidden on mobile */}
            <div className="hidden md:block absolute top-10 left-10 w-20 h-20 rounded-2xl gradient-border opacity-30 animate-float" />
            <div className="hidden md:block absolute bottom-10 right-10 w-16 h-16 rounded-full gradient-border opacity-20 animate-float" style={{
              animationDelay: "2s"
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
