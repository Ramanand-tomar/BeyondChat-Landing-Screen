import { useEffect, useRef } from "react";
import { Video, Globe, Sparkles, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    icon: Video,
    title: "Start Your Video Call",
    description: "Launch a crystal-clear 4K video call with just one click. Invite unlimited participants instantly.",
    color: "from-blue-500 to-cyan-500",
    image: "/couple-call.mp4",
  },
  {
    id: 2,
    icon: Globe,
    title: "AI Translation Activates",
    description: "Real-time translation in 100+ languages automatically detects and translates conversations as you speak.",
    color: "from-purple-500 to-pink-500",
    image: "/Ai-translation.mp4",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Live Transcription",
    description: "Every word is captured with 99% accuracy. Speaker identification and timestamps included automatically.",
    color: "from-orange-500 to-red-500",
    image: "/live-translation.mp4",
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: "Smart Summaries Generated",
    description: "AI analyzes your meeting and generates actionable summaries with key decisions and next steps.",
    color: "from-green-500 to-emerald-500",
    image: "/data-analysis.mp4",
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      }, (context) => {
        const { isDesktop } = (context.conditions || {}) as { isDesktop: boolean };

        // Card animations
        cardsRef.current.forEach((card, index) => {
          if (!card) return;

          const video = card.querySelector('video');
          const badge = card.querySelector('.step-badge');
          const icon = card.querySelector(`.card-icon-${index}`);
          const isLast = index === cardsRef.current.length - 1;

          // Unified Trigger for entrance and state
          ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            end: isLast ? "bottom center" : "bottom top",
            toggleActions: "play none none reverse",
            onEnter: () => {
              // Entrance animation
              gsap.to(card, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
              });

              // Play video if near center
              if (video) {
                video.play().catch(() => {});
              }

              // Active card styling
              gsap.to(card, {
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                duration: 0.3,
              });

              if (icon) gsap.to(icon, { scale: 1.1, duration: 0.3, ease: "back.out(1.7)" });
              if (badge) {
                gsap.fromTo(badge, 
                  { rotation: -10, scale: 0 }, 
                  { rotation: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
                );
              }
            },
            onLeave: () => {
              if (video) video.pause();
              if (!isLast) {
                gsap.to(card, {
                  scale: 1,
                  opacity: 0.4,
                  y: -30,
                  duration: 0.6,
                  ease: "power2.inOut",
                  overwrite: true
                });
              }
            },
            onEnterBack: () => {
              if (video) video.play().catch(() => {});
              gsap.to(card, {
                scale: 1.02,
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                overwrite: true
              });
            },
            onLeaveBack: () => {
              if (video) video.pause();
              gsap.to(card, {
                scale: 0.95,
                opacity: 0,
                y: 30,
                boxShadow: "none",
                duration: 0.5,
                overwrite: true
              });
              if (icon) gsap.to(icon, { scale: 1, duration: 0.3 });
            },
          });
        });


        // Header and CTA animations
        gsap.from([".how-it-works-header", ".section-subtitle"], {
          scrollTrigger: {
            trigger: ".how-it-works-header",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });

        gsap.from(".cta-container", {
          scrollTrigger: {
            trigger: ".cta-container",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });

    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background"
    >
      {/* Enhanced Background Effects with Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(90deg,transparent_49%,currentColor_50%,transparent_51%)] bg-[length:50px_50px]" />
          <div className="h-full w-full bg-[linear-gradient(0deg,transparent_49%,currentColor_50%,transparent_51%)] bg-[length:50px_50px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="how-it-works-header text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            Four Simple Steps to
            <br />
            <span className="gradient-text bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Smarter Meetings
            </span>
          </h2>
          <p className="section-subtitle text-lg md:text-xl text-muted-foreground">
            Experience the power of AI-enhanced video communication
          </p>
        </div>

        {/* Stacked Cards */}
        <div ref={containerRef} className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative transform-gpu will-change-[transform,opacity] opacity-0 translate-y-8"
              >
              <div className="glass-card rounded-3xl p-6 md:p-12 border border-primary/10 hover:border-primary/30 transition-all duration-500 bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-xl shadow-lg hover:shadow-2xl">
                {/* Card Content */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left: Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg card-icon-${index}`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-display font-bold text-primary/20">
                        {step.id}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-display text-xl md:text-3xl font-bold mb-3 md:mb-4 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Visual Preview */}
                  <div className="relative rounded-2xl overflow-hidden bg-muted/20 border border-primary/5 shadow-xl transform-gpu">
                    <div className="relative h-64 md:h-72 overflow-hidden">
                      {step.image.endsWith('.webm') || step.image.endsWith('.mp4') ? (
                        <video
                          className="w-full h-full object-cover"
                          loop
                          muted
                          playsInline
                          preload="auto"
                          src={step.image}
                        />
                      ) : step.image.endsWith('.gif') ? (
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                      {/* Animated gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${step.color} opacity-5`} />
                      
                      {/* Overlay pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="h-full w-full bg-[linear-gradient(45deg,transparent_49%,white_50%,transparent_51%)] bg-[length:20px_20px]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Number Badge */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8">
                  <div className={`step-badge w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform-gpu`}>
                    <span className="text-white font-bold text-lg">{step.id}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="cta-container text-center mt-16 md:mt-24">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to transform your video meetings?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Try out for free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#solutions"
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-all duration-300 hover:border-primary"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;