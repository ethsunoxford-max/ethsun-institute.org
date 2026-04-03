'use client';

import { motion } from 'framer-motion';

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-10 lg:pt-36">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-ethsun-gold mb-4">ETHSUN INSTITUTE</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">Mentions Légales</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm max-w-none"
          style={{ color: '#374151' }}
        >
          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">1. Éditeur du site</h2>
          <p>Le présent site web <strong>www.ethsun-institute.com</strong> est édité par :</p>
          <p>
            <strong>ETHSUN Institute</strong><br />
            Siège social : Cocody 2 Plateaux Vallon, Rue J, Abidjan, Côte d&apos;Ivoire<br />
            Téléphone : (+225) 05 45 61 30 35 / 07 07 50 05 01<br />
            Email : info@ethsun-institute.com<br />
            Directeur de la publication : Jean-Calvin ETHIEN, Président Directeur Général
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">2. Hébergement</h2>
          <p>
            Le site est hébergé par <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 900, San Francisco, CA 94104, États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-ethsun-blue">vercel.com</a>
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, vidéos, logos, structure, mise en page) sont protégés par le droit de la propriété intellectuelle et sont la propriété exclusive d&apos;ETHSUN Institute, sauf mention contraire.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit, est interdite sans l&apos;autorisation préalable et écrite d&apos;ETHSUN Institute.
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">4. Limitation de responsabilité</h2>
          <p>
            ETHSUN Institute s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Cependant, ETHSUN Institute ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
          </p>
          <p>
            En conséquence, ETHSUN Institute décline toute responsabilité pour les éventuelles imprécisions, inexactitudes ou omissions portant sur des informations disponibles sur ce site.
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">5. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers des sites externes. ETHSUN Institute n&apos;est pas responsable du contenu de ces sites et ne peut être tenu responsable des dommages résultant de leur utilisation.
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">6. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit ivoirien. En cas de litige, les juridictions compétentes seront celles d&apos;Abidjan, Côte d&apos;Ivoire.
          </p>

          <p className="text-xs text-gray-400 mt-12">Dernière mise à jour : Avril 2026</p>
        </motion.div>
      </section>
    </>
  );
}
