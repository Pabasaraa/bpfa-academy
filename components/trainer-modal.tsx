"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Award, Dot } from "lucide-react";

interface TrainerData {
  id: string;
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

interface TrainerModalProps {
  trainerData: TrainerData;
  isOpen: boolean;
  onClose: () => void;
}

export function TrainerModal({
  trainerData,
  isOpen,
  onClose,
}: TrainerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto bg-black border-red-900/50 p-0">
        <div className="relative min-h-[80vh]">
          {/* Main content layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            {/* Left side - Trainer image */}
            <div className="relative bg-black overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{ backgroundImage: `url('${trainerData.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/80" />
            </div>

            {/* Right side - Content */}
            <div className="bg-black text-white p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="text-red-500 text-sm font-light tracking-[0.3em] uppercase mb-2">
                    Coach
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black tracking-wider mb-2">
                    {trainerData.name}
                  </h2>
                  <p className="text-red-400 font-bold text-lg mb-4">
                    {trainerData.specialty}
                  </p>
                  <div className="w-16 h-1 bg-red-600 mb-4"></div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-900 p-4 rounded">
                    <div className="text-2xl font-black text-red-500">
                      {trainerData.experience}
                    </div>
                    <div className="text-xs text-gray-400">EXPERIENCE</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <div className="text-2xl font-black text-red-500">10+</div>
                    <div className="text-xs text-gray-400">MATCHES</div>
                  </div>
                </div>

                {/* Philosophy */}
                <div className="border-l-4 border-red-600 pl-4">
                  <p className="text-gray-300 italic text-sm leading-relaxed">
                    "{trainerData.philosophy}"
                  </p>
                </div>

                {/* Bio */}
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {trainerData.bio}
                  </p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-white font-bold mb-3 text-sm tracking-wider">
                    ACHIEVEMENTS
                  </h4>
                  <div className="space-y-2">
                    {trainerData.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <Award className="w-3 h-3 text-red-500 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Styles */}
                <div>
                  <h4 className="text-white font-bold mb-3 text-sm tracking-wider">
                    FIGHTING STYLES
                  </h4>
                  <div className="space-y-2">
                    {trainerData.styles.map((style, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <Dot className="w-3 h-3 text-red-500 flex-shrink-0" />
                        {style}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
