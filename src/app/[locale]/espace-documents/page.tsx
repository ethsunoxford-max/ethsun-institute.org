'use client';

import { motion } from 'framer-motion';
import { FileText, Download, BookOpen, Calendar, FileCheck, ExternalLink } from 'lucide-react';

const categories = [
  {
    title: 'Brochures formations',
    icon: BookOpen,
    color: 'bg-blue-50 border-blue-100',
    iconColor: 'text-ethsun-blue',
    docs: [
      { name: 'Catalogue des formations ETHSUN Institute 2026', file: '/documents/catalogue-formations-ethsun-2026.pdf', size: 'PDF' },
      { name: 'Brochure Certificats Professionnels — Gouvernance & Management', file: '/documents/brochure-gouvernance-management.pdf', size: 'PDF' },
      { name: 'Brochure CAPIMMO — Certificat d\'Aptitude aux Professions Immobilières', file: '/documents/brochure-capimmo.pdf', size: 'PDF' },
      { name: 'Brochure Université Africaine du Tourisme (UAT)', file: '/documents/brochure-uat.pdf', size: 'PDF' },
      { name: 'Brochure Industries Extractives & Mines', file: '/documents/brochure-industries-extractives.pdf', size: 'PDF' },
      { name: 'Brochure CBA — Certificate in Business Administration', file: '/documents/brochure-cba.pdf', size: 'PDF' },
    ],
  },
  {
    title: 'TDR événements',
    icon: Calendar,
    color: 'bg-amber-50 border-amber-100',
    iconColor: 'text-ethsun-gold',
    docs: [
      { name: 'TDR — 6ème Université de l\'Immobilier (UIMMO-6) — Septembre 2026', file: '/documents/tdr-uimmo6-2026.pdf', size: 'PDF' },
      { name: 'TDR — Graduation Day ETHSUN 2026', file: '/documents/tdr-graduation-day-2026.pdf', size: 'PDF' },
      { name: 'TDR — Université Africaine du Tourisme 2026', file: '/documents/tdr-uat-2026.pdf', size: 'PDF' },
    ],
  },
  {
    title: 'Documents administratifs',
    icon: FileCheck,
    color: 'bg-green-50 border-green-100',
    iconColor: 'text-emerald-600',
    docs: [
      { name: 'Convention de formation — Modèle entreprise', file: '/documents/convention-formation-entreprise.pdf', size: 'PDF' },
      { name: 'Fiche d\'inscription — Formations courtes', file: '/documents/fiche-inscription-formations-courtes.pdf', size: 'PDF' },
      { name: 'Présentation institutionnelle ETHSUN Institute', file: '/documents/presentation-institutionnelle-ethsun.pdf', size: 'PDF' },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.05 } }),
};

export default function EspaceDocumentsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-14 lg:pt-36 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-[0.25em] text-ethsun-gold mb-5">RESSOURCES</p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Espace Documents
            </h1>
            <p className="text-base text-white/70 leading-relaxed max-w-xl mx-auto">
              Téléchargez nos brochures, TDR événements et documents administratifs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {categories.map((cat, ci) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-ethsun-navy/5 flex items-center justify-center">
                  <cat.icon className={`w-5 h-5 ${cat.iconColor}`} />
                </div>
                <h2 className="font-serif text-xl font-bold text-ethsun-navy">{cat.title}</h2>
              </div>

              <div className="space-y-3">
                {cat.docs.map((doc, di) => (
                  <motion.div
                    key={doc.name}
                    variants={fadeUp} custom={ci * 6 + di} initial="hidden" whileInView="visible"
                    viewport={{ once: true }}
                    className={`flex items-center justify-between gap-4 p-4 rounded-xl border ${cat.color} hover:shadow-sm transition-all`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <FileText className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-ethsun-navy truncate">{doc.name}</span>
                      <span className="text-xs text-gray-400 flex-shrink-0 font-mono">{doc.size}</span>
                    </div>
                    <a
                      href={doc.file}
                      download
                      className="inline-flex items-center gap-1.5 bg-ethsun-navy text-white hover:bg-ethsun-blue text-xs font-semibold px-4 py-2 rounded-lg transition-all flex-shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Télécharger
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA documents manquants */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Vous ne trouvez pas le document souhaité ?
          </p>
          <a
            href="mailto:formation@ethsun-institute.org?subject=Demande de document"
            className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all shadow-md"
          >
            <ExternalLink className="w-4 h-4" />
            Faire une demande par email
          </a>
        </div>
      </section>
    </main>
  );
}
