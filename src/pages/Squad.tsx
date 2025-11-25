import { Card } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { Crown, Users as UsersIcon } from "lucide-react";

const Squad = () => {
  const { year } = useParams();
  const displayYear = year || "2025";

  // Only 2025-26 has complete data, others show "Yet to be updated"
  const isCurrentYear = displayYear === "2025";

  const currentTeam = [
    {
      name: "Student Name",
      position: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Leading the squad with vision and dedication towards achieving our mission of blending patriotism with adventure."
    },
    {
      name: "Student Name",
      position: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description: "Supporting club operations and coordinating events to ensure seamless execution of all activities."
    },
    {
      name: "Student Name",
      position: "Vice President",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description: "Managing member engagement and fostering a strong sense of community within the club."
    },
    {
      name: "Student Name",
      position: "Treasurer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      description: "Overseeing financial planning and resource management to support all club initiatives."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">The Squad {displayYear}-{(parseInt(displayYear) + 1) % 100}</h1>
          <p className="text-xl text-muted-foreground">
            {isCurrentYear ? "Meet our current leadership team" : "Information to be updated soon"}
          </p>
        </div>

        {isCurrentYear ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentTeam.map((member, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`grid ${index === 0 ? 'md:grid-cols-3' : 'grid-cols-1'} gap-0`}>
                  <div className={`${index === 0 ? 'md:col-span-1' : ''} aspect-square overflow-hidden bg-gradient-patriotic`}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className={`${index === 0 ? 'md:col-span-2' : ''} p-6 flex flex-col justify-center`}>
                    <div className="flex items-center gap-3 mb-4">
                      {index === 0 && (
                        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                          <Crown className="h-6 w-6 text-accent" />
                        </div>
                      )}
                      {index !== 0 && (
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <UsersIcon className="h-6 w-6 text-primary" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                        <p className="text-lg text-primary font-semibold">{member.position}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center shadow-elegant">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <UsersIcon className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Squad {displayYear}-{(parseInt(displayYear) + 1) % 100}
              </h3>
              <p className="text-lg text-muted-foreground">
                Information for this year will be updated soon. Stay tuned!
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Squad;
