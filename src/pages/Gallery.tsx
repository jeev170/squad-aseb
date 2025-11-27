import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop",
      title: "Mountain Expedition 2024",
      description: "Team reaching the summit",
      span: "col-span-2 row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      title: "Adventure Training",
      description: "Members during outdoor activities",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1627873649417-c67f701f1949?w=1200&h=800&fit=crop",
      title: "Independence Day 2024",
      description: "Flag hoisting ceremony",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&h=800&fit=crop",
      title: "Team Building",
      description: "Squad members during workshop",
      span: "col-span-1 row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=800&fit=crop",
      title: "Trekking Adventure",
      description: "Exploring nature trails",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&h=800&fit=crop",
      title: "Camping Experience",
      description: "Night camp under stars",
      span: "col-span-2 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
      title: "Leadership Training",
      description: "Team collaboration session",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1200&h=800&fit=crop",
      title: "Heritage Walk",
      description: "Exploring historical sites",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1445346366695-5bf62de05412?w=1200&h=800&fit=crop",
      title: "Camp Fire Nights",
      description: "Bonding under the stars",
      span: "col-span-1 row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&h=800&fit=crop",
      title: "Rock Climbing",
      description: "Pushing physical limits",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&h=800&fit=crop",
      title: "River Rafting",
      description: "Conquering the rapids",
      span: "col-span-2 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&h=800&fit=crop",
      title: "Group Activities",
      description: "Building lasting friendships",
      span: "col-span-1 row-span-1"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-7xl font-serif font-bold text-gradient mb-6">Squad Gallery</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Capturing moments of adventure, patriotism, and camaraderie
          </p>
        </motion.div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 0.98, y: -5 }}
              className={`${image.span} group relative overflow-hidden rounded-2xl cursor-pointer`}
              onClick={() => setSelectedImage(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
              
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-20">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white font-bold text-2xl mb-2">{image.title}</h3>
                  <p className="text-white/90 text-sm mb-4">{image.description}</p>
                  <div className="flex items-center gap-2 text-white/80">
                    <ZoomIn className="w-4 h-4" />
                    <span className="text-xs font-medium">Click to expand</span>
                  </div>
                </motion.div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/20 blur-2xl group-hover:blur-3xl transition-all duration-500 z-0" />
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
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-14 h-14 glassmorphism hover:bg-white/20 rounded-full flex items-center justify-center transition-all group z-50"
              >
                <X className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="max-w-7xl max-h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-glow">
                  <img 
                    src={galleryImages[selectedImage].url} 
                    alt={galleryImages[selectedImage].title}
                    className="w-full h-full object-contain"
                  />
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 glassmorphism p-8"
                  >
                    <h3 className="text-white font-bold text-3xl mb-3">{galleryImages[selectedImage].title}</h3>
                    <p className="text-white/90 text-lg">{galleryImages[selectedImage].description}</p>
                  </motion.div>
                </div>
              </motion.div>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(idx);
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === selectedImage 
                        ? 'bg-white w-10' 
                        : 'bg-white/40 hover:bg-white/60 w-2'
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
