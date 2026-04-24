// ============================================================
// ETHSUN Institute — Données mock
// Mis à jour : Mars 2026
// ============================================================

export interface Programme {
  id: string;
  title: string;
  slug: string;
  description: string;
  certificateLevel: string;
  domain: string;
  duration: string;
  format: string;
  price: { amount: number; currency: string };
  nextSession: string;
  enrollmentStatus: 'open' | 'coming_soon' | 'closed';
  badge?: string | null;
  imageGradient: string;
  objectives?: string[];
  modules?: { title: string; description: string }[];
  targetAudience?: string;
  prerequisites?: string;
  methods?: string[];
  // Calendrier détaillé
  calendar?: {
    enrollmentDeadline?: string;
    startDate?: string;
    endDate?: string;
    sessions?: { date: string; title: string; format: string }[];
  };
  brochureUrl?: string;
}

export interface EventData {
  title: string;
  slug: string;
  date: string;
  venue: string;
  city: string;
  country?: string;
  format?: 'Présentiel' | 'En ligne' | 'Hybride';
  price?: { amount: number; currency: string };
  rector?: { name: string; title: string };
  stats: { participants: string; speakers: number; duration: string };
  schedule?: { time: string; title: string }[];
  contact?: string[];
  partners?: string[];
  description?: string;
  objectives?: string[];
  targetAudience?: string;
  registrationUrl?: string;
  // Calendrier multi-pays
  editions?: { city: string; country: string; flag: string; date: string }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  programme?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// PROGRAMMES EN VEDETTE (page d'accueil)
// ─────────────────────────────────────────────────────────────────────────────

export const featuredProgrammes: Programme[] = [
  {
    id: 'uimmo-6',
    title: '6ème Université de l\'Immobilier',
    slug: 'universite-immobilier-6',
    description: 'Le rendez-vous incontournable des professionnels de l\'immobilier en Afrique de l\'Ouest',
    certificateLevel: 'Executive Certificate',
    domain: 'Immobilier',
    duration: '3 jours',
    format: 'Présentiel',
    price: { amount: 350000, currency: 'XOF' },
    nextSession: '2026-06-21',
    enrollmentStatus: 'open',
    badge: 'Populaire',
    imageGradient: 'from-blue-900 to-slate-900',
  },
  {
    id: 'univ-tourisme',
    title: '1ère Université Africaine du Tourisme',
    slug: 'universite-africaine-tourisme',
    description: 'Première édition du grand rendez-vous du tourisme africain',
    certificateLevel: 'Executive Certificate',
    domain: 'Tourisme',
    duration: '1 journée',
    format: 'Présentiel',
    price: { amount: 185000, currency: 'XOF' },
    nextSession: '2026-05-12',
    enrollmentStatus: 'open',
    badge: 'Nouveau',
    imageGradient: 'from-amber-700 to-amber-900',
  },
  {
    id: 'cpfa',
    title: 'Certificat Professionnel Formateur d\'Adultes',
    slug: 'cpfa-formateur-adultes',
    description: 'Devenez un formateur certifié avec les méthodologies internationales',
    certificateLevel: 'Certificat d\'Expertise',
    domain: 'Formation',
    duration: '6 mois',
    format: 'Blended',
    price: { amount: 585000, currency: 'XOF' },
    nextSession: '2026-09-15',
    enrollmentStatus: 'open',
    badge: null,
    imageGradient: 'from-emerald-800 to-slate-900',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TOUS LES PROGRAMMES (catalogue complet)
// ─────────────────────────────────────────────────────────────────────────────

export const allProgrammes: Programme[] = [
  ...featuredProgrammes,
  {
    id: 'p1',
    title: 'Ingénierie de la Commande Publique',
    slug: 'ingenierie-commande-publique',
    description: 'Maîtrisez le cycle complet des marchés publics, de la planification à l\'exécution des contrats, dans le respect du cadre réglementaire UEMOA.',
    certificateLevel: 'Certificat Professionnel',
    domain: 'Marchés publics',
    duration: '4 mois',
    format: 'Blended',
    price: { amount: 185000, currency: 'XOF' },
    nextSession: '2026-09-01',
    enrollmentStatus: 'open',
    badge: null,
    imageGradient: 'from-indigo-800 to-slate-900',
    objectives: [
      'Comprendre le cadre juridique et réglementaire des marchés publics en zone UEMOA',
      'Maîtriser les techniques de rédaction des documents de consultation (DAO, DCE, CCTP)',
      'Piloter le processus d\'évaluation des offres et d\'attribution des marchés',
      'Gérer l\'exécution, le suivi et le contrôle des contrats publics',
      'Prévenir les risques de contentieux et de contestation',
      'Intégrer les bonnes pratiques anti-corruption et de transparence',
    ],
    modules: [
      { title: 'Module 1 — Cadre juridique et réglementaire', description: 'Directives UEMOA, Code des marchés publics, organes de régulation (ANRMP), principes fondamentaux de la commande publique.' },
      { title: 'Module 2 — Planification et programmation', description: 'Plan de passation, étude des besoins, estimation des coûts, programmation budgétaire, stratégie d\'achat.' },
      { title: 'Module 3 — Passation et attribution', description: 'Rédaction des dossiers de consultation, publication des avis, évaluation des offres, attribution, notification, gestion des recours.' },
      { title: 'Module 4 — Exécution et contrôle', description: 'Gestion des contrats, ordres de service, avenants, réception des prestations, audit et contrôle, archivage.' },
    ],
    targetAudience: 'Cadres et agents des administrations publiques, responsables des cellules de passation des marchés, directeurs achats, consultants en marchés publics, juristes, auditeurs.',
    prerequisites: 'Diplôme universitaire (Bac+3 minimum) ou expérience professionnelle significative dans le domaine des marchés publics ou des achats.',
    methods: [
      'Cours magistraux animés par des experts praticiens',
      'Études de cas réels issus du contexte UEMOA',
      'Travaux de groupe et simulations de procédures',
      'Modules e-learning sur la plateforme Neuroklax',
      'Atelier présentiel de mise en pratique',
    ],
    calendar: {
      enrollmentDeadline: '2026-08-20',
      startDate: '2026-09-01',
      endDate: '2026-12-31',
    },
  },
  { id: 'p2', title: 'Management d\'Institution de Formation', slug: 'management-institution-formation', description: 'Pilotez efficacement votre organisme de formation en maîtrisant les dimensions stratégique, pédagogique, financière et managériale.', certificateLevel: 'Certificat Professionnel', domain: 'Management', duration: '3 mois', format: 'En ligne', price: { amount: 185000, currency: 'XOF' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-purple-800 to-slate-900', objectives: ['Élaborer une stratégie institutionnelle cohérente', 'Maîtriser le pilotage pédagogique et administratif', 'Gérer les ressources financières et humaines'], calendar: { enrollmentDeadline: '2026-08-20', startDate: '2026-09-01', endDate: '2026-11-30' } },
  { id: 'p3', title: 'Ingénierie du Développement des Collectivités Territoriales', slug: 'ingenierie-collectivites', description: 'Renforcez les capacités de gouvernance locale et de gestion territoriale dans le contexte africain.', certificateLevel: 'Certificat Professionnel', domain: 'Gouvernance', duration: '4 mois', format: 'Blended', price: { amount: 185000, currency: 'XOF' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-teal-800 to-slate-900', calendar: { enrollmentDeadline: '2026-09-20', startDate: '2026-10-01', endDate: '2027-01-31' } },
  { id: 'p4', title: 'Innovation Managériale et Performance', slug: 'innovation-manageriale', description: 'Développez des pratiques managériales innovantes pour transformer vos organisations et maximiser la performance collective.', certificateLevel: 'Executive Certificate', domain: 'Management', duration: '3 mois', format: 'Blended', price: { amount: 185000, currency: 'XOF' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-sky-800 to-slate-900', calendar: { enrollmentDeadline: '2026-08-20', startDate: '2026-09-01', endDate: '2026-11-30' } },
  { id: 'p5', title: 'Leadership et Science de la Décision', slug: 'leadership-decision', description: 'Renforcez votre capacité de leadership stratégique et maîtrisez les mécanismes cognitifs qui sous-tendent les décisions à fort impact.', certificateLevel: 'Executive Certificate', domain: 'Leadership', duration: '3 mois', format: 'Présentiel', price: { amount: 185000, currency: 'XOF' }, nextSession: '2026-11-01', enrollmentStatus: 'coming_soon', badge: null, imageGradient: 'from-rose-800 to-slate-900', calendar: { enrollmentDeadline: '2026-10-15', startDate: '2026-11-01', endDate: '2027-01-31' } },
  { id: 'p6', title: 'Juriste d\'Entreprise', slug: 'juriste-entreprise', description: 'Devenez un expert juridique au service de l\'entreprise et maîtrisez le droit des affaires dans l\'espace OHADA.', certificateLevel: 'Certificat de Qualification', domain: 'Droit', duration: '4 mois', format: 'Blended', price: { amount: 460000, currency: 'XOF' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-stone-700 to-slate-900' },
  { id: 'p7', title: 'Conformité Bancaire et IFRS 17', slug: 'conformite-bancaire-ifrs17', description: 'Maîtrisez les normes IFRS et la conformité bancaire pour répondre aux exigences réglementaires des institutions financières.', certificateLevel: 'Certificat d\'Expertise', domain: 'Banque', duration: '3 mois', format: 'En ligne', price: { amount: 350000, currency: 'XOF' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-cyan-800 to-slate-900', calendar: { enrollmentDeadline: '2026-08-20', startDate: '2026-09-01', endDate: '2026-11-30' } },
  { id: 'p8', title: 'Audit Interne et Contrôle de Gestion', slug: 'audit-interne', description: 'Renforcez vos compétences en audit et contrôle de gestion pour piloter la performance financière et opérationnelle.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Audit', duration: '2 mois', format: 'Blended', price: { amount: 250000, currency: 'XOF' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-violet-800 to-slate-900' },
  { id: 'p9', title: 'Marketing Digital et Growth', slug: 'marketing-digital', description: 'Accélérez votre croissance avec les stratégies de marketing digital adaptées aux marchés africains.', certificateLevel: 'Certificat d\'Initiation', domain: 'Marketing', duration: '6 semaines', format: 'En ligne', price: { amount: 150000, currency: 'XOF' }, nextSession: '2026-08-01', enrollmentStatus: 'open', badge: 'Nouveau', imageGradient: 'from-pink-800 to-slate-900' },
  { id: 'p10', title: 'Supply Chain et Achats Publics', slug: 'supply-chain-achats', description: 'Optimisez la chaîne logistique et les processus d\'achats pour améliorer la performance et réduire les coûts.', certificateLevel: 'Executive Certificate', domain: 'Logistique', duration: '3 mois', format: 'Blended', price: { amount: 285000, currency: 'XOF' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-orange-800 to-slate-900' },
  { id: 'p11', title: 'Gestion des Ressources Humaines', slug: 'gestion-rh', description: 'Développez une politique RH stratégique et maîtrisez les outils de gestion des talents dans un contexte africain.', certificateLevel: 'Certificat d\'Aptitude', domain: 'RH', duration: '3 mois', format: 'Blended', price: { amount: 185000, currency: 'XOF' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-fuchsia-800 to-slate-900' },
  { id: 'p12', title: 'Intelligence Artificielle pour Managers', slug: 'ia-managers', description: 'Intégrez l\'IA dans votre stratégie managériale pour gagner en efficacité et anticiper les transformations de votre secteur.', certificateLevel: 'Certificat d\'Initiation', domain: 'IA', duration: '4 semaines', format: 'En ligne', price: { amount: 120000, currency: 'XOF' }, nextSession: '2026-07-01', enrollmentStatus: 'open', badge: 'Nouveau', imageGradient: 'from-lime-800 to-slate-900' },
  { id: 'p13', title: 'Comptabilité et Finance d\'Entreprise', slug: 'comptabilite-finance', description: 'Maîtrisez les fondamentaux de la finance d\'entreprise et renforcez votre capacité d\'analyse et de pilotage financier.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Finance', duration: '3 mois', format: 'Blended', price: { amount: 225000, currency: 'XOF' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-yellow-800 to-slate-900' },
  { id: 'p14', title: 'Médiation Professionnelle', slug: 'mediation-professionnelle', description: 'Devenez médiateur professionnel certifié et maîtrisez les techniques de résolution amiable des conflits en entreprise.', certificateLevel: 'Certificate of Advanced Studies', domain: 'Droit', duration: '4 mois', format: 'Blended', price: { amount: 320000, currency: 'XOF' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-zinc-700 to-slate-900' },
  { id: 'p15', title: 'Entrepreneuriat et Création d\'Entreprise', slug: 'entrepreneuriat', description: 'Lancez et développez votre entreprise avec une méthode structurée, des outils pratiques et un accompagnement expert.', certificateLevel: 'Certificat d\'Initiation', domain: 'Commerce', duration: '6 semaines', format: 'En ligne', price: { amount: 95000, currency: 'XOF' }, nextSession: '2026-08-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-red-800 to-slate-900' },
  { id: 'p16', title: 'Management de Projet ISO 21502', slug: 'management-projet-iso', description: 'Gérez vos projets selon les standards ISO 21502 et développez des compétences reconnues à l\'international.', certificateLevel: 'Certificat d\'Expertise', domain: 'Management', duration: '2 mois', format: 'Blended', price: { amount: 275000, currency: 'XOF' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-blue-800 to-slate-900' },
  { id: 'p17', title: 'Gouvernance Publique et Anti-Corruption', slug: 'gouvernance-anti-corruption', description: 'Renforcez la gouvernance institutionnelle et la transparence dans les organisations publiques et privées.', certificateLevel: 'Executive Certificate', domain: 'Gouvernance', duration: '3 mois', format: 'Présentiel', price: { amount: 350000, currency: 'XOF' }, nextSession: '2026-11-01', enrollmentStatus: 'coming_soon', badge: null, imageGradient: 'from-emerald-700 to-slate-900' },
  { id: 'p18', title: 'Sport Business et Management', slug: 'sport-business', description: 'Le management appliqué à l\'industrie sportive africaine — de la stratégie à l\'exploitation commerciale.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Commerce', duration: '2 mois', format: 'Blended', price: { amount: 200000, currency: 'XOF' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-green-800 to-slate-900' },
  { id: 'p19', title: 'Hôtellerie et Tourisme Durable', slug: 'hotellerie-tourisme-durable', description: 'Développez le tourisme durable et responsable en Afrique et maîtrisez les nouveaux enjeux de l\'industrie hôtelière.', certificateLevel: 'Certificat d\'Aptitude', domain: 'Tourisme', duration: '3 mois', format: 'Blended', price: { amount: 185000, currency: 'XOF' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-amber-800 to-slate-900' },
  // Programmes 100% en ligne (asynchrones)
  { id: 'p20', title: 'Éthique Professionnelle et Conformité', slug: 'ethique-conformite', description: 'Intégrez les principes éthiques dans vos pratiques professionnelles et maîtrisez les cadres de conformité réglementaire.', certificateLevel: 'Certificat Professionnel', domain: 'Gouvernance', duration: '4 semaines', format: 'En ligne', price: { amount: 120000, currency: 'XOF' }, nextSession: '2026-07-15', enrollmentStatus: 'open', badge: null, imageGradient: 'from-slate-700 to-slate-900' },
  { id: 'p21', title: 'Aménagement Touristique des Territoires', slug: 'amenagement-touristique', description: 'Concevez des projets touristiques durables et intégrés au développement territorial.', certificateLevel: 'Certificat d\'Expertise', domain: 'Tourisme', duration: '4 mois', format: 'Blended', price: { amount: 350000, currency: 'XOF' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-green-700 to-emerald-900' },
];

// ─────────────────────────────────────────────────────────────────────────────
// ÉVÉNEMENTS
// ─────────────────────────────────────────────────────────────────────────────

export const events: EventData[] = [
  {
    title: '1ère Université Africaine du Tourisme',
    slug: 'universite-tourisme',
    date: '2026-05-12',
    venue: 'Sofitel Hôtel Ivoire',
    city: 'Abidjan',
    country: 'Côte d\'Ivoire',
    format: 'Présentiel',
    price: { amount: 500, currency: 'EUR' },
    rector: { name: 'M. Siandou FOFANA', title: 'Recteur Honorifique — Ancien Ministre du Tourisme et des Loisirs' },
    stats: { participants: '200+', speakers: 15, duration: '1 journée' },
    description: 'La 1ère Université Africaine du Tourisme est le grand rendez-vous des acteurs du tourisme en Afrique francophone. Pensée comme un espace d\'échanges, de partage d\'expériences et de formulation de recommandations stratégiques, elle réunit dirigeants, décideurs publics, opérateurs touristiques, chercheurs et investisseurs autour des enjeux de développement du tourisme africain.',
    objectives: [
      'Dresser un état des lieux du tourisme en Afrique francophone et identifier les leviers de croissance',
      'Partager des expériences et bonnes pratiques entre acteurs publics et privés',
      'Formuler des recommandations stratégiques pour le développement du tourisme durable',
      'Renforcer les réseaux professionnels du secteur touristique africain',
    ],
    targetAudience: 'Dirigeants et opérateurs du secteur touristique, décideurs publics, investisseurs, représentants d\'associations professionnelles, acteurs académiques.',
    schedule: [
      { time: '08h30', title: 'Accueil et inscription des participants' },
      { time: '09h00', title: 'Cérémonie d\'ouverture officielle' },
      { time: '09h30', title: 'Allocution du Recteur Honorifique, M. Siandou FOFANA' },
      { time: '10h00', title: 'Panel 1 — Tourisme durable en Afrique de l\'Ouest : défis et opportunités' },
      { time: '11h30', title: 'Panel 2 — Investissement hôtelier et infrastructures touristiques' },
      { time: '12h30', title: 'Pause déjeuner et networking' },
      { time: '14h00', title: 'Ateliers thématiques (tourisme digital, écotourisme, formation des métiers du tourisme)' },
      { time: '16h00', title: 'Restitution des ateliers et recommandations' },
      { time: '17h00', title: 'Cérémonie de remise des certificats de participation' },
      { time: '17h30', title: 'Cocktail de clôture' },
    ],
    contact: ['(+225) 05 45 61 30 35', '(+225) 07 07 50 05 01'],
    partners: ['Ministère du Tourisme et des Loisirs', 'Fonds de Développement Touristique', 'Côte d\'Ivoire Tourisme'],
    editions: [
      { city: 'Abidjan', country: 'Côte d\'Ivoire', flag: '🇨🇮', date: '12 mai 2026' },
    ],
  },
  {
    title: '6ème Université de l\'Immobilier',
    slug: 'universite-immobilier',
    date: '2026-06-21',
    venue: 'Sofitel Hôtel Ivoire',
    city: 'Abidjan',
    country: 'Côte d\'Ivoire',
    format: 'Présentiel',
    price: { amount: 500, currency: 'EUR' },
    stats: { participants: '300+', speakers: 20, duration: '2 jours' },
    description: 'La 6ème Université de l\'Immobilier est le rendez-vous de référence des professionnels du secteur immobilier en Afrique de l\'Ouest. Au programme : conférences de haut niveau, ateliers pratiques, networking et remise de certificats de participation.',
    objectives: [
      'Analyser les tendances du marché immobilier en Afrique de l\'Ouest',
      'Partager les meilleures pratiques en financement et gestion immobilière',
      'Renforcer les compétences des professionnels du secteur',
      'Développer les réseaux professionnels de l\'immobilier africain',
    ],
    targetAudience: 'Promoteurs, agents, juristes, financiers, architectes, investisseurs et acteurs publics du secteur immobilier.',
    contact: ['(+225) 05 45 61 30 35', '(+225) 07 07 50 05 01'],
    editions: [
      { city: 'Abidjan', country: 'Côte d\'Ivoire', flag: '🇨🇮', date: '21 juin 2026' },
    ],
  },
  {
    title: '1ère Université de l\'Éthique et la Conformité Anticorruption',
    slug: 'universite-ethique-anticorruption',
    date: '2026-09-20',
    venue: 'À confirmer',
    city: 'Abidjan',
    country: 'Côte d\'Ivoire',
    format: 'Présentiel',
    price: { amount: 500, currency: 'EUR' },
    stats: { participants: '150+', speakers: 12, duration: '1 journée' },
    description: 'La 1ère Université de l\'Éthique et la Conformité Anticorruption réunit les acteurs publics et privés engagés dans la promotion de l\'intégrité, la transparence et la lutte contre la corruption. Un événement de référence pour bâtir une culture de la conformité en Afrique.',
    objectives: [
      'Renforcer la culture de l\'intégrité et de la transparence dans les organisations',
      'Partager les outils et dispositifs de prévention de la corruption',
      'Examiner les cadres réglementaires africains et internationaux de lutte anticorruption',
      'Proposer des recommandations pratiques pour les institutions publiques et privées',
    ],
    targetAudience: 'Dirigeants d\'entreprises, cadres de la fonction publique, compliance officers, juristes, auditeurs, représentants d\'institutions de régulation.',
    contact: ['(+225) 05 45 61 30 35', '(+225) 07 07 50 05 01'],
    editions: [
      { city: 'Abidjan', country: 'Côte d\'Ivoire', flag: '🇨🇮', date: '20 septembre 2026' },
      { city: 'Dakar', country: 'Sénégal', flag: '🇸🇳', date: 'Novembre 2026 (date à confirmer)' },
    ],
  },
  {
    title: 'Petit Déjeuner Débat — L\'Afrique des Entrepreneurs : Bâtir dans la Tempête',
    slug: 'petit-dejeuner-afrique-entrepreneurs',
    date: '2026-07-10',
    venue: 'Learning Center ETHSUN — Cocody 2 Plateaux Vallon',
    city: 'Abidjan',
    country: 'Côte d\'Ivoire',
    format: 'Présentiel',
    price: { amount: 25000, currency: 'XOF' },
    stats: { participants: '50+', speakers: 3, duration: '3 heures' },
    description: 'Un petit déjeuner débat exclusif autour du livre de Jean-Calvin ETHIEN, *L\'Afrique des Entrepreneurs : Bâtir dans la Tempête*. Une matinée de discussions stratégiques, de témoignages d\'entrepreneurs et de réflexions sur les voies de la résilience économique africaine.',
    objectives: [
      'Débattre des défis et opportunités de l\'entrepreneuriat africain',
      'Partager des témoignages d\'entrepreneurs ayant surmonté l\'adversité',
      'Explorer les stratégies de résilience face aux crises économiques',
      'Créer des liens entre entrepreneurs, investisseurs et décideurs',
    ],
    targetAudience: 'Entrepreneurs, dirigeants, cadres, étudiants en management, investisseurs, journalistes économiques.',
    schedule: [
      { time: '07h30', title: 'Accueil et petit déjeuner networking' },
      { time: '08h00', title: 'Présentation de l\'ouvrage par l\'auteur, Jean-Calvin ETHIEN' },
      { time: '08h30', title: 'Table ronde — Entrepreneurs : parcours et résilience' },
      { time: '09h30', title: 'Questions-réponses avec le public' },
      { time: '10h00', title: 'Séance de dédicace et clôture' },
    ],
    contact: ['(+225) 05 45 61 30 35', '(+225) 07 07 50 05 01'],
  },
  {
    title: 'Graduation Day — Cérémonie de Remise des Certificats',
    slug: 'graduation-day',
    date: '2026-12-12',
    venue: 'À confirmer',
    city: 'Abidjan',
    country: 'Côte d\'Ivoire',
    format: 'Présentiel',
    price: { amount: 0, currency: 'XOF' },
    stats: { participants: '100+', speakers: 5, duration: '3 heures' },
    description: 'La cérémonie de remise des certificats ETHSUN Institute est le moment solennel de célébration des lauréats de l\'année. En toge et étole, les diplômés reçoivent leur certificat professionnel en présence de leurs familles, des formateurs et des partenaires institutionnels.',
    objectives: [
      'Célébrer les réussites des lauréats de l\'année',
      'Remettre officiellement les certificats professionnels ETHSUN',
      'Accueillir les nouveaux diplômés au sein du réseau alumni ETHSUN',
      'Renforcer les liens entre alumni, formateurs et partenaires',
    ],
    targetAudience: 'Lauréats des programmes ETHSUN, familles, formateurs, partenaires institutionnels, anciens alumni.',
    schedule: [
      { time: '09h00', title: 'Accueil des participants et placement des lauréats' },
      { time: '09h30', title: 'Cérémonie d\'ouverture officielle' },
      { time: '10h00', title: 'Discours du Président, Jean-Calvin ETHIEN' },
      { time: '10h30', title: 'Remise des certificats par promotion' },
      { time: '12h00', title: 'Discours des lauréats' },
      { time: '12h30', title: 'Photos officielles et cocktail de célébration' },
    ],
    contact: ['(+225) 05 45 61 30 35', '(+225) 07 07 50 05 01'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TÉMOIGNAGES ALUMNI
// ─────────────────────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    quote: 'Le Certificat d\'Aptitude aux Professions Immobilières d\'ETHSUN a été un véritable tournant dans ma carrière. La profondeur des enseignements — de l\'évaluation foncière à la gestion des actifs — m\'a permis de structurer une expertise que j\'avais acquise sur le terrain mais jamais formalisée. Aujourd\'hui, je suis reconnu comme référent dans mon domaine et j\'interviens régulièrement comme consultant auprès d\'opérateurs immobiliers et d\'institutions financières.',
    name: 'KESSE René',
    title: 'Expert en Gestion et Finance Immobilière',
    company: 'Consultant Immobilier — Abidjan',
    initials: 'KR',
    programme: 'Certificat d\'Aptitude aux Professions Immobilières',
  },
  {
    quote: 'En tant que Directrice au Ministère de la Jeunesse et de l\'Insertion Professionnelle, j\'avais besoin d\'une formation qui allie rigueur académique et application concrète aux réalités de la fonction publique africaine. Le Certificat d\'Expertise en Éthique et Gouvernance des Services Publics d\'ETHSUN a pleinement répondu à cette attente. J\'ai acquis des outils solides pour renforcer l\'intégrité dans mon institution et impulser une culture de la redevabilité dans mes équipes.',
    name: 'BOUANH Georgette épse KOUASSI',
    title: 'Directrice — Ministère de la Jeunesse, de l\'Insertion Professionnelle et du Service Civique',
    company: 'République de Côte d\'Ivoire',
    initials: 'BG',
    programme: 'Certificat d\'Expertise en Éthique et Gouvernance des Services Publics',
  },
  {
    quote: 'La formation ETHSUN m\'a permis de structurer mes compétences en marchés publics et d\'accéder à un poste de direction. Le réseau alumni est un véritable accélérateur de carrière.',
    name: 'Aminata K.',
    title: 'Directrice des Achats',
    company: 'Ministère de l\'Économie, CI',
    initials: 'AK',
    programme: 'Certificat Professionnel — Ingénierie de la Commande Publique',
  },
  {
    quote: 'Le programme en conformité bancaire était exactement ce dont j\'avais besoin pour évoluer dans mon institution. Les formateurs sont des praticiens de haut niveau.',
    name: 'Moussa D.',
    title: 'Responsable Conformité',
    company: 'BICICI – BNP Paribas',
    initials: 'MD',
    programme: 'Certificat d\'Expertise — Conformité Bancaire et IFRS 17',
  },
  {
    quote: 'L\'Université de l\'Immobilier a transformé ma vision du secteur. J\'ai pu lancer mon cabinet de conseil immobilier grâce aux compétences acquises.',
    name: 'Rosalie T.',
    title: 'Fondatrice, RT Immobilier',
    company: 'Abidjan',
    initials: 'RT',
    programme: 'Université de l\'Immobilier',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PARTENAIRES
// ─────────────────────────────────────────────────────────────────────────────

export const partners = [
  'Ministère du Tourisme CI',
  'ANRMP',
  'HABG',
  'FDFP',
  'Fonds de Développement Touristique',
  'Côte d\'Ivoire Tourisme',
];

// ─────────────────────────────────────────────────────────────────────────────
// DOMAINES DE FORMATION
// ─────────────────────────────────────────────────────────────────────────────

export const domains = [
  'Immobilier', 'Marchés publics', 'Banque', 'Management', 'Leadership',
  'IA', 'Droit', 'RH', 'Marketing', 'Logistique', 'Audit', 'Finance',
  'Commerce', 'Gouvernance', 'Tourisme', 'Formation',
];

// ─────────────────────────────────────────────────────────────────────────────
// INFORMATIONS SOCIÉTÉ — MISES À JOUR
// ─────────────────────────────────────────────────────────────────────────────

export const companyInfo = {
  name: 'ETHSUN Institute',
  // ✅ Texte footer mis à jour (suppression ancien tagline)
  tagline: 'Centre de formation professionnel agréé sous licence ETHSUN Executive Education Oxford',
  parent: 'ETHSUN Executive Education Oxford',
  parentSite: 'https://www.ethsun-oxford.uk',
  parentMotto: 'Per Doctrinam Excelsior',
  licenceLabel: 'sous licence ETHSUN Executive Education Oxford — Per Doctrinam Excelsior',
  // ✅ WhatsApp mis à jour : +447424201585
  whatsapp: 'https://wa.me/447424201585',
  // ✅ Coordonnées Abidjan mises à jour
  learningCenters: [
    {
      name: 'Learning Center Abidjan',
      address: 'Cocody 2 Plateaux Vallon, Rue J',
      city: 'Abidjan',
      country: 'Côte d\'Ivoire',
      flag: '🇨🇮',
      phone: '(+225) 05 45 61 30 35 / 07 07 50 05 01',
      email: 'info@ethsun-institute.com',
      mapQuery: 'ETHSUN+Institute+Vallon+Abidjan',
      googleMapsUrl: 'https://maps.google.com/?q=Cocody+2+Plateaux+Vallon+Abidjan',
      // Lien Google Agenda pour réservation RDV
      bookingUrl: 'https://calendar.google.com/calendar/r/eventtypes?authuser=ethsunoxford@gmail.com',
    },
  ],
  // ✅ Contact unique (page Contact = Abidjan seulement)
  contact: {
    address: 'Cocody 2 Plateaux Vallon, Rue J, Abidjan',
    phone: '(+225) 05 45 61 30 35',
    phoneBis: '(+225) 07 07 50 05 01',
    email: 'info@ethsun-institute.com',
    emailFormations: 'formation@ethsun-institute.com',
    emailAdmin: 'ethsuninstitute@gmail.com',
  },
  // ✅ Réseaux sociaux : remplacer '#' par les vraies URLs ETHSUN
  social: {
    linkedin: 'https://ci.linkedin.com/company/ethsun-institute',
    facebook: 'https://www.facebook.com/ETHSUNInstitute',
    youtube: 'https://www.youtube.com/@ETHSUNInstitute',
  },
  // ✅ Emails réception formulaire contact
  formRecipients: ["formation@ethsun-institute.com", "ethsuninstitute@gmail.com"],
  // Alias pour compatibilité Footer.tsx
  campuses: [
    {
      name: "Learning Center Abidjan",
      address: "Cocody 2 Plateaux Vallon, Rue J",
      city: "Abidjan",
      country: "Côte d'Ivoire",
      phone: "(+225) 05 45 61 30 35 / 07 07 50 05 01",
      email: "info@ethsun-institute.com",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// LEARNING CENTERS (présence internationale)
// ─────────────────────────────────────────────────────────────────────────────

export const learningCenters = [
  {
    city: 'Abidjan',
    country: 'Côte d\'Ivoire',
    flag: '🇨🇮',
    description: 'Learning Center principal — siège opérationnel ETHSUN Institute',
    href: '/programmes',           // → catalogue complet avec calendrier
    image: '/images/abidjan.jpg',
  },
  {
    city: 'Oxford',
    country: 'Royaume-Uni',
    flag: '🇬🇧',
    description: 'ETHSUN Executive Education Oxford — programmes exécutifs',
    href: 'https://www.ethsun-oxford.uk',  // → site Oxford (externe)
    external: true,
    image: '/images/oxford.jpg',
  },
  {
    city: 'Maurice',
    country: 'République de Maurice',
    flag: '🇲🇺',
    description: 'Learning Center Maurice — Tourisme, loisirs, hôtellerie, aménagement touristique',
    href: '/learning-centers/maurice',     // → page dédiée Maurice
    image: '/images/maurice.jpg',
  },
  {
    city: 'Singapour',
    country: 'République de Singapour',
    flag: '🇸🇬',
    description: 'Learning Center Singapour — Éthique, gouvernance, conformité, anticorruption',
    href: '/learning-centers/singapour',   // → page dédiée Singapour
    image: '/images/singapour.jpg',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TEXTES PAGE D'ACCUEIL — CORRIGÉS
// ─────────────────────────────────────────────────────────────────────────────

export const heroContent = {
  institution: 'ETHSUN INSTITUTE',
  headline: 'Propulsez votre carrière au sommet',
  description: 'Plus de 60 certificats professionnels dans 12 domaines stratégiques. Formations présentielles, en ligne et en format hybride, conçues pour les cadres, dirigeants et entrepreneurs.',
  stats: [
    { value: '60+', label: { fr: 'Certificats professionnels', en: 'Professional certificates' } },
    { value: '12', label: { fr: 'Domaines stratégiques', en: 'Strategic domains' } },
    { value: '2', label: { fr: 'Learning Centers Abidjan & Oxford', en: 'Learning Centers Abidjan & Oxford' } },
    { value: '5 000+', label: { fr: 'Alumni formés', en: 'Alumni trained' } },
  ],
  cta: {
    primary: { fr: 'Voir les formations', en: 'View programmes' },
    secondary: { fr: 'S\'inscrire', en: 'Register' },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// TEXTES SECTION FORMATIONS (page d'accueil)
// ─────────────────────────────────────────────────────────────────────────────

export const formationsSectionContent = {
  eyebrow: { fr: 'NOS FORMATIONS', en: 'OUR PROGRAMMES' },
  title: { fr: 'Des programmes qui transforment les carrières', en: 'Programmes that transform careers' },
  subtitle: {
    fr: 'Sélection des programmes de formations les plus demandées par les professionnels.',
    en: 'A selection of our most sought-after professional training programmes.',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// TEXTES À PROPOS — CORRIGÉS
// ─────────────────────────────────────────────────────────────────────────────

export const aboutContent = {
  title: { fr: 'L\'Université des Entreprises à Haut Rendement', en: 'The University of High-Performance Organizations' },
  mission: {
    fr: 'Renforcer les capacités des cadres, dirigeants et leaders',
    en: 'Strengthening the capacities of executives, leaders, and managers',
  },
  vision: {
    fr: 'Devenir une institution académique de référence, rayonnant à l\'échelle internationale depuis nos Learning Centers à travers le monde.',
    en: 'To become a reference academic institution, radiating internationally from our Learning Centers around the world.',
  },
  founderBio: {
    name: 'Jean-Calvin ETHIEN',
    title: { fr: 'Président Directeur Général', en: 'President & Chief Executive Officer' },
    bio: {
      fr: 'Animé par une conviction profonde que le capital humain constitue le premier levier de transformation durable, Jean-Calvin ETHIEN, PDG de ETHSUN Institute, s\'engage activement en faveur du développement des compétences en Afrique et à l\'international. À travers une approche structurée, exigeante et tournée vers l\'impact, il œuvre à la conception de dispositifs de formation capables de renforcer les capacités des individus, d\'accompagner la montée en performance des organisations et de préparer une nouvelle génération de leaders aptes à relever les défis économiques, institutionnels et technologiques contemporains.',
      en: 'Driven by the deep conviction that human capital is the primary lever of sustainable transformation, Jean-Calvin ETHIEN, CEO of ETHSUN Institute, is actively committed to skills development across Africa and internationally. Through a structured, demanding, and impact-oriented approach, he works to design training systems capable of strengthening individual capacities, supporting organizational performance, and preparing a new generation of leaders ready to meet today\'s economic, institutional, and technological challenges.',
    },
    image: '/images/founder-jean-calvin-ethien.jpg',
  },
  ecosystem: [
    {
      name: 'ETHSUN Executive Education Oxford',
      description: {
        fr: 'Centre d\'enseignement exécutif basé à Oxford, au Royaume-Uni, ETHSUN Executive Education Oxford conçoit et déploie des programmes premium destinés aux dirigeants, cadres supérieurs et décideurs publics. L\'institution se distingue par son exigence académique, son ouverture internationale et son engagement en matière de recherche et développement pédagogique, au service de la formation de leaders capables d\'évoluer dans des environnements complexes et globalisés.',
        en: 'Based in Oxford, United Kingdom, ETHSUN Executive Education Oxford designs and delivers premium programmes for executives, senior managers, and public decision-makers. The institution is distinguished by its academic rigor, international openness, and commitment to pedagogical research and development, in service of training leaders capable of navigating complex and globalized environments.',
      },
      href: 'https://www.ethsun-oxford.uk',
      external: true,
    },
    {
      name: 'ETHSUN Institute',
      description: {
        fr: 'Académie de formation professionnelle continue, ETHSUN Institute constitue le pilier opérationnel du groupe en Afrique. Elle propose des certificats professionnels, des séminaires spécialisés, des bootcamps sectoriels et des événements à forte valeur ajoutée, destinés à renforcer les compétences techniques, managériales et stratégiques des professionnels et des organisations.',
        en: 'A continuing professional education academy, ETHSUN Institute is the operational pillar of the group in Africa. It offers professional certificates, specialized seminars, sector-specific bootcamps, and high-value-added events designed to strengthen the technical, managerial, and strategic competencies of professionals and organizations.',
      },
      href: '/programmes',
      external: false,
    },
    {
      name: 'ETHSUN Analytics',
      description: {
        fr: 'Pôle dédié à l\'étude stratégique et à l\'intelligence économique, ETHSUN Analytics accompagne les institutions publiques et privées dans leurs processus de décision. À travers des analyses approfondies, des études sectorielles et des outils d\'aide à la décision, ce pôle contribue au renforcement de la gouvernance, à l\'optimisation des politiques publiques et à l\'amélioration de la performance organisationnelle.',
        en: 'Dedicated to strategic research and economic intelligence, ETHSUN Analytics supports public and private institutions in their decision-making processes. Through in-depth analyses, sector studies, and decision-support tools, this division contributes to strengthening governance, optimizing public policies, and improving organizational performance.',
      },
      href: '/analytics',
      external: false,
    },
  ],
  // ✅ "campus" → "Learning Centers"
  learningCenterLabel: { fr: 'Nos Learning Centers', en: 'Our Learning Centers' },
  // ✅ Texte pied de page À propos
  footerNote: {
    fr: 'sous licence ETHSUN Executive Education Oxford — Per Doctrinam Excelsior',
    en: 'under licence from ETHSUN Executive Education Oxford — Per Doctrinam Excelsior',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// TEXTES PAGE INTERNATIONALE — CORRIGÉS
// ─────────────────────────────────────────────────────────────────────────────

export const internationalContent = {
  title: { fr: 'INTERNATIONAL', en: 'INTERNATIONAL' },
  headline: {
    fr: 'Une formation d\'excellence, un rayonnement mondial',
    en: 'Excellence in training, global reach',
  },
  // ✅ "ETHSUN Executive Education Oxford" → "ETHSUN INSTITUTE"
  intro: {
    fr: 'ETHSUN INSTITUTE porte l\'ambition d\'une formation africaine aux standards internationaux les plus exigeants.',
    en: 'ETHSUN INSTITUTE embodies the ambition of African professional training meeting the highest international standards.',
  },
  presenceTitle: {
    fr: 'PRÉSENCE INTERNATIONALE',
    en: 'INTERNATIONAL PRESENCE',
  },
  // ✅ Note : ETHSUN Institute opère sous licence (pas de notion de "maison mère")
  presenceNote: {
    fr: 'ETHSUN Institute opère sous licence ETHSUN Executive Education Oxford et déploie ses Learning Centers dans les villes suivantes.',
    en: 'ETHSUN Institute operates under licence from ETHSUN Executive Education Oxford and deploys its Learning Centers in the following cities.',
  },
};

// Présence internationale (4 villes uniquement, Sénégal/Guinée supprimés)
export const internationalPresence = [
  {
    country: 'Côte d\'Ivoire',
    city: 'Abidjan',
    desc: { fr: 'Learning Center principal — siège opérationnel', en: 'Main Learning Center — operational headquarters' },
    flag: '🇨🇮',
    href: '/programmes',
  },
  {
    country: 'Royaume-Uni',
    city: 'Oxford',
    desc: { fr: 'ETHSUN Executive Education Oxford', en: 'ETHSUN Executive Education Oxford' },
    flag: '🇬🇧',
    href: 'https://www.ethsun-oxford.uk',
    external: true,
  },
  {
    country: 'République de Maurice',
    city: 'Maurice',
    desc: { fr: 'Tourisme, loisirs, hôtellerie, aménagement touristique', en: 'Tourism, leisure, hospitality, territorial planning' },
    flag: '🇲🇺',
    href: '/learning-centers/maurice',
  },
  {
    country: 'République de Singapour',
    city: 'Singapour',
    desc: { fr: 'Éthique, gouvernance, conformité, anticorruption', en: 'Ethics, governance, compliance, anti-corruption' },
    flag: '🇸🇬',
    href: '/learning-centers/singapour',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// BLOG
// ─────────────────────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  { id: 'b1', title: 'L\'Afrique des Entrepreneurs : bâtir dans la tempête', slug: 'afrique-entrepreneurs', excerpt: 'Tribune du fondateur sur les défis de l\'entrepreneuriat africain et les voies de la résilience.', category: 'expertise', date: '2026-03-10', author: 'Jean-Calvin ETHIEN', readTime: '8 min' },
  { id: 'b2', title: 'Marchés publics en Afrique de l\'Ouest : 5 erreurs à éviter', slug: 'marches-publics-erreurs', excerpt: 'Les erreurs les plus fréquentes lors des réponses aux appels d\'offres et comment les éviter.', category: 'expertise', date: '2026-03-05', author: 'ETHSUN Institute', readTime: '6 min' },
  { id: 'b3', title: 'Comment l\'IA transforme la formation professionnelle en 2026', slug: 'ia-formation-2026', excerpt: 'L\'intelligence artificielle redéfinit les méthodes pédagogiques. Tour d\'horizon des innovations.', category: 'ia', date: '2026-02-28', author: 'ETHSUN Institute', readTime: '5 min' },
  { id: 'b4', title: 'Immobilier en Côte d\'Ivoire : les compétences clés', slug: 'immobilier-competences', excerpt: 'Le secteur immobilier ivoirien en pleine transformation nécessite de nouvelles compétences.', category: 'expertise', date: '2026-02-20', author: 'ETHSUN Institute', readTime: '7 min' },
  { id: 'b5', title: 'Retour sur la 5ème Université de l\'Immobilier', slug: 'retour-uimmo-5', excerpt: 'Ce qu\'il faut retenir de la 5ème édition de notre événement phare sur l\'immobilier.', category: 'news', date: '2026-02-15', author: 'ETHSUN Institute', readTime: '4 min' },
];

// ─────────────────────────────────────────────────────────────────────────────
// FORMATEURS (inchangé)
// ─────────────────────────────────────────────────────────────────────────────

export interface Faculty {
  id: string;
  name: string;
  title: string;
  organization: string;
  bio: string;
  expertise: string[];
  initials: string;
  gradient: string;
}

export const faculty: Faculty[] = [
  { id: 'f1', name: 'Dr. Koné Amadou', title: 'Expert en Marchés Publics', organization: 'Consultant UEMOA', bio: 'Plus de 20 ans d\'expérience dans la réglementation des marchés publics en zone UEMOA. Ancien directeur de la régulation à l\'ANRMP.', expertise: ['Marchés publics', 'Droit OHADA', 'Gouvernance'], initials: 'KA', gradient: 'from-blue-800 to-slate-900' },
  { id: 'f2', name: 'Mme Diallo Fatou', title: 'Directrice de Conformité', organization: 'Groupe bancaire panafricain', bio: 'Spécialiste en conformité bancaire et normes IFRS. 15 ans d\'expérience dans les institutions financières d\'Afrique de l\'Ouest.', expertise: ['Conformité bancaire', 'IFRS 17', 'Gestion des risques'], initials: 'DF', gradient: 'from-cyan-800 to-slate-900' },
  { id: 'f3', name: 'Prof. Mensah Kwame', title: 'Professeur de Management', organization: 'Oxford Business School', bio: 'Chercheur et enseignant en management stratégique et leadership. Publie régulièrement sur les dynamiques de gouvernance en Afrique.', expertise: ['Management', 'Leadership', 'Stratégie'], initials: 'MK', gradient: 'from-purple-800 to-slate-900' },
  { id: 'f4', name: 'M. Touré Ibrahim', title: 'Expert Immobilier', organization: 'Cabinet TI Immobilier', bio: 'Promoteur immobilier et expert en financement de projets. Intervenant depuis la 1ère édition de l\'Université de l\'Immobilier.', expertise: ['Immobilier', 'Financement', 'Urbanisme'], initials: 'TI', gradient: 'from-amber-800 to-slate-900' },
  { id: 'f5', name: 'Dr. Ouattara Mariam', title: 'Spécialiste IA & Digital', organization: 'ETHSUN Analytics', bio: 'Docteure en intelligence artificielle, elle accompagne les entreprises africaines dans leur transformation digitale.', expertise: ['Intelligence artificielle', 'Data Science', 'Transformation digitale'], initials: 'OM', gradient: 'from-emerald-800 to-slate-900' },
  { id: 'f6', name: 'M. N\'Guessan Yao', title: 'Expert Tourisme & Hôtellerie', organization: 'Ministère du Tourisme CI', bio: 'Ancien conseiller technique au Ministère du Tourisme. Expert en développement touristique durable et stratégie hôtelière.', expertise: ['Tourisme', 'Hôtellerie', 'Développement durable'], initials: 'NY', gradient: 'from-teal-800 to-slate-900' },
  { id: 'f7', name: 'Mme Bamba Aïssatou', title: 'Consultante RH & Formation', organization: 'Cabinet AB Conseil', bio: 'Ingénieure pédagogique et consultante en développement des compétences. Formatrice certifiée en andragogie.', expertise: ['RH', 'Ingénierie pédagogique', 'Formation d\'adultes'], initials: 'BA', gradient: 'from-rose-800 to-slate-900' },
  { id: 'f8', name: 'M. Coulibaly Sékou', title: 'Auditeur Senior', organization: 'Big Four Abidjan', bio: 'Expert-comptable et auditeur certifié avec 18 ans d\'expérience dans l\'audit des entreprises et institutions publiques.', expertise: ['Audit', 'Comptabilité', 'Contrôle de gestion'], initials: 'CS', gradient: 'from-indigo-800 to-slate-900' },
];

// ─────────────────────────────────────────────────────────────────────────────
// B2B (inchangé)
// ─────────────────────────────────────────────────────────────────────────────

export interface B2BSector { title: string; description: string; icon: string; }

export const b2bSectors: B2BSector[] = [
  { title: 'Banque et assurance', description: 'Conformité, IFRS, gestion des risques', icon: 'building' },
  { title: 'Administration publique', description: 'Marchés publics, gouvernance, leadership', icon: 'landmark' },
  { title: 'Immobilier et construction', description: 'Gestion de projets, réglementation, financement', icon: 'home' },
  { title: 'Tourisme et hôtellerie', description: 'Management, qualité de service, développement durable', icon: 'plane' },
  { title: 'Télécoms et technologies', description: 'Transformation digitale, IA, management', icon: 'wifi' },
  { title: 'Industries extractives', description: 'Conformité, RSE, supply chain', icon: 'factory' },
];

export const b2bSteps = [
  { step: 1, title: 'Diagnostic', description: 'Nous analysons vos besoins en compétences, votre culture d\'entreprise et vos objectifs stratégiques.' },
  { step: 2, title: 'Conception', description: 'Nos ingénieurs pédagogiques conçoivent un programme sur mesure, validé par votre direction.' },
  { step: 3, title: 'Déploiement', description: 'Formation dispensée par des experts praticiens, dans vos locaux ou dans nos Learning Centers.' },
  { step: 4, title: 'Évaluation', description: 'Mesure de l\'impact, certification des participants, recommandations de suivi.' },
];

// ─────────────────────────────────────────────────────────────────────────────
// UTILITAIRES
// ─────────────────────────────────────────────────────────────────────────────

export function formatPrice(amount: number, currency: string = 'XOF'): string {
  if (currency === 'XOF') {
    return `${amount.toLocaleString('fr-FR')} FCFA`;
  }
  if (currency === 'EUR') {
    return `${amount.toLocaleString('fr-FR')} €`;
  }
  return `${amount.toLocaleString('fr-FR')} ${currency}`;
}

export function formatDate(dateStr: string, locale: string = 'fr'): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
