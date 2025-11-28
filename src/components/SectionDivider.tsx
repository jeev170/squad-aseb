import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "flag" | "wave" | "simple";
  className?: string;
}

const SectionDivider = ({ variant = "simple", className = "" }: SectionDividerProps) => {
  if (variant === "flag") {
    return (
      <div className={`relative h-8 overflow-hidden ${className}`}>
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 flex"
        >
          <div className="flex-1 bg-gradient-to-r from-primary to-primary/80" />
          <div className="flex-1 bg-gradient-to-r from-accent to-accent/80" />
          <div className="flex-1 bg-gradient-to-r from-primary/80 to-primary" />
        </motion.div>
      </div>
    );
  }
  
  if (variant === "wave") {
    return (
      <div className={`relative h-24 overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-primary/10"
          />
        </svg>
      </div>
    );
  }
  
  return (
    <div className={`flex items-center justify-center gap-4 py-12 ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-0.5 bg-gradient-to-r from-transparent to-primary"
      />
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
        className="w-3 h-3 bg-accent rounded-full"
      />
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-0.5 bg-gradient-to-l from-transparent to-primary"
      />
    </div>
  );
};

export default SectionDivider;
