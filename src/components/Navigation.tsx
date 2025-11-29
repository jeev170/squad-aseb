import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import squadLogo from "@/assets/squad-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const aboutLinks = [
    { title: "About Us", href: "/about", scrollTo: null },
    { title: "Mission", href: "/about", scrollTo: "mission" },
    { title: "Vision", href: "/about", scrollTo: "vision" },
    { title: "Objectives", href: "/about", scrollTo: "objectives" },
  ];

  const handleAboutClick = (e: React.MouseEvent, scrollTo: string | null) => {
    if (scrollTo) {
      e.preventDefault();
      window.location.href = `/about#${scrollTo}`;
    }
  };

  const squadYears = Array.from({ length: 10 }, (_, i) => {
    const year = 2025 - i;
    return { year: `${year}-${String(year + 1).slice(-2)}`, href: `/squad/${year}` };
  });

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", dropdown: "about" },
    { label: "EVENTS", href: "/events" },
    { label: "GALLERY", href: "/gallery" },
    { label: "MENTOR", href: "/mentor" },
    { label: "THE SQUAD", dropdown: "squad" },
    { label: "ALUMNI", href: "/alumni" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2 glassmorphism-dark shadow-elegant"
            : "py-4 bg-gradient-to-b from-foreground/80 to-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img
                src={squadLogo}
                alt="The Squad Logo"
                className="h-12 w-12 md:h-14 md:w-14"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="hidden md:block">
                <h1 className="text-primary-foreground font-serif font-bold text-xl tracking-wide group-hover:text-gold-gradient transition-all">
                  THE SQUAD
                </h1>
                <p className="text-primary-foreground/70 text-xs tracking-premium uppercase">
                  Patriotic & Adventure Club
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.dropdown)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                        location.pathname === item.href
                          ? "text-accent"
                          : "text-primary-foreground hover:text-accent"
                      }`}
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ) : (
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide text-primary-foreground hover:text-accent transition-all duration-300"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`} />
                    </button>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 glassmorphism-dark rounded-xl overflow-hidden shadow-elegant border border-primary-foreground/10"
                      >
                        <div className="py-2 max-h-80 overflow-y-auto">
                          {item.dropdown === "about" &&
                            aboutLinks.map((link) => (
                              <Link
                                key={link.title}
                                to={link.href}
                                onClick={(e) => handleAboutClick(e, link.scrollTo)}
                                className="block px-4 py-3 text-primary-foreground/90 hover:text-accent hover:bg-primary-foreground/5 transition-all duration-200"
                              >
                                {link.title}
                              </Link>
                            ))}
                          {item.dropdown === "squad" &&
                            squadYears.map((s) => (
                              <Link
                                key={s.year}
                                to={s.href}
                                className="block px-4 py-3 text-primary-foreground/90 hover:text-accent hover:bg-primary-foreground/5 transition-all duration-200"
                              >
                                Squad {s.year}
                              </Link>
                            ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  className="ml-4 bg-gradient-gold text-foreground font-bold shadow-gold hover:shadow-neon transition-all duration-300"
                >
                  <a href="/brochure.pdf" download>
                    BROCHURE
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden w-12 h-12 flex items-center justify-center text-primary-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary-dark/95 backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-gradient-dark p-8 pt-24 overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.href ? (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-4 text-2xl font-serif font-bold text-primary-foreground hover:text-accent transition-colors border-b border-primary-foreground/10"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div className="py-4 border-b border-primary-foreground/10">
                        <span className="text-2xl font-serif font-bold text-primary-foreground">
                          {item.label}
                        </span>
                        <div className="mt-3 pl-4 flex flex-col gap-2">
                          {item.dropdown === "about" &&
                            aboutLinks.map((link) => (
                              <Link
                                key={link.title}
                                to={link.href}
                                onClick={(e) => {
                                  handleAboutClick(e, link.scrollTo);
                                  setIsMenuOpen(false);
                                }}
                                className="text-primary-foreground/70 hover:text-accent transition-colors"
                              >
                                {link.title}
                              </Link>
                            ))}
                          {item.dropdown === "squad" && (
                            <Link
                              to="/squad/2025"
                              onClick={() => setIsMenuOpen(false)}
                              className="text-primary-foreground/70 hover:text-accent transition-colors"
                            >
                              Current Squad
                            </Link>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-gold text-foreground font-bold py-6 text-lg shadow-gold"
                  >
                    <a href="/brochure.pdf" download>
                      DOWNLOAD BROCHURE
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
