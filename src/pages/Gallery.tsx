import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Squad Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of adventure, patriotism, and camaraderie
          </p>
        </div>

        {/* Featured Image Slideshow */}
        <Card className="overflow-hidden shadow-elegant mb-12">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img 
              src={galleryImages[currentImageIndex].url} 
              alt={galleryImages[currentImageIndex].title}
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {galleryImages[currentImageIndex].title}
              </h3>
              <p className="text-white/90">
                {galleryImages[currentImageIndex].description}
              </p>
            </div>
          </div>
        </Card>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              onClick={() => setCurrentImageIndex(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-foreground mb-1">{image.title}</h4>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted hover:bg-primary/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
