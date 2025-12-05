import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Dr. Carlos Cesar Rangel" 
              className="h-14 w-auto brightness-100 contrast-125"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground/90 hover:text-primary transition-colors font-semibold"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("especialidades")}
              className="text-foreground/90 hover:text-primary transition-colors font-semibold"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground/90 hover:text-primary transition-colors font-semibold"
            >
              Contato
            </button>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("contato")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Marcar Consulta
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 space-y-4 border-t border-border animate-fade-in">
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-foreground/90 hover:text-primary transition-colors font-semibold py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("especialidades")}
              className="block w-full text-left text-foreground/90 hover:text-primary transition-colors font-semibold py-2"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left text-foreground/90 hover:text-primary transition-colors font-semibold py-2"
            >
              Contato
            </button>
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("contato")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Marcar Consulta
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
