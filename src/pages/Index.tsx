import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SolutionsSection from "@/components/SolutionsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  // Scroll animation hooks for each section
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation(0.15);
  const { ref: solutionsRef, isVisible: solutionsVisible } = useScrollAnimation(0.15);
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation(0.15);
  const { ref: pricingRef, isVisible: pricingVisible } = useScrollAnimation(0.15);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.15);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <div id="hero" className="page-transition">
          <HeroSection />
        </div>
        
        <div 
          id="features" 
          ref={featuresRef}
          className={`scroll-animate ${featuresVisible ? 'animate-in' : ''}`}
        >
          <FeaturesSection />
        </div>
        
        <div 
          id="solutions" 
          ref={solutionsRef}
          className={`scroll-animate-left ${solutionsVisible ? 'animate-in' : ''}`}
        >
          <SolutionsSection />
        </div>
        
        <div 
          id="testimonials" 
          ref={testimonialsRef}
          className={`scroll-animate-scale ${testimonialsVisible ? 'animate-in' : ''}`}
        >
          <TestimonialsSection />
        </div>
        
        <div 
          id="pricing" 
          ref={pricingRef}
          className={`scroll-animate-right ${pricingVisible ? 'animate-in' : ''}`}
        >
          <PricingSection />
        </div>
        
        <div 
          id="cta" 
          ref={ctaRef}
          className={`scroll-animate ${ctaVisible ? 'animate-in' : ''}`}
        >
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

