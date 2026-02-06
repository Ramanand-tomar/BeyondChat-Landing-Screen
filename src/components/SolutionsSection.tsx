import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const solutions = [
  {
    title: "AI Voice Chatbot",
    subtitle: "24/7 Intelligent Conversations",
    description: "Deploy sophisticated AI voice agents that understand context, handle complex queries, and seamlessly escalate to human agents when needed.",
    features: [
      "Natural language processing",
      "Multi-language support",
      "Sentiment analysis",
      "Smart call routing",
      "Real-time analytics",
    ],
    image: "voice",
  },
  {
    title: "AI Video Calling",
    subtitle: "Next-Gen Video Communication",
    description: "Transform your video meetings with AI-powered features that boost productivity and break down language barriers.",
    features: [
      "Live transcription",
      "Real-time translation",
      "Meeting summaries",
      "Action item extraction",
      "Screen sharing & recording",
    ],
    image: "video",
  },
  // {
  //   title: "Bulk WhatsApp Messaging",
  //   subtitle: "Scale Your Outreach",
  //   description: "Reach millions of customers with personalized WhatsApp campaigns. Smart automation meets powerful analytics.",
  //   features: [
  //     "Template management",
  //     "Scheduled campaigns",
  //     "A/B testing",
  //     "Delivery tracking",
  //     "Automated responses",
  //   ],
  //   image: "whatsapp",
  // },
];

const SolutionItem = ({ solution, index }: { solution: typeof solutions[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const scrollDirection = useScrollDirection();
  const isEven = index % 2 === 0;

  // Calculate animation direction based on scroll direction
  const getAnimationX = (isContent: boolean) => {
    if (!isVisible) {
      if (scrollDirection === 'down') {
        return isContent ? (isEven ? -60 : 60) : (isEven ? 60 : -60);
      } else {
        return isContent ? (isEven ? 60 : -60) : (isEven ? -60 : 60);
      }
    }
    return 0;
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-12 lg:gap-20 items-center`}
    >
      {/* Content */}
      <motion.div 
        className="flex-1 bg-primary/10 space-y-6 border border-primary rounded-2xl p-10"
        initial={{ opacity: 0, x: getAnimationX(true), scale: 0.95 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          x: isVisible ? 0 : getAnimationX(true),
          scale: isVisible ? 1 : 0.95
        }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {solution.subtitle}
          </span>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
            {solution.title}
          </h3>
        </div>
        
        <p className="text-xl text-muted-foreground leading-relaxed">
          {solution.description}
        </p>

        <ul className="space-y-3 border border-primary rounded-2xl p-7">
          {solution.features.map((feature, featureIndex) => (
            <motion.li 
              key={featureIndex} 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3 + featureIndex * 0.1 }}
            >
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <Button variant="hero" size="lg" className="group mt-4">
          Learn More
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>

      {/* Visual */}
      <motion.div 
        className="flex-1 w-full"
        initial={{ opacity: 0, x: getAnimationX(false), scale: 0.95 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          x: isVisible ? 0 : getAnimationX(false),
          scale: isVisible ? 1 : 0.95
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative">
          {/* Background Stack Layers */}
          <motion.div 
            className="absolute inset-0 glass-card rounded-3xl opacity-20"
            initial={{ y: 20, scale: 0.95 }}
            animate={isVisible ? { y: 12, scale: 0.97 } : { y: 20, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ transform: 'translateZ(-20px)' }}
          />
          <motion.div 
            className="absolute inset-0 glass-card rounded-3xl opacity-40"
            initial={{ y: 10, scale: 0.97 }}
            animate={isVisible ? { y: 6, scale: 0.985 } : { y: 10, scale: 0.97 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ transform: 'translateZ(-10px)' }}
          />

          {/* Main Card */}
          <motion.div 
            className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:shadow-[0_0_60px_hsl(204_88%_53%/0.15)] transition-all duration-500 hover:-translate-y-2"
            initial={{ y: 0 }}
            animate={isVisible ? { y: 0 } : { y: 0 }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-50" />
            
            {/* Mock Content */}
            <div className="relative z-10 aspect-video flex items-center justify-center">
              {solution.image === "voice" || solution.image === "video" ? (
                // Video for AI Voice Agent and AI Video Calling
                <motion.div 
                  className="w-full h-full rounded-2xl overflow-hidden bg-muted/30"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <video
                    className="w-full h-full object-contain border-2 border-primary bg-primary"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    {solution.image === "voice" ? (
                      <source className="w-full h-full object-contain rounded-2xl" src="/Ai_voice_agent.mp4" type="video/mp4" />
                    ) : (
                      <source className="w-full h-full object-contain rounded-2xl" src="/AI_video_call.mp4" type="video/mp4" />
                    )}
                    <div className="w-full h-full bg-muted/30 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <motion.div 
                          className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-[hsl(220_80%_60%)] flex items-center justify-center animate-pulse-glow"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                          transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                        >
                          <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.image === "voice" ? "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" : "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"} />
                          </svg>
                        </motion.div>
                        <motion.p 
                          className="text-muted-foreground font-medium"
                          initial={{ opacity: 0 }}
                          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          Interactive Demo
                        </motion.p>
                      </div>
                    </div>
                  </video>
                </motion.div>
              ) : (
                // Original mock content for other solutions
                <div className="w-full h-full bg-muted/30 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-[hsl(220_80%_60%)] flex items-center justify-center animate-pulse-glow"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                      {solution.image === "whatsapp" && (
                        <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      )}
                    </motion.div>
                    <motion.p 
                      className="text-muted-foreground font-medium"
                      initial={{ opacity: 0 }}
                      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      Interactive Demo
                    </motion.p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Decorative Elements with Stack Animation */}
          <motion.div 
            className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl gradient-border opacity-40 animate-float" 
            style={{ animationDelay: `${index}s` }}
            initial={{ scale: 0, rotate: -90 }}
            animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.div 
            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full gradient-border opacity-30 animate-float" 
            style={{ animationDelay: `${index + 1}s` }}
            initial={{ scale: 0, rotate: 90 }}
            animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 90 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

const SolutionsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="solutions" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Solutions
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Powerful Tools for
            <br />
            <span className="gradient-text">Every Use Case</span>
          </h2>
        </div>

        {/* Solutions */}
        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <SolutionItem key={index} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
