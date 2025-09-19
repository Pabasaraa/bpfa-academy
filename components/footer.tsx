import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Black Panther Fighting Academy"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-work-sans font-bold text-xl text-foreground">BLACK PANTHER FIGHTING ACADEMY</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Sri Lanka's premier martial arts academy, dedicated to forging warriors through discipline, technique, and
              unwavering commitment to excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-work-sans font-bold text-lg text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-muted-foreground hover:text-primary transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-muted-foreground hover:text-primary transition-colors">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-work-sans font-bold text-lg text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Galle Road</li>
              <li>Colombo 03, Sri Lanka</li>
              <li>+94 77 123 4567</li>
              <li>info@blackpantherfighting.lk</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Black Panther Fighting Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
