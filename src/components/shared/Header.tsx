// src/components/shared/Header.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react'; // Mobile menyu uchun ikona

const navLinks = [
  { href: '/franchise', label: 'Franshiza' },
  { href: '/advertising', label: 'Reklama' },
  { href: '/partners', label: 'Hamkorlar' },
];

export default function Header() {
  // Mobile menyu uchun state (hozircha logikasiz, keyin qo'shiladi)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-gray-dark/50 bg-brand-dark/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo.svg" // O'zingizning logotip manzilingiz
            alt="Global Coffee Logo"
            width={55}
            height={55}
            priority // Header logotipi har doim birinchi yuklanishi kerak
          />
          <span className="font-serif text-2xl font-bold hidden sm:block">
            Global Coffee
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-brand-gray-light hover:text-brand-light transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Investor bo&apos;lish
          </Button>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}