import { ClassesGrid } from "@/components/classes-grid";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Martial Arts Classes & Programs",
  description: "Explore BPFA's comprehensive martial arts classes: MMA, Boxing, Brazilian Jiu-Jitsu, Kickboxing, Karate, and more. All skill levels welcome at Sri Lanka's premier fighting academy.",
  openGraph: {
    title: "Martial Arts Classes at BPFA - MMA, Boxing, Jiu-Jitsu & More",
    description: "Train in MMA, Boxing, Brazilian Jiu-Jitsu, Kickboxing, and other martial arts at Black Panther Fighting Academy. Expert instructors, all skill levels welcome.",
    url: "https://bpfa.lk/classes",
  },
  twitter: {
    title: "BPFA Martial Arts Classes - MMA, Boxing, Jiu-Jitsu",
    description: "Train in MMA, Boxing, Brazilian Jiu-Jitsu, Kickboxing at Black Panther Fighting Academy. Expert instructors, all skill levels welcome.",
  },
};

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[50vh] bg-gradient-to-br from-black/90 to-black/80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover sm:bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('/classes/classes-background.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="relative z-10 pt-16 flex items-center justify-center h-full animate-fade-in-up">
          <div className="text-center max-w-4xl px-4 sm:px-6">
            <div className="mb-4 sm:mb-6">
              <span className="text-red-400 text-xs sm:text-sm font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                Strength for All
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8 tracking-wide sm:tracking-wider">
              OUR CLASSES
            </h1>
            <div className="w-20 sm:w-28 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 font-light tracking-wide mb-3 sm:mb-4 px-2">
              NO MORE EXCUSES, JOIN A CLASS TODAY
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <ClassesGrid />
      </div>
      <Footer />
    </main>
  );
}
