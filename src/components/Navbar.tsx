import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      const sections = ["hero", "features", "how-it-works", "solutions", "why-choose-us", "testimonials", "cta"];
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
    { name: "Platform", href: "solutions" },
    { name: "Why Us", href: "why-choose-us" },
    { name: "Customers", href: "testimonials" },
  ];

  const featureDropdownItems = [
    { name: "Live Transcription", description: "Real-time speech-to-text" },
    { name: "AI Translation", description: "100+ languages" },
    { name: "Smart Summaries", description: "Meeting notes & action items" },
    { name: "Screen Sharing", description: "HD quality with annotations" },
    { name: "Cloud Recording", description: "Searchable transcripts" },
    { name: "Virtual Backgrounds", description: "AI-powered effects" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-5 ${isScrolled ? "bg-background/95 backdrop-blur-xl border-b border-border py-4 shadow-sm" : "bg-transparent py-6"}`}
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
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-[hsl(220_80%_60%)] flex items-center justify-center group-hover:shadow-[0_0_30px_hsl(204_88%_53%/0.4)] transition-all duration-300">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg md:text-xl text-foreground">
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
            Try out for free
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
            {/* Mobile Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full py-2 text-left transition-colors text-muted-foreground hover:text-foreground">
                <span className="font-medium">Features</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-full">
                {featureDropdownItems.map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="flex flex-col items-start py-3 cursor-pointer"
                    onClick={() => {
                      scrollToSection("features");
                      setIsMobileMenuOpen(false); // Close mobile menu after selection
                    }}
                  >
                    <div className="font-semibold text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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
                Try out for free
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

