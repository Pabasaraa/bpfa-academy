import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Trophy } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: Shield,
      title: "Discipline",
      description:
        "Building character through structured training and mental fortitude",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Mastering techniques with accuracy and controlled power",
    },
    {
      icon: Users,
      title: "Community",
      description: "Creating bonds that extend beyond the training mat",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Pursuing greatness in every aspect of martial arts",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-3xl md:text-5xl text-foreground mb-6">
            WHERE WARRIORS ARE
            <span className="block text-primary">FORGED</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Black Panther Fighting Academy, we don't just teach martial arts
            – we forge warriors. Our philosophy combines ancient martial arts
            wisdom with modern training methodologies to create complete
            fighters who excel both in combat and in life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-primary transition-colors group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-work-sans font-bold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-work-sans font-bold text-2xl md:text-3xl text-foreground mb-6">
              Our Legacy of Excellence
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with the vision of bringing world-class martial arts
                training to Sri Lanka, Black Panther Fighting Academy has become
                the premier destination for serious fighters and fitness
                enthusiasts alike.
              </p>
              <p>
                Our state-of-the-art facility houses multiple training areas,
                professional-grade equipment, and an environment designed to
                push you beyond your limits while ensuring your safety and
                growth.
              </p>
              <p>
                Whether you're a complete beginner looking to learn self-defense
                or an experienced fighter aiming to compete at the highest
                levels, our expert instructors will guide you on your journey to
                becoming the best version of yourself.
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              className="w-full h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('/home/our-legacy.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
