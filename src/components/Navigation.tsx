import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import squadLogo from "@/assets/squad-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutLinks = [
    { title: "About Us", href: "/about" },
    { title: "Mission", href: "/about#mission" },
    { title: "Vision", href: "/about#vision" },
    { title: "Objectives", href: "/about#objectives" },
  ];

  const squadYears = Array.from({ length: 10 }, (_, i) => {
    const year = 2025 - i;
    return { year: `${year}-${(year + 1) % 100}`, href: `/squad/${year}` };
  });

  return (
    <nav className="sticky top-0 z-50 bg-gradient-patriotic shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={squadLogo} alt="The Squad Logo" className="h-14 w-14 transition-transform duration-300 group-hover:scale-110" />
            <div className="hidden md:block">
              <h1 className="text-primary-foreground font-bold text-xl tracking-wide">THE SQUAD</h1>
              <p className="text-primary-foreground/80 text-xs">Patriotic & Adventure Club</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-light/20">
              <Link to="/">HOME</Link>
            </Button>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary-foreground bg-transparent hover:bg-primary-light/20">
                    ABOUT US
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2 bg-card">
                      {aboutLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.href}
                              className="block select-none rounded-md p-3 hover:bg-muted transition-colors"
                            >
                              {link.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-light/20">
              <Link to="/events">EVENTS</Link>
            </Button>

            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-light/20">
              <Link to="/gallery">SQUAD GALLERY</Link>
            </Button>

            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-light/20">
              <Link to="/mentor">OUR MENTOR</Link>
            </Button>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary-foreground bg-transparent hover:bg-primary-light/20">
                    THE SQUAD
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2 bg-card max-h-96 overflow-y-auto">
                      {squadYears.map((item) => (
                        <li key={item.year}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none rounded-md p-3 hover:bg-muted transition-colors"
                            >
                              {item.year}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-light/20">
              <Link to="/alumni">ALUMNI</Link>
            </Button>

            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-light/20">
              <Link to="/contact">CONNECT WITH US</Link>
            </Button>

            <Button asChild className="bg-accent hover:bg-accent/90 ml-2">
              <a href="/brochure.pdf" download>
                BROCHURE
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-light/30">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" asChild className="text-primary-foreground justify-start">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
              </Button>
              <Button variant="ghost" asChild className="text-primary-foreground justify-start">
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
              </Button>
              <Button variant="ghost" asChild className="text-primary-foreground justify-start">
                <Link to="/events" onClick={() => setIsMenuOpen(false)}>EVENTS</Link>
              </Button>
              <Button variant="ghost" asChild className="text-primary-foreground justify-start">
                <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>SQUAD GALLERY</Link>
              </Button>
              <Button variant="ghost" asChild className="text-primary-foreground justify-start">
                <Link to="/mentor" onClick={() => setIsMenuOpen(false)}>OUR MENTOR</Link>
              </Button>
              <Button variant="ghost" asChild className="text-primary-foreground justify-start">
                <Link to="/squad/2025" onClick={() => setIsMenuOpen(false)}>THE SQUAD</Link>
              </Button>
              <Button variant="ghost" asChild className="text-primary-foreground justify-start">
                <Link to="/alumni" onClick={() => setIsMenuOpen(false)}>ALUMNI</Link>
              </Button>
              <Button variant="ghost" asChild className="text-primary-foreground justify-start">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>CONNECT WITH US</Link>
              </Button>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a href="/brochure.pdf" download>BROCHURE</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
