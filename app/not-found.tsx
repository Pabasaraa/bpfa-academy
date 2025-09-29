import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="BPFA"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        {/* 404 Error */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold font-work-sans text-primary">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Return Button */}
        <Link href="/">
          <Button size="lg" className="text-lg px-8 py-6">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}