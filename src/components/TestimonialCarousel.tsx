import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

const TestimonialCarousel = ({ testimonials, autoPlayInterval = 5000 }: TestimonialCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [testimonials.length, autoPlayInterval, isPaused]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center px-8 md:px-16"
        >
          {/* Quote Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-8"
          >
            <Quote className="w-16 h-16 text-accent mx-auto" />
          </motion.div>
          
          {/* Quote Text */}
          <blockquote className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed mb-10 max-w-4xl mx-auto">
            "{testimonials[current].quote}"
          </blockquote>
          
          {/* Author */}
          <div className="flex flex-col items-center gap-4">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full object-cover border-4 border-accent shadow-gold"
            />
            <div>
              <h4 className="text-xl font-bold text-foreground">{testimonials[current].name}</h4>
              <p className="text-muted-foreground">{testimonials[current].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors group"
      >
        <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors group"
      >
        <ChevronRight className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
      </button>
      
      {/* Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current 
                ? 'w-10 bg-accent' 
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
