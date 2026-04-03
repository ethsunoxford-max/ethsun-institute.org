'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import {
  BarChart3,
  TrendingUp,
  Search,
  FileText,
  Globe,
  ShieldCheck,
  Users,
  Database,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  Activity,
  Target,
  Layers,
} from 'lucide-react';

/* ─── animated counter ─────────────────────────────────────── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── data ──────────────────────────────────────────────────── */
const services = [
  {
    icon: BarChart3,
    color: 'from-blue-600 to-blue-800',
    title: 'Études sectorielles',
    desc: 'Analyses approfondies de marchés, dynamiques sectorielles et cartographies concurrentielles pour éclairer les décisions stratégiques.',
    items: ['Analyse de marché', 'Benchmark sectoriel', 'Cartographie des acteurs', 'Veille économique'],
  },
  {
    icon: Database,
    color: 'from-ethsun-navy to-blue-900',
    title: 'Collecte & traitement de données',
    desc: 'Conception méthodologique, collecte terrain et traitement statistique de données quantitatives et qualitatives.',
    items: ['Enquêtes et sondages', 'Focus groups', 'Données administratives', 'Big data & IA'],
  },
  {
    icon: Activity,
    color: 'from-emerald-600 to-teal-800',
    title: "Études d'impact",
    desc: "Évaluation rigoureuse de l'impact socio-économique des projets, programmes et politiques publiques.",
    items: ['Évaluation ex-ante / ex-post', 'Indicateurs de performance', 'Analyse coût-bénéfice', 'Rapports de redevabilité'],
  },
  {
    icon: ShieldCheck,
    color: 'from-amber-600 to-orange-800',
    title: 'Gouvernance & conformité',
    desc: 'Diagnostics institutionnels, audits organisationnels et accompagnement à la mise en conformité réglementaire.',
    items: ['Audit organisationnel', 'Conformité réglementaire', 'Anticorruption', 'Réforme administrative'],
  },
  {
    icon: Lightbulb,
    color: 'from-violet-600 to-purple-900',
    title: 'Intelligence économique',
    desc: 'Production de notes stratégiques, bulletins de veille et analyses prospectives pour les décideurs.',
    items: ['Veille stratégique', 'Notes de conjoncture', 'Analyse prospective', 'Tableaux de bord'],
  },
  {
    icon: FileText,
    color: 'from-rose-600 to-red-800',
    title: 'Conseil & ingénierie de projets',
    desc: 'Accompagnement à la conception, au montage et au suivi-évaluation de projets de développement.',
    items: ['Formulation de projets', 'Cadre logique', 'Suivi-évaluation', 'Rapportage bailleur'],
  },
];

const sectors = [
  { icon: '🏛️', label: 'Institutions publiques' },
  { icon: '🏗️', label: 'BTP & Infrastructures' },
  { icon: '🏦', label: 'Finance & Banque' },
  { icon: '🌍', label: 'Développement international' },
  { icon: '⚡', label: 'Énergie & Mines' },
  { icon: '🌿', label: 'Agriculture & Environnement' },
  { icon: '🏨', label: 'Tourisme & Hôtellerie' },
  { icon: '🎓', label: 'Éducation & Formation' },
  { icon: '🏥', label: 'Santé & Social' },
  { icon: '💼', label: 'PME & Entrepreneuriat' },
];

const stats = [
  { value: 50, suffix: '+', label: 'Études réalisées' },
  { value: 15, suffix: '+', label: 'Secteurs couverts' },
  { value: 8, suffix: '', label: 'Pays d\'intervention' },
  { value: 100, suffix: '%', label: 'Approche sur-mesure' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

/* ─── floating data particles ───────────────────────────────── */
const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 4,
  duration: 3 + Math.random() * 4,
}));

export default function AnalyticsPage() {
  const heroRef = useRef(null);

  return (
    <main className="min-h-screen bg-white overflow-hidden">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#050d1f] via-[#0a1a3e] to-[#0f2461] overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(100,150,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,150,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />

        {/* Floating particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-ethsun-gold/60"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-ethsun-gold/8 rounded-full blur-2xl" />

        {/* Animated chart lines */}
        <svg className="absolute right-0 top-0 h-full w-1/2 opacity-10" preserveAspectRatio="none">
          <motion.polyline
            points="0,300 100,250 200,280 300,180 400,200 500,120 600,150 700,80"
            fill="none" stroke="rgba(212,175,55,0.8)" strokeWidth="2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.polyline
            points="0,400 100,380 200,350 300,320 400,340 500,280 600,260 700,220"
            fill="none" stroke="rgba(100,150,255,0.6)" strokeWidth="2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 0.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 bg-ethsun-gold/15 border border-ethsun-gold/30 rounded-full px-4 py-1.5 mb-8"
            >
              <BarChart3 className="w-3.5 h-3.5 text-ethsun-gold" />
              <span className="text-xs font-bold tracking-widest text-ethsun-gold">ETHSUN ANALYTICS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Données. Analyse.{' '}
              <span className="text-ethsun-gold">Décision.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-white/75 leading-relaxed mb-10 max-w-2xl"
            >
              Pôle dédié à l'étude stratégique et à l'intelligence économique, ETHSUN Analytics accompagne les institutions publiques et privées dans leurs processus de décision grâce à des analyses approfondies, des études sectorielles et des outils d'aide à la décision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="mailto:analytics@ethsun-institute.com"
                className="inline-flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg"
              >
                Solliciter une étude
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-all hover:bg-white/10"
              >
                Découvrir nos services
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-ethsun-gold">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-white/60 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">QUI SOMMES-NOUS</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ethsun-navy mb-6">
                L'intelligence économique au service de vos décisions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                ETHSUN Analytics est le pôle de recherche appliquée et d'intelligence économique du groupe ETHSUN. Nous accompagnons les institutions, gouvernements, entreprises et organisations internationales dans la production de connaissances actionnables.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Notre approche combine rigueur académique et pragmatisme opérationnel : chaque étude est conçue pour répondre à une question décisionnelle précise et déboucher sur des recommandations concrètes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Forts d'une équipe d'experts pluridisciplinaires (économistes, juristes, data analysts, spécialistes sectoriels), nous intervenons sur l'ensemble de la chaîne de valeur analytique — de la collecte de données à la restitution stratégique.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Data viz mockup */}
              <div className="bg-gradient-to-br from-ethsun-navy to-[#0f2461] rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-white/40 text-xs">ETHSUN Analytics Dashboard</span>
                </div>

                {/* Animated bars */}
                <div className="space-y-4 mb-6">
                  {[
                    { label: 'Études sectorielles', pct: 85, color: 'bg-blue-500' },
                    { label: 'Études d\'impact', pct: 72, color: 'bg-ethsun-gold' },
                    { label: 'Intelligence éco.', pct: 90, color: 'bg-emerald-500' },
                    { label: 'Gouvernance', pct: 68, color: 'bg-violet-500' },
                  ].map((bar, i) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs text-white/60 mb-1">
                        <span>{bar.label}</span>
                        <span>{bar.pct}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${bar.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini chart */}
                <div className="grid grid-cols-7 gap-1 items-end h-20">
                  {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      className="bg-ethsun-gold/70 rounded-sm"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 + i * 0.08, ease: 'easeOut' }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-white/30 text-xs mt-2">
                  {['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul'].map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────── */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">NOS SERVICES</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ethsun-navy mb-4">
              Une offre analytique complète
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              De l'étude de marché à l'évaluation d'impact, nous couvrons l'ensemble des besoins en information stratégique des organisations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp} custom={i} initial="hidden" whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className={`h-2 bg-gradient-to-r ${s.color}`} />
                  <div className="p-7">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${s.color} mb-5`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-ethsun-navy text-lg mb-3">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                    <ul className="space-y-1.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                          <ChevronRight className="w-3.5 h-3.5 text-ethsun-gold flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">NOTRE MÉTHODE</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ethsun-navy">
              Un processus rigoureux en 5 étapes
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-ethsun-gold/20 via-ethsun-gold to-ethsun-gold/20" />

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { step: '01', icon: Target, title: 'Cadrage', desc: 'Définition précise de la problématique et des objectifs de l\'étude' },
                { step: '02', icon: Search, title: 'Collecte', desc: 'Conception des outils et collecte rigoureuse des données primaires et secondaires' },
                { step: '03', icon: Database, title: 'Traitement', desc: 'Analyse statistique, modélisation et interprétation des données' },
                { step: '04', icon: Layers, title: 'Synthèse', desc: 'Production du rapport analytique avec conclusions et recommandations' },
                { step: '05', icon: TrendingUp, title: 'Restitution', desc: 'Présentation aux décideurs et accompagnement à la mise en œuvre' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    variants={fadeUp} custom={i} initial="hidden" whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center relative"
                  >
                    <div className="relative inline-flex mb-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ethsun-navy to-[#0f2461] flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-ethsun-gold" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-7 h-7 bg-ethsun-gold rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-semibold text-ethsun-navy mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTORS ────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-ethsun-navy to-[#0f2461]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">SECTEURS D'INTERVENTION</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Expertise multisectorielle
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sectors.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/8 hover:bg-white/15 border border-white/10 hover:border-ethsun-gold/40 rounded-xl p-5 text-center transition-all cursor-default"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="text-white/80 text-xs leading-tight font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="inline-flex p-4 rounded-full bg-ethsun-gold/10 mb-6">
              <Globe className="w-8 h-8 text-ethsun-gold" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ethsun-navy mb-5">
              Vous avez un besoin en analyse ou en données ?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              Nos experts sont disponibles pour analyser votre problématique, vous proposer une méthodologie adaptée et mener l'étude dans les meilleures conditions de rigueur et de confidentialité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:analytics@ethsun-institute.com"
                className="inline-flex items-center justify-center gap-2 bg-ethsun-navy hover:bg-ethsun-navy/90 text-white font-semibold px-8 py-4 rounded-lg text-sm transition-all shadow-lg"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-ethsun-navy text-ethsun-navy hover:bg-ethsun-navy hover:text-white font-semibold px-8 py-4 rounded-lg text-sm transition-all"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
