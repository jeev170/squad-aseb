import { Card } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { Crown, Shield, Wallet, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";

const Squad = () => {
  const { year } = useParams();
  const displayYear = year || "2025";
  const isCurrentYear = displayYear === "2025";

  const currentTeam = [
    {
      name: "Student Name",
      position: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Leading the squad with vision and dedication towards achieving our mission of blending patriotism with adventure.",
      icon: Crown
    },
    {
      name: "Student Name",
      position: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description: "Supporting club operations and coordinating events to ensure seamless execution of all activities.",
      icon: Shield
    },
    {
      name: "Student Name",
      position: "Vice President",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description: "Managing member engagement and fostering a strong sense of community within the club.",
      icon: Shield
    },
    {
      name: "Student Name",
      position: "Treasurer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      description: "Overseeing financial planning and resource management to support all club initiatives.",
      icon: Wallet
    }
  ];

  return (
    <div className="min-h-screen bg-background py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <ParticleBackground />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Sparkles className="h-20 w-20 text-accent mx-auto animate-pulse-glow" />
          </motion.div>
          <h1 className="text-8xl font-serif font-bold text-gradient mb-8">
            The Squad {displayYear}-{(parseInt(displayYear) + 1) % 100}
          </h1>
          <p className="text-2xl text-muted-foreground font-medium">
            {isCurrentYear ? "Meet our current leadership team" : "Information to be updated soon"}
          </p>
        </motion.div>

        {isCurrentYear ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                whileHover={{ y: -20, scale: 1.03 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-glow transition-all duration-700 group border-2 hover:border-accent/50 glassmorphism h-full flex flex-col relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                  />
                  
                  <div className="aspect-square overflow-hidden relative">
                    <motion.img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 150 }}
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      className="absolute top-5 right-5 w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold"
                    >
                      <member.icon className="h-8 w-8 text-foreground" />
                    </motion.div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col relative z-10">
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-500">
                      {member.name}
                    </h3>
                    <p className="text-xl text-primary font-bold mb-5">
                      {member.position}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base flex-1">
                      {member.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-20 text-center shadow-glow border-2 border-accent/30 glassmorphism relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
              />
              <div className="relative z-10">
                <h3 className="text-5xl font-serif font-bold text-gradient mb-6">
                  Squad {displayYear}-{(parseInt(displayYear) + 1) % 100}
                </h3>
                <p className="text-2xl text-muted-foreground font-medium">
                  Information for this year will be updated soon. Stay tuned!
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Squad;
