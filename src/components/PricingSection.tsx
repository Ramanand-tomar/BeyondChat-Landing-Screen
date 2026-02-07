import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small teams getting started with AI communication.",
    features: [
      "1,000 AI voice minutes",
      "50 video call hours",
      "5,000 WhatsApp messages",
      "Basic analytics",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "149",
    description: "For growing businesses that need more power and flexibility.",
    features: [
      "10,000 AI voice minutes",
      "500 video call hours",
      "50,000 WhatsApp messages",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations with specific needs.",
    features: [
      "Unlimited voice minutes",
      "Unlimited video calls",
      "Unlimited messages",
      "Dedicated support",
      "Custom AI training",
      "SLA guarantee",
      "On-premise options",
      "White-label solution",
    ],
    popular: false,
  },
];

const PricingCard = ({ plan, index }: { plan: typeof plans[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const scrollDirection = useScrollDirection();

  // Calculate animation Y based on scroll direction
  const getAnimationY = () => {
    if (!isVisible) {
      return scrollDirection === 'down' ? 80 : -80;
    }
    return 0;
  };

  // Stack animation with depth effect
  const stackDelay = index * 0.15;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: getAnimationY(), scale: 0.9, rotateX: 5 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : getAnimationY(),
        scale: isVisible ? 1 : 0.9,
        rotateX: isVisible ? 0 : 5
      }}
      transition={{ 
        duration: 0.7, 
        delay: stackDelay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`relative rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
        plan.popular
          ? "glass-card border-primary/50 shadow-[0_0_60px_hsl(204_88%_53%/0.15)]"
          : "glass-card"
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <motion.div 
          className="absolute -top-4 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
          transition={{ delay: stackDelay + 0.3 }}
        >
          <div className="flex items-center gap-1 bg-gradient-to-r from-primary to-[hsl(220_80%_60%)] text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Most Popular
          </div>
        </motion.div>
      )}

      {/* Plan Header */}
      <div className="text-center mb-8">
        <h3 className="font-display text-xl md:text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
        <p className="text-muted-foreground text-xs md:text-sm mb-6">{plan.description}</p>
        <div className="flex items-baseline justify-center gap-1">
          {plan.price !== "Custom" && (
            <span className="text-muted-foreground text-lg">$</span>
          )}
          <span className="font-display text-4xl md:text-5xl font-bold gradient-text">
            {plan.price}
          </span>
          {plan.price !== "Custom" && (
            <span className="text-muted-foreground">/month</span>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, featureIndex) => (
          <motion.li 
            key={featureIndex} 
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: stackDelay + 0.4 + featureIndex * 0.05 }}
          >
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={plan.popular ? "hero" : "glass"}
        className="w-full"
        size="lg"
      >
        {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
      </Button>
    </motion.div>
  );
};

const PricingSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  const scrollDirection = useScrollDirection();

  return (
    <section id="pricing" className="mobile-section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: scrollDirection === 'down' ? 40 : -40 }}
          animate={{ 
            opacity: headerVisible ? 1 : 0, 
            y: headerVisible ? 0 : (scrollDirection === 'down' ? 40 : -40)
          }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-foreground">
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            Choose the plan that fits your needs. All plans include our core features 
            with no hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div 
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: ctaVisible ? 1 : 0, y: ctaVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let's talk about your specific requirements.
          </p>
          <Button variant="outline" size="lg">
            Schedule a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
