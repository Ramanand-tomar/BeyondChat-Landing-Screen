import { Mic, Video, MessageCircle, Shield, Zap, Globe } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Mic,
    title: "AI Voice Chatbot",
    description: "Natural language voice interactions powered by advanced AI. Handle customer calls 24/7 with human-like conversations.",
    gradient: "from-primary to-[hsl(220_80%_60%)]",
  },
  {
    icon: Video,
    title: "AI Video Calling",
    description: "Crystal-clear video calls with real-time AI translation, transcription, and intelligent meeting summaries.",
    gradient: "from-[hsl(220_80%_60%)] to-primary",
  },
  {
    icon: MessageCircle,
    title: "Bulk WhatsApp",
    description: "Send personalized messages at scale. Smart scheduling, analytics, and automation for maximum engagement.",
    gradient: "from-primary to-[hsl(180_70%_50%)]",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption, SOC 2 compliance, and GDPR ready. Your data security is our priority.",
    gradient: "from-[hsl(180_70%_50%)] to-primary",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-50ms latency with our global edge network. Seamless real-time communication anywhere.",
    gradient: "from-primary to-[hsl(220_80%_60%)]",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Infrastructure in 150+ countries. Automatic failover and load balancing for ultimate reliability.",
    gradient: "from-[hsl(220_80%_60%)] to-primary",
  },
];

const FeaturesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05);

  return (
    <section id="features" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Communicate Smarter</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            A complete suite of AI-powered tools designed for modern businesses 
            that demand excellence in communication.
          </p>
        </div>

        {/* AI Service GIF - Visual Centerpiece */}
        <div className="flex justify-center mb-20">
          <div 
            className={`glass-card p-6 rounded-3xl max-w-md scroll-animate-scale ${gridVisible ? 'animate-in' : ''}`}
          >
            <img 
              src="/cute-ai-robot-wearing-headphones.png" 
              alt="AI Service Animation" 
              className="w-full h-auto rounded-2xl shadow-[0_0_40px_hsl(204_88%_53%/0.2)]"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group scroll-animate-scale stagger-${index + 1} ${gridVisible ? 'animate-in' : ''}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
