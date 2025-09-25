import { Navigation } from "@/components/navigation";
import { InstagramEmbedGallery } from "@/components/instagram-embed-gallery";
import { Footer } from "@/components/footer";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="relative h-[45vh] bg-gradient-to-br from-black/90 to-black/80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('/home/our-legacy.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl px-4">
            <div className="mb-6">
              <span className="text-red-400 text-sm font-light tracking-[0.4em] uppercase">
                Visual Journey
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-wider">
              GALLERY
            </h1>
            <div className="w-28 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide mb-4">
              WITNESS THE WARRIOR SPIRIT
            </p>
            <p className="text-lg text-gray-300 tracking-widest uppercase">
              Training Sessions • Championships • Behind The Scenes
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <InstagramEmbedGallery />
      </div>
      <Footer />
    </main>
  );
}
