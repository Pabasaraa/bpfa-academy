"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-white mb-8 tracking-wide">GET IN TOUCH</h2>
              <div className="w-16 h-1 bg-red-600 mb-8"></div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-300 leading-relaxed">
                    123 Warrior Street
                    <br />
                    Colombo 07, Sri Lanka
                    <br />
                    Near Independence Square
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+94 11 234 5678</p>
                  <p className="text-gray-300">+94 77 123 4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300">info@blackpantherfighting.lk</p>
                  <p className="text-gray-300">training@blackpantherfighting.lk</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-red-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Training Hours</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                    <p>Saturday: 8:00 AM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Train?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Join the Black Panther family and unleash your inner warrior. Contact us today to schedule your first
                training session.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                START YOUR JOURNEY
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black text-white mb-8 tracking-wide">VISIT US</h2>
              <div className="w-16 h-1 bg-red-600 mb-8"></div>
            </div>

            <div className="relative h-96 bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128636!2d79.86131831477237!3d6.914744995010526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259684e2f8b7b%3A0x8c5b8b8b8b8b8b8b!2sIndependence%20Square%2C%20Colombo%2007%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

            {/* Gym Image */}
            <div className="relative h-64 bg-gray-900 rounded-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-bold">State-of-the-Art Facility</p>
                <p className="text-sm text-gray-300">Professional training equipment & spacious mats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
