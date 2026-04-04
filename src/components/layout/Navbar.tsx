'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/programmes', key: 'programmes' },
  { href: '/evenements', key: 'events' },
  { href: '/e-learning', key: 'elearning' },
  { href: '/international', key: 'international' },
  { href: '/a-propos', key: 'about' },
  { href: '/contact', key: 'contact' },
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const otherLocale = locale === 'fr' ? 'en' : 'fr';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <GraduationCap className="w-7 h-7 text-ethsun-blue" />
            <span className="font-serif font-bold text-ethsun-navy text-lg tracking-tight">
              ETHSUN
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-ethsun-blue',
                  pathname === href
                    ? 'text-ethsun-blue'
                    : 'text-gray-600'
                )}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Right: locale + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={pathname}
              locale={otherLocale}
              className="text-xs font-semibold uppercase tracking-wide text-gray-500 hover:text-ethsun-blue transition-colors border border-gray-200 rounded px-2 py-1"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <Link
              href="/contact"
              className="bg-ethsun-blue text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-ethsun-navy transition-colors"
            >
              {t('register')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-ethsun-blue"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-2">
          {navLinks.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                'block px-3 py-2 rounded-md text-sm font-medium transition-colors',
                pathname === href
                  ? 'bg-ethsun-blue/10 text-ethsun-blue'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              {t(key)}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
            <Link
              href={pathname}
              locale={otherLocale}
              className="text-xs font-semibold uppercase tracking-wide text-gray-500 border border-gray-200 rounded px-2 py-1"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-ethsun-blue text-white text-sm font-semibold px-4 py-2 rounded-lg"
            >
              {t('register')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
