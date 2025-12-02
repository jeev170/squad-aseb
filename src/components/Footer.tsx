import { Instagram, Mail, MapPin, ArrowUpRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Logo - upload to public/images/squad-logo.png

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Alumni", href: "/alumni" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/squad_aseb", label: "Instagram" },
    { icon: Mail, href: "mailto:thesquadclub.aseb@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-dark text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-5" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 md:left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[150px]" />
      <div className="absolute bottom-0 right-0 md:right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent/10 rounded-full blur-[80px] md:blur-[150px]" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <motion.img
                src="/images/squad-logo.png"
                alt="The Squad Logo"
                className="h-14 w-14"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <div>
                <h3 className="font-serif font-bold text-xl">THE SQUAD</h3>
                <p className="text-sm text-primary-foreground/60 tracking-premium uppercase">
                  Patriotic & Adventure Club
                </p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              A vibrant community uniting the spirit of adventure with love since 2016.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif font-bold text-lg mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    <span className="underline-reveal">{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif font-bold text-lg mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground/90 font-medium">Location</p>
                  <p className="text-primary-foreground/60 text-sm">
                    Amrita Vishwa Vidyapeetham, Bengaluru
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground/90 font-medium">Email</p>
                  <a
                    href="mailto:thesquadclub.aseb@gmail.com"
                    className="text-primary-foreground/60 text-sm hover:text-accent transition-colors"
                  >
                    thesquadclub.aseb@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-primary-foreground/90 font-medium">Instagram</p>
                  <a
                    href="https://instagram.com/squad_aseb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/60 text-sm hover:text-accent transition-colors"
                  >
                    @squad_aseb
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter/CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-serif font-bold text-lg mb-6 text-accent">Join Our Journey</h4>
            <p className="text-primary-foreground/70 mb-6">
              Be part of our adventure-filled community and stay updated with our latest events.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-foreground font-bold rounded-lg shadow-gold hover:shadow-neon transition-all duration-300"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-primary-foreground/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/50 text-sm">
            <p>© {currentYear} THE SQUAD</p>
            <p>Patriotic & Adventure Club, Amrita Vishwa Vidyapeetham</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
