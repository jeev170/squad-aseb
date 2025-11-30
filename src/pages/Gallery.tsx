import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 12;

  // Gallery images - upload to public/images/gallery/ folder
  // Name them: gallery-1.jpg, gallery-2.jpg, etc.
  const galleryImages = Array.from({ length: 24 }, (_, i) => ({
    url: `/images/gallery/gallery-${i + 1}.jpg`
  }));

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  const currentImages = galleryImages.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  // Auto-rotate pages every 5 seconds
  useEffect(() => {
    if (selectedImage !== null) return;
    
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages, selectedImage]);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    } else {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const getGlobalIndex = (localIndex: number) => {
    return currentPage * imagesPerPage + localIndex;
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

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {currentImages.map((image, index) => (
              <motion.div
                key={getGlobalIndex(index)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(getGlobalIndex(index))}
              >
                <img 
                  src={image.url} 
                  alt={`Gallery image ${getGlobalIndex(index) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Page Indicators */}
        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
            className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-accent" />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentPage 
                    ? 'w-8 bg-accent' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
            className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-5 h-5 text-accent" />
          </button>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-4">
          Auto-advances every 5 seconds • Page {currentPage + 1} of {totalPages}
        </p>

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
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-14 h-14 rounded-full glassmorphism-dark flex items-center justify-center hover:bg-primary-foreground/20 transition-all group z-50"
              >
                <X className="w-7 h-7 text-primary-foreground group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>
              
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
                    alt={`Gallery image ${selectedImage + 1}`}
                    className="w-full h-full object-contain max-h-[85vh]"
                  />
                </div>
              </motion.div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 glassmorphism-dark rounded-full">
                <span className="text-primary-foreground text-sm font-medium">
                  {selectedImage + 1} / {galleryImages.length}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
