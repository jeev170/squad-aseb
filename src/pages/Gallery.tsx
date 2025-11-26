import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
    },
    {
      url: "https://images.unsplash.com/photo-1445346366695-5bf62de05412?w=1200&h=800&fit=crop",
      title: "Camp Fire Nights",
      description: "Bonding under the stars"
    },
    {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&h=800&fit=crop",
      title: "Rock Climbing",
      description: "Pushing physical limits"
    },
    {
      url: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&h=800&fit=crop",
      title: "River Rafting",
      description: "Conquering the rapids"
    },
    {
      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&h=800&fit=crop",
      title: "Group Activities",
      description: "Building lasting friendships"
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
          <h1 className="text-6xl font-serif font-bold text-primary mb-4">Squad Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of adventure, patriotism, and camaraderie
          </p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                <p className="text-white/90 text-sm">{image.description}</p>
              </div>
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
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-6xl max-h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={galleryImages[selectedImage].url} 
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white font-bold text-2xl mb-2">{galleryImages[selectedImage].title}</h3>
                  <p className="text-white/90">{galleryImages[selectedImage].description}</p>
                </div>
              </motion.div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === selectedImage ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
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
