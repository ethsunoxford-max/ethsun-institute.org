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
  image?: string;
  objectives?: string[];
  modules?: { title: string; description: string }[];
  targetAudience?: string;
  prerequisites?: string;
  methods?: string[];
}

export interface EventData {
  title: string;
  slug: string;
  date: string;
  venue: string;
  city: string;
  rector?: { name: string; title: string };
  stats: { participants: string; speakers: number; duration: string };
  schedule?: { time: string; title: string }[];
  contact?: string[];
  partners?: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
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
    price: { amount: 350, currency: 'EUR' },
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
    price: { amount: 200, currency: 'EUR' },
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
    price: { amount: 1200, currency: 'EUR' },
    nextSession: '2026-09-15',
    enrollmentStatus: 'open',
    badge: null,
    imageGradient: 'from-emerald-800 to-slate-900',
  },
];

export const allProgrammes: Programme[] = [
  ...featuredProgrammes,
  { id: 'p1', title: 'Ingénierie de la Commande Publique', slug: 'ingenierie-commande-publique', description: 'Maîtrisez le cycle complet des marchés publics', certificateLevel: 'Certificat Professionnel', domain: 'Marchés publics', duration: '4 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-indigo-800 to-slate-900', image: '/images/minister-speech.jpg',
    objectives: [
      'Comprendre le cadre juridique et réglementaire des marchés publics en zone UEMOA',
      'Maîtriser les techniques de rédaction des documents de consultation (DAO, DCE, CCTP)',
      'Piloter le processus d\'évaluation des offres et d\'attribution des marchés',
      'Gérer l\'exécution, le suivi et le contrôle des contrats publics',
      'Prévenir les risques de contentieux et de contestation',
      'Intégrer les bonnes pratiques anti-corruption et de transparence'
    ],
    modules: [
      { title: 'Module 1 — Cadre juridique et réglementaire', description: 'Directives UEMOA, Code des marchés publics, organes de régulation (ANRMP), principes fondamentaux de la commande publique.' },
      { title: 'Module 2 — Planification et programmation', description: 'Plan de passation, étude des besoins, estimation des coûts, programmation budgétaire, stratégie d\'achat.' },
      { title: 'Module 3 — Passation et attribution', description: 'Rédaction des dossiers de consultation, publication des avis, évaluation des offres, attribution, notification, gestion des recours.' },
      { title: 'Module 4 — Exécution et contrôle', description: 'Gestion des contrats, ordres de service, avenants, réception des prestations, audit et contrôle, archivage.' }
    ],
    targetAudience: 'Cadres et agents des administrations publiques, responsables des cellules de passation des marchés, directeurs achats, consultants en marchés publics, juristes, auditeurs.',
    prerequisites: 'Diplôme universitaire (Bac+3 minimum) ou expérience professionnelle significative dans le domaine des marchés publics ou des achats.',
    methods: [
      'Cours magistraux animés par des experts praticiens',
      'Études de cas réels issus du contexte UEMOA',
      'Travaux de groupe et simulations de procédures',
      'Modules e-learning sur la plateforme Neuroklax',
      'Atelier présentiel de mise en pratique'
    ]
  },
  { id: 'p2', title: 'Management d\'Institution de Formation', slug: 'management-institution-formation', description: 'Pilotez efficacement votre institution de formation en maîtrisant la stratégie d\'établissement, l\'ingénierie de formation, la gestion financière et la démarche qualité. Ce programme forme les directeurs et managers d\'organismes de formation aux meilleures pratiques de gouvernance pédagogique et institutionnelle, conformes aux référentiels nationaux et internationaux.', certificateLevel: 'Certificat Professionnel', domain: 'Management', duration: '3 mois', format: 'En ligne', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-purple-800 to-slate-900', image: '/images/ethsun-doctors.jpg' },
  { id: 'p3', title: 'Ingénierie du Développement des Collectivités Territoriales', slug: 'ingenierie-collectivites', description: 'Maîtrisez l\'ingénierie du développement territorial : gouvernance locale, gestion budgétaire, passation des marchés publics, smart cities et financement innovant des collectivités. Ce programme prépare les élus, secrétaires généraux et agents de développement à piloter un territoire performant et transparent.', certificateLevel: 'Certificat Professionnel', domain: 'Gouvernance', duration: '4 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-teal-800 to-slate-900', image: '/images/jc-ministers.jpg' },
  { id: 'p4', title: 'Innovation Managériale et Performance', slug: 'innovation-manageriale', description: 'Maîtrisez l\'innovation managériale contemporaine, l\'intégration de l\'intelligence artificielle dans le management et les leviers de performance organisationnelle. Ce programme Executive forme les cadres et dirigeants à transformer leur organisation grâce aux outils de la gestion du changement et du management agile.', certificateLevel: 'Executive Certificate', domain: 'Management', duration: '3 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-sky-800 to-slate-900', image: '/images/expertise-group-full.jpeg' },
  { id: 'p5', title: 'Leadership et Science de la Décision', slug: 'leadership-decision', description: 'Développez votre leadership stratégique en comprenant les mécanismes cognitifs et émotionnels de la prise de décision. Ce programme Executive forme les dirigeants à exercer une autorité éclairée, à gérer l\'incertitude et à mobiliser leurs équipes autour d\'une vision claire et ambitieuse.', certificateLevel: 'Executive Certificate', domain: 'Leadership', duration: '3 mois', format: 'Présentiel', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-11-01', enrollmentStatus: 'coming_soon', badge: null, imageGradient: 'from-rose-800 to-slate-900', image: '/images/utourisme-tribune.jpg' },
  { id: 'p6', title: 'Juriste d\'Entreprise', slug: 'juriste-entreprise', description: 'Devenez un expert juridique maîtrisant le droit des affaires OHADA, le droit du travail et la gestion des risques juridiques. Une formation complète pour les juristes d\'entreprise et les managers confrontés aux enjeux légaux et contractuels.', certificateLevel: 'Certificat de Qualification', domain: 'Droit', duration: '4 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-stone-700 to-slate-900', image: '/images/graduates-seated.jpeg' },
  { id: 'p7', title: 'Conformité Bancaire et IFRS 17', slug: 'conformite-bancaire-ifrs17', description: 'Maîtrisez les normes IFRS 17, les systèmes de conformité réglementaire et les dispositifs anti-blanchiment pour sécuriser votre institution financière. Ce programme intensif forme les responsables conformité, auditeurs et dirigeants bancaires aux exigences légales et éthiques du secteur financier en Afrique.', certificateLevel: 'Certificat d\'Expertise', domain: 'Banque', duration: '3 mois', format: 'En ligne', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-cyan-800 to-slate-900', image: '/images/jc-networking.jpeg' },
  { id: 'p8', title: 'Audit Interne et Contrôle de Gestion', slug: 'audit-interne', description: 'Renforcez vos compétences en audit interne, contrôle de gestion et pilotage de la performance organisationnelle. Idéal pour les auditeurs, contrôleurs et responsables financiers souhaitant structurer et professionnaliser leur pratique.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Audit', duration: '2 mois', format: 'Blended', price: { amount: 900, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-violet-800 to-slate-900', image: '/images/campus-jury.jpeg' },
  { id: 'p9', title: 'Marketing Digital et Growth', slug: 'marketing-digital', description: 'Accélérez votre croissance grâce aux outils du marketing digital — SEO, réseaux sociaux, publicité en ligne et growth hacking. Une formation pratique et immédiatement applicable pour entrepreneurs, PME et professionnels du marketing souhaitant booster leur visibilité.', certificateLevel: 'Certificat d\'Initiation', domain: 'Marketing', duration: '6 semaines', format: 'En ligne', price: { amount: 600, currency: 'EUR' }, nextSession: '2026-08-01', enrollmentStatus: 'open', badge: 'Nouveau', imageGradient: 'from-pink-800 to-slate-900', image: '/images/selfie-graduates.jpeg' },
  { id: 'p10', title: 'Supply Chain et Achats Publics', slug: 'supply-chain-achats', description: 'Structurez un processus achats performant et responsable, optimisez la chaîne logistique et maîtrisez la gestion des approvisionnements publics et privés. Ce programme forme les responsables achats et supply chain à réduire les coûts tout en garantissant qualité, conformité et durabilité.', certificateLevel: 'Executive Certificate', domain: 'Logistique', duration: '3 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-orange-800 to-slate-900', image: '/images/visite-chantier-2.jpg' },
  { id: 'p11', title: 'Gestion des Ressources Humaines', slug: 'gestion-rh', description: 'Développez une politique RH stratégique, maîtrisez la gestion des talents, le droit social ivoirien et les outils de performance des ressources humaines. Destiné aux DRH, responsables RH et managers en charge du développement des équipes.', certificateLevel: 'Certificat d\'Aptitude', domain: 'RH', duration: '3 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-fuchsia-800 to-slate-900', image: '/images/cert-remise-officiels.jpg' },
  { id: 'p12', title: 'Intelligence Artificielle pour Managers', slug: 'ia-managers', description: 'Intégrez l\'intelligence artificielle dans votre stratégie managériale et vos processus décisionnels, sans compétences techniques requises. Un programme conçu pour les managers et dirigeants souhaitant tirer parti des outils IA pour gagner en efficacité et en compétitivité.', certificateLevel: 'Certificat d\'Initiation', domain: 'IA', duration: '4 semaines', format: 'En ligne', price: { amount: 500, currency: 'EUR' }, nextSession: '2026-07-01', enrollmentStatus: 'open', badge: 'Nouveau', imageGradient: 'from-lime-800 to-slate-900', image: '/images/jc-medal-man.jpeg' },
  { id: 'p13', title: 'Comptabilité et Finance d\'Entreprise', slug: 'comptabilite-finance', description: 'Maîtrisez les fondamentaux de la comptabilité SYSCOHADA, de l\'analyse financière et du pilotage de la performance d\'entreprise. Une formation essentielle pour les responsables financiers, comptables et dirigeants de PME souhaitant lire et piloter leurs chiffres.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Finance', duration: '3 mois', format: 'Blended', price: { amount: 900, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-yellow-800 to-slate-900', image: '/images/trophee-remise.jpg' },
  { id: 'p14', title: 'Médiation Professionnelle', slug: 'mediation-professionnelle', description: 'Maîtrisez les techniques de médiation professionnelle pour prévenir et résoudre les conflits en entreprise, en institution et dans les territoires. Ce Certificate of Advanced Studies prépare à l\'exercice certifié de la médiation : médiation interne, gestion des conflits d\'intérêts et qualité relationnelle dans les organisations.', certificateLevel: 'Certificate of Advanced Studies', domain: 'Droit', duration: '4 mois', format: 'Blended', price: { amount: 1500, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-zinc-700 to-slate-900', image: '/images/utourisme-audience.jpg' },
  { id: 'p15', title: 'Entrepreneuriat et Création d\'Entreprise', slug: 'entrepreneuriat', description: 'Lancez et développez votre entreprise avec méthode : business plan, financement, marketing et gestion opérationnelle. Un programme complet pour les porteurs de projets, jeunes entrepreneurs et intrapreneurs africains souhaitant concrétiser leur vision.', certificateLevel: 'Certificat d\'Initiation', domain: 'Commerce', duration: '6 semaines', format: 'En ligne', price: { amount: 500, currency: 'EUR' }, nextSession: '2026-08-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-red-800 to-slate-900', image: '/images/jc-cert-group-stage.jpeg' },
  { id: 'p16', title: 'Management de Projet ISO 21502', slug: 'management-projet-iso', description: 'Gérez vos projets selon les standards ISO 21502 et les meilleures pratiques du management de projet international. Pour les chefs de projet, coordinateurs et managers opérationnels souhaitant structurer leur approche et optimiser leurs livrables.', certificateLevel: 'Certificat d\'Expertise', domain: 'Management', duration: '2 mois', format: 'Blended', price: { amount: 900, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-blue-800 to-slate-900', image: '/images/uimmo-group.jpeg' },
  { id: 'p17', title: 'Gouvernance Publique et Anti-Corruption', slug: 'gouvernance-anti-corruption', description: 'Construisez une culture organisationnelle d\'intégrité, maîtrisez les systèmes de conformité éthique et mettez en œuvre des dispositifs anticorruption efficaces dans les institutions publiques et privées. Un Executive Certificate pour les dirigeants, élus et hauts fonctionnaires engagés dans la gouvernance éthique et la lutte contre la corruption.', certificateLevel: 'Executive Certificate', domain: 'Gouvernance', duration: '3 mois', format: 'Présentiel', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-11-01', enrollmentStatus: 'coming_soon', badge: null, imageGradient: 'from-emerald-700 to-slate-900', image: '/images/minister-cert-remise.jpg' },
  { id: 'p18', title: 'Sport Business et Management', slug: 'sport-business', description: 'Maîtrisez le management appliqué à l\'industrie sportive : droits médias, sponsoring, événementiel sportif et gestion de clubs ou fédérations. Une formation innovante pour les professionnels du sport business et du marketing sportif en Afrique.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Commerce', duration: '2 mois', format: 'Blended', price: { amount: 800, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-green-800 to-slate-900', image: '/images/cert-group-standing.jpeg' },
  { id: 'p19', title: 'Hôtellerie et Tourisme Durable', slug: 'hotellerie-tourisme-durable', description: 'Développez le tourisme durable, la gestion hôtelière responsable et l\'aménagement des territoires touristiques dans un contexte africain. Une formation de référence qui conjugue excellence opérationnelle et approche durable pour les professionnels du secteur.', certificateLevel: 'Certificat d\'Aptitude', domain: 'Tourisme', duration: '3 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-amber-800 to-slate-900', image: '/images/utourisme-conference.jpg' },
];

export const events: EventData[] = [
  {
    title: '1ère Université Africaine du Tourisme',
    slug: 'universite-tourisme',
    date: '2026-05-12',
    venue: 'Sofitel Hôtel Ivoire',
    city: 'Abidjan',
    rector: { name: 'M. Siandou FOFANA', title: 'Ministre du Tourisme et des Loisirs' },
    stats: { participants: '200+', speakers: 15, duration: '1 journée' },
    schedule: [
      { time: '08h30', title: 'Accueil et inscription des participants' },
      { time: '09h00', title: 'Cérémonie d\'ouverture officielle' },
      { time: '09h30', title: 'Allocution du Recteur Honorifique, M. Siandou Fofana' },
      { time: '10h00', title: 'Panel 1 : Tourisme durable en Afrique de l\'Ouest — Défis et opportunités' },
      { time: '11h30', title: 'Panel 2 : Investissement hôtelier et infrastructures touristiques' },
      { time: '12h30', title: 'Pause déjeuner et networking' },
      { time: '14h00', title: 'Ateliers thématiques (tourisme digital, écotourisme, formation des métiers du tourisme)' },
      { time: '16h00', title: 'Restitution des ateliers et recommandations' },
      { time: '17h00', title: 'Cérémonie de remise des certificats de participation' },
      { time: '17h30', title: 'Cocktail de clôture' },
    ],
    contact: ['05 45 61 30 35', '07 07 50 05 01'],
    partners: ['Ministère du Tourisme et des Loisirs', 'Fonds de Développement Touristique', 'Côte d\'Ivoire Tourisme'],
  },
  {
    title: '6ème Université de l\'Immobilier',
    slug: 'universite-immobilier',
    date: '2026-06-21',
    venue: 'Sofitel Hôtel Ivoire',
    city: 'Abidjan',
    stats: { participants: '300+', speakers: 20, duration: '2 jours' },
    schedule: [
      { time: '08h30', title: 'Accueil et inscription des participants' },
      { time: '09h00', title: 'Cérémonie d\'ouverture officielle' },
      { time: '10h00', title: 'Panel 1 : Le financement de l\'immobilier en Afrique de l\'Ouest' },
      { time: '11h30', title: 'Panel 2 : Urbanisme, foncier et régulation immobilière' },
      { time: '12h30', title: 'Pause déjeuner et networking' },
      { time: '14h00', title: 'Ateliers : Gestion locative, Promotion immobilière, PropTech' },
      { time: '16h00', title: 'Restitution des ateliers et recommandations' },
      { time: '17h00', title: 'Cérémonie de remise des certificats de participation' },
      { time: '17h30', title: 'Cocktail de clôture' },
    ],
    contact: ['05 45 61 30 35', '07 07 50 05 01'],
  },
  {
    title: '1ère Université de l\'Éthique et la Conformité Anticorruption',
    slug: 'universite-ethique-conformite',
    date: '2026-09-18',
    venue: 'Sofitel Hôtel Ivoire',
    city: 'Abidjan',
    stats: { participants: '250+', speakers: 18, duration: '1 journée' },
    schedule: [
      { time: '08h30', title: 'Accueil et inscription des participants' },
      { time: '09h00', title: 'Cérémonie d\'ouverture officielle' },
      { time: '10h00', title: 'Panel 1 : Éthique et gouvernance dans le secteur public africain' },
      { time: '11h30', title: 'Panel 2 : Mécanismes de lutte contre la corruption — enjeux et solutions' },
      { time: '12h30', title: 'Pause déjeuner et networking' },
      { time: '14h00', title: 'Ateliers : Compliance, Lanceur d\'alerte, Contrôle interne' },
      { time: '16h00', title: 'Restitution et recommandations institutionnelles' },
      { time: '17h00', title: 'Cérémonie de remise des certificats de participation' },
      { time: '17h30', title: 'Cocktail de clôture' },
    ],
    contact: ['05 45 61 30 35', '07 07 50 05 01'],
  },
  {
    title: 'Petit Déjeuner Débat : L\'Afrique des Entrepreneurs — Bâtir dans la Tempête',
    slug: 'petit-dejeuner-afrique-entrepreneurs',
    date: '2026-10-08',
    venue: 'ETHSUN Institute — Learning Center Abidjan',
    city: 'Abidjan',
    stats: { participants: '80+', speakers: 5, duration: 'Matinée' },
    schedule: [
      { time: '07h30', title: 'Accueil et petit déjeuner' },
      { time: '08h00', title: 'Allocution d\'ouverture par Jean-Calvin ETHIEN, PDG ETHSUN Institute' },
      { time: '08h30', title: 'Conférence : L\'Afrique des Entrepreneurs — Bâtir dans la Tempête' },
      { time: '09h30', title: 'Table ronde : Entrepreneurs africains — parcours, obstacles et stratégies' },
      { time: '10h30', title: 'Échanges et networking' },
      { time: '11h00', title: 'Clôture et remise de certificats de participation' },
    ],
    contact: ['05 45 61 30 35', '07 07 50 05 01'],
  },
  {
    title: 'Graduation Day ETHSUN — Cérémonie de Remise des Certificats',
    slug: 'graduation-day',
    date: '2026-11-28',
    venue: 'Sofitel Hôtel Ivoire',
    city: 'Abidjan',
    stats: { participants: '500+', speakers: 10, duration: '1 journée' },
    schedule: [
      { time: '09h00', title: 'Accueil des familles et proches' },
      { time: '10h00', title: 'Cortège académique — entrée des diplômés' },
      { time: '10h30', title: 'Allocution du Président — Jean-Calvin ETHIEN' },
      { time: '11h00', title: 'Remise des certificats par promotion' },
      { time: '13h00', title: 'Déjeuner de gala et networking alumni' },
      { time: '15h00', title: 'Séance photos officielles' },
      { time: '16h00', title: 'Cocktail de clôture' },
    ],
    contact: ['05 45 61 30 35', '07 07 50 05 01'],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Le Certificat d\'Aptitude aux Professions Immobilières d\'ETHSUN Institute a été un véritable tournant dans ma carrière. Les modules sur la gestion locative et l\'évaluation des actifs immobiliers m\'ont permis de structurer mon expertise et d\'asseoir ma crédibilité auprès de mes clients institutionnels. Une formation de très haut niveau, ancrée dans les réalités du marché africain.',
    name: 'KESSE René',
    title: 'Expert en Gestion et Finance Immobilière',
    company: 'Côte d\'Ivoire',
    initials: 'KR',
  },
  {
    quote: 'Le Certificat d\'Expertise en Éthique et Gouvernance des Services Publics d\'ETHSUN Institute a profondément enrichi ma pratique professionnelle. À travers ce programme, j\'ai acquis des outils concrets pour renforcer l\'intégrité, la transparence et la redevabilité au sein de mon institution. Je recommande vivement cette formation à tout cadre soucieux d\'excellence dans la gestion publique.',
    name: 'BOUANH Georgette eps. KOUASSI',
    title: 'Directrice',
    company: 'Ministère de la Jeunesse, de l\'Insertion Professionnelle et du Service Civique, CI',
    initials: 'BG',
  },
  {
    quote: 'La formation ETHSUN m\'a permis de structurer mes compétences en marchés publics et d\'accéder à un poste de direction. Le réseau alumni est un véritable accélérateur de carrière.',
    name: 'Aminata K.',
    title: 'Directrice des Achats',
    company: 'Ministère de l\'Économie, CI',
    initials: 'AK',
  },
  {
    quote: 'Le programme en conformité bancaire était exactement ce dont j\'avais besoin pour évoluer dans mon institution. Les formateurs sont des praticiens de haut niveau.',
    name: 'Moussa D.',
    title: 'Responsable Conformité',
    company: 'BICICI – BNP Paribas',
    initials: 'MD',
  },
  {
    quote: 'L\'Université de l\'Immobilier a transformé ma vision du secteur. J\'ai pu lancer mon cabinet de conseil immobilier grâce aux compétences acquises.',
    name: 'Rosalie T.',
    title: 'Fondatrice, RT Immobilier',
    company: 'Abidjan',
    initials: 'RT',
  },
];

export const partners = [
  'Ministère du Tourisme CI',
  'ANRMP',
  'HABG',
  'FDFP',
  'Fonds de Développement Touristique',
  'Côte d\'Ivoire Tourisme',
];

export const domains = [
  'Immobilier', 'Marchés publics', 'Banque', 'Management', 'Leadership',
  'IA', 'Droit', 'RH', 'Marketing', 'Logistique', 'Audit', 'Finance',
  'Commerce', 'Gouvernance', 'Tourisme', 'Formation'
];

export const companyInfo = {
  name: 'ETHSUN Institute',
  tagline: 'L\'Université des Entreprises Performantes',
  parent: 'ETHSUN Executive Education Oxford',
  parentMotto: 'Per Doctrinam Excelsior',
  whatsapp: 'https://wa.me/447424201585',
  campuses: [
    {
      name: 'Abidjan — Cocody 2 Plateaux Vallon',
      address: 'Cocody 2 Plateaux Vallon, Rue J, Abidjan',
      country: 'Côte d\'Ivoire',
      phone: '(+225) 05 45 61 30 35 / 07 07 50 05 01',
      email: 'info@ethsun-institute.com',
    },
    {
      name: 'Oxford – Science Park',
      address: 'Oxford Science Park, OX4, Oxfordshire',
      country: 'United Kingdom',
      phone: '',
      email: 'oxford@ethsun-institute.org',
    },
  ],
  social: {
    linkedin: 'https://ci.linkedin.com/company/ethsun-institute',
    facebook: 'https://www.facebook.com/ethsuninstitute',
    youtube: 'https://www.youtube.com/@ethsuninstitute',
  },
};

export const blogPosts: BlogPost[] = [
  { id: 'b1', title: 'L\'Afrique des Entrepreneurs : bâtir dans la tempête', slug: 'afrique-entrepreneurs', excerpt: 'Tribune du fondateur sur les défis de l\'entrepreneuriat africain et les voies de la résilience.', category: 'expertise', date: '2026-03-10', author: 'Jean-Calvin ETHIEN', readTime: '8 min' },
  { id: 'b2', title: 'Marchés publics en Afrique de l\'Ouest : 5 erreurs à éviter', slug: 'marches-publics-erreurs', excerpt: 'Les erreurs les plus fréquentes lors des réponses aux appels d\'offres et comment les éviter.', category: 'expertise', date: '2026-03-05', author: 'ETHSUN Institute', readTime: '6 min' },
  { id: 'b3', title: 'Comment l\'IA transforme la formation professionnelle en 2026', slug: 'ia-formation-2026', excerpt: 'L\'intelligence artificielle redéfinit les méthodes pédagogiques. Tour d\'horizon des innovations.', category: 'ia', date: '2026-02-28', author: 'ETHSUN Institute', readTime: '5 min' },
  { id: 'b4', title: 'Immobilier en Côte d\'Ivoire : les compétences clés', slug: 'immobilier-competences', excerpt: 'Le secteur immobilier ivoirien en pleine transformation nécessite de nouvelles compétences.', category: 'expertise', date: '2026-02-20', author: 'ETHSUN Institute', readTime: '7 min' },
  { id: 'b5', title: 'Retour sur la 5ème Université de l\'Immobilier', slug: 'retour-uimmo-5', excerpt: 'Ce qu\'il faut retenir de la 5ème édition de notre événement phare sur l\'immobilier.', category: 'news', date: '2026-02-15', author: 'ETHSUN Institute', readTime: '4 min' },
];

export function formatPrice(amount: number, currency: string = 'EUR'): string {
  if (currency === 'EUR') {
    return `${amount.toLocaleString('fr-FR')} €`;
  }
  if (currency === 'XOF') {
    return `${amount.toLocaleString('fr-FR')} FCFA`;
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
  {
    id: 'f1',
    name: 'Dr. Koné Amadou',
    title: 'Expert en Marchés Publics',
    organization: 'Consultant UEMOA',
    bio: 'Plus de 20 ans d\'expérience dans la réglementation des marchés publics en zone UEMOA. Ancien directeur de la régulation à l\'ANRMP.',
    expertise: ['Marchés publics', 'Droit OHADA', 'Gouvernance'],
    initials: 'KA',
    gradient: 'from-blue-800 to-slate-900',
  },
  {
    id: 'f2',
    name: 'Mme Diallo Fatou',
    title: 'Directrice de Conformité',
    organization: 'Groupe bancaire panafricain',
    bio: 'Spécialiste en conformité bancaire et normes IFRS. 15 ans d\'expérience dans les institutions financières d\'Afrique de l\'Ouest.',
    expertise: ['Conformité bancaire', 'IFRS 17', 'Gestion des risques'],
    initials: 'DF',
    gradient: 'from-cyan-800 to-slate-900',
  },
  {
    id: 'f3',
    name: 'Prof. Mensah Kwame',
    title: 'Professeur de Management',
    organization: 'Oxford Business School',
    bio: 'Chercheur et enseignant en management stratégique et leadership. Publie régulièrement sur les dynamiques de gouvernance en Afrique.',
    expertise: ['Management', 'Leadership', 'Stratégie'],
    initials: 'MK',
    gradient: 'from-purple-800 to-slate-900',
  },
  {
    id: 'f4',
    name: 'M. Touré Ibrahim',
    title: 'Expert Immobilier',
    organization: 'Cabinet TI Immobilier',
    bio: 'Promoteur immobilier et expert en financement de projets. Intervenant depuis la 1ère édition de l\'Université de l\'Immobilier.',
    expertise: ['Immobilier', 'Financement', 'Urbanisme'],
    initials: 'TI',
    gradient: 'from-amber-800 to-slate-900',
  },
  {
    id: 'f5',
    name: 'Dr. Ouattara Mariam',
    title: 'Spécialiste IA & Digital',
    organization: 'ETHSUN Analytics',
    bio: 'Docteure en intelligence artificielle, elle accompagne les entreprises africaines dans leur transformation digitale.',
    expertise: ['Intelligence artificielle', 'Data Science', 'Transformation digitale'],
    initials: 'OM',
    gradient: 'from-emerald-800 to-slate-900',
  },
  {
    id: 'f6',
    name: 'M. N\'Guessan Yao',
    title: 'Expert Tourisme & Hôtellerie',
    organization: 'Ministère du Tourisme CI',
    bio: 'Ancien conseiller technique au Ministère du Tourisme. Expert en développement touristique durable et stratégie hôtelière.',
    expertise: ['Tourisme', 'Hôtellerie', 'Développement durable'],
    initials: 'NY',
    gradient: 'from-teal-800 to-slate-900',
  },
  {
    id: 'f7',
    name: 'Mme Bamba Aïssatou',
    title: 'Consultante RH & Formation',
    organization: 'Cabinet AB Conseil',
    bio: 'Ingénieure pédagogique et consultante en développement des compétences. Formatrice certifiée en andragogie.',
    expertise: ['RH', 'Ingénierie pédagogique', 'Formation d\'adultes'],
    initials: 'BA',
    gradient: 'from-rose-800 to-slate-900',
  },
  {
    id: 'f8',
    name: 'M. Coulibaly Sékou',
    title: 'Auditeur Senior',
    organization: 'Big Four Abidjan',
    bio: 'Expert-comptable et auditeur certifié avec 18 ans d\'expérience dans l\'audit des entreprises et institutions publiques.',
    expertise: ['Audit', 'Comptabilité', 'Contrôle de gestion'],
    initials: 'CS',
    gradient: 'from-indigo-800 to-slate-900',
  },
];

export interface B2BSector {
  title: string;
  description: string;
  icon: string;
}

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
  { step: 3, title: 'Déploiement', description: 'Formation dispensée par des experts praticiens, dans vos locaux ou dans nos campus.' },
  { step: 4, title: 'Évaluation', description: 'Mesure de l\'impact, certification des participants, recommandations de suivi.' },
];

export const internationalPresence = [
  { country: 'Abidjan', countryFull: 'Côte d\'Ivoire', desc: 'Learning Center principal — Certificats professionnels, séminaires et événements phares', flag: '🇨🇮', link: '/programmes' },
  { country: 'Oxford', countryFull: 'Royaume-Uni', desc: 'Learning Center Oxford — Programmes exécutifs et certifications internationales', flag: '🇬🇧', link: 'https://www.ethsun-oxford.uk' },
  { country: 'Maurice', countryFull: 'Île Maurice', desc: 'Learning Center Maurice — Tourisme, loisirs, hôtellerie et aménagement touristique des territoires', flag: '🇲🇺', link: '/international/maurice' },
  { country: 'Singapour', countryFull: 'Singapour', desc: 'Learning Center Singapour — Éthique, bonne gouvernance, conformité réglementaire et anticorruption', flag: '🇸🇬', link: '/international/singapour' },
];

