'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroImages = [
  '/images/graduation-real-1.jpg',
  '/images/graduation-real-2.jpg',
  '/images/graduation-real-3.jpg',
  '/images/graduation-bnetd-1.jpg',
  '/images/graduation-bnetd-2.jpg',
  '/images/graduation-bnetd-3.jpg',
  '/images/graduation-bnetd-4.jpg',
  '/images/uimmo-group.jpeg',
  '/images/uimmo1-group.jpeg',
  '/images/expertise-group-full.jpeg',
  '/images/graduates-crowd.jpeg',
  '/images/award-ceremony.jpeg',
  '/images/cert-group-kente.jpeg',
  '/images/cert-group-standing.jpeg',
  '/images/graduates-kente.jpeg',
  '/images/jc-cert-group-stage.jpeg',
  '/images/jc-networking.jpeg',
  '/images/bnetd-group.jpeg',
  '/images/ceremony-group.jpeg',
];

// Every 4th slide, show photo without overlay (full photo mode)
const FULL_PHOTO_INTERVAL = 4;

export default function HeroSection() {
  const t = useTranslations('hero');
  const [currentImage, setCurrentImage] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentImage((prev) => {
          const next = (prev + 1) % heroImages.length;
          if ((next + 1) % FULL_PHOTO_INTERVAL === 0) {
            setShowText(false);
            setTimeout(() => setShowText(true), 3000);
          } else {
            setShowText(true);
          }
          return next;
        });
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isFullPhotoMode = !showText && (currentImage + 1) % FULL_PHOTO_INTERVAL === 0;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImage]}
              alt="ETHSUN Institute — Cérémonie de graduation"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay — fades out when showing full photo */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: showText
              ? 'linear-gradient(to right, rgba(10,22,50,0.92) 0%, rgba(15,30,68,0.82) 50%, rgba(15,30,68,0.55) 100%)'
              : 'linear-gradient(to right, rgba(10,22,50,0.15) 0%, rgba(0,0,0,0.1) 100%)',
          }}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Kente pattern */}
      <AnimatePresence>
        {showText && (
          <motion.div
            className="absolute inset-0 kente-pattern"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>

      {/* Slideshow dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentImage ? 'bg-ethsun-gold w-6' : 'bg-white/40 w-1.5'
            }`}
          />
        ))}
      </div>

      {/* Text content — appears / disappears */}
      <AnimatePresence>
        {showText && (
          <motion.div
            key="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full"
          >
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-xs font-bold tracking-[0.25em] text-ethsun-gold mb-5"
              >
                {t('eyebrow')}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6"
              >
                {t('title')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-base lg:text-lg text-white/80 leading-relaxed mb-10 max-w-xl"
              >
                {t('subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/programmes"
                  className="inline-flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg hover:shadow-xl"
                >
                  {t('cta1')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-all hover:bg-white/10"
                >
                  <Phone className="w-4 h-4" />
                  {t('cta2')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-ethsun-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-10 bottom-0 w-64 h-64 bg-ethsun-blue/10 rounded-full blur-2xl pointer-events-none" />
    </section>
  );
}
