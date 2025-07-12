// src/components/sections/home/HeroSection.tsx
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-brand-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <Heading variant="h1" as="h1" className="mb-4">
          <span className="text-brand-yellow">GLOBAL COFFEE:</span> BIR STAKANDA BUTUN DUNYO
        </Heading>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-gray-light mb-8">
          Biz nafaqat premium qahva, balki har kuni o&apos;sib boradigan, daromadli biznes-model taklif qilamiz. Muvaffaqiyatli hamkorlarimiz qatoriga bugunoq qo&apos;shiling.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/franchise">
            <Button size="lg">
              Franshiza Olish
            </Button>
          </Link>
          <Link href="#formats">
             <Button variant="outline" size="lg">
              Biznes Formatlari
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}