import { Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import squadLogo from "@/assets/squad-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={squadLogo} alt="The Squad Logo" className="h-12 w-12" />
              <div>
                <h3 className="font-bold text-lg">THE SQUAD</h3>
                <p className="text-sm opacity-80">Patriotic & Adventure Club</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              A vibrant community dedicated to uniting the spirit of adventure with love for the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-accent transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/alumni" className="hover:text-accent transition-colors">Alumni</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Amrita Vishwa Vidyapeetham, Bengaluru</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:squad_aseb@gmail.com" className="hover:text-accent transition-colors">
                  squad_aseb@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-5 w-5 flex-shrink-0" />
                <a 
                  href="https://instagram.com/squad_aseb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @squad_aseb
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light/30 mt-8 pt-6 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} THE SQUAD - The Patriotic and Adventure Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
