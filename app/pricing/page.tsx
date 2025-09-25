import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import pricingData from "@/data/pricing.json";

export default function PricingPage() {
  const { monthlyDayPackages, monthlyPackages } = pricingData;

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[55vh] bg-gradient-to-br from-black/90 to-black/80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('/pricing-background.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full animate-fade-in-up">
          <div className="text-center max-w-4xl px-4">
            <div className="mb-6">
              <span className="text-red-400 text-sm font-light tracking-[0.4em] uppercase">
                CHOOSE YOUR PATH
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-wider">
              PRICING
            </h1>
            <div className="w-28 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide mb-4">
              FLEXIBLE PACKAGES FOR EVERY WARRIOR
            </p>
          </div>
        </div>
      </div>

      {/* Monthly Day Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wider">
              MONTHLY DAY PACKAGES
            </h2>
            <p className="text-gray-400 text-lg">
              Perfect for those who want flexibility in their training schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monthlyDayPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-gray-900 rounded-lg overflow-hidden group hover:bg-gradient-to-br hover:from-red-900/20 hover:to-red-800/10 transition-all duration-500 ${
                  pkg.popular ? "ring-2 ring-red-600 transform scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 text-sm font-bold tracking-wider">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-2 tracking-wider">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{pkg.description}</p>

                  <div className="mb-8">
                    <span className="text-5xl font-black text-red-500">
                      LKR {pkg.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-lg">/month</span>
                  </div>

                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Packages */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wider">
              MONTHLY PACKAGES
            </h2>
            <p className="text-gray-400 text-lg mb-4">
              Long-term commitment for serious martial artists
            </p>
            <div className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
              🔥 Special Discounts Available - Save up to LKR 17,000!
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monthlyPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-gray-900 rounded-lg overflow-hidden group hover:bg-gradient-to-br hover:from-red-900/20 hover:to-red-800/10 transition-all duration-500 ${
                  pkg.popular ? "ring-2 ring-red-600 transform scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 text-sm font-bold tracking-wider">
                    BEST VALUE
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-2 tracking-wider">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{pkg.description}</p>

                  <div className="mb-4">
                    {pkg.originalPrice && (
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl text-gray-500 line-through">
                          LKR {pkg.originalPrice.toLocaleString()}
                        </span>
                        <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold rounded-full">
                          SAVE LKR {pkg.savings.toLocaleString()}
                        </span>
                      </div>
                    )}
                    <span className="text-5xl font-black text-red-500">
                      LKR {pkg.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="mb-8">
                    {pkg.originalMonthlyPrice && (
                      <p className="text-gray-500 text-sm line-through">
                        Was LKR {pkg.originalMonthlyPrice.toLocaleString()}
                        /month
                      </p>
                    )}
                    <p className="text-gray-400 font-semibold">
                      Now LKR {pkg.monthlyPrice.toLocaleString()}/month
                      equivalent
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wider">
            READY TO BEGIN?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Join the BPFA family today and start your martial arts journey. Our
            expert instructors are ready to guide you every step of the way.
          </p>
          <Link
            href="/join"
            className="inline-block bg-white text-red-900 font-black py-4 px-12 text-xl tracking-wider hover:bg-gray-100 transition-colors duration-300"
          >
            START YOUR JOURNEY
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
