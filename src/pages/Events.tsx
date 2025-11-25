import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Mountain Trek 2025",
      date: "March 15-17, 2025",
      location: "Western Ghats",
      description: "Join us for an exhilarating three-day mountain trek through the beautiful Western Ghats. Experience nature, build teamwork, and create lasting memories while exploring India's natural heritage.",
      attendees: 45,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Republic Day Celebration",
      date: "January 26, 2025",
      location: "Campus Auditorium",
      description: "A grand celebration honoring our Republic Day with patriotic performances, flag hoisting ceremony, and inspiring speeches about our nation's journey and values.",
      attendees: 200,
      image: "https://images.unsplash.com/photo-1611329857570-f02f340e7378?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Leadership Workshop",
      date: "February 10, 2025",
      location: "Training Hall",
      description: "A comprehensive workshop focusing on leadership qualities, team management, and personal development inspired by military discipline and values.",
      attendees: 60,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Heritage Walk",
      date: "April 5, 2025",
      location: "Historic Bangalore",
      description: "Explore Bangalore's rich historical sites and learn about the city's contribution to India's freedom struggle and cultural heritage.",
      attendees: 35,
      image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Adventure Camp",
      date: "May 20-23, 2025",
      location: "Coorg",
      description: "An intensive adventure camp featuring rock climbing, rappelling, river crossing, and survival skills training in the scenic landscapes of Coorg.",
      attendees: 40,
      image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Independence Day Rally",
      date: "August 15, 2025",
      location: "City Center",
      description: "A patriotic rally commemorating India's Independence Day, featuring marches, flag distribution, and community engagement activities.",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1627873649417-c67f701f1949?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Our Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in celebrating patriotism and adventure through our diverse range of activities and events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.attendees} Participants</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
