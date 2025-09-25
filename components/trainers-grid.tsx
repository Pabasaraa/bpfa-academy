"use client";

import { useState } from "react";
import { TrainerModal } from "@/components/trainer-modal";
import trainersData from "@/data/trainers.json";
import { Crown } from "lucide-react";

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

export function TrainersGrid() {
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerData | null>(
    null
  );

  const trainers: TrainerData[] = trainersData;

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.id}
              className={`relative overflow-hidden cursor-pointer group min-h-[450px] ${
                index === 0 ? "lg:row-span-2 lg:col-span-1" : ""
              }`}
              onClick={() => setSelectedTrainer(trainer)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${trainer.image}')` }}
              />

              {trainer.head && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                    <Crown className="w-3 h-3" />
                    HEAD COACH
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="text-white">
                  <div className="text-red-500 text-xs font-light tracking-[0.3em] uppercase mb-2">
                    COACH
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="text-red-400 font-bold text-sm mb-3 tracking-wider">
                    {trainer.specialty}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-300 mb-4">
                    <span>{trainer.experience}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-400 max-w-md">
                    {trainer.achievements[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
