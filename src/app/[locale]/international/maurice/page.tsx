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
  Star,
  Clock,
  Users,
  Award,
} from 'lucide-react';

/* ─── programmes ───────────────────────────────────────────── */
const programmes = [
  {
    code: 'TOUR-001',
    title: 'Certificat en Management Hôtelier & Hospitalité',
    duration: '3 mois',
    format: 'Présentiel / Blended',
    price: '1 200 €',
    sessions: ['15 septembre 2026', '12 janvier 2027'],
    level: 'Intermédiaire',
    category: 'Tourisme & Hôtellerie',
    badge: 'bg-amber-100 text-amber-800',
    description: 'Maîtrisez les fondamentaux du management hôtelier dans un contexte insulaire et international, avec des stages pratiques dans les grands établissements mauriciens.',
    modules: ['Gestion des opérations hôtelières', 'Revenue management', 'Service excellence', 'Leadership en hôtellerie', 'Tourisme durable & responsable'],
  },
  {
    code: 'TOUR-002',
    title: 'Aménagement Touristique des Territoires',
    duration: '4 mois',
    format: 'Blended Learning',
    price: '1 500 €',
    sessions: ['10 octobre 2026', '15 février 2027'],
    level: 'Avancé',
    category: 'Développement territorial',
    badge: 'bg-emerald-100 text-emerald-800',
    description: "Concevez des stratégies d'aménagement touristique durable pour les territoires insulaires et côtiers. Programme phare recommandé pour les acteurs du développement territorial.",
    modules: ['Planification stratégique du tourisme', 'Valorisation patrimoniale', 'Développement de produits touristiques', 'Financement de projets', 'Études d\'impact environnemental'],
  },
  {
    code: 'TOUR-003',
    title: 'Certificat en Gestion des Loisirs & Événementiel',
    duration: '2 mois',
    format: 'Présentiel',
    price: '900 €',
    sessions: ['7 septembre 2026', '16 novembre 2026'],
    level: 'Fondamental',
    category: 'Loisirs & Événementiel',
    badge: 'bg-blue-100 text-blue-800',
    description: "Organisez et gérez des événements touristiques et culturels à forte valeur ajoutée dans l'île Maurice et la région de l'Océan Indien.",
    modules: ['Conception d\'événements', 'Logistique et production', 'Communication événementielle', 'Gestion budgétaire', 'Partenariats institutionnels'],
  },
  {
    code: 'TOUR-004',
    title: 'Formation en Restauration & Gastronomie Locale',
    duration: '6 semaines',
    format: 'Présentiel',
    price: '700 €',
    sessions: ['1 octobre 2026', '5 janvier 2027'],
    level: 'Fondamental',
    category: 'Restauration',
    badge: 'bg-rose-100 text-rose-800',
    description: 'Valorisez la gastronomie mauricienne et développez une offre de restauration compétitive et authentique pour les marchés locaux et touristiques internationaux.',
    modules: ['Gastronomie créole & métissée', 'Gestion d\'un établissement', 'Hygiène & normes HACCP', 'Marketing gastronomique', 'Expérience client'],
  },
  {
    code: 'TOUR-005',
    title: 'Executive Certificate : Stratégie Touristique & Compétitivité',
    duration: '5 jours intensifs',
    format: 'Présentiel',
    price: '1 800 €',
    sessions: ['3-7 novembre 2026', '9-13 mars 2027'],
    level: 'Executive',
    category: 'Leadership',
    badge: 'bg-violet-100 text-violet-800',
    description: 'Programme exécutif de haut niveau pour les décideurs du secteur touristique souhaitant repositionner leur stratégie dans un contexte concurrentiel régional.',
    modules: ['Analyse compétitive du tourisme régional', 'Stratégie de différenciation', 'Financement et investissements', 'Partenariats PPP', 'Gouvernance touristique'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function MauricePage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        {/* Background gradient (tropical) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#006B6B] via-[#00897B] to-[#1565C0]" />

        {/* Ocean wave pattern */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 60%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(0,200,200,0.3) 0%, transparent 50%)' }}
        />

        {/* Animated tropical circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: 100 + i * 120,
              height: 100 + i * 120,
              right: -50 + i * 20,
              top: -50 + i * 30,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
          />
        ))}

        {/* Flag & location badge */}
        <div className="absolute top-8 right-8 flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
          <span className="text-2xl">🇲🇺</span>
          <div>
            <p className="text-white font-semibold text-sm">Île Maurice</p>
            <p className="text-white/70 text-xs">Océan Indien</p>
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
            <span className="text-xs font-bold tracking-widest text-white">LEARNING CENTER MAURICE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl"
          >
            Tourisme, Hôtellerie &{' '}
            <span className="text-amber-300">Loisirs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl"
          >
            Au cœur de l'Océan Indien, notre Learning Center de l'Île Maurice offre des programmes spécialisés en tourisme, hôtellerie, gestion des loisirs et aménagement touristique des territoires.
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

      {/* ── ABOUT THE CENTER ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">LE LEARNING CENTER</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ethsun-navy mb-6">
                La porte d'entrée vers l'excellence touristique
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                L'Île Maurice, destination touristique de réputation mondiale, constitue un cadre idéal pour former les futurs professionnels du tourisme et de l'hôtellerie. Notre Learning Center s'appuie sur cet environnement unique pour proposer des programmes alliant théorie et immersion dans les meilleures structures de l'île.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                En partenariat avec des hôtels de luxe, des opérateurs touristiques locaux et les institutions publiques mauriciennes, nos formations préparent les professionnels à exercer dans les standards les plus exigeants du secteur.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '5', label: 'Programmes spécialisés' },
                  { value: '2×', label: 'Sessions par an' },
                  { value: '100%', label: 'Certifiés ETHSUN' },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-teal-600 mb-1">{s.value}</div>
                    <div className="text-xs text-gray-500 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Decorative card with tropical vibes */}
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-10 rounded-2xl">
                <div className="text-6xl mb-6 text-center">🏝️</div>
                <h3 className="font-serif text-2xl font-bold text-white text-center mb-4">Île Maurice</h3>
                <div className="space-y-4">
                  {[
                    { icon: '🌊', text: 'Destination #1 tourisme de luxe — Océan Indien' },
                    { icon: '🏨', text: 'Plus de 120 hôtels 4 et 5 étoiles sur l\'île' },
                    { icon: '✈️', text: '1,3 million de touristes/an — en forte croissance' },
                    { icon: '📊', text: 'Le tourisme représente 25% du PIB mauricien' },
                    { icon: '🤝', text: 'Partenariats avec hôtels et tour-opérateurs locaux' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3 bg-white/10 rounded-lg p-3">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <p className="text-white/90 text-sm leading-snug">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMMES ─────────────────────────────────────── */}
      <section id="programmes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">CATALOGUE</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ethsun-navy mb-4">
              Nos programmes à Maurice
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Des certifications reconnues, dispensées dans un cadre insulaire d'exception, par des formateurs experts du secteur touristique international.
            </p>
          </motion.div>

          <div className="space-y-6">
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
                      <div className="text-2xl font-bold text-teal-600">{prog.price}</div>
                      <div className="text-xs text-gray-400">par participant</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{prog.description}</p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-teal-500" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4 text-teal-500" />
                      <span>{prog.format}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-teal-500" />
                      <span>Max. 25 participants</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {prog.modules.map((mod) => (
                      <span key={mod} className="text-xs px-2.5 py-1 bg-teal-50 text-teal-700 rounded-full border border-teal-100">
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
                      className="flex-shrink-0 inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all"
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
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-widest text-amber-300 mb-4">CONTACT LEARNING CENTER</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Inscription & Renseignements
            </h2>
            <p className="text-white/75 max-w-xl mx-auto">
              Notre équipe à l'Île Maurice est disponible pour répondre à toutes vos questions sur les programmes et les modalités d'inscription.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, label: 'Adresse', value: 'Île Maurice — Océan Indien\n(Localisation précise communiquée lors de l\'inscription)' },
              { icon: Phone, label: 'Téléphone / WhatsApp', value: '+447424201585' },
              { icon: Mail, label: 'Email', value: 'info@ethsun-institute.com' },
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
