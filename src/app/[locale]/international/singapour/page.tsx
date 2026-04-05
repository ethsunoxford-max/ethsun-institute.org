'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  ChevronRight,
  Clock,
  Users,
  Award,
  ShieldCheck,
  Scale,
  Eye,
  Fingerprint,
  TrendingUp,
} from 'lucide-react';

/* ─── programmes ───────────────────────────────────────────── */
const programmes = [
  {
    code: 'GOV-001',
    title: 'Certificat International en Éthique Professionnelle & Gouvernance',
    duration: '3 mois',
    format: 'Blended Learning',
    price: '1 500 €',
    sessions: ['1 septembre 2026', '2 février 2027'],
    level: 'Intermédiaire',
    category: 'Éthique & Gouvernance',
    badge: 'bg-indigo-100 text-indigo-800',
    description: "Programme de référence internationale pour les cadres et dirigeants souhaitant renforcer leur pratique de l'éthique professionnelle et de la gouvernance organisationnelle.",
    modules: ['Fondements de l\'éthique professionnelle', 'Gouvernance d\'entreprise', 'Prise de décision éthique', 'Culture organisationnelle', 'Communication éthique'],
  },
  {
    code: 'GOV-002',
    title: 'Executive Certificate en Conformité Réglementaire & Anticorruption',
    duration: '4 mois',
    format: 'Blended Learning',
    price: '2 000 €',
    sessions: ['15 septembre 2026', '16 mars 2027'],
    level: 'Avancé',
    category: 'Conformité & Anticorruption',
    badge: 'bg-emerald-100 text-emerald-800',
    description: "Programme exécutif complet sur la conformité aux normes internationales anticorruption (ISO 37001, FCPA, UKBA), la gestion des risques et les dispositifs de contrôle interne.",
    modules: ['ISO 37001 & systèmes anti-corruption', 'FCPA / UK Bribery Act', 'Contrôle interne & audit', 'Gestion des conflits d\'intérêts', 'Programme de conformité organisationnelle'],
  },
  {
    code: 'GOV-003',
    title: 'Certificat en Bonne Gouvernance des Services Publics',
    duration: '3 mois',
    format: 'En ligne',
    price: '1 200 €',
    sessions: ['5 octobre 2026', '12 janvier 2027'],
    level: 'Intermédiaire',
    category: 'Gouvernance publique',
    badge: 'bg-amber-100 text-amber-800',
    description: 'Renforcez les capacités de gouvernance des agents et cadres du secteur public pour une administration moderne, transparente et orientée résultats.',
    modules: ['Éthique du service public', 'Gestion axée résultats', 'Transparence & redevabilité', 'Marchés publics éthiques', 'Mécanismes de contrôle'],
  },
  {
    code: 'GOV-004',
    title: 'Certification en Lutte contre le Blanchiment & Financement du Terrorisme (LCB-FT)',
    duration: '6 semaines',
    format: 'En ligne',
    price: '900 €',
    sessions: ['12 octobre 2026', '11 janvier 2027'],
    level: 'Fondamental',
    category: 'Conformité financière',
    badge: 'bg-rose-100 text-rose-800',
    description: "Formation spécialisée sur les dispositifs LCB-FT conformément aux recommandations du GAFI, à destination des professionnels du secteur financier et bancaire.",
    modules: ['Cadre GAFI & recommandations', 'Identification & vigilance KYC/KYB', 'Déclaration de soupçons', 'Risque sectoriel & géographique', 'Sanctions internationales'],
  },
  {
    code: 'GOV-005',
    title: 'Séminaire de Haut Niveau : Leadership Éthique en Afrique',
    duration: '3 jours intensifs',
    format: 'Présentiel — Singapour',
    price: '2 500 €',
    sessions: ['17-19 novembre 2026', '16-18 mars 2027'],
    level: 'Executive',
    category: 'Leadership',
    badge: 'bg-violet-100 text-violet-800',
    description: "Séminaire exécutif de haut niveau réunissant des décideurs africains et internationaux autour des enjeux du leadership éthique, de la gouvernance et de la transformation institutionnelle.",
    modules: ['Vision stratégique & leadership éthique', 'Gouvernance des organisations complexes', 'Lutte contre la corruption en Afrique', 'Dialogue public-privé', 'Benchmarks internationaux'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const pillars = [
  { icon: ShieldCheck, title: 'Éthique professionnelle', desc: 'Valeurs, intégrité et prise de décision responsable dans les organisations.' },
  { icon: Scale, title: 'Bonne gouvernance', desc: 'Transparence, redevabilité et performance des institutions publiques et privées.' },
  { icon: Eye, title: 'Conformité réglementaire', desc: 'Respect des cadres légaux nationaux et des normes internationales.' },
  { icon: Fingerprint, title: 'Anticorruption', desc: 'Prévention, détection et signalement des actes de corruption et de fraude.' },
];

export default function SingapourPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        {/* Background gradient (Singapore city) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0533] via-[#2D0060] to-[#C8102E]" />

        {/* City skyline pattern */}
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '1px 40px' }}
        />

        {/* Animated city lights */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-300"
            style={{ left: `${5 + i * 5}%`, bottom: `${10 + Math.random() * 30}%` }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5 + Math.random() * 2, delay: Math.random() * 3, repeat: Infinity }}
          />
        ))}

        {/* Glowing lines */}
        <motion.div
          className="absolute right-0 top-0 w-1/3 h-full opacity-10"
          style={{ background: 'linear-gradient(135deg, transparent 0%, rgba(200,16,46,0.5) 50%, transparent 100%)' }}
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Flag badge */}
        <div className="absolute top-8 right-8 flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
          <span className="text-2xl">🇸🇬</span>
          <div>
            <p className="text-white font-semibold text-sm">Singapour</p>
            <p className="text-white/70 text-xs">Asie du Sud-Est</p>
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
            <span className="text-xs font-bold tracking-widest text-white">TRAINING DELIVERY HUB SINGAPOUR</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl"
          >
            Éthique, Gouvernance &{' '}
            <span className="text-amber-300">Conformité</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl"
          >
            Au cœur du hub financier et réglementaire de l'Asie, notre Training Delivery Hub de Singapour propose des programmes de référence internationale sur l'éthique professionnelle, la bonne gouvernance et la conformité anticorruption.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#programmes"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg"
            >
              Voir les programmes
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-all hover:bg-white/10"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── WHY SINGAPORE ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">POURQUOI SINGAPOUR</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ethsun-navy mb-6">
                Le modèle mondial de gouvernance et d'intégrité
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Singapour est régulièrement classée parmi les nations les moins corrompues et les mieux gouvernées au monde. Sa législation anticorruption, ses institutions indépendantes et sa culture d'intégrité en font le cadre de référence idéal pour des formations sur la gouvernance et la conformité.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Notre Learning Center s'inscrit dans cet écosystème unique pour offrir des programmes imprégnés des meilleures pratiques asiatiques et mondiales en matière d'éthique et de conformité réglementaire.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '#3', label: 'Rang mondial anticorruption (Transparency Int.)' },
                  { value: '5', label: 'Programmes certifiants' },
                  { value: '100%', label: 'Normes internationales' },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-violet-600 mb-1">{s.value}</div>
                    <div className="text-xs text-gray-500 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#1A0533] to-[#2D0060] rounded-2xl p-8 shadow-2xl">
                <div className="text-5xl mb-6 text-center">🏙️</div>
                <h3 className="font-serif text-xl font-bold text-white text-center mb-6">Singapour en chiffres</h3>
                <div className="space-y-3">
                  {[
                    { icon: '🏆', text: 'Hub financier #1 Asie-Pacifique' },
                    { icon: '⚖️', text: 'Classé 4e indice d\'état de droit — WJP 2024' },
                    { icon: '🔍', text: 'CPIB : agence anticorruption modèle dans le monde' },
                    { icon: '🌐', text: 'Centre mondial de la conformité bancaire internationale' },
                    { icon: '📋', text: 'Réglementation MAS référence en Asie et au-delà' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3 bg-white/8 rounded-lg p-3">
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <p className="text-white/85 text-sm leading-snug">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS ──────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">NOS AXES</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ethsun-navy">
              4 piliers de notre offre à Singapour
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  variants={fadeUp} custom={i} initial="hidden" whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-violet-600 to-purple-900 mb-5">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-ethsun-navy mb-3">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROGRAMMES ─────────────────────────────────────── */}
      <section id="programmes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">CATALOGUE SINGAPOUR</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ethsun-navy mb-4">
              Nos programmes à Singapour
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Des certifications de niveau international en éthique, gouvernance et conformité, conçues selon les standards des meilleures institutions réglementaires mondiales.
            </p>
          </motion.div>

          <div className="space-y-6">
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.code}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="h-1 bg-gradient-to-r from-violet-600 to-purple-900" />
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap gap-3 items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${prog.badge}`}>
                          {prog.category}
                        </span>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                          {prog.level}
                        </span>
                        <span className="text-xs font-mono px-2 py-1 rounded bg-gray-100 text-gray-500">
                          {prog.code}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-ethsun-navy">{prog.title}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-bold text-violet-600">{prog.price}</div>
                      <div className="text-xs text-gray-400">par participant</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{prog.description}</p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-violet-500" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4 text-violet-500" />
                      <span>{prog.format}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-violet-500" />
                      <span>Max. 20 participants</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {prog.modules.map((mod) => (
                      <span key={mod} className="text-xs px-2.5 py-1 bg-violet-50 text-violet-700 rounded-full border border-violet-100">
                        {mod}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 mb-1.5">Sessions disponibles :</p>
                      <div className="flex flex-wrap gap-2">
                        {prog.sessions.map((s) => (
                          <span key={s} className="flex items-center gap-1.5 text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1">
                            <Calendar className="w-3 h-3" />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="flex-shrink-0 inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all"
                    >
                      S'inscrire
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#1A0533] via-[#2D0060] to-[#C8102E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-widest text-amber-300 mb-4">CONTACT — TRAINING DELIVERY HUB SINGAPOUR</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Inscription & Renseignements
            </h2>
            <p className="text-white/75 max-w-xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions sur les programmes et les modalités d'inscription au Training Delivery Hub de Singapour.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, label: 'Adresse', value: 'Singapour — Asie du Sud-Est\n(Localisation précise communiquée lors de l\'inscription)' },
              { icon: Phone, label: 'Téléphone / WhatsApp', value: '+447424201585' },
              { icon: Mail, label: 'Email', value: 'singapour@ethsun-oxford.uk' },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  variants={fadeUp} initial="hidden" whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center"
                >
                  <div className="inline-flex p-3 bg-white/15 rounded-full mb-4">
                    <Icon className="w-5 h-5 text-amber-300" />
                  </div>
                  <p className="text-white/60 text-xs mb-2">{c.label}</p>
                  <p className="text-white font-medium text-sm whitespace-pre-line">{c.value}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp} custom={3} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-8 py-4 rounded-lg text-sm transition-all shadow-lg"
            >
              Prendre contact
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
