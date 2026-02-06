import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollToSection, scrollToTop } = useSmoothScroll({ offset: 80 });
  const scrollDirection = useScrollDirection();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy - determine active section
      const sections = ["hero", "features", "solutions", "testimonials", "pricing", "cta"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "features" },
    { name: "Solutions", href: "solutions" },
    { name: "Pricing", href: "pricing" },
    { name: "Testimonials", href: "testimonials" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTop();
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/95 backdrop-blur-xl border-b border-border py-4 shadow-sm" : "bg-transparent py-6"}`}
      initial={{ y: 0 }}
      animate={{ 
        y: scrollDirection === 'down' && isScrolled ? -100 : 0 
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(220_80%_60%)] flex items-center justify-center group-hover:shadow-[0_0_30px_hsl(204_88%_53%/0.4)] transition-all duration-300">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            BeyondChats<span className="gradient-text">AI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link cursor-pointer ${activeSection === link.href ? 'text-primary font-medium' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost">Log in</Button>
          <Button variant="hero" size="lg">
            Get Started Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl mt-2 mx-4 p-6 rounded-2xl border border-border shadow-lg animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors py-2 cursor-pointer ${
                  activeSection === link.href 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <Button variant="ghost" className="w-full">
                Log in
              </Button>
              <Button variant="hero" className="w-full">
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

