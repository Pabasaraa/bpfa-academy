"use client"

import { ArrowLeft, Clock, Users, Zap, Calendar, DollarSign } from "lucide-react"
import { useRouter } from "next/navigation"

interface ClassData {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  image: string
  level: string
  duration: string
  intensity: string
  maxStudents: number
  benefits: string[]
  techniques: string[]
  equipment: string[]
  schedule: {
    day: string
    time: string
    instructor: string
  }[]
  price: {
    monthly: number
    dropIn: number
  }
  instructor: string
  tagline: string
}

interface ClassDetailProps {
  classData: ClassData
}

export function ClassDetail({ classData }: ClassDetailProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${classData.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="text-lg font-medium">Back</span>
        </button>

        {/* Main content positioned creatively */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div>
                <p className="text-red-400 text-sm font-light tracking-[0.3em] uppercase mb-4">LEARN</p>
                <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-wider mb-6">
                  {classData.name}
                </h1>
                <div className="w-32 h-1 bg-red-600 mb-8"></div>
                <p className="text-2xl md:text-3xl text-red-400 font-bold tracking-wide mb-6">{classData.tagline}</p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">{classData.fullDescription}</p>

                {/* Quick stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-red-400 mx-auto mb-2" />
                    <p className="text-white font-bold">{classData.duration}</p>
                    <p className="text-gray-400 text-sm">Duration</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-6 h-6 text-red-400 mx-auto mb-2" />
                    <p className="text-white font-bold">{classData.intensity}</p>
                    <p className="text-gray-400 text-sm">Intensity</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-red-400 mx-auto mb-2" />
                    <p className="text-white font-bold">{classData.maxStudents}</p>
                    <p className="text-gray-400 text-sm">Max Students</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-6 h-6 text-red-400 mx-auto mb-2" />
                    <p className="text-white font-bold">Rs {classData.price.monthly.toLocaleString()}</p>
                    <p className="text-gray-400 text-sm">Monthly</p>
                  </div>
                </div>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-colors duration-300">
                JOIN THIS CLASS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Details section */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-black text-white mb-8">BENEFITS</h2>
              <div className="w-16 h-1 bg-red-600 mb-8"></div>
              <ul className="space-y-4">
                {classData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Techniques */}
            <div>
              <h2 className="text-3xl font-black text-white mb-8">TECHNIQUES</h2>
              <div className="w-16 h-1 bg-red-600 mb-8"></div>
              <ul className="space-y-4">
                {classData.techniques.map((technique, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{technique}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule */}
            <div>
              <h2 className="text-3xl font-black text-white mb-8">SCHEDULE</h2>
              <div className="w-16 h-1 bg-red-600 mb-8"></div>
              <div className="space-y-4">
                {classData.schedule.map((session, index) => (
                  <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">{session.day}</span>
                      <Calendar className="w-4 h-4 text-red-400" />
                    </div>
                    <p className="text-gray-300 text-sm mb-1">{session.time}</p>
                    <p className="text-gray-400 text-xs">{session.instructor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
