"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen sm:min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-0">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Logo */}
          <div className="hidden sm:block mb-4 sm:mb-8">
            <Image
              src="/images/logo.png"
              alt="BPFA"
              width={80}
              height={80}
              className="mx-auto rounded-full sm:w-[120px] sm:h-[120px]"
            />
          </div>

          {/* Main Heading */}
          <h1 className="font-work-sans font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground mb-4 sm:mb-6 leading-tight">
            UNLEASH THE
            <span className="block text-primary">FIGHTER</span>
            <span className="block">IN YOU</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your body and mind at Sri Lanka's premier martial arts
            academy. Master MMA, Boxing, Jiu-Jitsu, and more with world-class
            trainers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSexVaWKUUHBRhts39JRrbrtqNw3BiICfTMa4dI_pKzKFVhjBw/viewform",
                  "_blank"
                )
              }
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 animate-scale-in"
            >
              START YOUR JOURNEY
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-work-sans font-bold text-primary">
                500+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">
                Active Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-work-sans font-bold text-primary">
                15+
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">
                Expert Trainers
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-work-sans font-bold text-primary">
                8
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">
                Martial Arts
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
