// src/components/shared/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Instagram } from "lucide-react"; // Ijtimoiy tarmoq ikonalari

export default function Footer() {
  return (
    <footer className="border-t border-brand-gray-dark/50 bg-brand-dark">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Slogan */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/brand/logo.svg" alt="Global Coffee Logo" width={40} height={40} />
              <span className="font-serif text-xl font-bold">Global Coffee</span>
            </Link>
            <p className="text-sm text-brand-gray-medium">Bir stakanda butun dunyo.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li><Link href="/franchise" className="text-sm text-brand-gray-light hover:text-brand-yellow transition-colors">Franshiza</Link></li>
              <li><Link href="/partners" className="text-sm text-brand-gray-light hover:text-brand-yellow transition-colors">Hamkorlar</Link></li>
              <li><Link href="/about" className="text-sm text-brand-gray-light hover:text-brand-yellow transition-colors">Biz haqimizda</Link></li>
              <li><Link href="/blog" className="text-sm text-brand-gray-light hover:text-brand-yellow transition-colors">Blog</Link></li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Qo&apos;llab-quvvatlash</h3>
            <ul className="space-y-2">
               <li><Link href="/faq" className="text-sm text-brand-gray-light hover:text-brand-yellow transition-colors">FAQ</Link></li>
              <li><Link href="/contacts" className="text-sm text-brand-gray-light hover:text-brand-yellow transition-colors">Aloqa</Link></li>
              <li><span className="text-sm text-brand-gray-light">Tel: +998 71 200 00 00</span></li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Bizni kuzatib boring</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-brand-gray-light hover:text-brand-yellow"/></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-brand-gray-light hover:text-brand-yellow"/></Link>
              <Link href="#" aria-label="Github"><Github className="h-6 w-6 text-brand-gray-light hover:text-brand-yellow"/></Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-gray-dark/50 text-center text-sm text-brand-gray-medium">
          <p>© {new Date().getFullYear()} Global Coffee. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}