import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation();
  const { ref: headlineRef, isVisible: headlineVisible } = useScrollAnimation();
  const { ref: subRef, isVisible: subVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-glow top-1/4 left-1/4 animate-pulse-glow" />
        <div className="hero-glow bottom-1/4 right-1/4 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(204_88%_53%/0.08),transparent_50%)]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div 
            ref={badgeRef}
            className={`inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 scroll-animate ${badgeVisible ? 'animate-in' : ''}`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Powered by Advanced AI Technology
            </span>
          </div>

          {/* Headline */}
          <h1 
            ref={headlineRef}
            className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 scroll-animate stagger-1 ${headlineVisible ? 'animate-in' : ''}`}
          >
            The Future of
            <br />
            <span className="gradient-text">AI Communication</span>
          </h1>

          {/* Subheadline */}
          <p 
            ref={subRef}
            className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance scroll-animate stagger-2 ${subVisible ? 'animate-in' : ''}`}
          >
            Transform your business with real-time AI voice, video, and messaging 
            solutions. Enterprise-grade security meets cutting-edge intelligence.
          </p>

          {/* CTA Buttons */}
          <div 
            ref={ctaRef}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 scroll-animate stagger-3 ${ctaVisible ? 'animate-in' : ''}`}
          >
            <Button variant="hero" size="xl" className="group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto scroll-animate stagger-4 ${statsVisible ? 'animate-in' : ''}`}
          >
            {[
              { value: "10M+", label: "Messages Sent" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "150+", label: "Countries" },
              { value: "<50ms", label: "Latency" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-2xl gradient-border opacity-30 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-1/3 right-10 w-16 h-16 rounded-full gradient-border opacity-20 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-xl gradient-border opacity-25 animate-float" style={{ animationDelay: "4s" }} />
        
        {/* AI Robot Image - Hero Visual */}
        <div className="absolute top-1/4 -right-10 md:right-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-90 animate-float pointer-events-none" style={{ animationDelay: "1s" }}>
          <img 
            src="/cute-ai-robot-wearing-headphones.png" 
            alt="AI Robot Assistant" 
            className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.3)] animate-pulse-glow"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
