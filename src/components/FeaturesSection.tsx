import { Mic, Video, Shield, Zap, Globe, Sparkles } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Mic,
    title: "Live Transcription",
    description: "Real-time speech-to-text with speaker identification. Automatically capture every word spoken during your video calls with 99% accuracy.",
    gradient: "from-primary to-[hsl(220_80%_60%)]",
  },
  {
    icon: Globe,
    title: "AI Translation",
    description: "Break language barriers with real-time translation in 100+ languages. Communicate seamlessly with global teams and clients.",
    gradient: "from-[hsl(220_80%_60%)] to-primary",
  },
  {
    icon: Sparkles,
    title: "Smart Summaries",
    description: "AI-generated meeting summaries with action items and key decisions. Never miss important details from your video calls.",
    gradient: "from-primary to-[hsl(180_70%_50%)]",
  },
  {
    icon: Video,
    title: "HD Screen Sharing",
    description: "Share your screen in crystal-clear quality with annotations and laser pointer. Perfect for presentations and collaboration.",
    gradient: "from-[hsl(180_70%_50%)] to-primary",
  },
  {
    icon: Zap,
    title: "Cloud Recording",
    description: "Automatic cloud recording with searchable transcripts. Access and share your video calls anytime, anywhere.",
    gradient: "from-primary to-[hsl(220_80%_60%)]",
  },
  {
    icon: Shield,
    title: "Virtual Backgrounds",
    description: "AI-powered background removal and virtual backgrounds. Look professional from anywhere with advanced video effects.",
    gradient: "from-[hsl(220_80%_60%)] to-primary",
  },
];

const FeaturesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05);

  return (
    <section id="features" className="mobile-section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-20 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            Everything You Need for
            <br />
            <span className="gradient-text">Powerful Video Calls</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            AI-powered video calling features designed for modern teams 
            that demand excellence in virtual collaboration.
          </p>
        </div>

        {/* AI Service GIF - Visual Centerpiece */}
        <div className="flex justify-center mb-12 md:mb-20">
          <div 
            className={`glass-card p-4 md:p-6 rounded-3xl max-w-xs md:max-w-md scroll-animate-scale ${gridVisible ? 'animate-in' : ''}`}
          >
            <img 
              src="/cute-ai-robot-wearing-headphones.png" 
              alt="AI Service Animation" 
              className="w-full h-auto rounded-2xl shadow-[0_0_40px_hsl(204_88%_53%/0.2)]"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group scroll-animate-scale stagger-${index + 1} ${gridVisible ? 'animate-in' : ''}`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground group-hover:text-primary transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
