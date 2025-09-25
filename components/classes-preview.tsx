import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Target } from "lucide-react";
import Link from "next/link";
import classesData from "@/data/classes.json";

export function ClassesPreview() {
  const classes = classesData.slice(0, 4).map((classItem) => ({
    id: classItem.id,
    name: classItem.name,
    description: classItem.shortDescription,
    image: classItem.image,
    level: classItem.level,
    duration: classItem.duration,
    tagline: classItem.tagline,
  }));

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-red-400 text-sm font-light tracking-[0.4em] uppercase">
              Choose Your Path
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-wider">
            FIGHTING
            <span className="block text-red-500">DISCIPLINES</span>
          </h2>
          <div className="w-28 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Master the art of combat through our comprehensive martial arts
            programs. Each discipline forged in tradition, perfected in battle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {classes.map((classItem, index) => (
            <Link
              key={classItem.id}
              href={`/classes/${classItem.id}`}
              className="relative group block overflow-hidden min-h-[350px] bg-gray-900"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${classItem.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50 group-hover:bg-gradient-to-r group-hover:from-red-950/95 group-hover:via-red-950/80 group-hover:to-red-950/60 transition-all duration-500" />

              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-16 transition-transform duration-300">
                  <div className="space-y-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-gray-300 leading-relaxed">
                      {classItem.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4 text-red-500" />
                      <span className="text-sm">
                        {classItem.duration} sessions
                      </span>
                    </div>
                    <p className="text-xs tracking-widest text-red-600/70 uppercase">
                      {classItem.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      ENTER THE DOJO
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-wide">
                    {classItem.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <p className="text-red-400 font-bold text-sm uppercase tracking-widest">
                      {classItem.level}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/classes">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-black text-base px-10 py-6 tracking-wider uppercase"
            >
              ALL FIGHTING ARTS
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
