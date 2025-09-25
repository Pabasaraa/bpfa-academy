"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Instagram, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import contactData from "@/data/contact.json";

interface InstagramPostEmbed {
  id: string;
  shortcode: string;
  url: string;
  embedUrl: string;
}

export function InstagramEmbedGallery() {
  const [embedsLoaded, setEmbedsLoaded] = useState(false);
  const [currentPosts, setCurrentPosts] = useState<InstagramPostEmbed[]>([]);

  // Instagram profile configuration
  const instagramUsername = contactData.social.instagram.username;
  const instagramUrl = contactData.social.instagram.url;

  // You can update these shortcodes with actual post shortcodes from your Instagram
  // To get shortcodes: go to your Instagram post and copy the code from URL (instagram.com/p/SHORTCODE/)
  const instagramPosts: InstagramPostEmbed[] = [
    {
      id: "1",
      shortcode: "C9vQJ8YPxmR", // Replace with actual shortcode from your posts
      url: `${instagramUrl}p/C9vQJ8YPxmR/`,
      embedUrl: `${instagramUrl}p/C9vQJ8YPxmR/embed/`,
    },
    {
      id: "2",
      shortcode: "C9uMN7XP2kL", // Replace with actual shortcode
      url: `${instagramUrl}p/C9uMN7XP2kL/`,
      embedUrl: `${instagramUrl}p/C9uMN7XP2kL/embed/`,
    },
    {
      id: "3",
      shortcode: "C9sA1B2C3dE", // Replace with actual shortcode
      url: `${instagramUrl}p/C9sA1B2C3dE/`,
      embedUrl: `${instagramUrl}p/C9sA1B2C3dE/embed/`,
    },
    {
      id: "4",
      shortcode: "C9rF4G5H6iJ", // Replace with actual shortcode
      url: `${instagramUrl}p/C9rF4G5H6iJ/`,
      embedUrl: `${instagramUrl}p/C9rF4G5H6iJ/embed/`,
    },
    {
      id: "5",
      shortcode: "C9qK7L8M9nO", // Replace with actual shortcode
      url: `${instagramUrl}p/C9qK7L8M9nO/`,
      embedUrl: `${instagramUrl}p/C9qK7L8M9nO/embed/`,
    },
    {
      id: "6",
      shortcode: "C9pP0Q1R2sT", // Replace with actual shortcode
      url: `${instagramUrl}p/C9pP0Q1R2sT/`,
      embedUrl: `${instagramUrl}p/C9pP0Q1R2sT/embed/`,
    },
  ];

  useEffect(() => {
    setCurrentPosts(instagramPosts);

    // Load Instagram embed script
    if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        setEmbedsLoaded(true);
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      setEmbedsLoaded(true);
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }, []);

  const refreshEmbeds = () => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  };

  // Fallback grid display with visual placeholders
  const FallbackPostGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {[
        {
          title: "MMA Training Session",
          description: "Intense training with our professional fighters",
          image: "/instagram/post-1.jpg",
        },
        {
          title: "Championship Victory",
          description: "Our fighter wins the lightweight championship",
          image: "/instagram/post-2.jpg",
        },
        {
          title: "BJJ Technique Training",
          description: "Master the fundamentals of Brazilian Jiu-Jitsu",
          image: "/instagram/post-3.jpg",
        },
        {
          title: "Muay Thai Conditioning",
          description: "Building warriors through conditioning",
          image: "/instagram/post-4.jpg",
        },
        {
          title: "Fight Preparation",
          description: "Behind the scenes championship prep",
          image: "/instagram/post-5.jpg",
        },
        {
          title: "New Academy Members",
          description: "Welcome our new warrior family",
          image: "/instagram/post-6.jpg",
        },
      ].map((post, index) => (
        <div
          key={index}
          className={`relative group cursor-pointer overflow-hidden bg-gray-900 rounded-lg ${
            index === 0 ? "md:col-span-2 md:row-span-2" : ""
          }`}
        >
          <div className="relative aspect-square">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url('${post.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold mb-2">
                {post.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{post.description}</p>
              <div className="flex items-center text-red-400">
                <Instagram className="w-4 h-4 mr-2" />
                <span className="text-sm">View on Instagram</span>
              </div>
            </div>
          </div>

          {/* Click overlay */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`View ${post.title} on Instagram`}
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Instagram Embeds Grid */}
        <div className="mb-16">
          {/* If you have actual post shortcodes, uncomment this section */}
          {/*
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.slice(0, 6).map((post, index) => (
              <div key={post.id} className="flex justify-center">
                <iframe
                  src={post.embedUrl}
                  width="400"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                  className="rounded-lg shadow-2xl max-w-full"
                  title={`Instagram post ${post.shortcode}`}
                />
              </div>
            ))}
          </div>
          */}

          {/* Fallback visual grid */}
          <FallbackPostGrid />
        </div>

        {/* Instagram Profile Widget */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">
            Follow Our Journey
          </h3>
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <iframe
                src={`${instagramUrl}embed/`}
                width="400"
                height="600"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                title="Instagram Profile"
                style={{
                  border: "none",
                  overflow: "hidden",
                  background: "white",
                }}
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900 rounded-lg p-12">
          <h3 className="text-3xl font-black text-white mb-6 tracking-wide">
            JOIN OUR COMMUNITY
          </h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Follow @{instagramUsername} for daily training updates, fighter
            spotlights, technique tutorials, and exclusive behind-the-scenes
            content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-black text-lg px-8 py-4 tracking-wider uppercase"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow @{instagramUsername}
              </Button>
            </a>

            <a href="/join">
              <Button
                variant="outline"
                size="lg"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold text-lg px-8 py-4 tracking-wider uppercase"
              >
                Join Our Academy
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Global TypeScript declarations
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
