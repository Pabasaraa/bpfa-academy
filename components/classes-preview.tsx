import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ClassesPreview() {
  const classes = [
    {
      name: "Mixed Martial Arts",
      description: "Complete fighting system combining striking, grappling, and ground fighting",
      image: "/mma-training-octagon-cage-fighting.jpg",
      level: "All Levels",
      duration: "90 min",
    },
    {
      name: "Boxing",
      description: "Master the sweet science with proper technique, footwork, and conditioning",
      image: "/boxing-training-heavy-bag-gloves.jpg",
      level: "Beginner to Pro",
      duration: "60 min",
    },
    {
      name: "Brazilian Jiu-Jitsu",
      description: "Ground fighting art focusing on leverage, technique, and submission holds",
      image: "/bjj-brazilian-jiu-jitsu-grappling-mat.jpg",
      level: "All Levels",
      duration: "75 min",
    },
    {
      name: "Kickboxing",
      description: "High-intensity striking art combining punches, kicks, and cardio conditioning",
      image: "/kickboxing-training-pads-kicks-punches.jpg",
      level: "All Levels",
      duration: "60 min",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-3xl md:text-5xl text-foreground mb-6">
            MASTER THE
            <span className="block text-primary">FIGHTING ARTS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of martial arts disciplines. Each program is designed to challenge you
            physically and mentally while building real-world fighting skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {classes.map((classItem, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 group overflow-hidden"
            >
              <div className="relative">
                <div
                  className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('${classItem.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {classItem.level}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-work-sans font-bold text-xl text-foreground mb-3">{classItem.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{classItem.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>Duration: {classItem.duration}</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/classes">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4"
            >
              VIEW ALL CLASSES
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
