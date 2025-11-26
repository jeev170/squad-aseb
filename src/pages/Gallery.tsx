import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop",
      title: "Mountain Expedition 2024",
      description: "Team reaching the summit"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      title: "Adventure Training",
      description: "Members during outdoor activities"
    },
    {
      url: "https://images.unsplash.com/photo-1627873649417-c67f701f1949?w=1200&h=800&fit=crop",
      title: "Independence Day 2024",
      description: "Flag hoisting ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&h=800&fit=crop",
      title: "Team Building",
      description: "Squad members during workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=800&fit=crop",
      title: "Trekking Adventure",
      description: "Exploring nature trails"
    },
    {
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&h=800&fit=crop",
      title: "Camping Experience",
      description: "Night camp under stars"
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
      title: "Leadership Training",
      description: "Team collaboration session"
    },
    {
      url: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1200&h=800&fit=crop",
      title: "Heritage Walk",
      description: "Exploring historical sites"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryImages.length, isPlaying]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-serif font-bold text-primary mb-4">Squad Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of adventure, patriotism, and camaraderie
          </p>
        </motion.div>

        {/* Main Featured Image */}
        <Card className="overflow-hidden shadow-elegant mb-8 border-2 hover:border-primary/50 transition-colors">
          <div className="relative aspect-[21/9] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={galleryImages[currentImageIndex].url} 
                alt={galleryImages[currentImageIndex].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
              <motion.h3 
                key={`title-${currentImageIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-serif font-bold text-white mb-2"
              >
                {galleryImages[currentImageIndex].title}
              </motion.h3>
              <motion.p 
                key={`desc-${currentImageIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/90 text-lg"
              >
                {galleryImages[currentImageIndex].description}
              </motion.p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/80 hover:bg-primary backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-primary-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/80 hover:bg-primary backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-primary-foreground" />
            </button>
          </div>
        </Card>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentImageIndex(index);
                setIsPlaying(false);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                index === currentImageIndex 
                  ? 'border-primary ring-2 ring-primary/50' 
                  : 'border-transparent hover:border-primary/50'
              }`}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            {currentImageIndex + 1} / {galleryImages.length}
          </p>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="mt-4 text-primary hover:text-primary/80 font-medium underline"
          >
            {isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
