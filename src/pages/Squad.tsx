import { Card } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { Crown, Shield, Wallet } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-7xl font-serif font-bold text-gradient mb-6">
            The Squad {displayYear}-{(parseInt(displayYear) + 1) % 100}
          </h1>
          <p className="text-2xl text-muted-foreground">
            {isCurrentYear ? "Meet our current leadership team" : "Information to be updated soon"}
          </p>
        </motion.div>

        {isCurrentYear ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
              >
                <Card className="overflow-hidden hover:shadow-glow transition-all duration-500 group border-2 hover:border-primary/50 glassmorphism h-full flex flex-col relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  <div className="aspect-square overflow-hidden relative">
                    <motion.img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center shadow-glow"
                    >
                      <member.icon className="h-7 w-7 text-accent-foreground" />
                    </motion.div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-4">
                      {member.position}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm flex-1">
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
            transition={{ duration: 0.6 }}
          >
            <Card className="p-16 text-center shadow-elegant border-2 border-muted bg-card/50 backdrop-blur-sm">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                Squad {displayYear}-{(parseInt(displayYear) + 1) % 100}
              </h3>
              <p className="text-xl text-muted-foreground">
                Information for this year will be updated soon. Stay tuned!
              </p>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Squad;
