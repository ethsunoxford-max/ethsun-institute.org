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
  photo?: string;
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
    domain: 'Immobilier et BTP',
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
    domain: 'Evènement',
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
    domain: 'Métiers de la formation',
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
  { id: 'p1', title: 'Ingénierie de la Commande Publique', slug: 'ingenierie-commande-publique', description: 'Maîtrisez le cycle complet des marchés publics', certificateLevel: 'Certificat Professionnel', domain: 'Gouvernance de service public', duration: '4 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-indigo-800 to-slate-900', image: '/images/minister-speech.jpg',
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
  { id: 'p2', title: 'Management d\'Institution de Formation', slug: 'management-institution-formation', description: 'Pilotez efficacement votre institution de formation en maîtrisant la stratégie d\'établissement, l\'ingénierie de formation, la gestion financière et la démarche qualité. Ce programme forme les directeurs et managers d\'organismes de formation aux meilleures pratiques de gouvernance pédagogique et institutionnelle, conformes aux référentiels nationaux et internationaux.', certificateLevel: 'Certificat Professionnel', domain: 'Banque/Finance/Admin entreprises', duration: '3 mois', format: 'En ligne', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-purple-800 to-slate-900', image: '/images/ethsun-doctors.jpg',
    objectives: [
      "Élaborer une vision stratégique partagée pour une institution de formation",
      "Comprendre les rôles et responsabilités des organes de gouvernance éducative",
      "Appréhender les leviers de performance des établissements éducatifs",
      "Intégrer les dimensions RH, budgétaire, pédagogique et partenariale dans le management",
      "Maîtriser la démarche qualité et les certifications dans la formation professionnelle",
      "Développer un leadership transformationnel au service de l'institution"
    ],
    modules: [
      { title: "Module 1 — Stratégie et gouvernance des institutions de formation", description: "Fondements de la gouvernance éducative, leadership et vision stratégique, organisation des organes de gouvernance, instruments de pilotage et contrats d'objectifs, responsabilité sociétale et gouvernance éthique." },
      { title: "Module 2 — Management des établissements de formation continue", description: "Organisation et gouvernance des établissements éducatifs, pilotage pédagogique, gestion des équipes, gestion budgétaire et financière, partenariats et développement territorial, suivi-évaluation et amélioration continue." },
      { title: "Module 3 — Élaboration et pilotage d'un projet d'établissement", description: "Cadre réglementaire, méthodologie de conception (diagnostic, objectifs, indicateurs, budget), implication des parties prenantes, outils de pilotage et plan d'action, facteurs clés de succès." },
      { title: "Module 4 — Ingénierie de formation et démarche qualité", description: "Analyse des besoins en formation, conception de référentiels de compétences, élaboration de programmes certifiants, certification Qualiopi et normes ISO 29990, évaluation de l'impact des formations." }
    ],
    targetAudience: "Directeurs d'établissements de formation, directeurs pédagogiques, coordinateurs académiques, responsables de centres de formation, consultants en éducation, chefs de département.",
    prerequisites: "Expérience managériale de 3 ans minimum dans le secteur éducatif ou de la formation professionnelle, ou direction d'équipe dans un environnement institutionnel.",
    methods: [
      "Études de cas d'universités et centres de formation performants (Afrique, Europe)",
      "Ateliers de diagnostic stratégique d'établissement",
      "Simulations de planification stratégique",
      "Benchmark de modèles de management en Afrique et en Europe",
      "Élaboration d'un projet institutionnel intégré",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'p3', title: 'Ingénierie du Développement des Collectivités Territoriales', slug: 'ingenierie-collectivites', description: 'Maîtrisez l\'ingénierie du développement territorial : gouvernance locale, gestion budgétaire, passation des marchés publics, smart cities et financement innovant des collectivités. Ce programme prépare les élus, secrétaires généraux et agents de développement à piloter un territoire performant et transparent.', certificateLevel: 'Certificat Professionnel', domain: 'Gouvernance de service public', duration: '4 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-teal-800 to-slate-900', image: '/images/jc-ministers.jpg',
    objectives: [
      "Comprendre les enjeux de la gouvernance territoriale dans un contexte décentralisé",
      "Maîtriser la gestion budgétaire et comptable des collectivités locales",
      "Renforcer le leadership des élus locaux et la gouvernance éthique",
      "Développer des partenariats stratégiques dans le cadre de la coopération décentralisée",
      "Structurer et piloter des projets de développement territorial",
      "Intégrer les mécanismes de participation citoyenne et de redevabilité"
    ],
    modules: [
      { title: "Module 1 — Gouvernance Territoriale et Démocratie Locale", description: "Principes de la gouvernance locale, décentralisation et subsidiarité, mécanismes de participation citoyenne, dispositifs de contrôle et de redevabilité, études de cas africains et internationaux." },
      { title: "Module 2 — Gestion Budgétaire et Comptable des Collectivités", description: "Cadre réglementaire de la gestion financière locale, processus d'élaboration du budget, suivi de l'exécution et gestion de la trésorerie, principes de la comptabilité publique, audit et reddition des comptes." },
      { title: "Module 3 — Leadership des Élus Locaux et Gouvernance Éthique", description: "Fondements du leadership public territorial, prise de décision et communication politique, éthique de l'action publique, prévention des conflits d'intérêts, leadership en contexte de crise." },
      { title: "Module 4 — Diplomatie Territoriale et Coopération Décentralisée", description: "Enjeux de la coopération décentralisée, mobilisation des ressources internationales, partenariats stratégiques entre territoires, projets cofinancés (UE, AFD, BM), communication institutionnelle internationale." }
    ],
    targetAudience: "Élus locaux, maires et présidents de conseils régionaux, secrétaires généraux de collectivités, agents de développement local, directeurs financiers de communes, membres de la société civile.",
    prerequisites: "Exercice ou préparation à une fonction élective ou administrative dans une collectivité territoriale. Aucun prérequis académique strict — l'expérience professionnelle est valorisée.",
    methods: [
      "Exposés participatifs animés par des experts en gouvernance locale",
      "Études de cas et diagnostics territoriaux",
      "Ateliers de simulation de prise de décision",
      "Coaching collectif et jeux de rôle",
      "Modules e-learning sur la plateforme Neuroklax",
      "Atelier présentiel de mise en pratique"
    ]
  },
  { id: 'p4', title: 'Innovation Managériale et Performance', slug: 'innovation-manageriale', description: 'Maîtrisez l\'innovation managériale contemporaine, l\'intégration de l\'intelligence artificielle dans le management et les leviers de performance organisationnelle. Ce programme Executive forme les cadres et dirigeants à transformer leur organisation grâce aux outils de la gestion du changement et du management agile.', certificateLevel: 'Executive Certificate', domain: 'Banque/Finance/Admin entreprises', duration: '3 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-sky-800 to-slate-900', image: '/images/expertise-group-full.jpeg' },
  { id: 'p5', title: 'Leadership et Science de la Décision', slug: 'leadership-decision', description: 'Développez votre leadership stratégique en comprenant les mécanismes cognitifs et émotionnels de la prise de décision. Ce programme Executive forme les dirigeants à exercer une autorité éclairée, à gérer l\'incertitude et à mobiliser leurs équipes autour d\'une vision claire et ambitieuse.', certificateLevel: 'Executive Certificate', domain: 'Banque/Finance/Admin entreprises', duration: '3 mois', format: 'Présentiel', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-11-01', enrollmentStatus: 'coming_soon', badge: null, imageGradient: 'from-rose-800 to-slate-900', image: '/images/utourisme-tribune.jpg' },
  { id: 'p6', title: 'Juriste d\'Entreprise', slug: 'juriste-entreprise', description: 'Devenez un expert juridique maîtrisant le droit des affaires OHADA, le droit du travail et la gestion des risques juridiques. Une formation complète pour les juristes d\'entreprise et les managers confrontés aux enjeux légaux et contractuels.', certificateLevel: 'Certificat de Qualification', domain: 'Banque/Finance/Admin entreprises', duration: '4 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-stone-700 to-slate-900', image: '/images/graduates-seated.jpeg' },
  { id: 'p7', title: 'Conformité Bancaire et IFRS 17', slug: 'conformite-bancaire-ifrs17', description: 'Maîtrisez les normes IFRS 17, les systèmes de conformité réglementaire et les dispositifs anti-blanchiment pour sécuriser votre institution financière. Ce programme intensif forme les responsables conformité, auditeurs et dirigeants bancaires aux exigences légales et éthiques du secteur financier en Afrique.', certificateLevel: 'Certificat d\'Expertise', domain: 'Banque/Finance/Admin entreprises', duration: '3 mois', format: 'En ligne', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-cyan-800 to-slate-900', image: '/images/jc-networking.jpeg' },
  { id: 'p8', title: 'Audit Interne et Contrôle de Gestion', slug: 'audit-interne', description: 'Renforcez vos compétences en audit interne, contrôle de gestion et pilotage de la performance organisationnelle. Idéal pour les auditeurs, contrôleurs et responsables financiers souhaitant structurer et professionnaliser leur pratique.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Banque/Finance/Admin entreprises', duration: '2 mois', format: 'Blended', price: { amount: 900, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-violet-800 to-slate-900', image: '/images/campus-jury.jpeg' },
  { id: 'p9', title: 'Marketing Digital et Growth', slug: 'marketing-digital', description: 'Accélérez votre croissance grâce aux outils du marketing digital — SEO, réseaux sociaux, publicité en ligne et growth hacking. Une formation pratique et immédiatement applicable pour entrepreneurs, PME et professionnels du marketing souhaitant booster leur visibilité.', certificateLevel: 'Certificat d\'Initiation', domain: 'Banque/Finance/Admin entreprises', duration: '6 semaines', format: 'En ligne', price: { amount: 600, currency: 'EUR' }, nextSession: '2026-08-01', enrollmentStatus: 'open', badge: 'Nouveau', imageGradient: 'from-pink-800 to-slate-900', image: '/images/selfie-graduates.jpeg' },
  { id: 'p10', title: 'Supply Chain et Achats Publics', slug: 'supply-chain-achats', description: 'Structurez un processus achats performant et responsable, optimisez la chaîne logistique et maîtrisez la gestion des approvisionnements publics et privés. Ce programme forme les responsables achats et supply chain à réduire les coûts tout en garantissant qualité, conformité et durabilité.', certificateLevel: 'Executive Certificate', domain: 'Industries extractives', duration: '3 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-orange-800 to-slate-900', image: '/images/event-training-1.jpg',
    objectives: [
      "Structurer un processus achats performant et responsable",
      "Optimiser les flux logistiques et la gestion des stocks",
      "Piloter une supply chain agile, résiliente et durable",
      "Maîtriser la gestion des relations fournisseurs et la négociation des contrats",
      "Identifier et gérer les risques logistiques et d'approvisionnement",
      "Intégrer les achats publics responsables dans une démarche RSE"
    ],
    modules: [
      { title: "Module 1 — Politique d'achats et sourcing", description: "Fondamentaux de la fonction achats, politique d'achats : sourcing, appels d'offres, négociation, gestion des approvisionnements et stocks (MRP, JAT, EOQ), achats publics et réglementation UEMOA." },
      { title: "Module 2 — Gestion de la chaîne logistique", description: "Stratégies de gestion de la supply chain, optimisation des flux de matières et de produits, délais, coûts et qualité, digitalisation des opérations logistiques, entrepôts et transport." },
      { title: "Module 3 — Relations fournisseurs et négociation", description: "Développement et évaluation des fournisseurs, techniques de négociation avancée, rédaction et gestion des contrats d'achat, gestion de la relation partenariale long terme." },
      { title: "Module 4 — Risques et performance de la supply chain", description: "Identification et gestion des risques logistiques (ruptures, retards, fraudes), indicateurs de performance (KPIs achats/logistique), audit de la supply chain, résilience et continuité d'activité." }
    ],
    targetAudience: "Responsables des achats et de l'approvisionnement, directeurs logistique, supply chain managers, responsables de la passation des marchés, consultants en gestion de la chaîne logistique.",
    prerequisites: "Expérience professionnelle de 2 ans minimum dans les achats, la logistique ou l'administration. Diplôme Bac+2 ou équivalent.",
    methods: [
      "Cours animés par des experts praticiens de la supply chain",
      "Études de cas d'entreprises africaines et internationales",
      "Simulations de négociation et d'appels d'offres",
      "Travaux de groupe et ateliers de cartographie des flux",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'p11', title: 'Gestion des Ressources Humaines', slug: 'gestion-rh', description: 'Développez une politique RH stratégique, maîtrisez la gestion des talents, le droit social ivoirien et les outils de performance des ressources humaines. Destiné aux DRH, responsables RH et managers en charge du développement des équipes.', certificateLevel: 'Certificat d\'Aptitude', domain: 'Banque/Finance/Admin entreprises', duration: '3 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-fuchsia-800 to-slate-900', image: '/images/cert-remise-officiels.jpg' },
  { id: 'p12', title: 'Intelligence Artificielle pour Managers', slug: 'ia-managers', description: 'Intégrez l\'intelligence artificielle dans votre stratégie managériale et vos processus décisionnels, sans compétences techniques requises. Un programme conçu pour les managers et dirigeants souhaitant tirer parti des outils IA pour gagner en efficacité et en compétitivité.', certificateLevel: 'Certificat d\'Initiation', domain: 'E-Learning', duration: '4 semaines', format: 'En ligne', price: { amount: 500, currency: 'EUR' }, nextSession: '2026-07-01', enrollmentStatus: 'open', badge: 'Nouveau', imageGradient: 'from-lime-800 to-slate-900', image: '/images/jc-medal-man.jpeg' },
  { id: 'p13', title: 'Comptabilité et Finance d\'Entreprise', slug: 'comptabilite-finance', description: 'Maîtrisez les fondamentaux de la comptabilité SYSCOHADA, de l\'analyse financière et du pilotage de la performance d\'entreprise. Une formation essentielle pour les responsables financiers, comptables et dirigeants de PME souhaitant lire et piloter leurs chiffres.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Banque/Finance/Admin entreprises', duration: '3 mois', format: 'Blended', price: { amount: 900, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-yellow-800 to-slate-900', image: '/images/trophee-remise.jpg' },
  { id: 'p14', title: 'Médiation Professionnelle', slug: 'mediation-professionnelle', description: 'Maîtrisez les techniques de médiation professionnelle pour prévenir et résoudre les conflits en entreprise, en institution et dans les territoires. Ce Certificate of Advanced Studies prépare à l\'exercice certifié de la médiation : médiation interne, gestion des conflits d\'intérêts et qualité relationnelle dans les organisations.', certificateLevel: 'Certificate of Advanced Studies', domain: 'Banque/Finance/Admin entreprises', duration: '4 mois', format: 'Blended', price: { amount: 1500, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-zinc-700 to-slate-900', image: '/images/utourisme-audience.jpg',
    objectives: [
      "Maîtriser les fondements théoriques et pratiques de la médiation professionnelle",
      "Conduire un processus de médiation de A à Z en contexte professionnel",
      "Développer les compétences relationnelles du médiateur (écoute, reformulation, gestion des émotions)",
      "Distinguer médiation, conciliation, arbitrage et autres modes alternatifs de règlement",
      "Appliquer la médiation dans les contextes internes (RH, conflits d'équipe) et externes (commercial, territorial)",
      "Intégrer l'éthique professionnelle du médiateur et le cadre déontologique"
    ],
    modules: [
      { title: "Module 1 — Fondements de la médiation professionnelle", description: "Définition et histoire de la médiation, cadre juridique et réglementaire, posture et rôle du médiateur, différences avec conciliation et arbitrage, éthique et déontologie professionnelle du médiateur." },
      { title: "Module 2 — Techniques et processus de médiation", description: "Phases du processus de médiation, techniques d'écoute active et de reformulation, gestion des émotions et de la dynamique relationnelle, identification des besoins et intérêts des parties, rédaction de l'accord de médiation." },
      { title: "Module 3 — Médiation en entreprise et conflits organisationnels", description: "Médiation interne RH et conflits interpersonnels, prévention des conflits d'intérêts et gouvernance éthique, médiation commerciale et contractuelle, médiation dans les institutions et collectivités." },
      { title: "Module 4 — Pratique certifiée et installation professionnelle", description: "Mise en situation complète (cas réels supervisés), constitution du dossier de certification, positionnement et tarification du médiateur professionnel, réseaux professionnels et développement de clientèle." }
    ],
    targetAudience: "DRH et responsables des relations sociales, avocats et juristes, cadres dirigeants et managers, agents des services publics, consultants en développement organisationnel, tout professionnel souhaitant exercer la médiation.",
    prerequisites: "Diplôme universitaire Bac+3 minimum ou expérience professionnelle significative. Aucune formation juridique préalable requise.",
    methods: [
      "Jeux de rôle et mises en situation de médiation filmées",
      "Supervision par des médiateurs certifiés",
      "Études de cas réels (conflits d'entreprise, litiges RH, médiations commerciales)",
      "Ateliers de développement des compétences relationnelles",
      "Modules e-learning sur la plateforme Neuroklax",
      "Préparation à la certification professionnelle"
    ]
  },
  { id: 'p15', title: 'Entrepreneuriat et Création d\'Entreprise', slug: 'entrepreneuriat', description: 'Lancez et développez votre entreprise avec méthode : business plan, financement, marketing et gestion opérationnelle. Un programme complet pour les porteurs de projets, jeunes entrepreneurs et intrapreneurs africains souhaitant concrétiser leur vision.', certificateLevel: 'Certificat d\'Initiation', domain: 'Banque/Finance/Admin entreprises', duration: '6 semaines', format: 'En ligne', price: { amount: 500, currency: 'EUR' }, nextSession: '2026-08-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-red-800 to-slate-900', image: '/images/jc-cert-group-stage.jpeg' },
  { id: 'p16', title: 'Management de Projet ISO 21502', slug: 'management-projet-iso', description: 'Gérez vos projets selon les standards ISO 21502 et les meilleures pratiques du management de projet international. Pour les chefs de projet, coordinateurs et managers opérationnels souhaitant structurer leur approche et optimiser leurs livrables.', certificateLevel: 'Certificat d\'Expertise', domain: 'Banque/Finance/Admin entreprises', duration: '2 mois', format: 'Blended', price: { amount: 900, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-blue-800 to-slate-900', image: '/images/uimmo-group.jpeg' },
  { id: 'p17', title: 'Gouvernance Publique et Anti-Corruption', slug: 'gouvernance-anti-corruption', description: 'Construisez une culture organisationnelle d\'intégrité, maîtrisez les systèmes de conformité éthique et mettez en œuvre des dispositifs anticorruption efficaces dans les institutions publiques et privées. Un Executive Certificate pour les dirigeants, élus et hauts fonctionnaires engagés dans la gouvernance éthique et la lutte contre la corruption.', certificateLevel: 'Executive Certificate', domain: 'Gouvernance de service public', duration: '3 mois', format: 'Présentiel', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-11-01', enrollmentStatus: 'coming_soon', badge: null, imageGradient: 'from-emerald-700 to-slate-900', image: '/images/minister-cert-remise.jpg',
    objectives: [
      "Comprendre les fondements de l'éthique appliquée aux pratiques professionnelles et publiques",
      "Définir, reconnaître et prévenir les différentes formes de conflits d'intérêts",
      "Maîtriser les mécanismes institutionnels de lutte contre la corruption",
      "Intégrer les cadres réglementaires anti-corruption (UNODC, UA, UEMOA)",
      "Mettre en œuvre un programme de conformité éthique dans une organisation",
      "Promouvoir une culture d'intégrité, de redevabilité et de transparence"
    ],
    modules: [
      { title: "Module 1 — Éthique et responsabilité dans les pratiques professionnelles", description: "Définitions et principes de l'éthique professionnelle, responsabilité individuelle et collective, dilemmes éthiques et mécanismes de décision, codes d'éthique et chartes professionnelles, exemples sectoriels (santé, éducation, administration, entreprise)." },
      { title: "Module 2 — Prévention des conflits d'intérêts et intégrité décisionnelle", description: "Typologie des conflits d'intérêts (réels, potentiels, apparents), éthique décisionnelle et principes de transparence, cadres réglementaires et outils de prévention, dispositifs d'alerte et jurisprudences, responsabilités institutionnelles et individuelles." },
      { title: "Module 3 — Mécanismes institutionnels anti-corruption", description: "Conventions internationales anti-corruption (UNCAC, UA), institutions nationales de lutte contre la corruption (HABG, CRIET, CNLCC), contrôle interne et audit public, lanceur d'alerte et protection des témoins." },
      { title: "Module 4 — Mise en place d'un programme de conformité éthique", description: "Diagnostic d'intégrité institutionnelle, conception et déploiement d'un plan anti-corruption, formation des agents et sensibilisation aux enjeux éthiques, pilotage et évaluation du dispositif de conformité." }
    ],
    targetAudience: "Dirigeants et cadres supérieurs des administrations publiques, hauts fonctionnaires, élus locaux et nationaux, responsables de conformité, agents des institutions de contrôle (inspection, audit, cour des comptes).",
    prerequisites: "Expérience professionnelle significative dans une administration publique, une institution internationale ou un secteur régulé. Niveau Bac+4 minimum ou équivalent.",
    methods: [
      "Cours animés par des experts en gouvernance publique et anti-corruption",
      "Études de cas réels (scandales et réformes institutionnelles en Afrique)",
      "Simulations de prise de décision en contexte à risque",
      "Ateliers de rédaction de politique de prévention des conflits d'intérêts",
      "Analyse de codes de conduite sectoriels et de jurisprudences",
      "Atelier présentiel intensif de mise en pratique"
    ]
  },
  { id: 'p18', title: 'Sport Business et Management', slug: 'sport-business', description: 'Maîtrisez le management appliqué à l\'industrie sportive : droits médias, sponsoring, événementiel sportif et gestion de clubs ou fédérations. Une formation innovante pour les professionnels du sport business et du marketing sportif en Afrique.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Banque/Finance/Admin entreprises', duration: '2 mois', format: 'Blended', price: { amount: 800, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-green-800 to-slate-900', image: '/images/cert-group-standing.jpeg' },
  { id: 'p19', title: 'Hôtellerie et Tourisme Durable', slug: 'hotellerie-tourisme-durable', description: 'Développez le tourisme durable, la gestion hôtelière responsable et l\'aménagement des territoires touristiques dans un contexte africain. Une formation de référence qui conjugue excellence opérationnelle et approche durable pour les professionnels du secteur.', certificateLevel: 'Certificat d\'Aptitude', domain: 'Evènement', duration: '3 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-amber-800 to-slate-900', image: '/images/utourisme-conference.jpg' },
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
    quote: "Le Certificat d'Aptitude aux Professions Immobilières d'ETHSUN Institute a été un véritable tournant dans ma carrière. Les modules sur la gestion locative et l'évaluation des actifs immobiliers m'ont permis de structurer mon expertise et d'asseoir ma crédibilité auprès de mes clients institutionnels. Une formation de très haut niveau, ancrée dans les réalités du marché africain.",
    name: 'KESSE René',
    title: "Expert en Gestion et Finance Immobilière",
    company: "Côte d'Ivoire",
    initials: 'KR',
  },
  {
    quote: "Le Certificat d'Expertise en Éthique et Gouvernance des Services Publics d'ETHSUN Institute a profondément enrichi ma pratique professionnelle. À travers ce programme, j'ai acquis des outils concrets pour renforcer l'intégrité, la transparence et la redevabilité au sein de mon institution. Je recommande vivement cette formation à tout cadre soucieux d'excellence dans la gestion publique.",
    name: 'BOUANH Georgette eps. KOUASSI',
    title: 'Directrice',
    company: "Ministère de la Jeunesse, de l'Insertion Professionnelle et du Service Civique, CI",
    initials: 'BG',
  },
  {
    quote: "ETHSUN Institute m'a doté des outils stratégiques essentiels pour piloter efficacement mon équipe et structurer notre approche de la gestion institutionnelle. Un programme d'excellence, ancré dans les réalités africaines, avec des formateurs d'un niveau remarquable.",
    name: 'SIDIBE Mamadou',
    title: 'Directeur de Cabinet Adjoint du Président du CESEC',
    company: 'Conseil Économique, Social, Environnemental et Culturel — CI',
    initials: 'SM',
    photo: '/images/alumni-sidibe-mamadou.jpg',
  },
  {
    quote: "La formation en gouvernance publique d'ETHSUN m'a permis de structurer et renforcer mes pratiques managériales. La rigueur académique combinée à l'expertise terrain des formateurs est un atout inestimable pour tout cadre soucieux de performance institutionnelle.",
    name: 'BOUA ADON Noël',
    title: "Directeur d'Agence (retraite)",
    company: 'SGBCI — Côte d'Ivoire',
    initials: 'BN',
    photo: '/images/alumni-boua-adon-noel.jpg',
  },
  {
    quote: "ETHSUN Institute m'a permis d'acquérir une vision globale et structurée du management de projet. Le programme est immédiatement applicable sur le terrain. C'est une formation de référence pour les cadres qui souhaitent avoir un réel impact dans leur organisation.",
    name: 'NEBOUT Etienne',
    title: 'Directeur Exécutif chargé de la Coordination des Projets',
    company: 'ONG VIF — Côte d'Ivoire',
    initials: 'NE',
    photo: '/images/alumni-nebout-etienne.jpg',
  },
  {
    quote: "En tant que dirigeant d'entreprise, la formation ETHSUN m'a apporté les clés stratégiques pour structurer mon organisation, optimiser mes processus et développer une vision à long terme. Un investissement qui a directement impacté la performance de mon entreprise.",
    name: "N'GUESSAN KOUASSI Benjamin",
    title: 'Directeur Général',
    company: 'RevServices — Côte d'Ivoire',
    initials: 'NB',
    photo: '/images/alumni-nguessan-benjamin.jpg',
  },
  {
    quote: "Grâce à la certification ETHSUN, j'ai pu structurer et professionnaliser ma gestion des ressources humaines. La formation m'a donné les outils concrets pour piloter mon cabinet avec rigueur et créer de la valeur pour mes clients.",
    name: 'BOARE Abibatou',
    title: 'Gérante',
    company: 'Juris RH Conseils — Côte d'Ivoire',
    initials: 'BA',
    photo: '/images/alumni-boare-abibatou.jpg',
  },
  {
    quote: "La formation en conformité bancaire et en management d'ETHSUN Institute est d'un niveau exceptionnel. Les modules sont parfaitement adaptés aux réalités du secteur financier africain. Je recommande sans hésitation à tous les cadres du secteur bancaire.",
    name: 'KOUAME KOUAKOU Jean-Jacques',
    title: 'Responsable du Service Formation',
    company: 'NSIA Banque — Côte d'Ivoire',
    initials: 'KJ',
    photo: '/images/alumni-kouame-jj.jpg',
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
  'Industries extractives',
  'Gouvernance de service public',
  'Immobilier et BTP',
  'Collectivités décentralisées',
  'Métiers de la formation',
  'Banque/Finance/Admin entreprises',
  'E-Learning',
  'Formation Sur Mesure',
  'Evènement',
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
      email: 'formation@ethsun-institute.org',
    },
    {
      name: 'Oxford – Science Park',
      address: 'Wood Centre for Innovation, Quarry Road, Headington, Oxford OX3 8SB',
      country: 'United Kingdom',
      phone: '+44 7424 201585',
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
  { country: 'Abidjan', countryFull: 'Côte d\'Ivoire', desc: 'Learning Center Afrique — Certificats professionnels, séminaires et événements phares', flag: '🇨🇮', link: '/programmes' },
  { country: 'Oxford', countryFull: 'Royaume-Uni', desc: 'Learning Center Oxford — Programmes exécutifs, certifications internationales & boot camp international', flag: '🇬🇧', link: 'https://www.ethsun-oxford.uk' },
  { country: 'Maurice', countryFull: 'Île Maurice', desc: 'Training Delivery Hub Maurice — Tourisme, loisirs, hôtellerie et aménagement touristique des territoires', flag: '🇲🇺', link: '/international/maurice' },
  { country: 'Singapour', countryFull: 'Singapour', desc: 'Training Delivery Hub Singapour — Éthique, bonne gouvernance, conformité réglementaire et anticorruption', flag: '🇸🇬', link: '/international/singapour' },
  { country: 'Genève', countryFull: 'Suisse', desc: 'Training Delivery Hub Genève — Collectivités décentralisées, gouvernance locale et coopération internationale', flag: '🇨🇭', link: '/international/geneve' },
];

