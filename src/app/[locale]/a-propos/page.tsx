'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import SectionHeader from '@/components/sections/SectionHeader';
import CTABlock from '@/components/sections/CTABlock';
import { Star, Lightbulb, TrendingUp, Globe, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  const values = [
    { icon: Star, title: 'Excellence', description: 'Chaque programme est conçu pour délivrer un impact mesurable sur la carrière de nos apprenants.' },
    { icon: Lightbulb, title: 'Innovation', description: "Nous intégrons les technologies les plus avancées (IA, e-learning, format hybride) dans nos méthodes pédagogiques." },
    { icon: TrendingUp, title: 'Impact', description: "Nous formons des professionnels qui transforment leurs organisations et contribuent au développement économique de l'Afrique." },
    { icon: Globe, title: 'Accessibilité', description: 'Nos formats flexibles rendent la formation de qualité accessible au plus grand nombre.' },
  ];

  const ecosystem = [
    {
      name: 'ETHSUN Executive Education Oxford',
      desc: "Centre d'enseignement exécutif basé à Oxford, au Royaume-Uni, ETHSUN Executive Education Oxford conçoit et déploie des programmes premium destinés aux dirigeants, cadres supérieurs et décideurs publics. L'institution se distingue par son exigence académique, son ouverture internationale et son engagement en matière de recherche et développement pédagogique.",
      link: 'https://www.ethsun-oxford.uk',
      external: true,
    },
    {
      name: 'ETHSUN Institute',
      desc: "Académie de formation professionnelle continue, ETHSUN Institute constitue le pilier opérationnel du groupe en Afrique. Elle propose des certificats professionnels, des séminaires spécialisés, des bootcamps sectoriels et des événements à forte valeur ajoutée, destinés à renforcer les compétences techniques, managériales et stratégiques.",
      link: '/programmes',
      external: false,
    },
    {
      name: 'ETHSUN Analytics',
      desc: "Pôle dédié à l'étude stratégique et à l'intelligence économique, ETHSUN Analytics accompagne les institutions publiques et privées dans leurs processus de décision. À travers des analyses approfondies, des études sectorielles et des outils d'aide à la décision, ce pôle contribue au renforcement de la gouvernance et à l'amélioration de la performance organisationnelle.",
      link: '/analytics',
      external: false,
    },
    {
      name: 'Lloyd Berkeley Holding',
      desc: "Structure holding internationale basée à Singapour, Lloyd Berkeley Holding supervise le développement stratégique et les partenariats internationaux du groupe ETHSUN à l'échelle mondiale.",
      link: null,
      external: false,
    },
  ];

  const learningCenters = [
    { flag: '🇨🇮', city: 'Abidjan', country: 'Côte d\'Ivoire', desc: 'Learning Center principal — Certificats professionnels, séminaires et événements phares', link: '/programmes', external: false },
    { flag: '🇬🇧', city: 'Oxford', country: 'Royaume-Uni', desc: 'Learning Center Oxford — Programmes exécutifs et certifications internationales', link: 'https://www.ethsun-oxford.uk', external: true },
    { flag: '🇲🇺', city: 'Maurice', country: 'Île Maurice', desc: 'Learning Center Maurice — Tourisme, hôtellerie et aménagement des territoires', link: '/international/maurice', external: false },
    { flag: '🇸🇬', city: 'Singapour', country: 'Singapour', desc: 'Learning Center Singapour — Éthique, gouvernance et conformité anticorruption', link: '/international/singapour', external: false },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
            light
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="font-serif text-xl font-bold text-ethsun-navy mb-4">{t('missionTitle')}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">{t('missionText1')}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{t('missionText2')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-ethsun-navy rounded-xl p-8">
              <h3 className="font-serif text-xl font-bold text-white mb-4">{t('visionTitle')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{t('visionText')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-ethsun-gold text-center mb-8">{t('founderTitle')}</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-ethsun-gold/30">
                <Image src="/images/founder-portrait.jpg" alt="Jean-Calvin ETHIEN" width={144} height={144} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-ethsun-navy mb-1">{t('founderName')}</h3>
              <p className="text-ethsun-gold font-semibold text-sm mb-4">{t('founderRole')}</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">{t('founderBio')}</p>
              <p className="text-gray-600 text-sm leading-relaxed italic">{t('founderAmbition')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="" title={t('ecosystemTitle')} subtitle="ETHSUN s'appuie sur un écosystème structuré, articulé autour de pôles complémentaires, conçus pour répondre aux enjeux contemporains de formation, de gouvernance et de performance organisationnelle." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecosystem.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
                <h4 className="font-semibold text-ethsun-navy text-sm mb-3">{item.name}</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                {item.link && (
                  item.external ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-ethsun-blue hover:text-ethsun-gold transition-colors">
                      Visiter le site <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link href={item.link} className="inline-flex items-center gap-1.5 text-xs font-semibold text-ethsun-blue hover:text-ethsun-gold transition-colors">
                      En savoir plus →
                    </Link>
                  )
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Centers */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="" title={t('campusesTitle')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {learningCenters.map((lc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                {lc.external ? (
                  <a href={lc.link} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-ethsun-gold/30 transition-all text-center cursor-pointer">
                    <div className="text-4xl mb-3">{lc.flag}</div>
                    <h4 className="font-serif text-lg font-bold text-ethsun-navy mb-1">{lc.city}</h4>
                    <p className="text-xs text-ethsun-gold font-medium mb-2">{lc.country}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{lc.desc}</p>
                  </a>
                ) : (
                  <Link href={lc.link!} className="block bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-ethsun-gold/30 transition-all text-center cursor-pointer">
                    <div className="text-4xl mb-3">{lc.flag}</div>
                    <h4 className="font-serif text-lg font-bold text-ethsun-navy mb-1">{lc.city}</h4>
                    <p className="text-xs text-ethsun-gold font-medium mb-2">{lc.country}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{lc.desc}</p>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="" title={t('valuesTitle')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-ethsun-gold/10 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-ethsun-gold" />
                </div>
                <h4 className="font-serif text-lg font-bold text-ethsun-navy mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Oxford seal */}
      <section className="py-10 bg-gray-50 text-center">
        <Image src="/images/seal-oxford.png" alt="ETHSUN Executive Education Oxford" width={80} height={80} className="mx-auto mb-3 opacity-70" />
        <p className="text-xs text-gray-500 italic">sous licence ETHSUN Executive Education Oxford — Per Doctrinam Excelsior</p>
      </section>

      <CTABlock />
    </>
  );
}
