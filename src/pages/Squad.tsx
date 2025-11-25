import { Card } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { Crown, Users as UsersIcon, Shield } from "lucide-react";
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
      icon: UsersIcon
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-primary mb-4">
            The Squad {displayYear}-{(parseInt(displayYear) + 1) % 100}
          </h1>
          <p className="text-xl text-muted-foreground">
            {isCurrentYear ? "Meet our current leadership team" : "Information to be updated soon"}
          </p>
        </motion.div>

        {isCurrentYear ? (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {currentTeam.map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className={index === 0 ? 'md:col-span-2' : ''}
              >
                <Card 
                  className={`overflow-hidden hover:shadow-elegant transition-all duration-500 group border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm h-full`}
                >
                  <div className={`grid ${index === 0 ? 'md:grid-cols-3' : 'grid-cols-1'} gap-0`}>
                    <motion.div 
                      className={`${index === 0 ? 'md:col-span-1' : ''} aspect-square overflow-hidden relative`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Icon Badge */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                        className="absolute top-4 right-4 w-16 h-16 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                      >
                        <member.icon className="h-8 w-8 text-accent-foreground" />
                      </motion.div>
                    </motion.div>
                    
                    <div className={`${index === 0 ? 'md:col-span-2' : ''} p-8 flex flex-col justify-center`}>
                      <motion.div 
                        className="mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <div className="inline-block">
                          <p className="text-xl text-primary font-semibold bg-primary/10 px-4 py-2 rounded-full">
                            {member.position}
                          </p>
                        </div>
                      </motion.div>
                      
                      <motion.p 
                        className="text-muted-foreground leading-relaxed text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        {member.description}
                      </motion.p>

                      {index === 0 && (
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7, duration: 0.8 }}
                          className="h-1 bg-gradient-patriotic mt-6 rounded-full"
                        />
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-16 text-center shadow-elegant border-2 border-muted bg-card/50 backdrop-blur-sm">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="max-w-md mx-auto"
              >
                <div className="w-32 h-32 bg-gradient-patriotic rounded-full flex items-center justify-center mx-auto mb-8 shadow-elegant">
                  <UsersIcon className="h-16 w-16 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Squad {displayYear}-{(parseInt(displayYear) + 1) % 100}
                </h3>
                <p className="text-xl text-muted-foreground">
                  Information for this year will be updated soon. Stay tuned!
                </p>
              </motion.div>
            </Card>
          </motion.div>
        )}

        {/* Decorative Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-10 w-32 h-32 border-4 border-primary/10 rounded-full -z-10"
        />
        <motion.div
          animate={{ 
            rotate: -360,
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-10 w-40 h-40 border-4 border-accent/10 rounded-full -z-10"
        />
      </div>
    </div>
  );
};

export default Squad;
