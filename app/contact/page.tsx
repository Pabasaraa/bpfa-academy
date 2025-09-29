import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get Started Today",
  description: "Contact Black Panther Fighting Academy to start your martial arts journey. Visit our gym, call us, or send a message. Located in Sri Lanka's premier training facility.",
  openGraph: {
    title: "Contact BPFA - Start Your Martial Arts Journey Today",
    description: "Get in touch with Black Panther Fighting Academy to begin training in MMA, Boxing, Jiu-Jitsu, and more. Visit our gym or contact us today.",
    url: "https://bpfa.lk/contact",
  },
  twitter: {
    title: "Contact BPFA - Start Your Martial Arts Journey",
    description: "Get in touch with Black Panther Fighting Academy to begin training in MMA, Boxing, Jiu-Jitsu, and more.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[50vh] bg-gradient-to-br from-black/90 to-black/80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{
            backgroundImage: "url('/contact-us.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        <div className="relative z-10 pt-16 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl px-4 sm:px-6">
            <div className="mb-4 sm:mb-6">
              <span className="text-red-400 text-xs sm:text-sm font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                READY TO START?
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8 tracking-wide sm:tracking-wider">
              FIND US
            </h1>
            <div className="w-20 sm:w-28 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-lg text-gray-300 tracking-wide sm:tracking-widest uppercase px-2">
              COME TO THE BPFA TODAY
            </p>
          </div>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </main>
  );
}
