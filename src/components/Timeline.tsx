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
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
      
      <div className="space-y-16">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
            className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            {/* Content Card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glassmorphism p-6 rounded-2xl border-2 border-transparent hover:border-accent/30 transition-all duration-500 group"
              >
                <span className="text-accent font-bold text-lg tracking-premium">{item.year}</span>
                <h3 className="text-2xl font-serif font-bold text-foreground mt-2 mb-3 group-hover:text-gradient transition-all duration-500">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            </div>
            
            {/* Center Icon */}
            <div className="w-2/12 flex justify-center relative z-10">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold border-4 border-background"
              >
                <item.icon className="w-7 h-7 text-foreground" />
              </motion.div>
            </div>
            
            {/* Spacer for alternating layout */}
            <div className="w-5/12" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
