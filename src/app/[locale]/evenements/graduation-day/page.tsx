'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Calendar, MapPin, Clock, Phone, GraduationCap, CheckCircle, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';
import { events, companyInfo } from '@/data/mock';

const carouselImages = [
  '/images/graduates-crowd.jpeg',
  '/images/graduation-real-1.jpg',
  '/images/graduation-real-2.jpg',
  '/images/graduation-real-3.jpg',
  '/images/graduates-kente.jpeg',
  '/images/cert-remise-officiels.jpg',
  '/images/cert-remise-woman.jpeg',
  '/images/award-ceremony.jpeg',
  '/images/event-graduation-1.jpg',
  '/images/event-graduation-2.jpg',
];

export default function GraduationDayPage() {
  const event = events[3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % carouselImages.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(p => (p - 1 + carouselImages.length) % carouselImages.length);
  const next = () => setCurrent(p => (p + 1) % carouselImages.length);

  const promotions = [
    { name: 'CAPIMMO 18ème Promotion', desc: 'Certificat d\'Aptitude aux Professions Immobilières', icon: '🏗️' },
    { name: 'Executive CBA 1ère Promotion', desc: 'Certificate of Business Administration', icon: '💼' },
    { name: 'Gouvernance & Éthique', desc: 'Certificat d\'Expertise en Gouvernance des Services Publics', icon: '🏛️' },
    { name: 'Industries Extractives', desc: 'Certificats Professionnels — Mines & Hydrocarbures', icon: '⛏️' },
    { name: 'Gestion d\'Entreprise', desc: 'Certificats Professionnels & Executive Certificates', icon: '📊' },
    { name: 'Formation & Leadership', desc: 'Certificats de Perfectionnement et d\'Expertise', icon: '🎓' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 kente-pattern" />
        <Image src="/images/graduates-crowd.jpeg" fill className="object-cover opacity-20" alt="Graduation Day ETHSUN 2026" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ethsun-navy-dark/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-ethsun-gold/20 text-ethsun-gold text-xs font-bold tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
              ÉDITION 2026
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Graduation Day ETHSUN 2026
            </h1>
            <p className="text-base sm:text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Cérémonie Annuelle de Remise des Certificats & Diplômes
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white/80 mb-8">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-ethsun-gold flex-shrink-0" />12 Décembre 2026</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ethsun-gold flex-shrink-0" />{event.venue}, {event.city}</span>
            </div>
            <p className="text-xs text-white/50 mb-8">Organisé par : ETHSUN Institute</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-6 sm:px-8 py-3.5 rounded-lg text-sm transition-all shadow-lg"
            >
              <GraduationCap className="w-4 h-4" />
              S&apos;inscrire à la cérémonie
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ethsun-gold py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-4 sm:gap-8 text-center">
          <div>
            <p className="text-2xl sm:text-4xl font-bold text-white font-serif">{event.stats.participants}</p>
            <p className="text-xs sm:text-sm text-white/80 mt-1">participants attendus</p>
          </div>
          <div>
            <p className="text-2xl sm:text-4xl font-bold text-white font-serif">6+</p>
            <p className="text-xs sm:text-sm text-white/80 mt-1">promotions diplômées</p>
          </div>
          <div>
            <p className="text-2xl sm:text-4xl font-bold text-white font-serif">500+</p>
            <p className="text-xs sm:text-sm text-white/80 mt-1">alumni ETHSUN</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            {event.description}
          </p>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-ethsun-navy text-center mb-10">Promotions diplômées 2026</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {promotions.map((promo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{promo.icon}</div>
                <h3 className="font-serif text-base font-bold text-ethsun-navy mb-2">{promo.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{promo.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel photos */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-ethsun-gold text-center mb-8">PHOTOS DES CÉRÉMONIES PRÉCÉDENTES</p>
          <div className="relative overflow-hidden rounded-2xl shadow-xl" style={{ aspectRatio: '16/7' }}>
            {carouselImages.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image src={src} fill className="object-cover" alt={`Graduation ETHSUN ${i + 1}`} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
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

      {/* Objectives */}
      {event.objectives && (
        <section className="py-10 lg:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-ethsun-navy text-center mb-8">Un moment d&apos;exception</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.objectives.map((obj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
                >
                  <CheckCircle className="w-5 h-5 text-ethsun-gold flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed">{obj}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Schedule */}
      {event.schedule && (
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-ethsun-navy text-center mb-10">Déroulement de la cérémonie</h2>
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ethsun-gold flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
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
        <section className="py-10 lg:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-ethsun-gold mb-8">PARTENAIRES INSTITUTIONNELS</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {event.partners.map((partner, i) => (
                <div key={i} className="flex items-center gap-2 bg-white px-4 sm:px-5 py-2.5 rounded-lg border border-gray-100 shadow-sm">
                  <Building2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 lg:py-20 bg-gradient-to-br from-ethsun-gold to-amber-600">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <GraduationCap className="w-12 h-12 text-white mx-auto mb-5" />
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
            Lauréats & Invités — Confirmez votre présence
          </h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            Inscription obligatoire avant le 30 novembre 2026 — Dress code : tenue de soirée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={companyInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ethsun-navy text-white font-semibold px-6 sm:px-8 py-3.5 rounded-lg text-sm transition-all shadow-lg hover:bg-ethsun-navy-dark"
            >
              Confirmer par WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-semibold px-6 sm:px-8 py-3.5 rounded-lg text-sm transition-all hover:bg-white/10"
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
