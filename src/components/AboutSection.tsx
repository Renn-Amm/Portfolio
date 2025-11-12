import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase } from "lucide-react";
import profileImage from "@/assets/profile.JPG";

const AboutSection = () => {
  const interests = [
    "Full-Stack Development",
    "Software Development",
    "Artificial Intelligence (AI)",
    "Machine Learning",
    "Game Development",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start animate-fade-in flex-shrink-0 w-full md:w-auto">
              <div className="w-full max-w-[380px] h-auto md:w-96 md:h-80 rounded-2xl overflow-hidden shadow-glow mx-auto">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-auto md:h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Experience + Education + Story */}
            <div className="flex flex-col gap-4 flex-1 mt-6 md:mt-0">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Experience */}
                <Card className="bg-gradient-card shadow-card border-0 animate-fade-in flex-1">
                  <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase size={18} className="text-primary" />
                      <h3 className="text-lg font-bold text-foreground">
                        Experience
                      </h3>
                    </div>
                    <div className="text-center space-y-1">
                      <h4 className="font-semibold text-base text-foreground">
                        Full-Stack Developer
                      </h4>
                      <p className="text-sm text-muted-foreground">2+ years</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Education */}
                <Card className="bg-gradient-card shadow-card border-0 animate-fade-in flex-1">
                  <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap size={18} className="text-primary" />
                      <h3 className="text-lg font-bold text-foreground">
                        Education
                      </h3>
                    </div>
                    <div className="text-center space-y-1">
                      <h4 className="font-semibold text-sm text-foreground">
                        Master's in CS - Harbour Space
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        2025 - 2026
                      </p>
                      <h4 className="font-semibold text-sm text-foreground">
                        Bachelor's in CS
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        2022 - 2025
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Story */}
              <div className="flex-1 flex items-center justify-center animate-fade-in text-center md:text-left">
                <p className="text-base text-muted-foreground leading-relaxed px-2 md:px-4">
                  For me, coding isn’t just about solving problems; it’s about
                  creating something meaningful from scratch. I’m a full-stack
                  developer exploring the space where logic meets imagination,
                  diving into AI to build tools that can think, learn, and maybe
                  even surprise me. When I’m not coding, I’m usually making
                  small games, reading, or chasing new ideas that spark my
                  curiosity. I don’t chase perfection, I chase creation. And if
                  your idea has fire, I’ll help it burn brighter.
                </p>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="text-center animate-fade-in">
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
              Areas of Interest
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {interests.map((interest) => (
                <Badge
                  key={interest}
                  variant="secondary"
                  className="bg-background/50 hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 text-sm px-4 py-1.5"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
