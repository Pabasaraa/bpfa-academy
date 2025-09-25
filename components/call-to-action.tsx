import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import contactData from "@/data/contact.json";

export function CallToAction() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/home/ready-to-begin.jpg')`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-work-sans font-bold text-3xl md:text-5xl text-foreground mb-6">
            READY TO BEGIN YOUR
            <span className="block text-primary">WARRIOR JOURNEY?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Take the first step towards transforming your body, mind, and
            spirit. Join hundreds of warriors who have already begun their
            journey at BPFA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href={"/join"}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-4"
              >
                JOIN NOW
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-work-sans font-bold text-lg text-foreground mb-2">
              Call Us
            </h3>
            <p className="text-muted-foreground">{contactData.phone.primary}</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-work-sans font-bold text-lg text-foreground mb-2">
              WhatsApp Us
            </h3>
            <p className="text-muted-foreground">{contactData.phone.primary}</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-work-sans font-bold text-lg text-foreground mb-2">
              Visit Us
            </h3>
            <p className="text-muted-foreground">{contactData.address.city}, {contactData.address.country}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
