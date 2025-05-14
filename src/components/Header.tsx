
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-poppins font-bold text-2xl text-navy">
            Cloth<span className="text-navy-light">Flow</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-navy font-medium transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-navy font-medium transition-colors">
            About Us
          </Link>
          <Link to="/wms-features" className="text-foreground hover:text-navy font-medium transition-colors">
            WMS Features
          </Link>
          <Link to="/dashboard" className="text-foreground hover:text-navy font-medium transition-colors">
            Dashboard Demo
          </Link>
          <Link to="/contact">
            <Button className="bg-navy hover:bg-navy-light text-white">Contact Us</Button>
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-navy" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" 
              className="text-foreground hover:text-navy font-medium transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link to="/about" 
              className="text-foreground hover:text-navy font-medium transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link to="/wms-features" 
              className="text-foreground hover:text-navy font-medium transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              WMS Features
            </Link>
            <Link to="/dashboard" 
              className="text-foreground hover:text-navy font-medium transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard Demo
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-navy hover:bg-navy-light text-white w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
