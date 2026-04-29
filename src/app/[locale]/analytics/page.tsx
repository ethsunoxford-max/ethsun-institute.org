'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import {
  BarChart3, TrendingUp, FileSearch, Globe,
  ArrowRight, Mail, Phone, CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Études sectorielles & analyses de marché',
    desc: 'Analyse approfondie des dynamiques sectorielles, cartographie des acteurs, benchmarks et tendances stratégiques pour les marchés africains et internationaux.',
    domains: ['Immobilier & BTP', 'Banque & Finance', 'Tourisme', 'Industries extractives', 'Gouvernance publique'],
  },
  {
    icon: TrendingUp,
    title: 'Intelligence économique & compétitivité',
    desc: 'Veille stratégique, analyse concurrentielle, identification des opportunités et des risques pour accompagner les décisions des dirigeants et institutions.',
    domains: ['Veille stratégique', 'Analyse compétitive', 'Cartographie des risques', 'Due diligence'],
  },
  {
    icon: Globe,
    title: 'Collectivités Territoriales',
    desc: 'Appui aux collectivités décentralisées dans leur gouvernance locale, leur développement territorial et le renforcement de leurs capacités institutionnelles.',
    domains: ['Gouvernance locale', 'Développement territorial', 'Coopération décentralisée', 'Renforcement institutionnel'],
  },
  {
    icon: FileSearch,
    title: 'Conseil stratégique & développement institutionnel',
    desc: 'Accompagnement des institutions publiques, ONG et entreprises dans leur positionnement stratégique, leur transformation organisationnelle et leur développement international.',
    domains: ['Stratégie institutionnelle', 'Développement international', 'Transformation organisationnelle', 'Partenariats PPP'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-[#0F1E44] to-blue-900 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 kente-pattern opacity-30" />
        {/* Data grid pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-ethsun-gold/20 border border-ethsun-gold/30 rounded-full px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4 text-ethsun-gold" />
              <span className="text-xs font-bold tracking-widest text-ethsun-gold">ETHSUN ANALYTICS</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Intelligence économique &amp;<br />Conseil stratégique
            </h1>
            <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
              ETHSUN Analytics accompagne les décideurs publics et privés dans leurs processus de décision stratégique, à travers des analyses sectorielles rigoureuses et des outils d&apos;intelligence économique de pointe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg"
              >
                Discuter de votre projet
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:analytics@ethsun-oxford.uk"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-all hover:bg-white/10"
              >
                <Mail className="w-4 h-4" />
                analytics@ethsun-oxford.uk
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-gray-100">
            {[
              { number: '50+', label: 'Études réalisées' },
              { number: '15+', label: 'Secteurs couverts' },
              { number: '8', label: 'Pays africains' },
              { number: '100%', label: 'Expertise terrain' },
            ].map((s, i) => (
              <div key={i} className="text-center px-4">
                <p className="text-2xl lg:text-3xl font-bold text-ethsun-blue font-serif">{s.number}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-3">NOS SERVICES</p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ethsun-navy">
              Un accompagnement stratégique complet
            </h2>
          </div>
          <div className="space-y-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-ethsun-navy/5 flex items-center justify-center">
                      <s.icon className="w-6 h-6 text-ethsun-gold" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold text-ethsun-navy mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.domains.map((d) => (
                        <span key={d} className="text-xs px-2.5 py-1 bg-ethsun-navy/5 text-ethsun-navy rounded-full border border-ethsun-navy/10">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client References */}
      <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-3">RÉFÉRENCES CLIENTS</p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ethsun-navy">
              Ils nous ont confié leurs études
            </h2>
          </div>

          {/* FDFP Case Study */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-10 border border-blue-100 shadow-sm"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 w-40 flex items-center justify-center">
                  <Image src="/images/logo-fdfp.png" alt="FDFP" width={120} height={60} className="object-contain" />
                </div>
                <div className="mt-4 text-center">
                  <span className="inline-block bg-ethsun-gold/10 text-ethsun-gold text-xs font-bold px-3 py-1 rounded-full border border-ethsun-gold/30">
                    Novembre 2023
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold tracking-widest text-ethsun-blue mb-2">ÉTUDE SECTORIELLE — CÔTE D&apos;IVOIRE</p>
                <h3 className="font-serif text-xl font-bold text-ethsun-navy mb-3">
                  Identification des besoins en formation des Très Petites Entreprises (TPE) par branche professionnelle
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Mandaté par le <strong>Fonds de Développement de la Formation Professionnelle (FDFP)</strong>, ETHSUN Institute à travers son département ETHSUN Analytics a mené une étude nationale visant à identifier les besoins spécifiques en formation des TPE ivoiriennes, réparties en 13 branches professionnelles. L&apos;étude couvre l&apos;analyse de l&apos;adéquation offre/demande de formation, la cartographie des dispositifs existants, et la proposition d&apos;un plan d&apos;action opérationnel et budgétisé.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {[
                    'Cartographie des 13 branches professionnelles ivoiriennes',
                    'Analyse de l\'adéquation offre/demande de formation',
                    'Identification des besoins transversaux et spécifiques des TPE',
                    'Proposition d\'un dispositif d\'accompagnement FDFP',
                    'Plan d\'action opérationnel et budgétisé',
                    'Enquêtes terrain, interviews d\'experts et focus groups',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-ethsun-gold flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Étude sectorielle', 'Formation professionnelle', 'TPE', 'Côte d\'Ivoire', 'FDFP', 'Besoins en formation'].map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-ethsun-navy/5 text-ethsun-navy rounded-full border border-ethsun-navy/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <p className="text-center text-sm text-gray-500 mt-8 italic">
            Vous souhaitez confier une étude à ETHSUN Analytics ?{' '}
            <Link href="/contact" className="text-ethsun-blue hover:text-ethsun-gold font-semibold transition-colors">
              Contactez-nous →
            </Link>
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-14 lg:py-20 bg-ethsun-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">NOTRE APPROCHE</p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-6">
              Rigueur analytique, pertinence terrain
            </h2>
            <p className="text-white/75 leading-relaxed max-w-2xl mx-auto mb-10">
              ETHSUN Analytics combine la rigueur méthodologique des grandes institutions académiques avec une connaissance fine des réalités économiques et institutionnelles africaines. Nos analyses sont produites par des experts ayant une expérience directe dans les secteurs qu&apos;ils étudient.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left mb-10">
              {[
                { title: 'Données primaires', desc: 'Enquêtes terrain, interviews d\'experts, focus groups' },
                { title: 'Sources secondaires', desc: 'Bases de données internationales, rapports officiels, archives sectorielles' },
                { title: 'IA & Data', desc: 'Traitement automatisé, visualisation de données, rapports IA-assistés' },
              ].map((m, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-5">
                  <h4 className="font-semibold text-ethsun-gold text-sm mb-2">{m.title}</h4>
                  <p className="text-white/70 text-xs leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg"
            >
              Nous confier votre projet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-xl font-bold text-ethsun-navy mb-6">Contactez ETHSUN Analytics</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a href="mailto:analytics@ethsun-oxford.uk" className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-full bg-ethsun-navy/10 flex items-center justify-center group-hover:bg-ethsun-gold transition-colors">
                <Mail className="w-4 h-4 text-ethsun-navy group-hover:text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 mb-0.5">Email</p>
                <p className="text-sm font-medium text-ethsun-navy">analytics@ethsun-oxford.uk</p>
              </div>
            </a>
            <a href="https://wa.me/447424201585" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                <Phone className="w-4 h-4 text-green-600 group-hover:text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 mb-0.5">WhatsApp</p>
                <p className="text-sm font-medium text-ethsun-navy">+447424201585</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
