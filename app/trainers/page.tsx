import { TrainersGrid } from "@/components/trainers-grid";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Expert Trainers & Instructors",
  description: "Meet BPFA's world-class martial arts trainers and instructors. Expert coaches in MMA, Boxing, Brazilian Jiu-Jitsu, Kickboxing with years of professional experience.",
  openGraph: {
    title: "BPFA Expert Trainers - World-Class Martial Arts Instructors",
    description: "Meet our expert martial arts trainers at Black Panther Fighting Academy. Professional MMA, Boxing, and Jiu-Jitsu instructors with years of experience.",
    url: "https://bpfa.lk/trainers",
  },
  twitter: {
    title: "BPFA Expert Trainers - Martial Arts Instructors",
    description: "Meet our expert martial arts trainers at Black Panther Fighting Academy. Professional MMA, Boxing, and Jiu-Jitsu instructors.",
  },
};

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[50vh] bg-gradient-to-br from-black/90 to-black/80 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('/coaches/coach-background.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="relative z-10 pt-16 flex items-center justify-center h-full animate-fade-in-up">
          <div className="text-center max-w-4xl px-4 sm:px-6">
            <div className="mb-4 sm:mb-6">
              <span className="text-red-400 text-xs sm:text-sm font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                Meet The
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8 tracking-wide sm:tracking-wider">
              MASTERS
            </h1>
            <div className="w-20 sm:w-28 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-lg text-gray-200 font-light tracking-wide mb-3 sm:mb-4 px-2">
              LEARN FROM THE LEGENDS
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <TrainersGrid />
      </div>
      <Footer />
    </main>
  );
}
