'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import SectionHeader from '@/components/sections/SectionHeader';
import CTABlock from '@/components/sections/CTABlock';
import { internationalPresence } from '@/data/mock';
import { Award, ArrowRight, BookOpen, ExternalLink } from 'lucide-react';

export default function InternationalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-blue-900 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 kente-pattern" />
        <Image src="/images/extra-event-2.jpg" fill className="object-cover opacity-30" alt="ETHSUN International" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ethsun-navy-dark/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-bold tracking-[0.25em] text-ethsun-gold mb-5">INTERNATIONAL</p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Une formation d&apos;excellence, un rayonnement mondial
            </h1>
            <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              ETHSUN INSTITUTE porte l&apos;ambition d&apos;une formation africaine aux standards internationaux les plus exigeants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Oxford section */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-ethsun-navy to-ethsun-blue flex items-center justify-center shadow-xl">
                  <Image
                    src="/images/seal-oxford.png"
                    alt="ETHSUN Executive Education Oxford"
                    width={140}
                    height={140}
                    className="w-32 h-32 lg:w-36 lg:h-36 object-contain opacity-90"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-ethsun-gold text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  Est. Oxford
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ethsun-navy mb-4">
                ETHSUN Executive Education Oxford
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ETHSUN Institute détient une licence d&apos;exploitation de marque de ETHSUN Executive Education Oxford, institution académique basée au Royaume-Uni, reconnue pour l&apos;exigence de ses programmes exécutifs et son rayonnement international.
              </p>
              <div className="flex items-center gap-3 bg-ethsun-navy/5 rounded-lg p-4 mb-5">
                <Award className="w-6 h-6 text-ethsun-gold flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-ethsun-navy italic">Per Doctrinam Excelsior</p>
                  <p className="text-xs text-gray-500">« Par la connaissance, toujours plus haut »</p>
                </div>
              </div>
              <a href="https://www.ethsun-oxford.uk" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ethsun-blue hover:text-ethsun-gold transition-colors">
                Visiter ethsun-oxford.uk <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* International presence — 5 cities */}
      <section className="py-14 lg:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow=""
            title="Notre présence internationale"
            subtitle="ETHSUN Institute déploie son expertise dans cinq villes stratégiques à travers le monde."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {internationalPresence.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {item.link?.startsWith('http') ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer"
                    className="block bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-ethsun-gold/30 transition-all text-center">
                    <div className="text-4xl mb-3">{item.flag}</div>
                    <h3 className="font-semibold text-ethsun-navy text-sm mb-1">{item.country}</h3>
                    <p className="text-xs text-ethsun-gold font-medium mb-2">{item.countryFull}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </a>
                ) : (
                  <Link href={item.link!}
                    className="block bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-ethsun-gold/30 transition-all text-center">
                    <div className="text-4xl mb-3">{item.flag}</div>
                    <h3 className="font-semibold text-ethsun-navy text-sm mb-1">{item.country}</h3>
                    <p className="text-xs text-ethsun-gold font-medium mb-2">{item.countryFull}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes internationaux */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ethsun-navy mb-5">
              Programmes internationaux
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
              Nos programmes internationaux sont dispensés en anglais, français, espagnol et arabe, avec des intervenants issus des meilleures institutions mondiales. Ils s&apos;adressent aux cadres et dirigeants souhaitant une certification à forte valeur ajoutée internationale.
            </p>
            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg"
            >
              <BookOpen className="w-4 h-4" />
              Découvrir les programmes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
