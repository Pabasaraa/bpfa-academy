"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Award, Calendar } from "lucide-react";
import Link from "next/link";
import trainersData from "@/data/trainers.json";
import { TrainerModal } from "./trainer-modal";

interface TrainerData {
  id: string;
  head: boolean;
  name: string;
  specialty: string;
  experience: string;
  achievements: string[];
  image: string;
  bio: string;
  certifications: string[];
  philosophy: string;
  styles: string[];
}

export function TrainersPreview() {
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerData | null>(
    null
  );

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-red-400 text-sm font-light tracking-[0.4em] uppercase">
              Elite Training Staff
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-wider">
            WARRIOR
            <span className="block text-red-500">MASTERS</span>
          </h2>
          <div className="w-28 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Train under champions who have proven themselves in the ring and
            dedicated their lives to perfecting the martial arts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {trainersData.slice(0, 3).map((trainer) => (
            <div
              key={trainer.id}
              onClick={() => setSelectedTrainer(trainer)}
              className={`relative group cursor-pointer transform hover:scale-105 transition-all duration-500 ${
                trainer.head ? "md:col-span-3 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden h-96 bg-gradient-to-br from-gray-800 to-black border border-gray-700 group-hover:border-red-500/50 transition-colors duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                  style={{ backgroundImage: `url('${trainer.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                {trainer.head && trainer.id !== "nilanka-madushan" && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                      HEAD COACH
                    </div>
                  </div>
                )}

                {trainer.id === "nilanka-madushan" && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                      <Crown className="w-3 h-3" />
                      FOUNDER & MASTER
                    </div>
                  </div>
                )}

                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className="transform group-hover:-translate-y-16 transition-transform duration-300">
                    {/* Details shown on hover */}
                    <div className="space-y-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Award className="w-4 h-4 text-red-500" />
                        <span className="text-sm">
                          {trainer.achievements[0]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4 text-red-500" />
                        <span className="text-sm">
                          {trainer.experience} Experience
                        </span>
                      </div>
                    </div>

                    {/* Main heading & specialty */}
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-wide">
                      {trainer.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <p className="text-red-400 font-bold text-sm uppercase tracking-widest">
                        {trainer.specialty}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/trainers">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-black text-base px-10 py-6 tracking-wider uppercase"
            >
              MEET THE LEGENDS
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedTrainer && (
        <TrainerModal
          trainerData={selectedTrainer}
          isOpen={!!selectedTrainer}
          onClose={() => setSelectedTrainer(null)}
        />
      )}
    </section>
  );
}
