import { Card } from "@/components/ui/card";
import { Mail, Award, BookOpen } from "lucide-react";
import mentorImage from "@/assets/mentor-placeholder.jpg";

const Mentor = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Our Mentor</h1>
          <p className="text-xl text-muted-foreground">
            Guiding us with wisdom and experience
          </p>
        </div>

        <Card className="overflow-hidden shadow-elegant">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Image Section */}
            <div className="md:col-span-2 bg-gradient-patriotic p-8 flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary-foreground shadow-elegant">
                  <img 
                    src={mentorImage} 
                    alt="Dr. Shashi Kumar ME"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-3 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-2">Dr. Shashi Kumar ME</h2>
              <p className="text-xl text-accent mb-6">Faculty Mentor</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Qualifications & Experience</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dr. Shashi Kumar ME brings extensive experience in academia and a deep passion for student 
                      development. With expertise in engineering and leadership, he has been instrumental in 
                      shaping young minds and fostering excellence.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Role in The Squad</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As the guiding force behind The Squad, Dr. Kumar provides invaluable mentorship, helping 
                      members develop leadership skills, patriotic values, and a spirit of adventure. His vision 
                      and guidance have been pivotal in establishing the club's strong foundation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Philosophy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      "True education goes beyond textbooks. It's about building character, instilling values, 
                      and nurturing a deep connection with our nation. Through The Squad, we aim to create 
                      responsible citizens who are both adventurous in spirit and rooted in patriotism."
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  Under Dr. Kumar's mentorship, The Squad has grown into a vibrant community that successfully 
                  blends academic excellence with practical leadership training and outdoor adventures, creating 
                  well-rounded individuals ready to serve the nation.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Mentor;
