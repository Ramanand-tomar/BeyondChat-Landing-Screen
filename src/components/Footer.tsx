import { Zap } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "API", "Documentation"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Resources: ["Help Center", "Community", "Webinars", "Case Studies", "Status"],
  Legal: ["Privacy", "Terms", "Security", "GDPR", "Cookie Policy"],
};

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <footer 
      ref={ref}
      className={`border-t border-border py-20 scroll-animate ${isVisible ? 'animate-in' : ''}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(220_80%_60%)] flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                BeyondChats<span className="gradient-text">AI</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-xs mb-6">
              The future of AI-powered communication. Connect with your 
              customers like never before.
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin", "github", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 BeyondChatsAI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
