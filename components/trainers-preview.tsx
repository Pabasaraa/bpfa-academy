import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users } from "lucide-react"
import Link from "next/link"

export function TrainersPreview() {
  const trainers = [
    {
      name: "Sensei Rajesh Kumar",
      specialty: "MMA & Kickboxing",
      experience: "15+ Years",
      achievements: "Former National Champion",
      image: "/martial-arts-instructor-male-serious-professional.jpg",
      students: "200+",
    },
    {
      name: "Coach Priya Silva",
      specialty: "Brazilian Jiu-Jitsu",
      experience: "12+ Years",
      achievements: "Black Belt BJJ",
      image: "/female-martial-arts-instructor-bjj-professional.jpg",
      students: "150+",
    },
    {
      name: "Master Chen Wei",
      specialty: "Boxing & Conditioning",
      experience: "20+ Years",
      achievements: "International Boxing Coach",
      image: "/boxing-coach-male-experienced-professional.jpg",
      students: "300+",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-3xl md:text-5xl text-foreground mb-6">
            LEARN FROM THE
            <span className="block text-primary">MASTERS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our world-class instructors bring decades of experience, championship titles, and a passion for teaching
            that will elevate your martial arts journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trainers.map((trainer, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-primary transition-all duration-300 group overflow-hidden"
            >
              <div className="relative">
                <div
                  className="w-full h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('${trainer.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-work-sans font-bold text-xl text-foreground mb-1">{trainer.name}</h3>
                  <p className="text-primary font-semibold">{trainer.specialty}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm">{trainer.achievements}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">{trainer.students} Students Trained</span>
                  </div>
                  <div className="text-muted-foreground text-sm">Experience: {trainer.experience}</div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/trainers">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4"
            >
              MEET ALL TRAINERS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
