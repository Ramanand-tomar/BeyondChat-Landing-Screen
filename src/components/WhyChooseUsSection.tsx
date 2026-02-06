import { CheckCircle2, Shield, Zap, Users, TrendingUp, Award } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, SOC 2 Type II certified, and GDPR compliant. Your data is protected with military-grade security protocols.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description: "Sub-50ms latency with our global edge network. Experience real-time communication without delays or interruptions.",
  },
  {
    icon: Users,
    title: "24/7 Expert Support",
    description: "Dedicated support team available around the clock. Get help when you need it with our industry-leading response times.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Trusted by 10,000+ businesses worldwide. Join the companies that have transformed their communication with our platform.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Award-winning AI technology recognized by leading industry analysts. Innovation that sets the standard.",
  },
  {
    icon: CheckCircle2,
    title: "99.9% Uptime SLA",
    description: "Guaranteed reliability with automatic failover and redundancy. Your business never stops, and neither do we.",
  },
];

const WhyChooseUsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Smart Choice for
            <br />
            <span className="gradient-text">Modern Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Join thousands of companies that trust us to power their AI communication infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Image */}
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ 
              opacity: imageVisible ? 1 : 0, 
              x: imageVisible ? 0 : -50,
              scale: imageVisible ? 1 : 0.95
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="glass-card p-6 rounded-3xl">
              <img 
                src="/Multi-ai-agent.avif" 
                alt="Multi AI Agent System" 
                className="w-full h-auto rounded-2xl shadow-[0_0_60px_hsl(204_88%_53%/0.3)]"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl gradient-border opacity-30 animate-float" style={{ animationDelay: "0s" }} />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full gradient-border opacity-25 animate-float" style={{ animationDelay: "2s" }} />
          </motion.div>

          {/* Right Column - Reasons */}
          <div ref={contentRef} className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: contentVisible ? 1 : 0, 
                  x: contentVisible ? 0 : 50
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="glass-card p-6 rounded-2xl hover:shadow-[0_0_30px_hsl(204_88%_53%/0.15)] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[hsl(220_80%_60%)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
