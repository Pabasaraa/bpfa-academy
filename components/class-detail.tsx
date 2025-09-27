"use client";

import { ArrowLeft, Clock, Zap, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

interface ClassData {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  level: string;
  duration: string;
  intensity: string;
  maxStudents: number;
  benefits: string[];
  techniques: string[];
  equipment: string[];
  schedule: {
    day: string;
    time: string[];
  }[];
  price: {
    monthly: number;
    dropIn: number;
  };
  instructor: string;
  tagline: string;
}

interface ClassDetailProps {
  classData: ClassData;
}

export function ClassDetail({ classData }: ClassDetailProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-[100vh] sm:h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${classData.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

        {/* Back button */}
        <button
          onClick={() => router.back()}
          className={`absolute top-8 left-4 sm:left-8 z-20 flex items-center space-x-2 text-white hover:text-red-400 transition-colors`}
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-base sm:text-lg font-medium">Back</span>
        </button>

        {/* Main content positioned creatively */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <p className="text-red-400 text-xs sm:text-sm font-light tracking-[0.3em] uppercase mb-3 sm:mb-4">
                  LEARN
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-none tracking-wide sm:tracking-wider mb-4 sm:mb-6">
                  {classData.name}
                </h1>
                <div className="w-20 sm:w-32 h-1 bg-red-600 mb-6 sm:mb-8"></div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-400 font-bold tracking-wide mb-4 sm:mb-6">
                  {classData.tagline}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Mobile: Show truncated description */}
                <p className="block sm:hidden text-base text-gray-300 leading-relaxed max-w-2xl">
                  {classData.shortDescription}
                </p>
                {/* Desktop: Show full description */}
                <p className="hidden sm:block text-lg text-gray-300 leading-relaxed max-w-2xl">
                  {classData.fullDescription}
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="text-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mx-auto mb-2" />
                    <p className="text-white font-bold text-sm sm:text-base">
                      {classData.duration}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">Duration</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mx-auto mb-2" />
                    <p className="text-white font-bold text-sm sm:text-base">
                      {classData.intensity}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Intensity
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-lg text-base sm:text-lg transition-colors duration-300 w-full sm:w-auto">
                JOIN THIS CLASS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Full description section */}
      <div className="block sm:hidden py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-black text-white mb-4">
            ABOUT THIS CLASS
          </h2>
          <div className="w-12 h-1 bg-red-600 mb-6"></div>
          <p className="text-base text-gray-300 leading-relaxed">
            {classData.fullDescription}
          </p>
        </div>
      </div>

      {/* Details section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {/* Benefits */}
            <div className="md:col-span-2 lg:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8">
                BENEFITS
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-red-600 mb-6 sm:mb-8"></div>
              <ul className="space-y-3 sm:space-y-4">
                {classData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm sm:text-base">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Techniques */}
            <div className="md:col-span-2 lg:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8">
                TECHNIQUES
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-red-600 mb-6 sm:mb-8"></div>
              <ul className="space-y-3 sm:space-y-4">
                {classData.techniques.map((technique, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm sm:text-base">
                      {technique}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule */}
            <div className="md:col-span-2 lg:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8">
                SCHEDULE
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-red-600 mb-6 sm:mb-8"></div>
              <div className="space-y-3 sm:space-y-4">
                {classData.schedule.map((session, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 sm:p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold text-sm sm:text-base">
                        {session.day}
                      </span>
                      <Calendar className="w-4 h-4 text-red-400" />
                    </div>
                    {session.time.map((time) => (
                      <p className="text-gray-300 text-xs sm:text-sm mb-1">
                        {time}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
