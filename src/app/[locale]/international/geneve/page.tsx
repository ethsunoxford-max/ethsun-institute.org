'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { MapPin, Phone, Mail, ArrowRight, Building2, Globe, Users } from 'lucide-react';

const programmes = [
  {
    code: 'GVA-001',
    title: 'Certificat en Gouvernance des Collectivités Décentralisées',
    duration: '4 mois',
    format: 'Blended Learning (présentiel + en ligne)',
    price: '2 200 CHF',
    sessions: ['15 septembre 2026', '12 janvier 2027'],
    level: 'Avancé',
    category: 'Gouvernance locale',
    badge: 'bg-blue-100 text-blue-800',
    description: 'Programme de référence pour les élus locaux, cadres territoriaux et acteurs du développement local souhaitant renforcer leurs compétences en gouvernance, gestion budgétaire et stratégie territoriale.',
    modules: ['Gouvernance et démocratie locale', 'Finances publiques locales', 'Planification stratégique territoriale', 'Coopération décentralisée internationale', 'Évaluation des politiques publiques'],
  },
  {
    code: 'GVA-002',
    title: 'Coopération Internationale & Développement Local',
    duration: '3 mois',
    format: 'Blended Learning',
    price: '1 800 CHF',
    sessions: ['5 octobre 2026', '8 février 2027'],
    level: 'Intermédiaire',
    category: 'Coopération internationale',
    badge: 'bg-emerald-100 text-emerald-800',
    description: "Formez-vous aux mécanismes de la coopération internationale au développement, aux financements multilatéraux et à la gestion de projets territoriaux à impact.",
    modules: ["Institutions de coopération internationale", "Montage de projets de développement", "Financement multilatéral et ONG", "Partenariats public-privé territoriaux", "Impact social et évaluation"],
  },
  {
    code: 'GVA-003',
    title: 'Management Public & Réforme Administrative',
    duration: '5 jours intensifs',
    format: 'Présentiel — Genève',
    price: '2 500 CHF',
    sessions: ['2-6 novembre 2026', '15-19 mars 2027'],
    level: 'Executive',
    category: 'Management public',
    badge: 'bg-violet-100 text-violet-800',
    description: "Programme exécutif pour hauts fonctionnaires et cadres dirigeants de la fonction publique souhaitant moderniser leurs pratiques de gestion et conduire des réformes administratives.",
    modules: ["Modernisation de l'État et e-gouvernement", "Leadership et conduite du changement", "Gestion axée sur les résultats", "Lutte contre la corruption et éthique publique", "Communication institutionnelle"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function GenevePage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        {/* Swiss inspired background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.2) 0%, transparent 50%)' }}
        />

        {/* Animated circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/8"
            style={{ width: 120 + i * 100, height: 120 + i * 100, right: -30 + i * 15, top: -30 + i * 25 }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 25 + i * 5, repeat: Infinity, ease: 'linear' }}
          />
        ))}

        {/* Flag badge */}
        <div className="absolute top-8 right-8 flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
          <span className="text-2xl">🇨🇭</span>
          <div>
            <p className="text-white font-semibold text-sm">Genève — Suisse</p>
            <p className="text-white/60 text-xs">Training Delivery Hub</p>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-40 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 mb-6"
          >
            <MapPin className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-bold tracking-widest text-white">TRAINING DELIVERY HUB GENÈVE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl"
          >
            Collectivités locales &amp;{' '}
            <span className="text-ethsun-gold">Gouvernance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl"
          >
            Au cœur de la diplomatie internationale, notre hub genevois offre des programmes spécialisés en gouvernance des collectivités décentralisées, coopération internationale et management public.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#programmes" className="inline-flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg">
              Voir les programmes <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-all hover:bg-white/10">
              Nous contacter
            </Link>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-white">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* About hub */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">TRAINING DELIVERY HUB</p>
              <h2 className="font-serif text-3xl font-bold text-ethsun-navy mb-6">
                Le hub de référence pour la gouvernance internationale
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Genève, capitale mondiale de la diplomatie et siège de nombreuses organisations internationales (ONU, OIT, ICRC, OMS…), constitue un cadre unique pour les professionnels de la gouvernance et du secteur public. Notre hub genevois capitalise sur cet environnement pour offrir des programmes exigeants et ancrés dans les standards les plus élevés de la coopération internationale.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Les formations sont coordonnées depuis ETHSUN Executive Education Oxford. Toute inscription et tout renseignement se font via les coordonnées ETHSUN Oxford ci-dessous.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '3', label: 'Programmes spécialisés' },
                  { value: '2×', label: 'Sessions par an' },
                  { value: 'CHF', label: 'Tarifs en francs suisses' },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-ethsun-blue mb-1">{s.value}</div>
                    <div className="text-xs text-gray-500 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="bg-gradient-to-br from-[#1a1a2e] to-ethsun-navy rounded-2xl p-8 text-white">
                <div className="text-5xl mb-5 text-center">🏛️</div>
                <h3 className="font-serif text-xl font-bold text-center mb-5">Genève — Capitale mondiale</h3>
                <div className="space-y-3">
                  {[
                    { icon: Globe, text: 'Siège de 40+ organisations internationales' },
                    { icon: Building2, text: 'Plus de 200 représentations diplomatiques' },
                    { icon: Users, text: 'Carrefour mondial de la gouvernance et du droit international' },
                    { icon: ArrowRight, text: 'Réseau diplomatique et institutionnel exceptionnel' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/10 rounded-lg p-3">
                      <item.icon className="w-4 h-4 text-ethsun-gold flex-shrink-0 mt-0.5" />
                      <p className="text-white/85 text-sm leading-snug">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">CATALOGUE</p>
            <h2 className="font-serif text-3xl font-bold text-ethsun-navy mb-4">Nos programmes à Genève</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Des certifications en gouvernance et management public, dispensées dans la capitale mondiale de la diplomatie.
            </p>
          </div>
          <div className="space-y-5">
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.code}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap gap-3 items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${prog.badge}`}>{prog.category}</span>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">{prog.level}</span>
                        <span className="text-xs font-mono px-2 py-1 rounded bg-gray-100 text-gray-500">{prog.code}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-ethsun-navy">{prog.title}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-bold text-ethsun-blue">{prog.price}</div>
                      <div className="text-xs text-gray-400">par participant</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{prog.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {prog.modules.map((m) => (
                      <span key={m} className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">{m}</span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">Format :</span> {prog.format} — <span className="font-semibold">Durée :</span> {prog.duration}
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-ethsun-navy hover:bg-ethsun-blue text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all">
                      S&apos;inscrire <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gradient-to-br from-ethsun-navy-dark to-ethsun-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">CONTACT — TRAINING DELIVERY HUB GENÈVE</p>
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Inscription & Renseignements</h2>
            <p className="text-white/70 text-sm max-w-xl mx-auto">
              Pour toute question sur les programmes genevois, contactez notre équipe ETHSUN Executive Education Oxford, coordinatrice du hub.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: MapPin, label: 'Adresse', value: 'Wood Centre for Innovation\nQuarry Road, Headington\nOxford OX3 8SB, UK' },
              { icon: Phone, label: 'Téléphone / WhatsApp', value: '+447424201585' },
              { icon: Mail, label: 'Email', value: 'geneve@ethsun-oxford.uk' },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5 text-center">
                  <div className="inline-flex p-3 bg-white/15 rounded-full mb-3">
                    <Icon className="w-5 h-5 text-ethsun-gold" />
                  </div>
                  <p className="text-white/60 text-xs mb-1">{c.label}</p>
                  <p className="text-white font-medium text-sm whitespace-pre-line">{c.value}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg">
              Prendre contact <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
