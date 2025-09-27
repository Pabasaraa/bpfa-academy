import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ClassesPreview } from "@/components/classes-preview"
import { TrainersPreview } from "@/components/trainers-preview"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ClassesPreview />
      <TrainersPreview />
      <CallToAction />
      <Footer />
    </main>
  )
}
