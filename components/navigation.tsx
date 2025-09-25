"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center relative md:justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-28"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-1 justify-center md:justify-start items-center space-x-2"
          >
            <Image
              src="/images/logo.png"
              alt="BPFA"
              width={isScrolled ? 50 : 80}
              height={isScrolled ? 50 : 80}
              className="rounded-full transition-all duration-300"
            />
            {/* <span className="font-work-sans font-bold text-2xl text-foreground">
              BPFA
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/classes"
              className="text-foreground hover:text-primary transition-colors"
            >
              Classes
            </Link>
            <Link
              href="/trainers"
              className="text-foreground hover:text-primary transition-colors"
            >
              Trainers
            </Link>
            <Link
              href="/gallery"
              className="text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/join"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm p-2 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-16 w-16" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/classes"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Classes
              </Link>
              <Link
                href="/trainers"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Trainers
              </Link>
              <Link
                href="/instagram"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Instagram
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-3">
                <Link
                  href="/join"
                  className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-2 py-2 rounded-lg"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
