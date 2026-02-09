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
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
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
              className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 scroll-animate stagger-1 ${headlineVisible ? 'animate-in' : ''}`}
            >
              AI-Powered
              <br />
              <span className="gradient-text">Video Call Agent</span>
            </h1>

            {/* Subheadline */}
            <p 
              ref={subRef}
              className={`text-lg md:text-2xl text-muted-foreground mb-8 md:mb-10 text-balance scroll-animate stagger-2 ${subVisible ? 'animate-in' : ''}`}
            >
              Transform your meetings with AI-powered transcription, translation, 
              and summaries. Crystal-clear 4K video meets enterprise intelligence.
            </p>
        

            {/* CTA Buttons */}
            <div 
              ref={ctaRef}
              className={`flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-16 scroll-animate stagger-3 ${ctaVisible ? 'animate-in' : ''}`}
            >
              <Button variant="hero" size="xl" className="group">
                Try out for free
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
              className={`grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 scroll-animate stagger-4 ${statsVisible ? 'animate-in' : ''}`}
            >
              {[
                { value: "50M+", label: "Calls" },
                { value: "100+", label: "Langs" },
                { value: "4K", label: "Video" },
                { value: "<100ms", label: "Latency" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-display text-2xl md:text-4xl font-bold gradient-text mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - AI Character Video */}
          <div className="relative">
            <div className="glass-card p-4 rounded-3xl">
              <video
                className="w-full h-auto rounded-2xl shadow-[0_0_60px_hsl(204_88%_53%/0.3)]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/ai charcter video.webm" type="video/webm" />
                {/* Fallback for browsers that don't support video */}
                <div className="w-full aspect-video bg-muted/30 rounded-2xl flex items-center justify-center">
                  <p className="text-muted-foreground">AI Character Demo</p>
                </div>
              </video>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-2xl gradient-border opacity-30 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-1/3 right-10 w-16 h-16 rounded-full gradient-border opacity-20 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-xl gradient-border opacity-25 animate-float" style={{ animationDelay: "4s" }} />
      </div>
    </section>
  );
};

export default HeroSection;
