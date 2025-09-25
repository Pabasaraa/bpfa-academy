"use client";

import Link from "next/link";
import classesData from "@/data/classes.json";

export function ClassesGrid() {
  const classes = classesData;

  return (
    <section className="py-16 bg-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* MMA - Large featured card */}
          <Link
            href={`/classes/${classes[0].id}`}
            className="lg:col-span-2 lg:row-span-1 relative bg-gray-900 overflow-hidden group min-h-[400px] block"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('${classes[0].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40 group-hover:bg-gradient-to-b group-hover:from-red-950/95 group-hover:via-red-950/80 group-hover:to-red-950/70 transition-all duration-500" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <div className="text-white">
                <h3 className="text-5xl font-black mb-2 tracking-wider group-hover:text-red-100">
                  {classes[0].name}
                </h3>
                <p className="text-sm leading-relaxed max-w-md text-gray-300 mb-3 group-hover:text-red-100">
                  {classes[0].shortDescription}
                </p>
                <p className="text-xs tracking-wider text-red-600/70 group-hover:text-red-200 transition-colors duration-300">
                  {classes[0].tagline}
                </p>
              </div>
            </div>
          </Link>

          {/* Other classes */}
          {classes.slice(1).map((classItem) => (
            <Link
              key={classItem.id}
              href={`/classes/${classItem.id}`}
              className="relative bg-gray-900 overflow-hidden group min-h-[400px] block"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${classItem.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40 group-hover:bg-gradient-to-b group-hover:from-red-950/95 group-hover:via-red-950/80 group-hover:to-red-950/70 transition-all duration-500" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="text-white">
                  <h3 className="text-3xl font-black mb-2 tracking-wide group-hover:text-red-100 transition-colors duration-300">
                    {classItem.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300 group-hover:text-red-100 transition-colors duration-300 mb-3">
                    {classItem.shortDescription}
                  </p>
                  <p className="text-xs tracking-wider text-red-600/70 group-hover:text-red-200 transition-colors duration-300">
                    {classItem.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
