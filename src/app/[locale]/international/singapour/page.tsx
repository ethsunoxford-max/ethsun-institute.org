import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { MessageCircle, Calendar, BookOpen } from 'lucide-react';
import SectionHeader from '@/components/sections/SectionHeader';

const programmes = [
  { title: 'Éthique Professionnelle et Conformité Réglementaire', format: 'Présentiel', duration: '3 jours' },
  { title: 'Gouvernance d\'Entreprise et Lutte Anticorruption', format: 'Blended', duration: '4 jours' },
  { title: 'Prévention des Conflits d\'Intérêts', format: 'En ligne', duration: '2 jours' },
  { title: 'Conformité Internationale et Due Diligence', format: 'En ligne', duration: '3 jours' },
  { title: 'Leadership Éthique et Intégrité Institutionnelle', format: 'Présentiel', duration: '2 jours' },
];

export default function SingapourPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-ethsun-navy pt-28 pb-16 lg:pt-36 lg:pb-20 min-h-[40vh] flex items-end">
        <div className="absolute inset-0 kente-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-ethsun-gold text-xs font-bold tracking-widest uppercase mb-3">🇸🇬 TRAINING DELIVERY HUB</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Training Delivery Hub Singapour
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Hub régional dédié à l&apos;éthique, la bonne gouvernance, la conformité réglementaire et la lutte anticorruption.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed">
            Singapour est reconnue mondialement comme un modèle de gouvernance, de transparence et d&apos;efficacité institutionnelle. Notre Training Delivery Hub s&apos;appuie sur cet environnement d&apos;excellence pour former les dirigeants africains et asiatiques aux standards les plus rigoureux de l&apos;éthique et de la conformité.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="PROGRAMMES" title="Formations dispensées à Singapour" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {programmes.map((prog, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-red-700" />
                </div>
                <h3 className="font-serif font-bold text-ethsun-navy text-base mb-3 leading-snug">{prog.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{prog.format}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{prog.duration}</span>
                </div>
                <Link href="/contact" className="mt-4 block text-center bg-ethsun-gold text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-ethsun-gold-light transition-colors">
                  S&apos;inscrire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Singapour — Oxford uniquement */}
      <section className="py-14 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-ethsun-navy mb-4">Votre conseiller est à votre écoute</h2>
          <p className="text-gray-600 mb-8">Pour toute information sur nos programmes à Singapour, contactez ETHSUN Executive Education Oxford.</p>
          <div className="space-y-4">
            <a
              href="https://wa.me/447424201585"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl text-sm transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Discuter sur WhatsApp
            </a>
            <a
              href="https://wa.me/447424201585"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full border-2 border-ethsun-blue text-ethsun-blue hover:bg-ethsun-blue hover:text-white font-semibold py-4 rounded-xl text-sm transition-all"
            >
              <Calendar className="w-5 h-5" />
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
