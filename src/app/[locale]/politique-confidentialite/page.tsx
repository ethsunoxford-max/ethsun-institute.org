'use client';

import { motion } from 'framer-motion';

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-10 lg:pt-36">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-ethsun-gold mb-4">ETHSUN INSTITUTE</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">Politique de Confidentialité</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ color: '#374151', lineHeight: 1.7 }}
        >
          <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : Avril 2026</p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">1. Responsable du traitement</h2>
          <p className="text-sm mb-4">
            <strong>ETHSUN Institute</strong> — Cocody 2 Plateaux Vallon, Rue J, Abidjan, Côte d&apos;Ivoire<br />
            Email : info@ethsun-institute.com
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">2. Données collectées</h2>
          <ul className="text-sm list-disc pl-6 mb-4 space-y-1">
            <li>Nom, prénom, email, téléphone</li>
            <li>Programme d&apos;intérêt, message</li>
            <li>Adresse IP, pages consultées, durée des visites</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">3. Finalités du traitement</h2>
          <ul className="text-sm list-disc pl-6 mb-4 space-y-1">
            <li>Répondre aux demandes d&apos;information</li>
            <li>Gérer les inscriptions aux formations et événements</li>
            <li>Envoyer des informations sur nos programmes (avec consentement)</li>
            <li>Améliorer nos services</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">4. Base légale</h2>
          <p className="text-sm mb-4">
            Consentement (formulaire contact) et exécution de contrat (inscriptions), conformément au RGPD et à la loi ivoirienne sur la protection des données.
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">5. Conservation des données</h2>
          <ul className="text-sm list-disc pl-6 mb-4 space-y-1">
            <li>Données de contact et inscriptions : 3 ans</li>
            <li>Photos et contenus visuels des participants : 15 ans (dans le respect de la réglementation applicable)</li>
            <li>Données de navigation : 13 mois maximum</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">6. Vos droits</h2>
          <p className="text-sm mb-4">
            Droit d&apos;accès, rectification, effacement, opposition, portabilité.<br />
            Contact : info@ethsun-institute.com
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">7. Cookies</h2>
          <p className="text-sm mb-4">
            Cookies analytiques pour améliorer l&apos;expérience. Refus possible via le navigateur.
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">8. Sécurité</h2>
          <p className="text-sm mb-4">
            Mesures techniques et organisationnelles appropriées pour protéger vos données.
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">9. Contact</h2>
          <p className="text-sm mb-4">
            <strong>ETHSUN Institute</strong> — info@ethsun-institute.com<br />
            Cocody 2 Plateaux Vallon, Rue J, Abidjan, Côte d&apos;Ivoire
          </p>
        </motion.div>
      </section>
    </>
  );
}
