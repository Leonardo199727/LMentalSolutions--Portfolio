'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations, t } from '@/lib/translations';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: translations.nav.services },
    { href: '#process', label: translations.nav.process },
    { href: '#projects', label: translations.nav.projects },
    { href: '#contact', label: translations.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-5'
        }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/LMICON.png"
              alt="LMentalSolutions Logo"
              width={45}
              height={45}
              className="rounded-lg brightness-0 invert"
              priority
            />
            <span className="text-lg font-bold hidden sm:block">
              LMental<span className="gradient-text">Solutions</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-light transition-colors duration-200 text-sm font-medium"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--light)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {t(link.label, language)}
              </Link>
            ))}
          </div>

          {/* Right Side: Language Toggle + CTA */}
          <div className="flex items-center gap-4">
            {/* Language Toggle Removed as per user request */}



            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-light transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  style={{ background: 'var(--light)' }}
                />
                <span
                  className={`block h-0.5 w-full bg-light transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  style={{ background: 'var(--light)' }}
                />
                <span
                  className={`block h-0.5 w-full bg-light transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  style={{ background: 'var(--light)' }}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-80 mt-4' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium"
                style={{ color: 'var(--muted)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.label, language)}
              </Link>
            ))}

          </div>
        </div>
      </div>
    </header>
  );
}
