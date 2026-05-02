'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Calendar, MapPin, Clock, Phone, Building2, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { events, companyInfo } from '@/data/mock';

const carouselImages = [
  '/images/event-conference.jpeg',
  '/images/bnetd-01.jpg',
  '/images/bnetd-02.jpg',
  '/images/event-salle-5.jpg',
  '/images/event-salle-6.jpeg',
  '/images/jc-ministers.jpg',
  '/images/minister-speech.jpg',
  '/images/event-activite-01.jpg',
  '/images/event-activite-02.jpg',
  '/images/event-activite-03.jpg',
];

export default function UniversiteEthiqueGouvernancePage() {
  const event = events[2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % carouselImages.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(p => (p - 1 + carouselImages.length) % carouselImages.length);
  const next = () => setCurrent(p => (p + 1) % carouselImages.length);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-emerald-900 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 kente-pattern" />
        <Image src="/images/event-conference.jpeg" fill className="object-cover opacity-20" alt="Université Éthique et Gouvernance" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ethsun-navy-dark/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-ethsun-gold/20 text-ethsun-gold text-xs font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
              3ÈME ÉDITION — 2026
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Université de l&apos;Éthique et la Gouvernance des Services Publics
            </h1>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white/80 mb-8">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-ethsun-gold flex-shrink-0" />18 Juillet 2026</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ethsun-gold flex-shrink-0" />{event.venue}, {event.city}</span>
            </div>
            <p className="text-xs text-white/50 mb-8">Organisé par : ETHSUN Institute</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-6 sm:px-8 py-3.5 rounded-lg text-sm transition-all shadow-lg"
            >
              S&apos;inscrire maintenant
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ethsun-navy py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-4 sm:gap-8 text-center">
          <div>
            <p className="text-2xl sm:text-4xl font-bold text-ethsun-gold font-serif">{event.stats.participants}</p>
            <p className="text-xs sm:text-sm text-white/70 mt-1">participants attendus</p>
          </div>
          <div>
            <p className="text-2xl sm:text-4xl font-bold text-ethsun-gold font-serif">{event.stats.speakers}</p>
            <p className="text-xs sm:text-sm text-white/70 mt-1">intervenants experts</p>
          </div>
          <div>
            <p className="text-2xl sm:text-4xl font-bold text-ethsun-gold font-serif">1</p>
            <p className="text-xs sm:text-sm text-white/70 mt-1">journée intensive</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed text-center">
            {event.description}
          </p>
        </div>
      </section>

      {/* Rector */}
      {event.rector && (
        <section className="py-10 lg:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold tracking-[0.2em] text-ethsun-gold text-center mb-8">RECTEUR HONORIFIQUE</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-ethsun-navy to-ethsun-navy-dark rounded-xl p-6 sm:p-10 text-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mx-auto mb-5 border-2 border-ethsun-gold/30 bg-ethsun-gold/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-ethsun-gold">{event.rector.name.split(' ').pop()?.charAt(0)}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">{event.rector.name}</h3>
              <p className="text-ethsun-gold text-sm font-medium">{event.rector.title}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Objectives */}
      {event.objectives && (
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-ethsun-navy text-center mb-8">Objectifs de la conférence</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.objectives.map((obj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100"
                >
                  <CheckCircle className="w-5 h-5 text-ethsun-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed">{obj}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Carousel photos */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-ethsun-gold text-center mb-8">GALERIE PHOTOS</p>
          <div className="relative overflow-hidden rounded-2xl shadow-xl" style={{ aspectRatio: '16/7' }}>
            {carouselImages.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image src={src} fill className="object-cover" alt={`ETHSUN Éthique Gouvernance ${i + 1}`} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ethsun-navy-dark/30 to-transparent" />
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all z-10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all z-10">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {carouselImages.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${i === current ? 'bg-ethsun-gold w-5 h-2' : 'bg-white/50 w-2 h-2'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      {event.schedule && (
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-ethsun-navy text-center mb-10">Programme de la journée</h2>
            <div className="relative">
              <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-ethsun-gold/20" />
              <div className="space-y-4">
                {event.schedule.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ethsun-navy flex items-center justify-center">
                      <Clock className="w-5 h-5 text-ethsun-gold" />
                    </div>
                    <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 flex-1">
                      <p className="text-xs font-bold text-ethsun-gold mb-1">{item.time}</p>
                      <p className="text-sm text-ethsun-navy font-medium leading-relaxed">{item.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Partners */}
      {event.partners && (
        <section className="py-10 lg:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-ethsun-gold mb-8">PARTENAIRES & PARRAINS INSTITUTIONNELS</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {event.partners.map((partner, i) => (
                <div key={i} className="flex items-center gap-2 bg-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-gray-100 shadow-sm">
                  <Building2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Inscription */}
      <section className="py-14 lg:py-20 bg-gradient-to-br from-ethsun-navy-dark to-ethsun-navy">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
            Participez à la 3ème Université de l&apos;Éthique
          </h2>
          <p className="text-gray-300 mb-8 text-sm leading-relaxed">
            Places limitées — Inscription par WhatsApp ou via notre formulaire de contact
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={companyInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-6 sm:px-8 py-3.5 rounded-lg text-sm transition-all shadow-lg"
            >
              S&apos;inscrire par WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-6 sm:px-8 py-3.5 rounded-lg text-sm transition-all hover:bg-white/10"
            >
              Formulaire de contact
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {event.contact?.map((phone, i) => (
              <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4" />
                {phone}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
