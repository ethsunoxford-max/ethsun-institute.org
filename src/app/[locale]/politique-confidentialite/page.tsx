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
            Le responsable du traitement des données personnelles collectées via ce site est :<br />
            <strong>ETHSUN Institute</strong> — Cocody 2 Plateaux Vallon, Rue J, Abidjan, Côte d&apos;Ivoire<br />
            Email : info@ethsun-institute.com
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">2. Données collectées</h2>
          <p className="text-sm mb-4">
            Dans le cadre de l&apos;utilisation du site et de nos services, nous sommes amenés à collecter les données suivantes :
          </p>
          <ul className="text-sm list-disc pl-6 mb-4 space-y-1">
            <li>Informations d&apos;identification : nom, prénom, adresse email, numéro de téléphone</li>
            <li>Données relatives à votre projet de formation : programme d&apos;intérêt, message</li>
            <li>Données de navigation : adresse IP, pages consultées, durée des visites (via cookies analytiques)</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">3. Finalités du traitement</h2>
          <p className="text-sm mb-4">Vos données sont collectées pour :</p>
          <ul className="text-sm list-disc pl-6 mb-4 space-y-1">
            <li>Répondre à vos demandes d&apos;information et vous orienter vers nos programmes de formation</li>
            <li>Gérer les inscriptions aux formations et événements ETHSUN Institute</li>
            <li>Vous adresser des informations sur nos programmes (avec votre consentement)</li>
            <li>Améliorer nos services et l&apos;expérience utilisateur sur notre site</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">4. Base légale du traitement</h2>
          <p className="text-sm mb-4">
            Le traitement de vos données repose sur votre consentement (formulaire de contact) et l&apos;exécution d&apos;un contrat (inscriptions aux formations), conformément aux principes du RGPD et de la loi ivoirienne relative à la protection des données personnelles.
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">5. Conservation des données</h2>
          <p className="text-sm mb-4">
            Vos données sont conservées pendant la durée nécessaire à la réalisation des finalités décrites ci-dessus, et au maximum pendant 3 ans à compter de votre dernière interaction avec ETHSUN Institute, sauf obligation légale contraire.
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">6. Vos droits</h2>
          <p className="text-sm mb-4">
            Conformément à la réglementation applicable, vous disposez des droits suivants :
          </p>
          <ul className="text-sm list-disc pl-6 mb-4 space-y-1">
            <li>Droit d&apos;accès à vos données personnelles</li>
            <li>Droit de rectification des données inexactes</li>
            <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
            <li>Droit d&apos;opposition au traitement</li>
            <li>Droit à la portabilité de vos données</li>
          </ul>
          <p className="text-sm mb-4">
            Pour exercer ces droits, contactez-nous à : <strong>info@ethsun-institute.com</strong>
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">7. Cookies</h2>
          <p className="text-sm mb-4">
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies. Certains services peuvent ne pas fonctionner correctement sans cookies.
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">8. Sécurité</h2>
          <p className="text-sm mb-4">
            ETHSUN Institute met en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte ou divulgation.
          </p>

          <h2 className="font-serif text-xl font-bold text-ethsun-navy mt-8 mb-3">9. Contact</h2>
          <p className="text-sm mb-4">
            Pour toute question relative à notre politique de confidentialité :<br />
            <strong>ETHSUN Institute</strong> — info@ethsun-institute.com<br />
            Cocody 2 Plateaux Vallon, Rue J, Abidjan, Côte d&apos;Ivoire
          </p>
        </motion.div>
      </section>
    </>
  );
}
