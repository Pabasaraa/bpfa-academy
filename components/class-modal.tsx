"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

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

interface ClassModalProps {
  classData: ClassData
  isOpen: boolean
  onClose: () => void
}

export function ClassModal({ classData, isOpen, onClose }: ClassModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto bg-black border-red-900/50 p-0">
        <div className="relative min-h-[80vh]">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Main content layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            {/* Left side - Fighter image */}
            <div className="relative bg-black overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{ backgroundImage: `url('${classData.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/80" />

              {/* Large typography overlay on image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform -rotate-12 opacity-20">
                  <h1 className="text-8xl md:text-9xl font-black text-white tracking-wider">
                    {classData.name.split(" ")[0]}
                  </h1>
                  <h1 className="text-6xl md:text-7xl font-black text-white tracking-wider -mt-4">
                    {classData.name.split(" ").slice(1).join(" ")}
                  </h1>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="bg-black text-white p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <div className="text-red-500 text-sm font-light tracking-[0.3em] uppercase mb-2">LEARN</div>
                  <h2 className="text-4xl lg:text-5xl font-black tracking-wider mb-4">{classData.name}</h2>
                  <div className="w-16 h-1 bg-red-600 mb-6"></div>
                </div>

                {/* Tagline */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-red-400 mb-4 tracking-wide">{classData.tagline}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">{classData.fullDescription}</p>
                </div>

                {/* Key benefits - minimal text */}
                <div className="grid grid-cols-2 gap-4">
                  {classData.benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="text-sm text-gray-400">
                      <div className="w-2 h-2 bg-red-600 rounded-full mb-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Instructor info */}
                <div className="border-t border-gray-800 pt-6">
                  <div className="text-xs text-gray-500 tracking-widest uppercase mb-2">INSTRUCTOR</div>
                  <div className="text-lg font-bold text-white">{classData.instructor}</div>
                </div>

                {/* Action buttons */}
                <div className="space-y-4 pt-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-sm tracking-wider">
                    JOIN A CLASS
                  </Button>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-gray-900 p-4 rounded">
                      <div className="text-xs text-gray-400 mb-1">MONTHLY</div>
                      <div className="text-lg font-bold text-white">LKR {classData.price.monthly.toLocaleString()}</div>
                    </div>
                    <div className="bg-gray-900 p-4 rounded">
                      <div className="text-xs text-gray-400 mb-1">DROP-IN</div>
                      <div className="text-lg font-bold text-white">LKR {classData.price.dropIn.toLocaleString()}</div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-black font-bold py-3 text-sm tracking-wider bg-transparent"
                  >
                    PRICES
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white font-bold py-3 text-sm tracking-wider bg-transparent"
                  >
                    🥋 PRIVATE LESSONS
                  </Button>
                </div>

                {/* Schedule preview */}
                <div className="border-t border-gray-800 pt-6">
                  <div className="text-xs text-gray-500 tracking-widest uppercase mb-3">SCHEDULE</div>
                  <div className="space-y-2">
                    {classData.schedule.slice(0, 2).map((session, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-400">{session.day}</span>
                        <span className="text-white">{session.time}</span>
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
  )
}
