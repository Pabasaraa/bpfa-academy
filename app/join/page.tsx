"use client";

import { Footer } from "@/components/footer";
import contactData from "@/data/contact.json";

export default function JoinPage() {
  const steps = [
    {
      number: "01",
      title: "FILL THE FORM",
      description:
        "Complete our simple registration form with your personal details, fitness goals, and preferred training schedule.",
      icon: "📋",
    },
    {
      number: "02",
      title: "CHOOSE YOUR PACKAGE",
      description:
        "Select the package that best fits your training goals and schedule from our flexible pricing options.",
      icon: "🥋",
    },
    {
      number: "03",
      title: "SCHEDULE CONSULTATION",
      description:
        "Book a free consultation with our head instructor to discuss your goals and create a personalized training plan.",
      icon: "📅",
    },
    {
      number: "04",
      title: "START TRAINING",
      description:
        "Begin your martial arts journey with our expert instructors in our state-of-the-art training facility.",
      icon: "🥊",
    },
  ];

  const benefits = [
    "Expert instruction from certified martial arts professionals",
    "State-of-the-art training facility with modern equipment",
    "Flexible scheduling to fit your busy lifestyle",
    "Supportive community of fellow martial artists",
    "Progressive training system for all skill levels",
    "Mental and physical transformation guaranteed",
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-br from-black/90 to-black/80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="relative z-10 pt-16 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl px-4 sm:px-6">
            <div className="mb-4 sm:mb-6">
              <span className="text-red-400 text-xs sm:text-sm font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                YOUR JOURNEY STARTS HERE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8 tracking-wide sm:tracking-wider">
              JOIN US
            </h1>
            <div className="w-20 sm:w-28 h-1 bg-red-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-lg text-gray-300 tracking-wide sm:tracking-widest uppercase px-2">
              Transform your body, mind, and spirit
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wider">
              HOW TO JOIN
            </h2>
            <p className="text-gray-400 text-lg">
              Follow these simple steps to begin your martial arts journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors duration-300">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-white mb-4 tracking-wider">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-wider">
                WHY CHOOSE
                <br />
                BPFA?
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We're not just a martial arts school – we're a community
                dedicated to helping you unlock your full potential. Our
                comprehensive approach combines traditional martial arts wisdom
                with modern training methods.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div
                className="h-96 bg-cover bg-center rounded-lg opacity-80"
                style={{
                  backgroundImage: "url('/classes/classes-background.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Form CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wider">
            READY TO START?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Take the first step towards becoming the warrior you were meant to
            be. Fill out our registration form and let's begin this incredible
            journey together.
          </p>
          <p className="text-lg text-red-200 mb-8">
            ⏱️ Takes less than 5 minutes to complete
            <br />
            📞 We'll contact you within 24 hours
            <br />
            🆓 Free consultation included
          </p>
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSexVaWKUUHBRhts39JRrbrtqNw3BiICfTMa4dI_pKzKFVhjBw/viewform",
                "_blank"
              )
            }
            className="inline-block cursor-pointer bg-white text-red-900 font-black py-6 px-12 text-xl tracking-wider hover:bg-gray-100 transition-colors duration-300 rounded-lg shadow-2xl"
          >
            FILL REGISTRATION FORM
          </button>

          <div className="mt-8 text-red-200">
            <p className="text-sm">
              Have questions? Call us at{" "}
              <a
                href={`tel: ${contactData.phone.primary.trim()}`}
                className="font-bold hover:text-white transition-colors"
              >
                {contactData.phone.primary}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto: ${contactData.email.primary}`}
                className="font-bold hover:text-white transition-colors"
              >
                {contactData.email.primary}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-wider">
            WHAT HAPPENS AFTER YOU SUBMIT?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">24h</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                QUICK RESPONSE
              </h3>
              <p className="text-gray-400 text-sm">
                We'll review your form and contact you within 24 hours
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">📞</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                CONSULTATION CALL
              </h3>
              <p className="text-gray-400 text-sm">
                Free 15-minute call to discuss your goals and answer questions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🥋</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">FIRST CLASS</h3>
              <p className="text-gray-400 text-sm">
                Schedule your first training session and begin your journey
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
