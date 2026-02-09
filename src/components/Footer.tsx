import { Zap, Mail, Phone, MapPin, TwitterIcon, LinkedinIcon, GithubIcon, YoutubeIcon } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const footerLinks = {
  Product: ["Features", "Integrations", "API", "Documentation"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Resources: ["Help Center", "Community", "Webinars", "Case Studies", "Status"],
  Legal: ["Privacy", "Terms", "Security", "GDPR", "Cookie Policy"],
};

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <footer 
      ref={ref}
      className={`relative border-t border-border/50 bg-background scroll-animate ${isVisible ? 'animate-in' : ''}`}
    >
      {/* Top Gradient Separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand & Description - Left */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-xl md:text-2xl text-foreground">
                  BeyondChats
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    AI
                  </span>
                </span>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Enterprise AI Communication</p>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
              Transform your business communication with our AI-powered platform. 
              Trusted by 10,000+ companies worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@beyondchats.ai</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Grid - Right */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                    {title}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-foreground/80 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                        >
                          <span className="w-1 h-1 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-200" />
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-border/30">
          <div className="lg:col-span-6">
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Subscribe to our newsletter for product updates and AI insights.
            </p>
          </div>
          
          <div className="lg:col-span-6 flex flex-col items-end justify-end">
            <h4 className="font-semibold text-foreground mb-4 self-start lg:self-auto">Connect With Us</h4>
            <div className="flex gap-3">
              {[
                { name: "Twitter", icon: <TwitterIcon />, color: "hover:bg-blue-500/10" },
                { name: "LinkedIn", icon: <LinkedinIcon />, color: "hover:bg-blue-700/10" },
                { name: "GitHub", icon: <GithubIcon />, color: "hover:bg-gray-800/10" },
                { name: "YouTube", icon: <YoutubeIcon />, color: "hover:bg-red-500/10" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/30 ${social.color} transition-all duration-200`}
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  SOC 2 Certified
                </span>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-medium">
                  GDPR Compliant
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-medium">
                  ISO 27001
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} BeyondChatsAI. All rights reserved.</span>
              <div className="hidden md:flex items-center gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <span className="w-1 h-1 bg-border rounded-full" />
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <span className="w-1 h-1 bg-border rounded-full" />
                <a href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
          
          {/* Mobile bottom links */}
          <div className="md:hidden mt-6 pt-6 border-t border-border/30">
            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Security
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </footer>
  );
};

export default Footer;