import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Center line - left on mobile, center on desktop */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
      
      <div className="space-y-8 md:space-y-16">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
            className="flex items-start md:items-center gap-4 md:gap-8 flex-row md:flex-row"
          >
            {/* Mobile: Icon on left, Desktop: Alternating layout */}
            <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-3 md:text-left'}`}>
              {index % 2 === 0 && (
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glassmorphism p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-transparent hover:border-accent/30 transition-all duration-500 group"
                >
                  <span className="text-accent font-bold text-sm md:text-lg tracking-premium">{item.year}</span>
                  <h3 className="text-lg md:text-2xl font-serif font-bold text-foreground mt-1 md:mt-2 mb-2 md:mb-3 group-hover:text-gradient transition-all duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.description}</p>
                </motion.div>
              )}
            </div>
            
            {/* Center Icon - Left on mobile */}
            <div className="flex-shrink-0 w-8 md:w-auto md:flex-1 md:max-w-[8.333%] flex justify-center relative z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 md:w-16 md:h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold border-2 md:border-4 border-background"
              >
                <item.icon className="w-4 h-4 md:w-7 md:h-7 text-foreground" />
              </motion.div>
            </div>
            
            {/* Content - Always right on mobile, alternating on desktop */}
            <div className={`flex-1 md:hidden`}>
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                className="glassmorphism p-3 sm:p-4 rounded-xl border-2 border-transparent hover:border-accent/30 transition-all duration-500 group"
              >
                <span className="text-accent font-bold text-xs sm:text-sm tracking-premium">{item.year}</span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-foreground mt-1 mb-1.5 group-hover:text-gradient transition-all duration-500">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </div>

            {/* Desktop: Right side content for even items, left side for odd */}
            <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : ''}`}>
              {index % 2 !== 0 && (
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glassmorphism p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-transparent hover:border-accent/30 transition-all duration-500 group"
                >
                  <span className="text-accent font-bold text-sm md:text-lg tracking-premium">{item.year}</span>
                  <h3 className="text-lg md:text-2xl font-serif font-bold text-foreground mt-1 md:mt-2 mb-2 md:mb-3 group-hover:text-gradient transition-all duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.description}</p>
                </motion.div>
              )}
            </div>
            
            {/* Desktop spacer */}
            <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? '' : 'md:order-1'}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
