import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop",
      title: "Mountain Expedition 2024",
      description: "Team reaching the summit",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      title: "Adventure Training",
      description: "Members during outdoor activities",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1627873649417-c67f701f1949?w=1200&h=800&fit=crop",
      title: "Independence Day 2024",
      description: "Flag hoisting ceremony",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&h=800&fit=crop",
      title: "Team Building",
      description: "Squad members during workshop",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=800&fit=crop",
      title: "Trekking Adventure",
      description: "Exploring nature trails",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&h=800&fit=crop",
      title: "Camping Experience",
      description: "Night camp under stars",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
      title: "Leadership Training",
      description: "Team collaboration session",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1200&h=800&fit=crop",
      title: "Heritage Walk",
      description: "Exploring historical sites",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1445346366695-5bf62de05412?w=1200&h=800&fit=crop",
      title: "Camp Fire Nights",
      description: "Bonding under the stars",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&h=800&fit=crop",
      title: "Rock Climbing",
      description: "Pushing physical limits",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&h=800&fit=crop",
      title: "River Rafting",
      description: "Conquering the rapids",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&h=800&fit=crop",
      title: "Group Activities",
      description: "Building lasting friendships",
      span: "md:col-span-1 md:row-span-1"
    }
  ];

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    } else {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-premium uppercase mb-6"
          >
            <Camera className="w-4 h-4 inline mr-2" />
            Visual Stories
          </motion.span>
          <h1 className="text-hero font-serif font-bold text-gradient mb-6">Squad Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of adventure, patriotism, and camaraderie
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`${image.span} group relative overflow-hidden rounded-2xl cursor-pointer`}
              onClick={() => setSelectedImage(index)}
            >
              {/* Image */}
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Content */}
              <motion.div 
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                initial={false}
              >
                <h3 className="text-primary-foreground font-serif font-bold text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {image.description}
                </p>
                <div className="flex items-center gap-2 text-accent translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <ZoomIn className="w-4 h-4" />
                  <span className="text-xs font-medium tracking-wide">Click to expand</span>
                </div>
              </motion.div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent/20 blur-xl group-hover:bg-accent/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-14 h-14 rounded-full glassmorphism-dark flex items-center justify-center hover:bg-primary-foreground/20 transition-all group z-50"
              >
                <X className="w-7 h-7 text-primary-foreground group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>
              
              {/* Navigation Buttons */}
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                className="absolute left-4 md:left-8 w-14 h-14 rounded-full glassmorphism-dark flex items-center justify-center hover:bg-primary-foreground/20 transition-all group z-50"
              >
                <ChevronLeft className="w-7 h-7 text-primary-foreground" />
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                className="absolute right-4 md:right-8 w-14 h-14 rounded-full glassmorphism-dark flex items-center justify-center hover:bg-primary-foreground/20 transition-all group z-50"
              >
                <ChevronRight className="w-7 h-7 text-primary-foreground" />
              </motion.button>
              
              {/* Image */}
              <motion.div
                key={selectedImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="max-w-6xl max-h-[85vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src={galleryImages[selectedImage].url} 
                    alt={galleryImages[selectedImage].title}
                    className="w-full h-full object-contain max-h-[75vh]"
                  />
                  
                  {/* Caption */}
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 glassmorphism-dark p-6 md:p-8"
                  >
                    <h3 className="text-primary-foreground font-serif font-bold text-2xl md:text-3xl mb-2">
                      {galleryImages[selectedImage].title}
                    </h3>
                    <p className="text-primary-foreground/80">{galleryImages[selectedImage].description}</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Dots Navigation */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(idx);
                    }}
                    whileHover={{ scale: 1.2 }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === selectedImage 
                        ? 'w-8 bg-accent' 
                        : 'w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
