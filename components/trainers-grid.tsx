"use client";

import { useState } from "react";
import { TrainerModal } from "@/components/trainer-modal";

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
  schedule: {
    day: string;
    classes: string[];
  }[];
  styles: string[];
}

export function TrainersGrid() {
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerData | null>(
    null
  );

  const trainers: TrainerData[] = [
    {
      id: "kavindu-rasanjaya",
      name: "KAVIDNU RASANJAYA",
      specialty: "MMA, MOI TATI & KICKBOXING",
      experience: "9+ Years",
      achievements: [
        "CFC (3 SEASONS) WINNER",
        "WMC 2022 LIGHTWEIGHT WINNER",
        "KFL 2023 LIGHTWEIGHT WINNER",
        "KOK 2023 LIGH WELTERWEIGHT CHAMP",
        "Karma Fight League Ranking Number One",
      ],
      image: "/coaches/head-coach.jpg",
      bio: "Kavindu Rasanjaya is a legendary figure in Sri Lankan martial arts, with over 9 years of professional fighting and coaching experience. His aggressive yet disciplined approach has produced numerous champions.",
      certifications: [
        "Black Belt Karate (5th Dan)",
        "Certified MMA Instructor",
        "International Kickboxing Coach",
        "Sports Psychology Diploma",
      ],
      philosophy:
        "Every warrior must forge their spirit in the fire of discipline and emerge stronger than steel.",
      schedule: [
        { day: "Monday", classes: ["MMA Fundamentals", "Advanced Kickboxing"] },
        {
          day: "Wednesday",
          classes: ["MMA Competition", "Kickboxing Sparring"],
        },
        { day: "Friday", classes: ["MMA Fundamentals", "Private Sessions"] },
        { day: "Saturday", classes: ["Open Training", "Competition Prep"] },
      ],
      styles: ["MMA", "MOI TATI", "KICKBOXING"],
    },
    {
      id: "priya-silva",
      name: "COACH PRIYA SILVA",
      specialty: "BRAZILIAN JIU-JITSU",
      experience: "12+ Years",
      achievements: [
        "2018 nationals Muay Thai champion",
        "CFC 2022 Middle Weight Winner",
      ],
      image: "/coaches/coach-2.jpeg",
      bio: "Coach Priya Silva broke barriers as the first female BJJ black belt in Sri Lanka. Her technical precision and innovative teaching methods have revolutionized ground fighting in the region.",
      certifications: [
        "BJJ Black Belt (3rd Degree)",
        "IBJJF Certified Referee",
        "Women's Self-Defense Instructor",
        "Youth Martial Arts Specialist",
      ],
      philosophy:
        "Technique conquers strength, timing beats speed, and leverage defeats size.",
      schedule: [
        { day: "Monday", classes: ["BJJ Fundamentals", "Women's BJJ"] },
        { day: "Wednesday", classes: ["Advanced BJJ", "Competition Training"] },
        { day: "Friday", classes: ["BJJ Fundamentals", "No-Gi Grappling"] },
        { day: "Sunday", classes: ["Open Mat", "Private Lessons"] },
      ],
      styles: ["MMA", "MOI TATI", "KICKBOXING"],
    },
    {
      id: "chen-wei",
      name: "MASTER CHEN WEI",
      specialty: "BOXING & CONDITIONING",
      experience: "20+ Years",
      achievements: [
        "Thailand Muaythai fight 2016 Hua hin Winner",
        "Thailand Muaythai world championship 2017 Winner",
        "Professional Boxing Record: 45-3-2",
        "300+ Champions Trained",
      ],
      image: "/coaches/master-coach.jpg",
      bio: "Master Chen Wei brings two decades of elite boxing experience from China. His scientific approach to training and conditioning has produced world-class fighters and transformed countless lives.",
      certifications: [
        "Muaythai Training Camp 2017 in Thailand (Meenayothin Boxing Camp)",
        "Completed Muaythai Training Camp 2017 July Hua hin in Thailand (Grand Boxing Camp)",
        "Muaythai coach license C from Muaythai academy of America",
        "Muay Thai Coach License (Muay Thai Association of Sri Lanka).",
        "Muay Thai Coach License C (World All Fight System Organization - AFSO)",
      ],
      philosophy:
        "Boxing is not just about throwing punches - it's about building character, one round at a time.",
      schedule: [
        {
          day: "Tuesday",
          classes: ["Boxing Fundamentals", "Heavy Bag Training"],
        },
        { day: "Thursday", classes: ["Advanced Boxing", "Sparring Sessions"] },
        { day: "Saturday", classes: ["Boxing Conditioning", "Pad Work"] },
        { day: "Sunday", classes: ["Competition Prep", "Private Training"] },
      ],
      styles: [
        "Shotokan karate",
        "JKD (Jeet Kune Do)",
        "Kyokushin Karate",
        "BJJ (Brazilian jiu-jitsu)",
        "Krav maga",
        "Muay thai",
      ],
    },
    {
      id: "chen-wei",
      name: "MASTER CHEN WEI",
      specialty: "BOXING & CONDITIONING",
      experience: "20+ Years",
      achievements: [
        "Thailand Muaythai fight 2016 Hua hin Winner",
        "Thailand Muaythai world championship 2017 Winner",
        "Professional Boxing Record: 45-3-2",
        "300+ Champions Trained",
      ],
      image: "/coaches/master-coach.jpg",
      bio: "Master Chen Wei brings two decades of elite boxing experience from China. His scientific approach to training and conditioning has produced world-class fighters and transformed countless lives.",
      certifications: [
        "Muaythai Training Camp 2017 in Thailand (Meenayothin Boxing Camp)",
        "Completed Muaythai Training Camp 2017 July Hua hin in Thailand (Grand Boxing Camp)",
        "Muaythai coach license C from Muaythai academy of America",
        "Muay Thai Coach License (Muay Thai Association of Sri Lanka).",
        "Muay Thai Coach License C (World All Fight System Organization - AFSO)",
      ],
      philosophy:
        "Boxing is not just about throwing punches - it's about building character, one round at a time.",
      schedule: [
        {
          day: "Tuesday",
          classes: ["Boxing Fundamentals", "Heavy Bag Training"],
        },
        { day: "Thursday", classes: ["Advanced Boxing", "Sparring Sessions"] },
        { day: "Saturday", classes: ["Boxing Conditioning", "Pad Work"] },
        { day: "Sunday", classes: ["Competition Prep", "Private Training"] },
      ],
      styles: [
        "Shotokan karate",
        "JKD (Jeet Kune Do)",
        "Kyokushin Karate",
        "BJJ (Brazilian jiu-jitsu)",
        "Krav maga",
        "Muay thai",
      ],
    },
  ];

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
