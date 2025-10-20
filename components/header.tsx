"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  { name: "Política", href: "/categoria/politica" },
  { name: "Economia", href: "/categoria/economia" },
  { name: "Esportes", href: "/categoria/esportes" },
  { name: "Tecnologia", href: "/categoria/tecnologia" },
  { name: "Podcasts", href: "/categoria/podcasts" },
  { name: "Carros", href: "/categoria/carros" },
  { name: "Telejornais", href: "/categoria/telejornais" },
  { name: "Vídeos", href: "/categoria/videos" },
  { name: "Entretenimento", href: "/categoria/entretenimento" },
  { name: "Shows", href: "/categoria/shows" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-slate-900 to-slate-800 border-b-4 border-[#D4A017] shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3">
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <div className="relative w-36 h-16 md:w-44 md:h-20">
              <Image
                src="/sttv-logo.png"
                alt="STTV"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop search */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
            <Input
              type="search"
              placeholder="Buscar notícias..."
              className="w-full bg-white text-slate-900 border-[#D4A017] focus:ring-[#D4A017]"
            />
            <Button
              size="icon"
              className="bg-[#D4A017] text-slate-900 hover:bg-[#E67E22] font-semibold"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:text-[#D4A017]"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:text-[#D4A017]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Desktop contact */}
          <Link href="/contato" className="hidden md:block">
            <Button className="bg-[#D4A017] text-slate-900 hover:bg-[#E67E22] font-semibold">
              Contato
            </Button>
          </Link>
        </div>

        {/* Mobile search */}
        {searchOpen && (
          <div className="pb-4 md:hidden">
            <div className="flex items-center gap-2">
              <Input
                type="search"
                placeholder="Buscar notícias..."
                className="w-full bg-white text-slate-900"
              />
              <Button
                size="icon"
                className="bg-[#D4A017] text-slate-900 hover:bg-[#E67E22]"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Desktop navigation */}
        <nav className="hidden md:block border-t border-white/20">
          <ul className="flex items-center gap-8 py-3">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className="text-sm font-semibold text-white hover:text-[#D4A017] transition-colors"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-white/20 py-4">
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="block text-base font-semibold text-white hover:text-[#D4A017] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-white/20">
                <Link
                  href="/contato"
                  className="block text-base font-semibold text-white hover:text-[#D4A017] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
