// @/components/layout/header.tsx
'use client';
import { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import MobileMenu from './mobile-menu';
import MenuIcon from './menu-icon';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300',
          isScrolled ? 'h-16' : 'h-20'
        )}
      >
        <div className="container flex h-full max-w-screen-2xl items-center justify-between">
          <div className="mr-4 flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="font-bold sm:inline-block">
                Property Deconstructed
              </span>
            </Link>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="/economist-chart"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Economist Chart
            </Link>
            <Link
              href="/audit"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Exploitation Audit
            </Link>
            <Link
              href="/truths"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Agent Truths
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="focus:outline-none"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
}
