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
  { id: 'p4', title: 'Innovation Managériale et Performance', slug: 'innovation-manageriale', description: 'Maîtrisez l\'innovation managériale contemporaine, l\'intégration de l\'intelligence artificielle dans le management et les leviers de performance organisationnelle. Ce programme Executive forme les cadres et dirigeants à transformer leur organisation grâce aux outils de la gestion du changement et du management agile.', certificateLevel: 'Executive Certificate', domain: 'Banque/Finance/Admin entreprises', duration: '3 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-sky-800 to-slate-900', image: '/images/expertise-group-full.jpeg',
    objectives: [
      "Comprendre les leviers de l'innovation managériale contemporaine et leurs applications",
      "Intégrer l'intelligence artificielle comme outil de transformation et de pilotage managérial",
      "Mettre en œuvre des modèles de gouvernance innovants dans son organisation",
      "Renforcer la capacité d'adaptation, d'expérimentation et de création de valeur",
      "Favoriser une culture de l'innovation, de l'intelligence collective et de l'organisation apprenante",
      "Utiliser les technologies disruptives pour améliorer la performance des équipes"
    ],
    modules: [
      { title: "Module 1 — Innovation managériale et nouvelles formes de gouvernance", description: "Management agile, participatif et responsabilisant, nouveaux modes de gouvernance et d'organisation, leadership partagé et empowerment des équipes, culture d'innovation et organisation apprenante." },
      { title: "Module 2 — Technologies disruptives et performance organisationnelle", description: "IA, big data, automatisation et algorithmes dans le management, méthodes d'expérimentation : design thinking, lean startup, outils de pilotage augmenté par les données, digitalisation des processus RH et managériaux." },
      { title: "Module 3 — Intelligence collective et gestion du changement", description: "Intelligence collective et innovation participative, conduite du changement organisationnel, gestion des résistances et facilitation de l'adoption, développement des compétences et hybridation des métiers." },
      { title: "Module 4 — Mesure de la performance et indicateurs d'innovation", description: "Indicateurs de performance augmentée (efficience, bien-être, durabilité), tableaux de bord de la performance managériale, évaluation de l'impact des initiatives d'innovation, ajustement et amélioration continue des pratiques." }
    ],
    targetAudience: "Directeurs et managers souhaitant développer des pratiques de gestion innovantes, responsables de la transformation digitale, consultants en management stratégique, chefs de projet, responsables RH et du développement des talents.",
    prerequisites: "Expérience managériale de 2 ans minimum. Diplôme Bac+3 ou équivalent. Aucune compétence technique en IA n'est requise.",
    methods: [
      "Analyse de modèles managériaux innovants (Google, Spotify, organisations africaines de référence)",
      "Démonstration d'outils d'IA générative appliqués à la gestion",
      "Atelier de design d'un modèle organisationnel innovant",
      "Études de cas de transformation réussie d'organisations",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'p5', title: 'Leadership et Science de la Décision', slug: 'leadership-decision', description: 'Développez votre leadership stratégique en comprenant les mécanismes cognitifs et émotionnels de la prise de décision. Ce programme Executive forme les dirigeants à exercer une autorité éclairée, à gérer l\'incertitude et à mobiliser leurs équipes autour d\'une vision claire et ambitieuse.', certificateLevel: 'Executive Certificate', domain: 'Banque/Finance/Admin entreprises', duration: '3 mois', format: 'Présentiel', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-11-01', enrollmentStatus: 'coming_soon', badge: null, imageGradient: 'from-rose-800 to-slate-900', image: '/images/utourisme-tribune.jpg',
    objectives: [
      "Comprendre les mécanismes cognitifs et émotionnels à l'œuvre dans la prise de décision",
      "Identifier les biais cognitifs et les facteurs d'influence sur les décisions stratégiques",
      "Développer une posture de leadership éthique, stratégique et adaptatif",
      "Maîtriser les techniques de prise de décision en environnement complexe et incertain",
      "Renforcer la capacité à mobiliser les équipes autour d'une vision claire",
      "Exercer un leadership transformationnel inspirant confiance et responsabilité"
    ],
    modules: [
      { title: "Module 1 — Fondements du leadership et théories de la décision", description: "Grandes théories du leadership (situationnel, transformationnel, éthique), pouvoir, autorité, influence et posture du leader, modèles décisionnels (arbre de décision, matrices multicritères, théorie des jeux), biais cognitifs et rationalité limitée." },
      { title: "Module 2 — Neurosciences de la décision et biais cognitifs", description: "Neurosciences appliquées au leadership et à la décision, biais de confirmation, effet de groupe, heuristiques et erreurs de jugement, intuition vs raisonnement analytique, autodiagnostic du profil décisionnel." },
      { title: "Module 3 — Décision en contexte d'incertitude et de crise", description: "Prise de décision en environnements VUCA (Volatile, Incertain, Complexe, Ambigu), gestion du stress décisionnel et de la pression, outils d'analyse de risques, décision collaborative et intelligence collective, exercices de simulation de crise." },
      { title: "Module 4 — Leadership éthique et vision stratégique", description: "Leadership éthique et prise de décision responsable, communication de la vision stratégique, gestion des conflits d'intérêts et dilemmes éthiques, leadership transformationnel et mobilisation des équipes, développement du plan de leadership personnel." }
    ],
    targetAudience: "Cadres dirigeants, responsables de la stratégie, managers seniors, décideurs publics et privés, chefs de projet stratégique, coachs d'organisation, toute personne appelée à exercer une fonction de leadership.",
    prerequisites: "Expérience managériale ou de direction de 3 ans minimum. Diplôme Bac+4 ou équivalent, ou expérience professionnelle significative en management.",
    methods: [
      "Études de cas réels de décisions stratégiques (politique, finance, diplomatie, Afrique)",
      "Autodiagnostic du profil décisionnel et du style de leadership",
      "Jeux de rôles simulant des situations de crise ou de conflit d'intérêt",
      "Analyses de grandes décisions historiques et leurs conséquences",
      "Modules e-learning sur la plateforme Neuroklax",
      "Coaching individuel de développement du leadership"
    ]
  },
  { id: 'p6', title: 'Juriste d\'Entreprise', slug: 'juriste-entreprise', description: 'Devenez un expert juridique maîtrisant le droit des affaires OHADA, le droit du travail et la gestion des risques juridiques. Une formation complète pour les juristes d\'entreprise et les managers confrontés aux enjeux légaux et contractuels.', certificateLevel: 'Certificat de Qualification', domain: 'Banque/Finance/Admin entreprises', duration: '4 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-stone-700 to-slate-900', image: '/images/graduates-seated.jpeg',
    objectives: [
      "Maîtriser le cadre juridique des affaires OHADA et son application pratique en entreprise",
      "Appréhender les principes du droit du travail et gérer les relations sociales",
      "Identifier, prévenir et gérer les risques juridiques dans l'entreprise",
      "Rédiger et négocier les contrats commerciaux et partenariats d'affaires",
      "Comprendre les enjeux de la conformité éthique et réglementaire",
      "Intégrer les normes de gouvernance d'entreprise et de responsabilité sociale"
    ],
    modules: [
      { title: "Module 1 — Droit des affaires OHADA et contrats commerciaux", description: "Droit commercial OHADA (Acte uniforme), formes sociales et gouvernance des entreprises, rédaction et négociation des contrats commerciaux, droit des sûretés et garanties, contentieux commercial et arbitrage CCJA." },
      { title: "Module 2 — Droit du travail et relations sociales", description: "Code du travail ivoirien et droit social UEMOA, contrats de travail, recrutement et licenciement, relations avec les institutions représentatives du personnel, gestion des conflits sociaux, hygiène et sécurité au travail." },
      { title: "Module 3 — Conformité éthique et gestion des risques juridiques", description: "Cartographie des risques juridiques de l'entreprise, conformité aux réglementations sectorielles, dispositifs anti-corruption et protection des données (ARTCI), responsabilité des dirigeants, gestion des litiges et contentieux." },
      { title: "Module 4 — Gouvernance d'entreprise et droit fiscal", description: "Principes de gouvernance d'entreprise, droits et devoirs des actionnaires et administrateurs, fiscalité des entreprises (IS, TVA, droit d'enregistrement), optimisation fiscale légale, gestion des contrôles fiscaux." }
    ],
    targetAudience: "Juristes d'entreprise, responsables juridiques et compliance, directeurs administratifs et financiers, secrétaires généraux, managers confrontés aux enjeux légaux et contractuels, étudiants en droit des affaires.",
    prerequisites: "Diplôme Bac+3 minimum en droit, gestion ou équivalent. Une expérience professionnelle dans un environnement juridique ou d'entreprise est appréciée.",
    methods: [
      "Cours magistraux animés par des juristes praticiens et avocats d'affaires",
      "Études de cas tirés du contentieux africain (OHADA, UEMOA)",
      "Ateliers de rédaction contractuelle et analyse de clauses",
      "Simulations de négociation et de gestion de litiges",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'p7', title: 'Conformité Bancaire et IFRS 17', slug: 'conformite-bancaire-ifrs17', description: 'Maîtrisez les normes IFRS 17, les systèmes de conformité réglementaire et les dispositifs anti-blanchiment pour sécuriser votre institution financière. Ce programme intensif forme les responsables conformité, auditeurs et dirigeants bancaires aux exigences légales et éthiques du secteur financier en Afrique.', certificateLevel: 'Certificat d\'Expertise', domain: 'Banque/Finance/Admin entreprises', duration: '3 mois', format: 'En ligne', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-cyan-800 to-slate-900', image: '/images/jc-networking.jpeg',
    objectives: [
      "Maîtriser les normes IFRS 17 et leurs implications pour les institutions financières",
      "Identifier les enjeux de la conformité réglementaire dans le secteur bancaire et assurantiel",
      "Déployer une démarche éthique et anticorruption efficace dans une institution financière",
      "Concevoir des dispositifs de contrôle interne, d'alerte et de prévention du blanchiment",
      "Gérer les risques de non-conformité et de conflits d'intérêts",
      "Mettre en place un programme de conformité intégré aux processus métier bancaires"
    ],
    modules: [
      { title: "Module 1 — Normes IFRS 17 et reporting financier", description: "Introduction aux normes IFRS et transition vers IFRS 17, principes de comptabilisation des contrats d'assurance, modèles de mesure (BBA, PAA, VFA), impact sur les états financiers et le reporting des assureurs, communication avec les régulateurs et les investisseurs." },
      { title: "Module 2 — Conformité réglementaire bancaire et financière", description: "Cadre réglementaire de la conformité bancaire (BCEAO, COBAC, Bâle III), obligations KYC/KYB et lutte anti-blanchiment (LCB-FT), conformité aux normes FATCA et échange automatique d'informations, protection des données clients et cybersécurité financière." },
      { title: "Module 3 — Éthique bancaire et gouvernance financière", description: "Fondamentaux de la conformité : cadre légal, risques, obligations, normes internationales ISO 37001 (anticorruption) et RSE, dispositifs d'alerte éthique et protection des lanceurs d'alerte, codes de conduite et chartes éthiques dans les institutions financières." },
      { title: "Module 4 — Audit de conformité et contrôle interne", description: "Cartographie des risques de conformité, conception et déploiement d'un plan de conformité intégré, formation des agents et sensibilisation aux enjeux éthiques, pilotage et évaluation du dispositif de conformité, préparation aux inspections des autorités de contrôle." }
    ],
    targetAudience: "Responsables conformité, compliance officers, auditeurs internes et externes, directeurs des risques, responsables juridiques, dirigeants bancaires et assurantiels, agents des autorités de régulation (BCEAO, COBAC, ARTCI).",
    prerequisites: "Diplôme Bac+4 minimum en finance, droit ou comptabilité. Expérience professionnelle dans le secteur bancaire, financier ou assurantiel fortement recommandée.",
    methods: [
      "Cours animés par des experts en conformité bancaire et régulation financière",
      "Études de cas (scandales financiers : Enron, Wirecard, cas africains)",
      "Atelier de construction d'un plan de conformité pour institution financière",
      "Analyse de dispositifs éthiques réels d'entreprises financières africaines",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'p8', title: 'Audit Interne et Contrôle de Gestion', slug: 'audit-interne', description: 'Renforcez vos compétences en audit interne, contrôle de gestion et pilotage de la performance organisationnelle. Idéal pour les auditeurs, contrôleurs et responsables financiers souhaitant structurer et professionnaliser leur pratique.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Banque/Finance/Admin entreprises', duration: '2 mois', format: 'Blended', price: { amount: 900, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-violet-800 to-slate-900', image: '/images/campus-jury.jpeg',
    objectives: [
      "Analyser les états financiers et modéliser la performance économique de l'entreprise",
      "Maîtriser les techniques d'audit interne et les normes IIA",
      "Construire des outils de pilotage et de contrôle de gestion adaptés",
      "Identifier les leviers d'amélioration de la rentabilité et de la performance",
      "Concevoir et déployer un système de contrôle interne efficace",
      "Préparer et conduire des missions d'audit et des rapports de conformité"
    ],
    modules: [
      { title: "Module 1 — Analyse financière et performance d'entreprise", description: "États financiers SYSCOHADA : bilan, compte de résultat, tableau de flux, ratios de rentabilité, solvabilité et structure financière, analyse des marges et du seuil de rentabilité, diagnostic financier complet, lecture et interprétation des rapports annuels." },
      { title: "Module 2 — Contrôle de gestion et pilotage de la performance", description: "Budget, prévisionnel et suivi budgétaire, outils de modélisation financière sur tableur, tableau de bord de pilotage et reporting de gestion, simulation de scénarios (croissance, crise, restructuration), indicateurs clés de performance (KPIs)." },
      { title: "Module 3 — Audit interne et normes professionnelles", description: "Cadre de référence international de l'audit interne (IIA), planification et programmation d'une mission d'audit, techniques de collecte de preuves et d'analyse, rédaction du rapport d'audit et suivi des recommandations, audit de conformité réglementaire et opérationnel." },
      { title: "Module 4 — Contrôle interne et gestion des risques", description: "Référentiel COSO de contrôle interne, cartographie des risques opérationnels et financiers, conception de dispositifs de contrôle interne, évaluation de l'efficacité des contrôles, audit informatique et contrôle des systèmes d'information." }
    ],
    targetAudience: "Auditeurs internes et contrôleurs de gestion, directeurs financiers et responsables comptables, chefs de mission d'audit, responsables du contrôle interne, dirigeants de PME souhaitant structurer leur pilotage financier.",
    prerequisites: "Diplôme Bac+3 minimum en finance, comptabilité ou gestion. Expérience professionnelle en comptabilité ou gestion financière souhaitée.",
    methods: [
      "Lecture commentée d'états financiers réels d'entreprises africaines",
      "Modélisation sur tableur de scénarios financiers",
      "Simulation de missions d'audit interne complètes",
      "Diagnostic de performance d'une entreprise type",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'p9', title: 'Marketing Digital et Growth', slug: 'marketing-digital', description: 'Accélérez votre croissance grâce aux outils du marketing digital — SEO, réseaux sociaux, publicité en ligne et growth hacking. Une formation pratique et immédiatement applicable pour entrepreneurs, PME et professionnels du marketing souhaitant booster leur visibilité.', certificateLevel: 'Certificat d\'Initiation', domain: 'Banque/Finance/Admin entreprises', duration: '6 semaines', format: 'En ligne', price: { amount: 600, currency: 'EUR' }, nextSession: '2026-08-01', enrollmentStatus: 'open', badge: 'Nouveau', imageGradient: 'from-pink-800 to-slate-900', image: '/images/selfie-graduates.jpeg',
    objectives: [
      "Élaborer une stratégie marketing digitale innovante et différenciante",
      "Maîtriser les outils du marketing digital : SEO, SEA, réseaux sociaux, email marketing",
      "Piloter une communication d'entreprise cohérente et engageante sur les canaux digitaux",
      "Intégrer les nouveaux comportements des consommateurs et les données clients",
      "Concevoir et déployer des campagnes de growth hacking et de publicité en ligne",
      "Mesurer et optimiser la performance des actions marketing (KPIs, ROI)"
    ],
    modules: [
      { title: "Module 1 — Fondamentaux du marketing digital et stratégie de marque", description: "Les fondamentaux du marketing stratégique et opérationnel, brand content, storytelling et réputation digitale, positionnement et différenciation, cycle de vie client et parcours d'achat digital, communication corporate interne et externe." },
      { title: "Module 2 — SEO, SEA et visibilité en ligne", description: "Référencement naturel (SEO) : audit, optimisation on-page et off-page, stratégie de contenu, publicité en ligne (Google Ads, Meta Ads), création et optimisation de campagnes payantes, analyse des résultats et optimisation du ROI, outils : Google Analytics, Search Console, Meta Business Suite." },
      { title: "Module 3 — Réseaux sociaux, influence et engagement client", description: "Stratégie réseaux sociaux (LinkedIn, Instagram, Facebook, TikTok, WhatsApp Business), création de contenus viraux et marketing d'influence, communauté et engagement des abonnés, social selling et prospection digitale, gestion de la e-réputation et des crises." },
      { title: "Module 4 — Growth hacking, email marketing et mesure de performance", description: "Techniques de growth hacking et d'acquisition à coût réduit, email marketing et automatisation (séquences de nurturing), entonnoir de conversion et optimisation du tunnel de vente, tableaux de bord marketing et indicateurs de performance (KPIs), outils : Mailchimp, HubSpot, Canva." }
    ],
    targetAudience: "Responsables marketing et communication, entrepreneurs et dirigeants de PME/TPE, chargés de communication digitale, créateurs d'entreprise, consultants en marketing, community managers souhaitant évoluer vers des fonctions stratégiques.",
    prerequisites: "Aucun prérequis technique spécifique. Une expérience ou un intérêt pour le marketing ou la communication est un plus. Diplôme Bac+2 ou expérience professionnelle.",
    methods: [
      "Analyse de campagnes innovantes réelles (Airbnb, Tesla, marques africaines)",
      "Création d'une stratégie de marque et d'un plan de communication",
      "Ateliers pratiques de création de contenu et de campagnes publicitaires",
      "Simulations de lancement de produit sur les réseaux sociaux",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
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
  { id: 'p11', title: 'Gestion des Ressources Humaines', slug: 'gestion-rh', description: 'Développez une politique RH stratégique, maîtrisez la gestion des talents, le droit social ivoirien et les outils de performance des ressources humaines. Destiné aux DRH, responsables RH et managers en charge du développement des équipes.', certificateLevel: 'Certificat d\'Aptitude', domain: 'Banque/Finance/Admin entreprises', duration: '3 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-fuchsia-800 to-slate-900', image: '/images/cert-remise-officiels.jpg',
    objectives: [
      "Développer une politique RH stratégique alignée sur les objectifs de l'organisation",
      "Maîtriser les processus de recrutement, d'intégration et de fidélisation des talents",
      "Gérer les relations sociales et maîtriser le droit du travail ivoirien et UEMOA",
      "Concevoir et piloter des plans de formation et de développement des compétences",
      "Mettre en œuvre des outils d'évaluation et de gestion de la performance",
      "Digitaliser les processus RH et utiliser les outils SIRH modernes"
    ],
    modules: [
      { title: "Module 1 — Stratégie RH et management des talents", description: "Rôle stratégique de la fonction RH, conception d'une politique RH alignée sur la stratégie d'entreprise, gestion des talents : attraction, développement, fidélisation, gestion prévisionnelle des emplois et des compétences (GPEC), marque employeur et attractivité." },
      { title: "Module 2 — Droit du travail et relations sociales", description: "Code du travail ivoirien et droit social UEMOA, rédaction des contrats de travail, gestion des procédures disciplinaires et de licenciement, dialogue social et relations avec les institutions représentatives du personnel, hygiène, sécurité et conditions de travail (HSCT)." },
      { title: "Module 3 — Formation professionnelle et gestion des compétences", description: "Analyse des besoins en formation (ABF), élaboration du plan de développement des compétences, ingénierie et déploiement des actions de formation, évaluation de la formation et mesure du retour sur investissement, certification Qualiopi et dispositifs FDFP." },
      { title: "Module 4 — Pilotage de la performance et digitalisation RH", description: "Systèmes d'évaluation et d'appréciation des performances, rémunération et politique salariale, tableaux de bord RH et indicateurs (absentéisme, turnover, masse salariale), outils SIRH et digitalisation de la gestion RH, HR analytics et aide à la décision." }
    ],
    targetAudience: "Directeurs et responsables des ressources humaines, DRH, responsables de la formation, managers en charge du développement des équipes, chefs d'entreprise et dirigeants de PME, gestionnaires de paie souhaitant évoluer.",
    prerequisites: "Diplôme Bac+3 minimum ou expérience professionnelle significative en gestion d'équipe ou en administration du personnel. Aucun prérequis juridique strict.",
    methods: [
      "Cours animés par des DRH et juristes praticiens",
      "Études de cas de politiques RH d'entreprises africaines et internationales",
      "Ateliers de rédaction de documents RH (fiches de poste, contrats, plans de formation)",
      "Simulations d'entretiens annuels et de procédures disciplinaires",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'p12', title: 'Intelligence Artificielle pour Managers', slug: 'ia-managers', description: 'Intégrez l\'intelligence artificielle dans votre stratégie managériale et vos processus décisionnels, sans compétences techniques requises. Un programme conçu pour les managers et dirigeants souhaitant tirer parti des outils IA pour gagner en efficacité et en compétitivité.', certificateLevel: 'Certificat d\'Initiation', domain: 'E-Learning', duration: '4 semaines', format: 'En ligne', price: { amount: 500, currency: 'EUR' }, nextSession: '2026-07-01', enrollmentStatus: 'open', badge: 'Nouveau', imageGradient: 'from-lime-800 to-slate-900', image: '/images/jc-medal-man.jpeg',
    objectives: [
      "Comprendre les fondamentaux de l'intelligence artificielle et ses enjeux pour les managers",
      "Intégrer l'IA dans la stratégie managériale et les processus décisionnels",
      "Identifier les cas d'usage de l'IA dans son secteur d'activité",
      "Utiliser les outils d'IA générative pour gagner en productivité",
      "Évaluer les impacts organisationnels, éthiques et humains de l'IA",
      "Piloter une démarche de transformation IA dans son équipe ou organisation"
    ],
    modules: [
      { title: "Module 1 — Comprendre l'IA : fondamentaux et enjeux stratégiques", description: "Démystifier l'IA : machine learning, deep learning, IA générative, panorama des technologies IA et de leurs applications sectorielles, IA comme levier de transformation organisationnelle, enjeux stratégiques, concurrentiels et géopolitiques de l'IA." },
      { title: "Module 2 — IA générative et productivité managériale", description: "Maîtrise des outils d'IA générative (ChatGPT, Claude, Gemini, Copilot), prompt engineering et optimisation des requêtes, automatisation des tâches à faible valeur ajoutée, production de documents, analyses et rapports assistés par IA, cas pratiques sectoriels." },
      { title: "Module 3 — IA appliquée au management et à la décision", description: "Big data et analyse prédictive pour la décision managériale, IA dans les RH (recrutement, évaluation, formation), IA dans le marketing (personnalisation, ciblage, prévision), IA dans la finance et la comptabilité, tableau de bord enrichi par l'IA." },
      { title: "Module 4 — Transformation IA et éthique de l'IA", description: "Conduite d'une transformation IA dans une organisation, éthique de l'IA : biais algorithmiques, responsabilité, transparence, gouvernance des données et RGPD, impacts de l'IA sur l'emploi et les compétences, élaboration d'un plan de transformation IA pour son organisation." }
    ],
    targetAudience: "Managers et cadres dirigeants souhaitant intégrer l'IA dans leur pratique, directeurs de la transformation digitale, responsables de la stratégie, chefs de projet, dirigeants de PME et d'institutions souhaitant tirer parti de l'IA. Aucune compétence technique requise.",
    prerequisites: "Aucune compétence informatique ou mathématique requise. Expérience professionnelle en management ou direction d'équipe. Curiosité et ouverture aux nouvelles technologies.",
    methods: [
      "Démonstrations en direct d'outils d'IA générative appliqués à des cas concrets",
      "Ateliers pratiques de prompt engineering et d'utilisation des outils IA",
      "Transformation d'un processus métier réel grâce à l'IA",
      "Études de cas de transformation IA réussies (Afrique et international)",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'p13', title: 'Comptabilité et Finance d\'Entreprise', slug: 'comptabilite-finance', description: 'Maîtrisez les fondamentaux de la comptabilité SYSCOHADA, de l\'analyse financière et du pilotage de la performance d\'entreprise. Une formation essentielle pour les responsables financiers, comptables et dirigeants de PME souhaitant lire et piloter leurs chiffres.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Banque/Finance/Admin entreprises', duration: '3 mois', format: 'Blended', price: { amount: 900, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-yellow-800 to-slate-900', image: '/images/trophee-remise.jpg',
    objectives: [
      "Maîtriser les principes fondamentaux de la comptabilité SYSCOHADA",
      "Lire, comprendre et analyser les états financiers d'une entreprise",
      "Utiliser les outils de modélisation financière pour piloter la performance",
      "Identifier les leviers d'amélioration de la rentabilité et de la structure financière",
      "Élaborer un budget prévisionnel et suivre son exécution",
      "Prendre des décisions stratégiques éclairées sur la base des données financières"
    ],
    modules: [
      { title: "Module 1 — Fondamentaux de la comptabilité SYSCOHADA", description: "Principes comptables fondamentaux et plan SYSCOHADA, enregistrements comptables et journaux, grand livre et balance des comptes, états financiers annuels : bilan, compte de résultat et état des flux de trésorerie, révision des comptes et lettrage." },
      { title: "Module 2 — Analyse financière et diagnostic d'entreprise", description: "Lecture et interprétation des états financiers, ratios de rentabilité, de solvabilité et de liquidité, analyse de la structure financière et du fonds de roulement, diagnostic financier complet d'une entreprise, analyse comparative sectorielle." },
      { title: "Module 3 — Modélisation et pilotage de la performance financière", description: "Budget prévisionnel et compte de résultat prévisionnel, seuil de rentabilité et point mort, outils de modélisation financière sur Excel, tableau de bord financier et indicateurs clés (KPIs), simulation de scénarios (croissance, crise, restructuration)." },
      { title: "Module 4 — Fiscalité d'entreprise et décisions financières stratégiques", description: "Fiscalité des entreprises : IS, TVA, taxe patronale, optimisation fiscale légale, financement de l'entreprise (fonds propres, emprunts, subventions), évaluation d'investissements (VAN, TRI, délai de récupération), gestion de trésorerie et relation bancaire." }
    ],
    targetAudience: "Responsables financiers et comptables, directeurs administratifs et financiers, dirigeants de PME et TPE souhaitant maîtriser leurs chiffres, contrôleurs de gestion débutants, entrepreneurs en phase de création ou de développement.",
    prerequisites: "Niveau Bac+2 minimum ou expérience professionnelle en gestion administrative. Une première exposition à la comptabilité est utile mais non obligatoire.",
    methods: [
      "Exposés illustrés par des cas chiffrés tirés d'entreprises ivoiriennes",
      "Exercices pratiques de saisie comptable et d'établissement d'états financiers",
      "Ateliers de modélisation financière sur tableur",
      "Lectures et analyses d'états financiers réels",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
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
  { id: 'p15', title: 'Entrepreneuriat et Création d\'Entreprise', slug: 'entrepreneuriat', description: 'Lancez et développez votre entreprise avec méthode : business plan, financement, marketing et gestion opérationnelle. Un programme complet pour les porteurs de projets, jeunes entrepreneurs et intrapreneurs africains souhaitant concrétiser leur vision.', certificateLevel: 'Certificat d\'Initiation', domain: 'Banque/Finance/Admin entreprises', duration: '6 semaines', format: 'En ligne', price: { amount: 500, currency: 'EUR' }, nextSession: '2026-08-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-red-800 to-slate-900', image: '/images/jc-cert-group-stage.jpeg',
    objectives: [
      "Structurer et valider une idée d'entreprise avec les outils du business model",
      "Élaborer un business plan complet et convaincant pour lever des financements",
      "Maîtriser les étapes de création et d'enregistrement d'une entreprise en Côte d'Ivoire",
      "Construire une stratégie marketing et commerciale pour lancer son activité",
      "Gérer les aspects financiers, juridiques et fiscaux d'une jeune entreprise",
      "Développer un réseau d'affaires et identifier les écosystèmes d'accompagnement"
    ],
    modules: [
      { title: "Module 1 — Idéation, business model et validation du projet", description: "Génération et sélection d'idées d'entreprise, méthodologie lean startup et test d'hypothèses, Business Model Canvas (BMC) et Value Proposition Canvas, étude de marché et analyse de la concurrence, validation du concept avec les premiers clients (MVP)." },
      { title: "Module 2 — Création de l'entreprise et aspects juridiques", description: "Formes juridiques d'entreprises (SARL, SA, SAS, entreprise individuelle, OHADA), démarches de création et enregistrement (CEPICI, CGA), fiscalité du créateur et régimes d'imposition, contrats commerciaux et protections (marques, brevets), gestion des associés et pacte d'actionnaires." },
      { title: "Module 3 — Business plan, financement et stratégie commerciale", description: "Rédaction du business plan complet (executive summary, marché, stratégie, finances), prévisionnel financier et plan de trésorerie, sources de financement (banques, microfinance, investisseurs, subventions, diaspora), stratégie commerciale et plan marketing de lancement, pitching et levée de fonds." },
      { title: "Module 4 — Gestion et développement de la jeune entreprise", description: "Management opérationnel de la jeune entreprise, gestion des ressources humaines (premiers recrutements, contrats), pilotage financier et contrôle de gestion simplifié, stratégies de croissance et de scaling, écosystème entrepreneurial africain (incubateurs, accélérateurs, réseaux)." }
    ],
    targetAudience: "Porteurs de projets et entrepreneurs en phase de démarrage, jeunes diplômés souhaitant créer leur entreprise, intrapreneurs cherchant à innover au sein de leur organisation, dirigeants de TPE souhaitant structurer leur activité, membres de la diaspora africaine porteurs de projets.",
    prerequisites: "Aucun prérequis académique spécifique. Une idée ou un projet d'entreprise, même embryonnaire, est recommandé. Diplôme Bac ou expérience professionnelle.",
    methods: [
      "Coaching individuel du projet d'entreprise tout au long du programme",
      "Ateliers de création du Business Model Canvas",
      "Exercices de rédaction du business plan en conditions réelles",
      "Séances de pitch devant un jury d'entrepreneurs et d'investisseurs",
      "Modules e-learning sur la plateforme Neuroklax",
      "Mise en réseau avec l'écosystème entrepreneurial africain"
    ]
  },
  { id: 'p16', title: 'Management de Projet ISO 21502', slug: 'management-projet-iso', description: 'Gérez vos projets selon les standards ISO 21502 et les meilleures pratiques du management de projet international. Pour les chefs de projet, coordinateurs et managers opérationnels souhaitant structurer leur approche et optimiser leurs livrables.', certificateLevel: 'Certificat d\'Expertise', domain: 'Banque/Finance/Admin entreprises', duration: '2 mois', format: 'Blended', price: { amount: 900, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-blue-800 to-slate-900', image: '/images/uimmo-group.jpeg',
    objectives: [
      "Maîtriser les principes et processus du management de projet selon ISO 21502",
      "Structurer le démarrage, la planification et la clôture d'un projet",
      "Utiliser les outils de planification, de suivi et de contrôle de projet (WBS, Gantt, chemin critique)",
      "Gérer les risques, les délais, les coûts et les parties prenantes d'un projet",
      "Coordonner les équipes projet en environnement multiculturel et multidisciplinaire",
      "Intégrer les approches agiles et hybrides dans la gestion de projets complexes"
    ],
    modules: [
      { title: "Module 1 — Fondamentaux du management de projet et ISO 21502", description: "Introduction à la norme ISO 21502 et au cadre PMI, cycle de vie du projet (initialisation, planification, exécution, contrôle, clôture), rôles et responsabilités du chef de projet, charte de projet et registre des parties prenantes, gouvernance et comité de pilotage." },
      { title: "Module 2 — Planification, ordonnancement et maîtrise des coûts", description: "Structure de décomposition du travail (WBS), planification des délais et diagramme de Gantt, méthode du chemin critique (CPM) et PERT, estimation et budgétisation du projet, courbe S et contrôle budgétaire, outils de planification (MS Project, Trello, Asana)." },
      { title: "Module 3 — Gestion des risques et qualité du projet", description: "Identification et évaluation des risques projet, plan de réponse aux risques et mesures d'atténuation, gestion de la qualité (assurance et contrôle qualité), gestion des changements et des avenants, communication projet et reporting aux parties prenantes." },
      { title: "Module 4 — Leadership de projet et approches agiles", description: "Leadership et management des équipes projet multiculturelles, gestion des conflits sur les sites de projet, introduction aux méthodes agiles (Scrum, Kanban), approches hybrides agile/traditionnel pour projets complexes, retour d'expérience et clôture de projet." }
    ],
    targetAudience: "Chefs de projet et coordinateurs de projets, managers opérationnels en charge de projets, responsables de programme et de portefeuille de projets, ingénieurs et techniciens évoluant vers le management de projet, cadres des administrations publiques gérant des projets de développement.",
    prerequisites: "Expérience professionnelle de 2 ans minimum. Diplôme Bac+3 ou équivalent. Avoir participé à au moins un projet dans sa carrière.",
    methods: [
      "Cours animés par des chefs de projet certifiés PMP et ISO",
      "Exercices pratiques de planification sur outils de gestion de projet",
      "Simulation complète d'un projet de A à Z (cas industriel ou de développement)",
      "Études de cas de projets africains et internationaux (mines, BTP, gouvernance)",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
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
  { id: 'p18', title: 'Sport Business et Management', slug: 'sport-business', description: 'Maîtrisez le management appliqué à l\'industrie sportive : droits médias, sponsoring, événementiel sportif et gestion de clubs ou fédérations. Une formation innovante pour les professionnels du sport business et du marketing sportif en Afrique.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Banque/Finance/Admin entreprises', duration: '2 mois', format: 'Blended', price: { amount: 800, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-green-800 to-slate-900', image: '/images/cert-group-standing.jpeg',
    objectives: [
      "Comprendre les fondamentaux de l'industrie sportive et ses modèles économiques",
      "Maîtriser le management et la gouvernance des clubs, fédérations et ligues sportives",
      "Développer des stratégies de sponsoring, de marketing sportif et de droits médias",
      "Concevoir et piloter des événements sportifs de grande envergure",
      "Explorer les opportunités du sport business en Afrique et les enjeux de développement",
      "Intégrer le digital et les nouvelles technologies dans le management sportif"
    ],
    modules: [
      { title: "Module 1 — Économie du sport et modèles d'affaires", description: "Panorama de l'industrie sportive mondiale et africaine, modèles économiques des clubs, fédérations et ligues, sources de revenus : billetterie, droits TV, merchandising, licences, économie des grands événements sportifs (CAN, JO, Coupe du Monde), investissement sportif et valorisation des actifs." },
      { title: "Module 2 — Gouvernance et management des organisations sportives", description: "Gouvernance des fédérations sportives nationales et internationales, management opérationnel d'un club professionnel, droit du sport : statuts, contrats, transferts, gestion des ressources humaines sportives (agents, entraîneurs, joueurs), conformité et lutte contre la corruption dans le sport." },
      { title: "Module 3 — Marketing sportif, sponsoring et droits médias", description: "Stratégie de marketing sportif et image de marque, partenariats et sponsoring : recherche, négociation, activation, droits médias et stratégies de diffusion (TV, streaming, digital), community management et fan engagement digital, endorsement sportif et influence marketing." },
      { title: "Module 4 — Management événementiel et sport en Afrique", description: "Organisation et gestion d'événements sportifs (logistique, sécurité, communication), stratégies de financement et de billetterie des événements, impact économique et social du sport en Afrique, sport et développement durable (ESG), enjeux et opportunités du marché sportif africain." }
    ],
    targetAudience: "Professionnels du sport (dirigeants de clubs, managers, agents), responsables marketing et communication dans les organisations sportives, journalistes sportifs évoluant vers le management, entrepreneurs du secteur sportif, cadres d'administrations sportives et fédérations.",
    prerequisites: "Diplôme Bac+2 minimum ou expérience professionnelle dans le secteur sportif, médiatique ou commercial. Passion pour le sport et intérêt pour le business.",
    methods: [
      "Études de cas de clubs africains et de grandes organisations sportives internationales",
      "Ateliers de construction d'un business plan d'organisation sportive",
      "Simulations de négociation de contrats de sponsoring",
      "Interventions de dirigeants sportifs africains (guests speakers)",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'p19', title: 'Hôtellerie et Tourisme Durable', slug: 'hotellerie-tourisme-durable', description: 'Développez le tourisme durable, la gestion hôtelière responsable et l\'aménagement des territoires touristiques dans un contexte africain. Une formation de référence qui conjugue excellence opérationnelle et approche durable pour les professionnels du secteur.', certificateLevel: 'Certificat d\'Aptitude', domain: 'Evènement', duration: '3 mois', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-amber-800 to-slate-900', image: '/images/utourisme-conference.jpg',
    objectives: [
      "Maîtriser les fondamentaux de la gestion hôtelière et de l'exploitation touristique",
      "Développer et mettre en œuvre une stratégie de tourisme durable et responsable",
      "Concevoir des produits touristiques adaptés aux marchés africains et internationaux",
      "Gérer la qualité des prestations hôtelières et l'expérience client",
      "Piloter un établissement touristique avec les outils de management moderne",
      "Positionner une destination ou un établissement sur les marchés numériques"
    ],
    modules: [
      { title: "Module 1 — Management hôtelier et exploitation touristique", description: "Fondamentaux de l'industrie hôtelière et touristique africaine, organisation et gestion opérationnelle d'un hôtel (réception, hébergement, restauration, événementiel), revenue management et yield management, gestion des ressources humaines hôtelières, normes de qualité et de classification hôtelière." },
      { title: "Module 2 — Tourisme durable et développement territorial", description: "Principes du tourisme durable et critères du Global Sustainable Tourism Council (GSTC), écotourisme et tourisme communautaire en Afrique, impact environnemental et social du tourisme, aménagement et valorisation des territoires touristiques, stratégie de développement touristique local." },
      { title: "Module 3 — Marketing touristique et commercialisation", description: "Conception et commercialisation de produits touristiques innovants, stratégie de distribution : OTAs (Booking, Airbnb), agences, vente directe, marketing digital touristique (SEO, réseaux sociaux, e-réputation), partenariats et stratégies de promotion des destinations, gestion des avis en ligne et de l'image." },
      { title: "Module 4 — Pilotage financier et gestion de destination", description: "Analyse financière et contrôle de gestion hôtelière, budget et prévisionnel d'exploitation hôtelière, politique de prix et optimisation du taux d'occupation, financement des projets touristiques (Banque mondiale, AFD, fonds sectoriels), gouvernance des destinations et coopération institutionnelle." }
    ],
    targetAudience: "Directeurs et managers hôteliers, responsables de structures touristiques et d'agences de voyages, cadres des ministères et directions du tourisme, entrepreneurs du secteur de l'hospitalité et du tourisme durable, agents de développement territorial chargés du tourisme.",
    prerequisites: "Diplôme Bac+2 minimum ou expérience professionnelle dans le secteur de l'hôtellerie, du tourisme ou de l'aménagement territorial. Intérêt pour le développement durable.",
    methods: [
      "Études de cas de destinations et établissements touristiques durables africains",
      "Visites et retours d'expérience d'hôteliers et d'opérateurs touristiques",
      "Ateliers de conception de produits touristiques innovants",
      "Simulations de gestion d'établissement hôtelier",
      "Modules e-learning sur la plateforme Neuroklax",
      "Atelier présentiel avec professionnels du tourisme"
    ]
  },,
  { id: 'ie1', title: 'Exploration et Exploitation Minière', slug: 'exploration-et-exploitation-miniere', description: 'Maîtrisez les techniques de prospection géologique, d\'évaluation des réserves et d\'extraction minière. Ce certificat prépare les ingénieurs et techniciens à opérer sur des sites miniers en adoptant des pratiques modernes, durables et innovantes.', certificateLevel: 'Certificat Professionnel', domain: 'Industries extractives', duration: '8 semaines', format: 'Blended', price: { amount: 1200, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-orange-700 to-slate-900', image: '/images/event-training-1.jpg',
    objectives: [
      "Acquérir des compétences en prospection et cartographie géologique",
      "Analyser et évaluer les réserves minières en termes de qualité et viabilité économique",
      "Maîtriser les méthodes modernes d'extraction sûres et respectueuses de l'environnement",
      "Gérer les opérations de mines à ciel ouvert et souterraines",
      "Intégrer les technologies innovantes : drones, IA, capteurs dans l'exploration minière"
    ],
    modules: [
      { title: "Module 1 — Prospection géologique et évaluation des réserves", description: "Techniques modernes de prospection géologique, cartographie et levés géophysiques, méthodes d'analyse des carottes et échantillons, évaluation des réserves (JORC, NI 43-101), viabilité économique des gisements." },
      { title: "Module 2 — Méthodes d'extraction minière", description: "Exploitation à ciel ouvert (open pit), mines souterraines et galeries, sélection de la méthode selon le gisement, abattage, chargement, transport et traitement du minerai." },
      { title: "Module 3 — Innovations et technologies minières", description: "Drones et imagerie satellite, IA et big data dans la gestion minière, automatisation des équipements, SIG et géo-informatique, simulation de gisements." },
      { title: "Module 4 — Sécurité, environnement et durabilité", description: "Normes ISO 45001 et HSE dans les mines, gestion des déchets miniers et des eaux, réhabilitation des sites, conformité EITI et audits environnementaux." }
    ],
    targetAudience: "Ingénieurs miniers et géologues, techniciens des sites d'exploitation, responsables des opérations minières, étudiants en géologie et ingénierie minière.",
    prerequisites: "Diplôme d'ingénieur, de géologie ou de sciences de la terre. Niveau Bac+3 minimum.",
    methods: [
      "Cours techniques par des ingénieurs praticiens du secteur minier",
      "Études de cas de mines africaines et internationales",
      "Exercices de cartographie et d'interprétation géologique",
      "Simulations de gestion de mine sur logiciel spécialisé",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ie2', title: 'Sécurité et Santé au Travail dans les Industries Extractives', slug: 'securite-et-sante-au-travail-dans-les-industries-extractives', description: 'Maîtrisez les normes internationales de sécurité minière (ISO 45001, OHSAS), les techniques de prévention des accidents et la gestion des substances dangereuses pour garantir la sécurité des travailleurs sur les sites extractifs.', certificateLevel: 'Certificat Professionnel', domain: 'Industries extractives', duration: '8 semaines', format: 'Blended', price: { amount: 1100, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-red-800 to-slate-900', image: '/images/expertise-group-full.jpeg',
    objectives: [
      "Maîtriser les standards ISO 45001 et OHSAS appliqués aux industries extractives",
      "Anticiper et prévenir les accidents sur les sites miniers et pétroliers",
      "Appliquer les protocoles de secourisme industriel",
      "Gérer les substances dangereuses et risques chimiques",
      "Concevoir et déployer une politique HSE intégrée"
    ],
    modules: [
      { title: "Module 1 — Normes HSE et management de la sécurité", description: "ISO 45001, OHSAS 18001, audit de conformité sécurité, systèmes de management HSE intégrés, cartographie des risques sur sites extractifs, responsabilités légales." },
      { title: "Module 2 — Prévention des accidents et gestion des risques", description: "Analyse des risques (HAZOP, FMEA, arbre des causes), accidents typiques dans les mines et chantiers pétroliers, barrières de sécurité, procédures d'urgence et culture de la sécurité." },
      { title: "Module 3 — Secourisme industriel et gestion des urgences", description: "Secourisme adapté aux sites miniers, plans d'évacuation et simulation, coordination avec services d'urgence, gestion des crises sur sites isolés." },
      { title: "Module 4 — Gestion des substances dangereuses", description: "Classification GHS/CLP, stockage, manipulation et transport sécurisé, déversements accidentels et dépollution, documentation et traçabilité réglementaire." }
    ],
    targetAudience: "Responsables HSE, ingénieurs de sécurité, techniciens SST, managers des opérations dans les mines, le pétrole et le gaz.",
    prerequisites: "Expérience professionnelle dans les industries extractives ou l'industrie lourde. Diplôme Bac+2 minimum.",
    methods: [
      "Exercices pratiques de sécurité sur site simulé",
      "Études d'accidents réels et analyses causes-effets",
      "Simulations de plans d'urgence",
      "Formation secouriste",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ie3', title: 'Environnement et Développement Durable — Industries Extractives', slug: 'environnement-et-developpement-durable-industries-extractive', description: 'Intégrez les enjeux environnementaux dans l\'exploitation minière et pétrolière. Ce certificat couvre la réhabilitation des sites, la gestion des déchets, l\'EIES et la conformité ISO 14001 pour concilier performance industrielle et responsabilité environnementale.', certificateLevel: 'Certificat Professionnel', domain: 'Industries extractives', duration: '8 semaines', format: 'Blended', price: { amount: 1100, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-green-700 to-slate-900', image: '/images/event-team-1.jpg',
    objectives: [
      "Comprendre les impacts environnementaux des activités extractives",
      "Mettre en oeuvre un plan de réhabilitation des sites miniers",
      "Gérer les déchets miniers et le traitement des eaux polluées",
      "Assurer la conformité aux normes EITI et ISO 14001",
      "Élaborer une étude d'impact environnemental et social (EIES)"
    ],
    modules: [
      { title: "Module 1 — Impacts environnementaux et cadre réglementaire", description: "Types d'impacts (air, eau, sol, biodiversité), cadre réglementaire national et EITI, ISO 14001 et systèmes de management environnemental, Principes de l'Équateur." },
      { title: "Module 2 — Gestion des déchets miniers et des eaux", description: "Caractérisation et stockage des résidus miniers, parcs à résidus et surveillance, traitement des eaux acides de mine, phytorestauration et techniques de dépollution." },
      { title: "Module 3 — Réhabilitation et fermeture des sites", description: "Planification de la fermeture dès l'exploration, techniques de réhabilitation morphologique et végétale, monitoring post-fermeture, provisions financières." },
      { title: "Module 4 — EIES et développement communautaire", description: "Méthodologie de l'Étude d'Impact Environnemental et Social, consultation des communautés, Plan de gestion environnementale et sociale (PGES), RSE et politique de développement communautaire." }
    ],
    targetAudience: "Responsables environnement, ingénieurs HSE, consultants en évaluation environnementale, agents des ministères des mines et de l'environnement.",
    prerequisites: "Formation en sciences de l'environnement, ingénierie ou géologie. Diplôme Bac+3.",
    methods: [
      "Études d'impact environnemental de sites africains",
      "Ateliers de rédaction d'EIES",
      "Exercices de modélisation des impacts",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ie4', title: 'Gestion et Ingénierie des Hydrocarbures', slug: 'gestion-et-ingenierie-des-hydrocarbures', description: 'Maîtrisez les fondamentaux de l\'ingénierie pétrolière et gazière : géologie pétrolière, techniques de forage, gestion des réservoirs, sécurité des installations et contrats pétroliers. La formation de référence pour les professionnels du secteur.', certificateLevel: 'Certificat Professionnel', domain: 'Industries extractives', duration: '8 semaines', format: 'Blended', price: { amount: 1500, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-amber-800 to-slate-900', image: '/images/minister-speech.jpg',
    objectives: [
      "Comprendre la géologie pétrolière et les mécanismes de formation des réservoirs",
      "Maîtriser les techniques de forage et de complétion des puits",
      "Gérer la production et l'optimisation des réservoirs d'hydrocarbures",
      "Analyser les enjeux économiques, fiscaux et contractuels du secteur pétrolier"
    ],
    modules: [
      { title: "Module 1 — Géologie pétrolière et exploration", description: "Formation des hydrocarbures et systèmes pétroliers, sismique 2D/3D, forage d'exploration, évaluation des réservoirs, ressources et réserves (JORC, SPE-PRMS)." },
      { title: "Module 2 — Forage et ingénierie de puits", description: "Composantes d'un système de forage, fluides de forage, complétion et stimulation des puits, prévention des éruptions (BOP), maintenance et workover." },
      { title: "Module 3 — Gestion des réservoirs et production", description: "Mécanismes de production primaire, secondaire et tertiaire, modélisation des réservoirs, optimisation de la récupération, traitement des fluides produits." },
      { title: "Module 4 — Contrats pétroliers, fiscalité et environnement", description: "Contrats PSC et JOA, fiscalité pétrolière africaine, EITI et transparence, impact environnemental et social des projets pétroliers." }
    ],
    targetAudience: "Ingénieurs et techniciens pétroliers, géologues de l'exploration, responsables des opérations, cadres des sociétés nationales d'hydrocarbures.",
    prerequisites: "Diplôme d'ingénieur, géologie ou sciences physiques.",
    methods: [
      "Cours par des ingénieurs praticiens du secteur pétrolier",
      "Études de cas de champs africains (Côte d'Ivoire, Congo, Nigeria, Sénégal)",
      "Simulation de réservoir",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ie5', title: 'Gestion des Projets dans les Industries Extractives', slug: 'gestion-des-projets-dans-les-industries-extractives', description: 'Planifiez, exécutez et contrôlez des projets miniers et pétroliers complexes selon les meilleures pratiques du management de projet. Ce certificat prépare les chefs de projet à délivrer des résultats dans des environnements industriels exigeants.', certificateLevel: 'Certificat Professionnel', domain: 'Industries extractives', duration: '8 semaines', format: 'Blended', price: { amount: 1300, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-blue-700 to-slate-900', image: '/images/event-graduation-1.jpg',
    objectives: [
      "Planifier un projet industriel extractif de A à Z",
      "Maîtriser l'estimation des coûts et la gestion budgétaire CAPEX/OPEX",
      "Gérer les délais, ressources et qualité des projets",
      "Identifier et mitiger les risques spécifiques aux projets extractifs"
    ],
    modules: [
      { title: "Module 1 — Initiation et planification des projets industriels", description: "Cycle de vie d'un projet extractif (FEED, ingénierie, construction, commissioning), charte de projet, WBS, planification des ressources et approvisionnements." },
      { title: "Module 2 — Gestion des coûts et des délais", description: "Estimations CAPEX/OPEX, budgétisation et contrôle des coûts, planification CPM et Gantt, gestion de la valeur acquise (EVM), reporting de projet." },
      { title: "Module 3 — Gestion des risques et de la qualité", description: "Risques techniques, sécuritaires et environnementaux, plans de mitigation, contrôle qualité des travaux, gestion des non-conformités et modifications." },
      { title: "Module 4 — Management des parties prenantes et clôture", description: "Gestion des relations communautaires, communication de projet, réception et mise en service, retour d'expérience et capitalisation." }
    ],
    targetAudience: "Chefs de projet dans les mines et le pétrole, ingénieurs de projet, coordinateurs de chantier, planificateurs et contrôleurs de projet.",
    prerequisites: "Diplôme d'ingénieur ou équivalent. Expérience professionnelle de 2 ans minimum.",
    methods: [
      "Cours par des chefs de projet certifiés PMP ayant travaillé en Afrique",
      "Exercices de planification sous MS Project",
      "Études de cas de projets miniers et pétroliers",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ie6', title: 'Réglementation et Contractualisation dans les Industries Extractives', slug: 'reglementation-et-contractualisation-dans-les-industries-ext', description: 'Maîtrisez le cadre juridique et contractuel régissant les industries minières et pétrolières en Afrique : codes miniers, contrats de partage de production, fiscalité extractive et conformité aux normes EITI.', certificateLevel: 'Certificat Professionnel', domain: 'Industries extractives', duration: '6 semaines', format: 'Blended', price: { amount: 1100, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-slate-600 to-indigo-900', image: '/images/jc-ministers.jpg',
    objectives: [
      "Analyser les codes miniers et pétroliers des pays africains",
      "Comprendre et négocier les contrats pétroliers (PSC, JOA)",
      "Maîtriser la fiscalité minière et pétrolière (royalties, taxes, bonus)",
      "Assurer la conformité EITI et anti-corruption"
    ],
    modules: [
      { title: "Module 1 — Cadres réglementaires miniers et pétroliers en Afrique", description: "Codes miniers nationaux (Côte d'Ivoire, Mali, Sénégal, RDC), législation pétrolière, rôle des autorités de régulation, titres miniers et permis." },
      { title: "Module 2 — Types de contrats dans les industries extractives", description: "Contrats PSC/CPE, joint-ventures et JOA, contrats EPC et sous-traitance, négociation et rédaction contractuelle." },
      { title: "Module 3 — Fiscalité et revenus extractifs", description: "Régimes fiscaux comparés en Afrique, royalties et impôts, prix de transfert et optimisation fiscale, EITI et transparence des revenus." },
      { title: "Module 4 — Contentieux, arbitrage et conformité", description: "Arbitrage international (CIRDI, CCI), conformité FCPA et anti-corruption, gestion des relations communautaires et RSE." }
    ],
    targetAudience: "Juristes d'entreprises minières et pétrolières, agents des administrations des mines, négociateurs de contrats, consultants en droit minier.",
    prerequisites: "Formation juridique, économique ou en ingénierie.",
    methods: [
      "Cours par des juristes spécialisés en droit minier africain",
      "Analyse de contrats PSC anonymisés",
      "Simulations de négociation de contrats miniers",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ie7', title: 'Digitalisation et Innovation dans les Industries Extractives', slug: 'digitalisation-et-innovation-dans-les-industries-extractives', description: 'Intégrez les technologies numériques dans vos opérations extractives : IA, big data, drones, SIG et IoT industriel. Ce certificat prépare les professionnels à conduire la transformation digitale du secteur minier et pétrolier.', certificateLevel: 'Certificat Professionnel', domain: 'Industries extractives', duration: '6 semaines', format: 'En ligne', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-08-01', enrollmentStatus: 'open', badge: 'Nouveau', imageGradient: 'from-teal-700 to-slate-900', image: '/images/jc-medal-man.jpeg',
    objectives: [
      "Appliquer l'IA dans l'optimisation des opérations extractives",
      "Utiliser le big data et la géo-informatique pour la prospection",
      "Exploiter drones et capteurs pour la surveillance des sites",
      "Piloter une transformation digitale dans une opération extractive"
    ],
    modules: [
      { title: "Module 1 — IA et big data dans les industries extractives", description: "Machine learning pour la prédiction des gisements et la maintenance prédictive, analyse des données géophysiques par IA, optimisation des procédés par algorithmes." },
      { title: "Module 2 — Géo-informatique et SIG", description: "SIG appliqués à l'exploration, télédétection et imagerie satellite, cartographie 3D des gisements, logiciels ArcGIS, QGIS, Surpac." },
      { title: "Module 3 — Drones, IoT et surveillance des sites", description: "Utilisation des drones (UAV) pour inspection et cartographie, capteurs IoT pour surveillance des équipements, maintenance prédictive, sécurisation numérique des infrastructures." },
      { title: "Module 4 — Transformation digitale et innovation sectorielle", description: "Stratégie de transformation digitale pour une mine ou société pétrolière, blockchain pour la traçabilité des minerais, smart contracts, Industry 4.0 dans l'extractif." }
    ],
    targetAudience: "Ingénieurs et techniciens des industries extractives, managers de l'innovation, responsables SI, data scientists souhaitant se spécialiser.",
    prerequisites: "Diplôme d'ingénieur ou de data science. Expérience dans les industries extractives ou les technologies numériques.",
    methods: [
      "Démonstrations d'outils numériques spécialisés",
      "Études de cas d'innovation dans les mines africaines",
      "Ateliers pratiques sur logiciels sectoriels",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ie8', title: 'Réglementation et Fiscalité des Industries Extractives', slug: 'reglementation-et-fiscalite-des-industries-extractives', description: 'Comprenez et appliquez les cadres réglementaires et fiscaux spécifiques aux ressources naturelles en Afrique. Indispensable pour les professionnels en charge de la conformité, la négociation fiscale et la gouvernance des revenus extractifs.', certificateLevel: 'Certificat Professionnel', domain: 'Industries extractives', duration: '6 semaines', format: 'Blended', price: { amount: 1000, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-yellow-700 to-slate-900', image: '/images/minister-cert-remise.jpg',
    objectives: [
      "Naviguer dans les réglementations nationales des pays africains producteurs",
      "Analyser les régimes fiscaux et douaniers des ressources naturelles",
      "Identifier les opportunités d'optimisation fiscale légale",
      "Assurer la conformité EITI et les standards de transparence"
    ],
    modules: [
      { title: "Module 1 — Réglementations des pays africains producteurs", description: "Revue comparative des codes miniers et pétroliers (Côte d'Ivoire, Sénégal, Mali, RDC, Ghana), procédures d'octroi des titres miniers, réformes récentes." },
      { title: "Module 2 — Régimes fiscaux miniers et pétroliers", description: "Royalties et redevances, impôts sur les bénéfices, taxes sur la valeur minière, régimes douaniers des équipements, comparaison fiscale entre pays." },
      { title: "Module 3 — Conformité EITI et lutte anti-corruption", description: "Principes de l'EITI, reporting des paiements, lutte contre les flux financiers illicites, prix de transfert et protection des revenus publics." },
      { title: "Module 4 — Gestion fiscale et relations avec l'administration", description: "Négociation avec les administrations fiscales, contentieux et voies de recours, community development agreements, partage des revenus avec les collectivités." }
    ],
    targetAudience: "Directeurs financiers et fiscalistes des sociétés minières, agents des administrations fiscales, consultants en fiscalité extractive, juristes spécialisés.",
    prerequisites: "Formation en droit, finance ou économie.",
    methods: [
      "Analyse comparative de codes miniers et régimes fiscaux africains",
      "Études de cas de contentieux fiscaux",
      "Ateliers de calcul de la charge fiscale",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ie9', title: 'Leadership et Management dans les Industries Extractives', slug: 'leadership-et-management-dans-les-industries-extractives', description: 'Développez votre capacité à diriger des équipes multiculturelles sur des sites miniers et pétroliers. Un programme Executive pour les managers de l\'industrie extractive souhaitant renforcer leur leadership stratégique et éthique.', certificateLevel: 'Executive Certificate', domain: 'Industries extractives', duration: '4 semaines', format: 'Blended', price: { amount: 900, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-stone-700 to-slate-900', image: '/images/event-speaker-1.jpg',
    objectives: [
      "Développer un leadership adapté aux environnements industriels complexes et multiculturels",
      "Gérer des équipes pluridisciplinaires sur des sites d'extraction",
      "Maîtriser la gestion des conflits et la prévention des tensions sociales",
      "Adopter un leadership éthique et responsable dans le secteur extractif"
    ],
    modules: [
      { title: "Module 1 — Leadership multiculturel dans l'extractif", description: "Leadership situationnel et transformationnel, management d'équipes multiculturelles, communication interculturelle, motivation et rétention des talents." },
      { title: "Module 2 — Gestion des conflits sur les sites", description: "Sources et prévention des conflits sur sites miniers, techniques de médiation, gestion des relations syndicales, maintien de la cohésion des équipes." },
      { title: "Module 3 — Leadership éthique et RSE", description: "Éthique du leadership dans un secteur à impact, responsabilité envers les communautés locales, prévention du harcèlement, gouvernance éthique des opérations." },
      { title: "Module 4 — Décision stratégique et gestion de crise", description: "Prise de décision sous contrainte, gestion de crise industrielle (accidents, arrêts), communication de crise, retour d'expérience." }
    ],
    targetAudience: "Managers et superviseurs des sites miniers et pétroliers, directeurs de sites, responsables RH du secteur extractif.",
    prerequisites: "Expérience managériale de 2 ans minimum dans les industries extractives.",
    methods: [
      "Études de cas de leadership sur sites africains",
      "Jeux de rôles de gestion de conflits",
      "Coaching collectif de développement du leadership",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ie10', title: 'Maintenance des Équipements Miniers et Pétroliers', slug: 'maintenance-des-equipements-miniers-et-petroliers', description: 'Maîtrisez la maintenance préventive, corrective et prédictive des équipements lourds utilisés dans les industries minières et pétrolières pour garantir performance, sécurité et durabilité des actifs industriels.', certificateLevel: 'Certificat Professionnel', domain: 'Industries extractives', duration: '3 mois', format: 'Blended', price: { amount: 1200, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-neutral-700 to-slate-900', image: '/images/campus-jury.jpeg',
    objectives: [
      "Maîtriser la maintenance industrielle préventive et corrective",
      "Diagnostiquer et résoudre les pannes sur équipements miniers et pétroliers",
      "Intégrer les outils modernes : GMAO, capteurs, maintenance prédictive",
      "Optimiser la durée de vie des équipements"
    ],
    modules: [
      { title: "Module 1 — Fondamentaux de la maintenance industrielle", description: "Types de maintenance (préventive, corrective, prédictive), indicateurs MTBF, MTTR et disponibilité, niveaux de maintenance et qualification, documentation technique." },
      { title: "Module 2 — Maintenance des équipements miniers", description: "Engins de foration, concassage, broyage et criblage, maintenance des engins de transport (camions, pelles), lubrification et diagnostics." },
      { title: "Module 3 — Maintenance des équipements pétroliers", description: "Pompes, compresseurs, séparateurs, inspection des pipelines, maintenance des systèmes électriques et d'instrumentation offshore/onshore." },
      { title: "Module 4 — GMAO et technologies modernes", description: "GMAO (Maximo, SAP PM), maintenance prédictive par capteurs et analyse vibratoire, IIoT et surveillance en temps réel, optimisation des plans de maintenance." }
    ],
    targetAudience: "Techniciens et ingénieurs de maintenance des sites miniers et pétroliers, planificateurs de maintenance, agents fiabilité.",
    prerequisites: "Formation technique en mécanique ou maintenance industrielle.",
    methods: [
      "Cours par des techniciens et ingénieurs de maintenance expérimentés",
      "Études de cas de pannes industrielles",
      "Exercices de planification de programmes de maintenance",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'im1', title: 'Gérance Locative — Maîtriser la Gestion Locative', slug: 'gerance-locative-maitriser-la-gestion-locative', description: 'Maîtrisez les techniques de gestion locative, les obligations légales du gestionnaire, la sélection des locataires et la prévention des litiges pour optimiser la rentabilité d\'un portefeuille immobilier locatif.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Immobilier et BTP', duration: '14h / 2 jours', format: 'Présentiel', price: { amount: 600, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-emerald-700 to-slate-900', image: '/images/event-certificate-1.jpg',
    objectives: [
      "Comprendre le rôle et les responsabilités du gestionnaire locatif",
      "Maîtriser la législation sur les loyers, baux et droits des locataires",
      "Appliquer des techniques rigoureuses de sélection des locataires",
      "Rédiger et gérer les baux de location de manière sécurisée",
      "Anticiper et résoudre les litiges locatifs"
    ],
    modules: [
      { title: "Module 1 — Fondamentaux de la gestion locative", description: "Rôle et responsabilités du gestionnaire locatif, enjeux financiers du portefeuille, cadre juridique des baux d'habitation et commerciaux, relation propriétaire-gestionnaire-locataire." },
      { title: "Module 2 — Obligations légales et fiscales", description: "Réglementation locale des loyers, fiscalité des revenus locatifs, déclarations obligatoires, conformité des logements, obligations en matière d'assurances." },
      { title: "Module 3 — Sélection des locataires et gestion des baux", description: "Critères de sélection des locataires, analyse de solvabilité et garanties, rédaction sécurisée du bail, états des lieux, indexation et révisions des loyers." },
      { title: "Module 4 — Prévention et gestion des litiges", description: "Gestion des impayés et procédures de recouvrement, traitement des dégradations, procédures d'expulsion, médiation locative et résolution amiable des conflits." }
    ],
    targetAudience: "Gestionnaires immobiliers, agents immobiliers, propriétaires investisseurs, conseillers immobiliers, étudiants en gestion immobilière.",
    prerequisites: "Intérêt pour l'immobilier et la gestion locative. Aucun prérequis technique strict.",
    methods: [
      "Exposés théoriques et études de cas pratiques",
      "Analyse de baux réels et rédaction commentée",
      "Mise en situation de gestion de litiges",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'im2', title: 'Techniques de Financement de Projet Immobilier', slug: 'techniques-de-financement-de-projet-immobilier', description: 'Maîtrisez les techniques de financement des projets immobiliers : montage financier, sources de financement (banques, investisseurs, crowdfunding), structuration des dossiers et gestion des risques pour maximiser la rentabilité.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Immobilier et BTP', duration: '14h / 2 jours', format: 'Présentiel', price: { amount: 600, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-cyan-700 to-slate-900', image: '/images/event-certificate-2.jpg',
    objectives: [
      "Acquérir une vue d'ensemble des méthodes de financement immobilier",
      "Identifier les sources de financement adaptées à chaque projet",
      "Structurer le montage financier et le dossier de financement",
      "Évaluer les risques financiers et gérer le retour sur investissement"
    ],
    modules: [
      { title: "Module 1 — Panorama des financements immobiliers", description: "Types de projets et besoins de financement, dette senior, mezzanine et fonds propres, crédit bancaire immobilier (conditions, garanties), aides publiques et subventions au logement." },
      { title: "Module 2 — Sources de financement alternatives", description: "Investisseurs en capital et fonds immobiliers (SCPI), crowdfunding immobilier, partenariats public-privé, financement islamique (Mourabaha, Musharaka)." },
      { title: "Module 3 — Montage financier et structuration du dossier", description: "Business plan immobilier et prévisionnel financier, ratio LTV et critères bancaires, montage juridique (SCI, SPV, holding), rédaction du dossier de financement et pitch investisseur." },
      { title: "Module 4 — Risques et maximisation du ROI", description: "Analyse de rentabilité (TRI, VAN, cash-flow), risques de marché, construction et vacance, couvertures et assurances immobilières, scénarios de stress." }
    ],
    targetAudience: "Promoteurs immobiliers, investisseurs, responsables financiers du secteur immobilier, banquiers crédit immobilier, porteurs de projets immobiliers.",
    prerequisites: "Connaissance de base en finance ou en immobilier.",
    methods: [
      "Études de cas de montages financiers réels",
      "Ateliers de construction d'un dossier de financement",
      "Simulations de négociation bancaire",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'im3', title: 'Expertise Immobilière — Évaluation des Biens', slug: 'expertise-immobiliere-evaluation-des-biens', description: 'Devenez expert immobilier capable de réaliser des évaluations précises : approche comparative, méthode par le revenu, analyse des risques et rédaction de rapports d\'expertise conformes aux standards professionnels.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Immobilier et BTP', duration: '14h / 2 jours', format: 'Présentiel', price: { amount: 600, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-violet-700 to-slate-900', image: '/images/event-certificate-3.jpg',
    objectives: [
      "Comprendre les bases de l'expertise immobilière et ses applications",
      "Maîtriser les méthodes d'évaluation (comparative, par le revenu, par le coût)",
      "Analyser les facteurs influençant la valeur d'un bien immobilier",
      "Rédiger des rapports d'expertise professionnels et conformes aux normes"
    ],
    modules: [
      { title: "Module 1 — Fondamentaux de l'expertise immobilière", description: "Définition et types d'expertise, cadre juridique et déontologique, marchés immobiliers et indicateurs de valeur, normes professionnelles (TEGoVA, RICS, IVS)." },
      { title: "Module 2 — Méthodes d'évaluation", description: "Méthode par comparaison directe (MCD) et ajustements, méthode par capitalisation du revenu et DCF, méthode par le coût de remplacement, choix et pondération des méthodes." },
      { title: "Module 3 — Facteurs de valeur et risques", description: "Localisation, environnement et accessibilité, état technique du bâtiment et diagnostics, facteurs juridiques (titres, servitudes, hypothèques), tendances du marché local." },
      { title: "Module 4 — Rédaction du rapport d'expertise", description: "Structure et contenu du rapport, normes de présentation, mission d'expertise et lettre de mission, responsabilité de l'expert et assurance professionnelle." }
    ],
    targetAudience: "Experts immobiliers et évaluateurs, agents immobiliers, banquiers crédit immobilier, notaires, investisseurs et gestionnaires de patrimoine.",
    prerequisites: "Expérience dans l'immobilier, la finance ou le droit immobilier recommandée.",
    methods: [
      "Exercices d'évaluation sur des biens réels",
      "Analyse commentée de rapports d'expertise",
      "Ateliers de rédaction de rapport",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'im4', title: 'Agrément et Cadre Légal de l\'Activité Immobilière', slug: 'agrement-et-cadre-legal-de-lactivite-immobiliere', description: 'Comprenez le cadre juridique régissant l\'activité immobilière en Côte d\'Ivoire : conditions d\'agrément, obligations légales des professionnels, réglementation des transactions et pratiques commerciales conformes.', certificateLevel: 'Certificat de Perfectionnement', domain: 'Immobilier et BTP', duration: '14h / 2 jours', format: 'Présentiel', price: { amount: 600, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-fuchsia-700 to-slate-900', image: '/images/event-certificate-4.jpg',
    objectives: [
      "Comprendre le cadre juridique du secteur immobilier en Côte d'Ivoire",
      "Maîtriser les conditions d'obtention de l'agrément immobilier",
      "Identifier les responsabilités légales des professionnels de l'immobilier",
      "Appliquer les réglementations lors des transactions immobilières"
    ],
    modules: [
      { title: "Module 1 — Réglementation du secteur immobilier", description: "Lois et décrets encadrant l'activité immobilière en Côte d'Ivoire, rôle des institutions de régulation, catégories d'activités (promotion, transaction, gestion, expertise), droit foncier." },
      { title: "Module 2 — Obtention de l'agrément immobilier", description: "Conditions de diplôme et d'expérience requises, dossier de demande et démarches administratives, assurance RC professionnelle, renouvellement et sanctions." },
      { title: "Module 3 — Responsabilités et obligations des professionnels", description: "Obligations légales de l'agent immobilier et du promoteur, code de déontologie professionnelle, obligations d'information et de conseil, gestion des conflits d'intérêts." },
      { title: "Module 4 — Transactions immobilières et pratiques commerciales", description: "Processus légal d'une transaction (compromis, acte authentique), mandats de vente et honoraires, TVA immobilière et droits de mutation, lutte contre la fraude immobilière." }
    ],
    targetAudience: "Agents immobiliers, promoteurs, gestionnaires de patrimoine, juristes immobiliers, toute personne souhaitant créer ou régulariser une activité immobilière.",
    prerequisites: "Intérêt ou activité dans le secteur immobilier.",
    methods: [
      "Exposés par des juristes et professionnels agréés",
      "Études de cas de contentieux immobiliers",
      "Simulations de procédures d'agrément",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ec1', title: 'L\'Éthique en Entreprise : Fondements et Pratiques', slug: 'lethique-en-entreprise-fondements-et-pratiques', description: 'Comprenez et appliquez les principes éthiques fondamentaux dans la gestion d\'entreprise. Ce module forme à la transparence, l\'intégrité et la responsabilité pour construire une culture organisationnelle éthique durable.', certificateLevel: 'Module de Formation', domain: 'Gouvernance de service public', duration: '1 journée / 7h', format: 'Présentiel', price: { amount: 300, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-purple-700 to-slate-900', image: '/images/cert-remise-officiels.jpg',
    objectives: [
      "Appréhender les principes fondamentaux de l'éthique en gestion",
      "Identifier et analyser les dilemmes éthiques dans les décisions stratégiques",
      "Reconnaître les défis éthiques dans les RH et les relations commerciales",
      "Promouvoir une culture d'éthique organisationnelle durable"
    ],
    modules: [
      { title: "Module 1 — Bases de l'éthique en entreprise", description: "Définitions et fondements de l'éthique professionnelle, importance dans la gouvernance, principes d'intégrité, transparence et responsabilité." },
      { title: "Module 2 — Éthique dans les décisions stratégiques", description: "Identification des dilemmes éthiques, mécanismes de décision éthique, études de cas de décisions stratégiques controversées." },
      { title: "Module 3 — Défis éthiques quotidiens", description: "Éthique dans les RH, pratiques commerciales éthiques, gestion des conflits d'intérêts dans les équipes." },
      { title: "Module 4 — Culture d'éthique organisationnelle", description: "Construction d'une culture éthique, codes d'éthique et chartes, dispositifs d'alerte, leadership éthique et exemplarité." }
    ],
    targetAudience: "Cadres dirigeants, responsables RH, directeurs des affaires juridiques, consultants en gouvernance, managers souhaitant renforcer la culture d'intégrité.",
    prerequisites: "Expérience professionnelle en entreprise ou organisation.",
    methods: [
      "Exposés interactifs et études de cas réels",
      "Discussions sur des dilemmes éthiques",
      "Mise en situation et jeux de rôle",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ec2', title: 'Éthique et Gouvernance d\'Entreprise : Culture d\'Intégrité', slug: 'ethique-et-gouvernance-dentreprise-culture-dintegrite', description: 'Instaurer une gouvernance éthique au sein de l\'entreprise en structurant des pratiques transparentes, clarifiant les rôles des parties prenantes et évaluant l\'efficacité des dispositifs de gouvernance.', certificateLevel: 'Module de Formation', domain: 'Gouvernance de service public', duration: '1 journée / 7h', format: 'Présentiel', price: { amount: 300, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-indigo-700 to-slate-900', image: '/images/graduates-seated.jpeg',
    objectives: [
      "Maîtriser les principes fondamentaux de la gouvernance éthique",
      "Structurer des pratiques de gouvernance pour des décisions transparentes",
      "Clarifier les rôles des dirigeants, actionnaires et parties prenantes",
      "Développer des mécanismes d'évaluation de la gouvernance"
    ],
    modules: [
      { title: "Module 1 — Gouvernance éthique : principes et cadre", description: "Fondements de la gouvernance d'entreprise, lien éthique-performance, normes (OCDE, ISO 26000), gouvernance dans le contexte africain." },
      { title: "Module 2 — Mise en oeuvre de la gouvernance éthique", description: "Organes de gouvernance (CA, comités d'audit et d'éthique), politiques de transparence et d'intégrité, mécanismes de contrôle et reporting." },
      { title: "Module 3 — Parties prenantes et responsabilités", description: "Cartographie des parties prenantes, responsabilités des dirigeants, actionnaires et employés, engagement et communication." },
      { title: "Module 4 — Évaluation de la gouvernance", description: "Indicateurs de performance éthique, audit de gouvernance, benchmarking des bonnes pratiques, plans d'amélioration." }
    ],
    targetAudience: "Dirigeants et administrateurs, responsables de la gouvernance, cadres supérieurs, consultants en gouvernance.",
    prerequisites: "Fonction managériale ou de direction.",
    methods: [
      "Études de cas de bonnes et mauvaises pratiques",
      "Ateliers de diagnostic de gouvernance",
      "Simulations de comités d'éthique",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ec3', title: 'RSE : De l\'Éthique à l\'Action', slug: 'rse-de-lethique-a-laction', description: 'Intégrez les pratiques éthiques et responsables dans vos stratégies RSE. Apprenez à mesurer l\'impact de vos actions ESG et à communiquer efficacement sur vos engagements environnementaux, sociaux et de gouvernance.', certificateLevel: 'Module de Formation', domain: 'Gouvernance de service public', duration: '1 journée / 7h', format: 'Présentiel', price: { amount: 300, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-lime-700 to-slate-900', image: '/images/event-graduation-2.jpg',
    objectives: [
      "Comprendre les concepts clés de la RSE et son intégration stratégique",
      "Développer des politiques RSE éthiques et responsables",
      "Mesurer et évaluer l'impact des initiatives RSE",
      "Communiquer efficacement sur la RSE pour renforcer la crédibilité"
    ],
    modules: [
      { title: "Module 1 — Fondamentaux de la RSE", description: "Définition et évolution de la RSE, cadres normatifs (ISO 26000, GRI, ODD), RSE et performance durable, enjeux ESG pour les entreprises africaines." },
      { title: "Module 2 — Intégration de l'éthique dans les stratégies RSE", description: "RSE environnementale (empreinte carbone, économie circulaire), RSE sociale (emploi décent, diversité), RSE de gouvernance (transparence, anti-corruption)." },
      { title: "Module 3 — Mesure et évaluation de l'impact RSE", description: "Indicateurs de performance RSE, reporting extra-financier, outils d'audit et de certification, cartographie des parties prenantes." },
      { title: "Module 4 — Communication RSE", description: "Stratégies de communication RSE authentique, rapport de développement durable, communication digitale responsable, prévention du greenwashing." }
    ],
    targetAudience: "Responsables RSE et développement durable, directeurs de la communication, dirigeants d'entreprises engagées, consultants en durabilité.",
    prerequisites: "Intérêt pour le développement durable et la gouvernance.",
    methods: [
      "Études de cas d'entreprises africaines engagées en RSE",
      "Ateliers de construction d'un plan RSE",
      "Analyse de rapports RSE réels",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ec4', title: 'Éthique et Compliance : Assurer la Conformité Légale', slug: 'ethique-et-compliance-assurer-la-conformite-legale', description: 'Mettez en place des systèmes de conformité efficaces : obligations légales, gestion des risques de non-conformité, programme de compliance interne et audits de contrôle. La formation de référence pour les responsables conformité.', certificateLevel: 'Module de Formation', domain: 'Gouvernance de service public', duration: '1 journée / 7h', format: 'Présentiel', price: { amount: 300, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-rose-700 to-slate-900', image: '/images/cert-group-standing.jpeg',
    objectives: [
      "Maîtriser les obligations légales et réglementaires de conformité",
      "Identifier et minimiser les risques de non-conformité",
      "Créer un cadre de conformité interne adapté à son organisation",
      "Déployer des audits et contrôles internes de conformité"
    ],
    modules: [
      { title: "Module 1 — Réglementations et normes de conformité", description: "Cadre légal de la conformité (UEMOA, OHADA), lois anti-corruption, protection des données, obligations sectorielles spécifiques." },
      { title: "Module 2 — Gestion des risques de conformité", description: "Cartographie des risques de non-conformité, risques de conflits d'intérêts, due diligence des tiers, gestion des incidents." },
      { title: "Module 3 — Programme de conformité interne", description: "Conception d'un programme de compliance, code de conduite, formation des collaborateurs, dispositif d'alerte éthique." },
      { title: "Module 4 — Audits et contrôles internes", description: "Planification et exécution des audits de conformité, rédaction du rapport d'audit, suivi des recommandations, indicateurs de performance." }
    ],
    targetAudience: "Responsables compliance et contrôle interne, directeurs des affaires juridiques, auditeurs internes, managers en charge de la gouvernance.",
    prerequisites: "Expérience professionnelle en entreprise ou institution.",
    methods: [
      "Études de cas de scandales de conformité",
      "Atelier de construction d'un plan de conformité",
      "Simulations d'audit",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ec5', title: 'Gestion des Conflits d\'Intérêts : Prévention et Stratégies', slug: 'gestion-des-conflits-dinterets-prevention-et-strategies', description: 'Identifiez, prévenez et gérez les conflits d\'intérêts dans l\'entreprise. Ce module fournit des outils concrets pour instaurer la transparence et protéger l\'intégrité des prises de décision organisationnelles.', certificateLevel: 'Module de Formation', domain: 'Gouvernance de service public', duration: '1 journée / 7h', format: 'Présentiel', price: { amount: 300, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-sky-700 to-slate-900', image: '/images/event-certificate-4.jpg',
    objectives: [
      "Reconnaître les situations de conflits d'intérêts réels, potentiels et apparents",
      "Développer des politiques de prévention des conflits d'intérêts",
      "Gérer les conflits d'intérêts dans les décisions clés",
      "Instaurer des mécanismes de transparence et de communication"
    ],
    modules: [
      { title: "Module 1 — Identifier les conflits d'intérêts", description: "Définition et typologies, exemples sectoriels (marchés publics, finance, santé), obligations de déclaration, jurisprudence africaine." },
      { title: "Module 2 — Stratégies de prévention", description: "Politiques internes de gestion, séparation des fonctions et rotation, registres des intérêts, formation et sensibilisation." },
      { title: "Module 3 — Gestion dans les décisions stratégiques", description: "Procédures lors d'une situation identifiée, rôle du comité d'éthique, documentation et traçabilité, communication transparente." },
      { title: "Module 4 — Transparence institutionnelle", description: "Communication interne et externe, rapports annuels d'intégrité, gestion de la réputation, benchmarking des bonnes pratiques." }
    ],
    targetAudience: "Dirigeants, managers en charge de la gouvernance, responsables des marchés publics, membres de comités d'audit et d'éthique.",
    prerequisites: "Expérience professionnelle en gestion ou administration.",
    methods: [
      "Études de cas de conflits d'intérêts réels",
      "Mises en situation de prise de décision",
      "Construction d'une politique de gestion des conflits d'intérêts",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'ec6', title: 'Leadership Éthique : Diriger avec Intégrité', slug: 'leadership-ethique-diriger-avec-integrite', description: 'Adoptez un leadership éthique fondé sur l\'intégrité, la responsabilité et la confiance. Ce module prépare les dirigeants à exercer une autorité éclairée, à gérer les crises avec transparence et à inspirer une culture d\'excellence éthique.', certificateLevel: 'Module de Formation', domain: 'Gouvernance de service public', duration: '1 journée / 7h', format: 'Présentiel', price: { amount: 300, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-teal-600 to-slate-900', image: '/images/jc-networking.jpeg',
    objectives: [
      "Comprendre les valeurs du leadership éthique et leur impact organisationnel",
      "Prendre des décisions éthiques dans des situations complexes",
      "Renforcer son intégrité personnelle et inspirer la responsabilité",
      "Maintenir une posture éthique en période de crise"
    ],
    modules: [
      { title: "Module 1 — Valeurs et fondements du leadership éthique", description: "Principes du leadership éthique (intégrité, responsabilité, transparence), modèles de leadership éthique, éthique personnelle et professionnelle du leader." },
      { title: "Module 2 — Décision éthique en contexte complexe", description: "Cadres de décision éthique (utilitarisme, déontologie), gestion des dilemmes éthiques, processus de délibération collégiale." },
      { title: "Module 3 — Responsabilité et intégrité du leader", description: "Exemplarité et leadership par l'exemple, redevabilité et transparence, gestion des erreurs, développement de la confiance." },
      { title: "Module 4 — Leadership éthique en crise", description: "Maintien de l'intégrité sous pression, communication éthique de crise, gestion des conflits interpersonnels, reconstruction de la confiance." }
    ],
    targetAudience: "Cadres dirigeants, managers, responsables RH et de la formation, tout professionnel en position de leadership.",
    prerequisites: "Expérience en management ou leadership.",
    methods: [
      "Coaching de développement du leadership",
      "Jeux de rôle et mises en situation de crise",
      "Analyse de leaders africains emblématiques",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'g1', title: 'Économie Mondiale et Commerce International', slug: 'economie-mondiale-et-commerce-international', description: 'Comprenez les mécanismes de l\'économie globale, les dynamiques du commerce international et les stratégies d\'internationalisation. Indispensable pour les dirigeants souhaitant développer leurs activités à l\'échelle mondiale.', certificateLevel: 'Module de Formation', domain: 'Banque/Finance/Admin entreprises', duration: '14h / 2 jours', format: 'Présentiel', price: { amount: 400, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-blue-600 to-slate-900', image: '/images/event-speaker-1.jpg',
    objectives: [
      "Analyser les grandes tendances de l'économie mondiale",
      "Maîtriser les théories du commerce international et leurs applications",
      "Identifier et gérer les risques économiques et politiques des échanges",
      "Développer des stratégies d'internationalisation efficaces"
    ],
    modules: [
      { title: "Module 1 — Dynamiques de l'économie mondiale", description: "Grands équilibres macroéconomiques (PIB, inflation, changes), institutions du commerce international (OMC, FMI, BM), théories des avantages comparatifs." },
      { title: "Module 2 — Commerce international et géopolitique", description: "Politiques commerciales et protectionnisme, accords régionaux (ZLECAF, CEDEAO), tensions géopolitiques et leurs effets sur les échanges." },
      { title: "Module 3 — Risques des échanges internationaux", description: "Risques économiques et politiques, fluctuation des devises, outils de couverture à l'export (COFACE, banques de développement)." },
      { title: "Module 4 — Stratégies d'internationalisation", description: "Modes d'entrée sur les marchés étrangers, adaptation de l'offre, financement de l'internationalisation, business plan international." }
    ],
    targetAudience: "Responsables commerciaux, directeurs d'internationalisation, cadres d'entreprises multinationales, entrepreneurs souhaitant s'implanter à l'international.",
    prerequisites: "Diplôme Bac+2 minimum ou expérience en commerce ou gestion.",
    methods: [
      "Décryptage de rapports macroéconomiques (BM, OCDE, FMI)",
      "Études de cas d'expansion internationale d'entreprises africaines",
      "Simulation d'une décision d'implantation internationale",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'g2', title: 'Innovation Marketing et Communication Corporate', slug: 'innovation-marketing-et-communication-corporate', description: 'Maîtrisez les stratégies marketing innovantes et la communication d\'entreprise pour différencier votre offre, renforcer votre image de marque et engager vos clients grâce aux outils digitaux et aux nouvelles approches créatives.', certificateLevel: 'Module de Formation', domain: 'Banque/Finance/Admin entreprises', duration: '14h / 2 jours', format: 'Présentiel', price: { amount: 400, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-pink-600 to-slate-900', image: '/images/selfie-graduates.jpeg',
    objectives: [
      "Élaborer une stratégie marketing innovante et différenciante",
      "Piloter une communication d'entreprise cohérente et engageante",
      "Intégrer les nouveaux comportements des consommateurs et outils numériques",
      "Mesurer la performance des campagnes marketing"
    ],
    modules: [
      { title: "Module 1 — Fondamentaux du marketing stratégique", description: "Marketing stratégique et opérationnel, segmentation-ciblage-positionnement, innovation produit et expérience client, analyse de la concurrence." },
      { title: "Module 2 — Innovation marketing digital", description: "IA et big data dans le marketing, brand content et storytelling digital, réseaux sociaux et marketing d'engagement, personnalisation et automation." },
      { title: "Module 3 — Communication corporate", description: "Communication institutionnelle et de crise, gestion de l'image de marque, relations presse et relations publiques." },
      { title: "Module 4 — Mesure de la performance", description: "KPIs marketing et tableaux de bord, ROI des campagnes, outils d'analyse (Google Analytics, Meta Business), reporting et optimisation." }
    ],
    targetAudience: "Responsables marketing et communication, directeurs de la stratégie de marque, consultants, entrepreneurs et PME.",
    prerequisites: "Expérience ou intérêt pour le marketing et la communication.",
    methods: [
      "Analyse de campagnes innovantes de marques africaines",
      "Création d'un plan de communication complet",
      "Ateliers de storytelling et de co-création",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'g3', title: 'Analyse et Pilotage de la Performance Financière', slug: 'analyse-et-pilotage-de-la-performance-financiere', description: 'Transformez vos données financières en leviers de décision stratégique. Ce module vous forme à l\'analyse des états financiers, à la modélisation de la performance et à la construction d\'outils de pilotage financier.', certificateLevel: 'Module de Formation', domain: 'Banque/Finance/Admin entreprises', duration: '14h / 2 jours', format: 'Présentiel', price: { amount: 400, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-emerald-600 to-slate-900', image: '/images/trophee-remise.jpg',
    objectives: [
      "Lire et interpréter les états financiers d'une entreprise",
      "Modéliser la performance économique et identifier les leviers d'amélioration",
      "Construire des outils de pilotage financier adaptés",
      "Prendre des décisions stratégiques basées sur l'analyse financière"
    ],
    modules: [
      { title: "Module 1 — Analyse des états financiers", description: "Bilan, compte de résultat et flux de trésorerie, ratios de rentabilité, solvabilité et liquidité, analyse comparative et benchmarking sectoriel." },
      { title: "Module 2 — Modélisation financière", description: "Modélisation Excel de la performance, budget prévisionnel, seuil de rentabilité, scénarios de croissance et de crise." },
      { title: "Module 3 — Pilotage et reporting", description: "Tableau de bord financier et KPIs, contrôle budgétaire et analyse des écarts, reporting pour les dirigeants, suivi de trésorerie." },
      { title: "Module 4 — Décision financière stratégique", description: "Évaluation des investissements (VAN, TRI), arbitrage financement propre vs dette, optimisation du capital, gestion des risques financiers." }
    ],
    targetAudience: "Directeurs financiers, contrôleurs de gestion, analystes financiers, chefs d'entreprise, consultants en finance.",
    prerequisites: "Connaissance de base en comptabilité ou gestion financière.",
    methods: [
      "Lecture commentée d'états financiers d'entreprises africaines",
      "Modélisation sur tableur en atelier",
      "Simulation de tableau de bord financier",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'g4', title: 'Éthique et Conformité en Entreprise — Module Court', slug: 'ethique-et-conformite-en-entreprise-module-court', description: 'Intégrez l\'éthique et la conformité dans la stratégie de votre entreprise. Ce module forme à comprendre les obligations légales, prévenir les risques éthiques et instaurer une culture d\'intégrité durable.', certificateLevel: 'Module de Formation', domain: 'Banque/Finance/Admin entreprises', duration: '14h / 2 jours', format: 'Présentiel', price: { amount: 400, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-cyan-600 to-slate-900', image: '/images/jc-cert-group-stage.jpeg',
    objectives: [
      "Comprendre les concepts d'éthique et de conformité en entreprise",
      "Maîtriser les cadres réglementaires et légaux",
      "Instaurer une culture d'éthique organisationnelle",
      "Développer des stratégies de gestion des risques éthiques"
    ],
    modules: [
      { title: "Module 1 — Éthique et conformité : enjeux et concepts", description: "Définitions et interdépendance éthique-conformité, enjeux pour l'entreprise, panorama des risques éthiques dans les différents secteurs." },
      { title: "Module 2 — Cadres réglementaires et légaux", description: "Normes de conformité (UEMOA, OHADA, standards internationaux), lois anti-corruption, protection des données, RSE." },
      { title: "Module 3 — Culture éthique et compliance opérationnelle", description: "Code de conduite, formation des équipes, gestion des conflits d'intérêts, dispositifs d'alerte éthique." },
      { title: "Module 4 — Gestion des risques éthiques", description: "Cartographie des risques éthiques, stratégies de prévention, gestion des incidents, évaluation de l'impact réputationnel." }
    ],
    targetAudience: "Responsables de la conformité et gestion des risques, cadres dirigeants, DRH, consultants en éthique et gouvernance.",
    prerequisites: "Expérience professionnelle en entreprise.",
    methods: [
      "Études de cas de crises éthiques d'entreprises",
      "Atelier de construction d'un code de conduite",
      "Simulation d'un incident de conformité",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'g5', title: 'Innovation Managériale et Performance Organisationnelle', slug: 'innovation-manageriale-et-performance-organisationnelle', description: 'Développez des pratiques managériales innovantes pour renforcer la performance organisationnelle. Ce module couvre le design thinking, les méthodes agiles et le management participatif pour améliorer l\'efficacité collective.', certificateLevel: 'Module de Formation', domain: 'Banque/Finance/Admin entreprises', duration: '14h / 2 jours', format: 'Présentiel', price: { amount: 400, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-violet-600 to-slate-900', image: '/images/event-training-1.jpg',
    objectives: [
      "Comprendre les principes de l'innovation managériale",
      "Utiliser les outils agiles et le design thinking pour stimuler l'innovation",
      "Intégrer l'innovation dans la stratégie organisationnelle",
      "Mesurer et améliorer la performance organisationnelle"
    ],
    modules: [
      { title: "Module 1 — Innovation managériale : principes", description: "Définition et leviers de l'innovation managériale, organisations innovantes, management agile et participatif, barrières à l'innovation." },
      { title: "Module 2 — Outils de l'innovation en équipe", description: "Design thinking, méthodes agiles (Scrum, Kanban), intelligence collective, hackathons et sprints d'idéation." },
      { title: "Module 3 — Innovation dans la stratégie", description: "Intégration de l'innovation dans la culture, gestion du changement, innovation RH, modèles organisationnels innovants." },
      { title: "Module 4 — Mesure de la performance", description: "Indicateurs de l'innovation managériale, tableaux de bord, analyse des résultats, retour d'expérience et capitalisation." }
    ],
    targetAudience: "Directeurs et managers souhaitant innover dans leurs pratiques, responsables de la transformation, consultants en management stratégique.",
    prerequisites: "Expérience de management ou de direction d'équipe.",
    methods: [
      "Ateliers pratiques de design thinking",
      "Études de cas d'organisations innovantes africaines",
      "Simulations de conduite du changement",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'g6', title: 'Leadership et Sciences de la Décision — Session Courte', slug: 'leadership-et-sciences-de-la-decision-session-courte', description: 'Optimisez votre prise de décision stratégique grâce aux sciences comportementales. Ce module forme les dirigeants à comprendre les biais cognitifs, décider en contexte incertain et exercer un leadership éclairé et responsable.', certificateLevel: 'Module de Formation', domain: 'Banque/Finance/Admin entreprises', duration: '14h / 2 jours', format: 'Présentiel', price: { amount: 400, currency: 'EUR' }, nextSession: '2026-09-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-rose-600 to-slate-900', image: '/images/utourisme-tribune.jpg',
    objectives: [
      "Étudier les théories du leadership et de la prise de décision",
      "Identifier les biais cognitifs perturbant la décision",
      "Maîtriser les techniques de décision en environnement incertain",
      "Développer un leadership éclairé et éthique"
    ],
    modules: [
      { title: "Module 1 — Théories du leadership", description: "Grandes théories du leadership (situationnel, transformationnel, éthique), influence et autorité, modèles africains de leadership." },
      { title: "Module 2 — Biais cognitifs et décision", description: "Biais de confirmation, ancrage, effet de groupe, heuristiques, techniques pour neutraliser les biais, intelligence émotionnelle." },
      { title: "Module 3 — Décision en contexte complexe", description: "Cadres décisionnels (OODA Loop, matrices, arbres), décision sous incertitude, décision collaborative et intelligence collective." },
      { title: "Module 4 — Leadership éthique et stratégique", description: "Prise de décision éthique en crise, communication de la décision, leadership transformationnel, développement du plan de leadership personnel." }
    ],
    targetAudience: "Cadres dirigeants, managers seniors, responsables de stratégie, coachs d'organisation.",
    prerequisites: "Expérience managériale ou de direction.",
    methods: [
      "Autodiagnostic du profil décisionnel",
      "Jeux de rôle et simulations stratégiques",
      "Études de cas de grandes décisions africaines",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },
  { id: 'g7', title: 'Achats, Approvisionnement et Gestion de la Chaîne Logistique', slug: 'achats-approvisionnement-et-gestion-de-la-chaine-logistique', description: 'Maîtrisez les processus d\'achats, d\'approvisionnement et de gestion de la supply chain pour améliorer la performance globale de l\'entreprise en optimisant les coûts, les délais et la gestion des risques logistiques.', certificateLevel: 'Module de Formation', domain: 'Banque/Finance/Admin entreprises', duration: '14h / 2 jours', format: 'Présentiel', price: { amount: 400, currency: 'EUR' }, nextSession: '2026-10-01', enrollmentStatus: 'open', badge: null, imageGradient: 'from-amber-600 to-slate-900', image: '/images/event-team-1.jpg',
    objectives: [
      "Maîtriser les processus d'achats et d'approvisionnement",
      "Optimiser les flux logistiques et la gestion des stocks",
      "Développer les relations fournisseurs et négocier les contrats",
      "Gérer les risques logistiques et optimiser les coûts"
    ],
    modules: [
      { title: "Module 1 — Fondamentaux des achats et approvisionnement", description: "Processus d'achats et d'approvisionnement, politique d'achats et sourcing, appels d'offres et sélection des fournisseurs, gestion des stocks (MRP, JAT, EOQ)." },
      { title: "Module 2 — Gestion de la chaîne logistique", description: "Stratégies de supply chain, optimisation des flux de matières et produits, délais, coûts et qualité, digitalisation logistique (ERP, blockchain, IA)." },
      { title: "Module 3 — Relations fournisseurs et négociation", description: "Développement et évaluation des fournisseurs, techniques de négociation avancée, rédaction des contrats d'achat, gestion partenariale long terme." },
      { title: "Module 4 — Risques logistiques et performance", description: "Identification des risques (ruptures, retards, fraudes), indicateurs de performance (OTD, TCO, taux de service), audit de la supply chain, résilience et continuité." }
    ],
    targetAudience: "Responsables des achats et de l'approvisionnement, supply chain managers, directeurs logistique, consultants en gestion de la chaîne logistique.",
    prerequisites: "Expérience professionnelle en achats, logistique ou administration. Diplôme Bac+2.",
    methods: [
      "Cartographie d'une chaîne logistique complète",
      "Simulation d'un processus achats",
      "Études de cas d'entreprises africaines et internationales",
      "Modules e-learning sur la plateforme Neuroklax"
    ]
  },

  // ============================================================
  // COLLECTIVITÉS TERRITORIALES — Catalogue officiel ETHSUN
  // ============================================================
  {
    id: 'p20',
    title: 'Gouvernance Territoriale et Démocratie Locale',
    slug: 'gouvernance-territoriale-democratie-locale',
    description: "Instaurer une gouvernance inclusive, transparente et fondée sur la participation citoyenne dans les collectivités territoriales. Ce programme forme les élus et cadres territoriaux aux mécanismes de la démocratie locale, de la redevabilité et du pilotage stratégique.",
    certificateLevel: 'Executive Certificate',
    domain: 'Collectivités Territoriales',
    duration: '4 jours',
    format: 'Présentiel',
    price: { amount: 450000, currency: 'XOF' },
    nextSession: '2026-09-01',
    enrollmentStatus: 'open',
    badge: 'Nouveau',
    imageGradient: 'from-teal-800 to-slate-900',
    image: '/images/minister-speech.jpg',
    objectives: [
      "Comprendre les enjeux et principes fondamentaux de la gouvernance territoriale en contexte décentralisé",
      "Identifier et maîtriser les mécanismes de participation citoyenne et de démocratie locale",
      "Instaurer des dispositifs de redevabilité et de contrôle au niveau des collectivités territoriales",
      "Élaborer une stratégie de gouvernance locale inclusive et participative",
    ],
    modules: [
      { title: "Module 1 — Fondamentaux de la Gouvernance Territoriale", description: "Concepts et principes de la gouvernance locale. Décentralisation, déconcentration et subsidiarité. Rôles et responsabilités des collectivités. Étude de cas : modèles de gouvernance en Afrique." },
      { title: "Module 2 — Démocratie Locale et Participation Citoyenne", description: "Droits des citoyens et obligations des élus. Outils de participation citoyenne et budgets participatifs. Dispositifs inclusifs en Afrique et à l'international." },
      { title: "Module 3 — Mécanismes de Redevabilité et Contrôle Local", description: "Transparence et accès à l'information. Dispositifs de contrôle budgétaire. Rôles des corps de contrôle et de la société civile. Études de cas : Ouagadougou et Nairobi." },
      { title: "Module 4 — Application Pratique et Feuille de Route", description: "Mise en commun des diagnostics. Conception d'une stratégie de gouvernance inclusive. Évaluation et capitalisation des acquis. Feuille de route de gouvernance locale." },
    ],
    targetAudience: "Élus locaux (maires, présidents de conseils régionaux), secrétaires généraux de collectivités, agents de développement local, responsables associatifs et membres de la société civile.",
    methods: [
      "Études de cas de collectivités africaines performantes",
      "Ateliers de diagnostic de gouvernance locale",
      "Simulations de conseil municipal et de budgets participatifs",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p21',
    title: 'Gestion des Conflits et Médiation Territoriale',
    slug: 'gestion-conflits-mediation-territoriale',
    description: "Maîtriser les outils de prévention, régulation et médiation des conflits territoriaux pour garantir la stabilité locale. Ce programme outille les acteurs territoriaux face aux tensions foncières, intercommunautaires et institutionnelles.",
    certificateLevel: 'Certificat de Perfectionnement',
    domain: 'Collectivités Territoriales',
    duration: '3 jours',
    format: 'Présentiel',
    price: { amount: 350000, currency: 'XOF' },
    nextSession: '2026-09-15',
    enrollmentStatus: 'open',
    badge: 'Nouveau',
    imageGradient: 'from-rose-800 to-slate-900',
    image: '/images/graduates-crowd.jpeg',
    objectives: [
      "Identifier et analyser les principales sources de conflits dans les territoires",
      "Mettre en œuvre des dispositifs efficaces de médiation et de gestion des conflits",
      "Promouvoir la cohésion sociale et la paix locale",
    ],
    modules: [
      { title: "Module 1 — Identification et Typologie des Conflits Territoriaux", description: "Typologie des conflits : foncier, intercommunautaire, électoral, institutionnel. Facteurs déclencheurs et dynamiques conflictuelles. Cartographie des conflits à l'échelle locale. Conséquences sur la gouvernance et le développement local." },
      { title: "Module 2 — Cadres et Méthodes de Gestion des Conflits", description: "Réglementation nationale et dispositifs institutionnels. Modes de résolution : médiation, arbitrage, conciliation, négociation. Cadres traditionnels et mécanismes coutumiers. Étude de cas : gestion d'un conflit foncier communautaire." },
      { title: "Module 3 — Dispositifs Locaux de Prévention", description: "Création de cellules et observatoires de prévention. Systèmes d'alerte précoce et gestion de crise. Implication des leaders locaux, religieux et associatifs. Communication préventive et médiation sociale." },
    ],
    targetAudience: "Maires, présidents de conseils régionaux, élus locaux, chefs de villages et autorités coutumières, responsables associatifs et ONG locales, agents de services publics et techniciens territoriaux.",
    methods: [
      "Jeux de rôle et simulations de médiation territoriale",
      "Études de cas de conflits fonciers et intercommunautaires en Afrique",
      "Ateliers de cartographie des tensions locales",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p22',
    title: 'Suivi-Évaluation et Management de la Performance Territoriale',
    slug: 'suivi-evaluation-performance-territoriale',
    description: "Concevoir des dispositifs de suivi-évaluation pertinents et gérer la performance des services publics locaux. Ce certificat forme à la Gestion Axée sur les Résultats (GAR) et aux outils de pilotage territorial.",
    certificateLevel: "Certificat d'Expertise",
    domain: 'Collectivités Territoriales',
    duration: '4 jours',
    format: 'Présentiel',
    price: { amount: 475000, currency: 'XOF' },
    nextSession: '2026-10-01',
    enrollmentStatus: 'open',
    badge: null,
    imageGradient: 'from-indigo-800 to-slate-900',
    image: '/images/event-training-1.jpg',
    objectives: [
      "Élaborer un dispositif de suivi-évaluation des projets et politiques locales",
      "Définir des indicateurs SMART et construire des tableaux de bord de performance",
      "Exploiter les résultats du suivi-évaluation pour l'amélioration des services",
      "Intégrer les résultats dans la gestion stratégique locale",
    ],
    modules: [
      { title: "Module 1 — Concepts et Démarche de Suivi-Évaluation", description: "Définitions, enjeux et principes du suivi-évaluation territorial. Typologie des évaluations : à priori, intermédiaire, ex-post. Construction du cadre logique et théorie du changement. Structuration d'un dispositif de suivi." },
      { title: "Module 2 — Conception d'Indicateurs et Tableaux de Bord", description: "Types d'indicateurs : moyens, activités, résultats, impacts. Caractéristiques des indicateurs SMART. Construction et hiérarchisation d'indicateurs. Tableaux de bord de suivi territorial." },
      { title: "Module 3 — Collecte, Analyse et Valorisation des Données", description: "Techniques de collecte de données locales. Analyse quantitative et qualitative des résultats. Rédaction de rapports de suivi-évaluation. Communication et diffusion des résultats." },
      { title: "Module 4 — Management de la Performance et Accountability", description: "Approche Gestion Axée sur les Résultats (GAR). Intégration du suivi-évaluation dans le cycle de gestion publique. Culture de performance et de reddition des comptes. Pilotage par la performance." },
    ],
    targetAudience: "Chargés de mission et de planification locale, directeurs de projets territoriaux, techniciens et cadres des collectivités territoriales, responsables de suivi-évaluation des services techniques.",
    methods: [
      "Ateliers de construction d'indicateurs SMART sur des projets réels",
      "Exercices de conception de tableaux de bord territoriaux",
      "Études de cas de suivi-évaluation de programmes en Afrique",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p23',
    title: 'Management des Services Publics de Proximité',
    slug: 'management-services-publics-proximite',
    description: "Professionnaliser la gestion et améliorer la performance des services publics locaux. Ce programme forme à l'organisation, la qualité et la satisfaction des usagers dans les services communaux.",
    certificateLevel: 'Certificat de Perfectionnement',
    domain: 'Collectivités Territoriales',
    duration: '3 jours',
    format: 'Présentiel',
    price: { amount: 350000, currency: 'XOF' },
    nextSession: '2026-10-15',
    enrollmentStatus: 'open',
    badge: null,
    imageGradient: 'from-cyan-800 to-slate-900',
    image: '/images/event-speaker-1.jpg',
    objectives: [
      "Diagnostiquer la performance et l'organisation des services publics locaux",
      "Mettre en œuvre des standards de qualité, d'accessibilité et de transparence",
      "Instaurer une culture du service et de satisfaction des usagers",
    ],
    modules: [
      { title: "Module 1 — Typologie et Organisation des Services Publics", description: "Catégories et modes de gestion des services publics : régie, délégation, PPP. Cartographie des services prioritaires. Analyse de la situation des services communaux." },
      { title: "Module 2 — Gestion Opérationnelle et Suivi de la Qualité", description: "Standards de qualité et d'accessibilité. Supervision et gestion quotidienne. Gestion des retours usagers. Tableaux de bord et outils de pilotage." },
      { title: "Module 3 — Gestion des Plaintes et Médiation Institutionnelle", description: "Systèmes de gestion des doléances. Outils de prévention et traitement des conflits. Rôle des médiateurs locaux. Bonnes pratiques d'écoute et de transparence." },
    ],
    targetAudience: "Directeurs techniques et chefs de services municipaux, gestionnaires des services publics locaux, élus en charge des services de proximité, agents et personnels techniques des collectivités.",
    methods: [
      "Diagnostic participatif des services communaux",
      "Ateliers de conception de standards qualité",
      "Simulation de gestion des plaintes usagers",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p24',
    title: 'Smart Cities et Gouvernance Numérique des Collectivités',
    slug: 'smart-cities-gouvernance-numerique',
    description: "Concevoir des stratégies de gouvernance numérique et de villes intelligentes adaptées au contexte africain. Ce programme couvre les SIG, l'open data, les plateformes citoyennes et la cybersécurité territoriale.",
    certificateLevel: 'Executive Certificate',
    domain: 'Collectivités Territoriales',
    duration: '4 jours',
    format: 'Blended',
    price: { amount: 500000, currency: 'XOF' },
    nextSession: '2026-11-01',
    enrollmentStatus: 'coming_soon',
    badge: 'Nouveau',
    imageGradient: 'from-violet-800 to-slate-900',
    image: '/images/jc-networking.jpeg',
    objectives: [
      "Comprendre les principes de la gouvernance numérique et des villes intelligentes",
      "Identifier les solutions et technologies numériques applicables aux services publics locaux",
      "Élaborer une feuille de route de digitalisation territoriale",
    ],
    modules: [
      { title: "Module 1 — Principes et Composantes des Smart Cities", description: "Définition et fondements. Domaines : mobilité, environnement, sécurité, administration. Infrastructures, gouvernance, services connectés. Smart cities en Afrique et à l'international." },
      { title: "Module 2 — Technologies et Outils Numériques", description: "SIG et open data territorial. Plateformes numériques citoyennes. Gestion numérique des infrastructures. Cybersécurité et protection des données." },
      { title: "Module 3 — Gouvernance Numérique et Inclusion Digitale", description: "Stratégies d'e-gouvernance locale. Inclusion numérique et fracture digitale. Réglementation et gouvernance des données. Expériences africaines de digitalisation." },
      { title: "Module 4 — Feuille de Route Smart City", description: "Priorités numériques locales. Hiérarchisation des projets et estimation budgétaire. Partenariats et modèles de financement. Tableau de bord de pilotage et indicateurs." },
    ],
    targetAudience: "Directeurs informatiques et responsables SI territoriaux, urbanistes et gestionnaires de services publics, élus locaux et décideurs territoriaux, agents territoriaux et techniciens de collectivités.",
    methods: [
      "Études de cas de smart cities africaines et internationales",
      "Ateliers de cartographie SIG et open data",
      "Conception d'une feuille de route numérique",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p25',
    title: 'Ingénierie de la Commande Publique Territoriale',
    slug: 'ingenierie-commande-publique-territoriale',
    description: "Maîtriser les outils et techniques de l'ingénierie de la commande publique locale, de la planification à l'exécution des marchés. Ce certificat sécurise les procédures d'achat public des collectivités territoriales.",
    certificateLevel: 'Certificat Professionnel',
    domain: 'Collectivités Territoriales',
    duration: '4 jours',
    format: 'Présentiel',
    price: { amount: 500000, currency: 'XOF' },
    nextSession: '2026-10-01',
    enrollmentStatus: 'open',
    badge: 'Populaire',
    imageGradient: 'from-amber-800 to-slate-900',
    image: '/images/bnetd-group.jpeg',
    objectives: [
      "Maîtriser le cadre juridique national et communautaire des marchés publics locaux",
      "Planifier, concevoir et piloter les procédures de commande publique",
      "Sécuriser les contrats et prévenir les risques contentieux",
      "Rédiger des dossiers d'appel d'offres conformes aux exigences UEMOA",
    ],
    modules: [
      { title: "Module 1 — Environnement Juridique et Organisationnel", description: "Cadre juridique : directive UEMOA, droit national. Types et procédures de marchés publics. Organisation de la commande publique. Responsabilités et rôles des acteurs (ANRMP, DGBF, cellules passation)." },
      { title: "Module 2 — Planification et Programmation des Marchés", description: "Analyse des besoins et planification des achats. Plan prévisionnel de passation des marchés (PPM). Modes de consultation et sélection des procédures. Articulation planification budgétaire et marchés." },
      { title: "Module 3 — Rédaction des Dossiers et Conduite des Procédures", description: "Structure d'un Dossier d'Appel d'Offres (DAO). Rédaction des clauses administratives et techniques. Gestion des avis de publicité. Organisation des commissions d'évaluation." },
      { title: "Module 4 — Attribution, Suivi et Exécution", description: "Processus d'attribution et notification. Gestion des ordres de service et avenants. Contrôle de l'exécution et gestion des litiges. Voies de recours et sanctions." },
    ],
    targetAudience: "Responsables des services de passation des marchés, directeurs financiers et comptables publics, gestionnaires de projets territoriaux, agents impliqués dans la commande publique locale.",
    methods: [
      "Exercices de rédaction de DAO et d'évaluation d'offres",
      "Études de cas de marchés publics locaux en Côte d'Ivoire",
      "Simulation d'une commission d'attribution",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p26',
    title: 'Diplomatie Territoriale et Coopération Décentralisée',
    slug: 'diplomatie-territoriale-cooperation-decentralisee',
    description: "Piloter des projets internationaux et valoriser les territoires à l'échelle régionale et mondiale. Ce programme forme à la mobilisation des financements internationaux et au montage de partenariats de coopération décentralisée.",
    certificateLevel: 'Executive Certificate',
    domain: 'Collectivités Territoriales',
    duration: '4 jours',
    format: 'Présentiel',
    price: { amount: 475000, currency: 'XOF' },
    nextSession: '2026-11-15',
    enrollmentStatus: 'coming_soon',
    badge: 'Nouveau',
    imageGradient: 'from-sky-800 to-slate-900',
    image: '/images/graduates-vip-selfie.jpg',
    objectives: [
      "Comprendre les enjeux et cadres réglementaires de la diplomatie territoriale",
      "Élaborer des projets de coopération décentralisée et de partenariat international",
      "Identifier et mobiliser les financements internationaux (AFD, UE, Banque mondiale)",
      "Valoriser l'action extérieure et internationale de la collectivité",
    ],
    modules: [
      { title: "Module 1 — Enjeux et Cadre Juridique", description: "Concepts et fondements de la diplomatie des collectivités. Cadre juridique de la coopération décentralisée. Typologie : Nord-Sud, Sud-Sud, triangulaires. Diplomatie territoriale en Afrique de l'Ouest." },
      { title: "Module 2 — Montage de Projets et Financements", description: "Bailleurs et opportunités (Banque mondiale, AFD, UE). Montage de projets internationaux cofinancés. Rédaction de notes conceptuelles. Lobbying territorial et plaidoyer international." },
      { title: "Module 3 — Pilotage de Partenariats Internationaux", description: "Gouvernance de projets multiacteurs. Contrats de coopération et gestion des partenariats. Suivi-évaluation et reddition de comptes. Valorisation et communication des actions." },
      { title: "Module 4 — Stratégie de Diplomatie Territoriale", description: "Stratégie internationale intégrée à la planification locale. Capitalisation des expériences. Indicateurs de performance et visibilité. Exemples de stratégies en Afrique, Asie et Europe." },
    ],
    targetAudience: "Chargés de coopération internationale, élus locaux et membres de conseils municipaux ou régionaux, responsables de relations internationales, agents de développement local et cadres techniques.",
    methods: [
      "Ateliers de rédaction de notes conceptuelles pour bailleurs",
      "Simulation de négociation de partenariat international",
      "Études de cas de coopération décentralisée réussie",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p27',
    title: 'Leadership des Élus Locaux et Gouvernance Éthique',
    slug: 'leadership-elus-locaux-gouvernance-ethique',
    description: "Exercer un leadership efficace, intègre et centré sur le bien commun dans la gestion des collectivités. Ce programme renforce la posture des élus face aux défis de la gouvernance éthique et de la prise de décision en contexte de crise.",
    certificateLevel: 'Executive Certificate',
    domain: 'Collectivités Territoriales',
    duration: '3 jours',
    format: 'Présentiel',
    price: { amount: 400000, currency: 'XOF' },
    nextSession: '2026-09-01',
    enrollmentStatus: 'open',
    badge: null,
    imageGradient: 'from-emerald-800 to-slate-900',
    image: '/images/rector-micro.jpeg',
    objectives: [
      "Renforcer le leadership stratégique et opérationnel des élus locaux",
      "Intégrer les principes de gouvernance éthique dans l'action publique",
      "Gérer les conflits et renforcer la légitimité des décisions politiques",
    ],
    modules: [
      { title: "Module 1 — Fondements du Leadership Public Territorial", description: "Concepts et styles de leadership dans le secteur public. Spécificités du leadership politique local. Posture et légitimité de l'élu territorial. Études de cas en Afrique." },
      { title: "Module 2 — Prise de Décision et Communication Politique", description: "Prise de décision en environnement contraint. Communication d'influence et négociation. Gestion de l'image publique et communication de crise. Simulation de conseil municipal." },
      { title: "Module 3 — Gouvernance Éthique et Gestion des Conflits", description: "Principes d'éthique publique et prévention des conflits d'intérêts. Cadres déontologiques et dispositifs anticorruption. Gestion des tensions communautaires. Leadership en contexte de crise." },
    ],
    targetAudience: "Maires et présidents de conseils régionaux, élus locaux et membres d'exécutifs communaux, chefs de cabinet, directeurs de services techniques, responsables politiques locaux.",
    methods: [
      "Études de cas de leadership territorial en contexte africain",
      "Simulations de conseil municipal et de gestion de crise",
      "Coaching collectif de posture de leadership",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p28',
    title: 'Gestion Budgétaire et Comptable des Collectivités Territoriales',
    slug: 'gestion-budgetaire-comptable-collectivites',
    description: "Maîtriser la planification, l'exécution budgétaire et la comptabilité publique des collectivités territoriales. Ce programme intègre la Gestion Axée sur les Résultats et les outils de pilotage financier local.",
    certificateLevel: "Certificat d'Expertise",
    domain: 'Collectivités Territoriales',
    duration: '4 jours',
    format: 'Présentiel',
    price: { amount: 475000, currency: 'XOF' },
    nextSession: '2026-10-01',
    enrollmentStatus: 'open',
    badge: null,
    imageGradient: 'from-yellow-800 to-slate-900',
    image: '/images/trophee-remise.jpg',
    objectives: [
      "Comprendre les principes et mécanismes de la gestion budgétaire locale",
      "Maîtriser les outils de planification financière et de gestion comptable",
      "Intégrer la logique de performance et de transparence financière",
      "Utiliser des outils de suivi financier et de performance territoriale",
    ],
    modules: [
      { title: "Module 1 — Cadre Réglementaire et Élaboration Budgétaire", description: "Environnement juridique et réglementation financière locale. Principes et architecture du budget communal. Processus d'élaboration et d'adoption du budget. Lecture et analyse d'un budget communal réel." },
      { title: "Module 2 — Exécution Budgétaire et Gestion de Trésorerie", description: "Processus d'exécution budgétaire. Gestion de la trésorerie et planification des paiements. Suivi des engagements. Bonnes pratiques de gestion budgétaire." },
      { title: "Module 3 — Comptabilité Publique et Contrôle Financier", description: "Principes de la comptabilité publique. Gestion des écritures comptables. Procédures de contrôle interne et audit. Reddition des comptes et communication financière." },
      { title: "Module 4 — Pilotage Financier et Performance", description: "Gestion Axée sur les Résultats (GAR). Indicateurs de performance dans le suivi budgétaire. Tableau de bord financier. Analyse d'une situation financière communale." },
    ],
    targetAudience: "Directeurs financiers et comptables publics des collectivités, secrétaires généraux de collectivités territoriales, élus en charge des finances locales, agents techniques et gestionnaires comptables.",
    methods: [
      "Exercices d'élaboration et lecture d'un budget communal",
      "Ateliers de construction d'un tableau de bord financier",
      "Études de cas de gestion financière de communes africaines",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },

  // ============================================================
  // ÉTHIQUE, MÉDIATION & QUALITÉ — Catalogue officiel ETHSUN
  // ============================================================
  {
    id: 'p29',
    title: 'Éthique et Responsabilité dans les Pratiques Professionnelles',
    slug: 'ethique-responsabilite-pratiques-professionnelles',
    description: "Intégrer les principes éthiques dans les décisions quotidiennes et les relations professionnelles. Ce certificat outille les cadres et dirigeants pour faire face aux dilemmes éthiques avec rigueur et discernement.",
    certificateLevel: "Certificat d'Aptitude",
    domain: 'Éthique & Médiation',
    duration: '2 jours',
    format: 'Présentiel',
    price: { amount: 250000, currency: 'XOF' },
    nextSession: '2026-09-01',
    enrollmentStatus: 'open',
    badge: 'Nouveau',
    imageGradient: 'from-purple-800 to-slate-900',
    image: '/images/cert-remise-officiels.jpg',
    objectives: [
      "Comprendre les fondements de l'éthique appliquée aux pratiques professionnelles",
      "Identifier les dilemmes éthiques et adopter une posture responsable",
      "Renforcer la culture d'intégrité dans l'environnement de travail",
    ],
    modules: [
      { title: "Module 1 — Fondements de l'Éthique Professionnelle", description: "Définitions et principes fondamentaux de l'éthique professionnelle. Responsabilité individuelle et collective. Dilemmes éthiques et mécanismes de décision responsable. Valeurs organisationnelles et culture d'intégrité." },
      { title: "Module 2 — Application et Cas Pratiques", description: "Cadres normatifs : codes d'éthique, chartes, référentiels déontologiques. Exemples sectoriels : santé, éducation, entreprise, administration publique. Analyse d'un cas de signalement éthique. Mise en situation et jeux de rôle." },
    ],
    targetAudience: "Cadres et managers, agents publics et fonctionnaires, dirigeants d'entreprise, professionnels de l'accompagnement, consultants et formateurs.",
    methods: [
      "Études de cas réels de dilemmes éthiques",
      "Jeux de rôle et mises en situation professionnelles",
      "Ateliers de rédaction d'un code éthique",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p30',
    title: "Prévention des Conflits d'Intérêts et Intégrité dans les Décisions",
    slug: 'prevention-conflits-interets-integrite',
    description: "Identifier, prévenir et gérer les situations de conflits d'intérêts pour des décisions justes et transparentes. Ce programme déploie des mécanismes concrets de prévention dans les organisations publiques et privées.",
    certificateLevel: 'Certificat de Perfectionnement',
    domain: 'Éthique & Médiation',
    duration: '2 jours',
    format: 'Présentiel',
    price: { amount: 275000, currency: 'XOF' },
    nextSession: '2026-09-15',
    enrollmentStatus: 'open',
    badge: 'Nouveau',
    imageGradient: 'from-fuchsia-800 to-slate-900',
    image: '/images/event-certificate-4.jpg',
    objectives: [
      "Définir et reconnaître les différentes formes de conflits d'intérêts",
      "Mettre en place des mécanismes de prévention dans les organisations",
      "Promouvoir une culture de l'intégrité et de la redevabilité",
    ],
    modules: [
      { title: "Module 1 — Typologie et Cadres de Prévention", description: "Conflits réels, potentiels et apparents : définitions et exemples. Éthique décisionnelle et transparence. Cadres réglementaires et outils : déclarations, chartes, registres. Responsabilités institutionnelles et individuelles." },
      { title: "Module 2 — Mise en Pratique et Dispositifs", description: "Jurisprudences, sanctions et dispositifs d'alerte. Simulations de prise de décision à risque. Rédaction d'une politique de prévention des conflits d'intérêts. Évaluation éthique d'une attribution de marché." },
    ],
    targetAudience: "Décideurs et cadres dirigeants, gestionnaires de ressources publiques, juristes et conseillers juridiques, agents publics en charge de marchés, auditeurs et contrôleurs.",
    methods: [
      "Simulation de situations à risque de conflit d'intérêts",
      "Rédaction d'une politique d'intégrité organisationnelle",
      "Analyse de jurisprudences africaines et internationales",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p31',
    title: "Éthique de l'Intelligence Artificielle et des Technologies Numériques",
    slug: 'ethique-intelligence-artificielle-technologies',
    description: "Explorer les implications éthiques de l'IA : vie privée, transparence algorithmique, biais et gouvernance des données. Ce certificat prépare les décideurs à intégrer l'éthique numérique dans leurs projets technologiques.",
    certificateLevel: 'Executive Certificate',
    domain: 'Éthique & Médiation',
    duration: '3 jours',
    format: 'Blended',
    price: { amount: 400000, currency: 'XOF' },
    nextSession: '2026-10-01',
    enrollmentStatus: 'open',
    badge: 'Populaire',
    imageGradient: 'from-blue-700 to-violet-900',
    image: '/images/jc-networking.jpeg',
    objectives: [
      "Comprendre les enjeux éthiques liés à l'usage de l'IA dans les organisations",
      "Identifier les biais algorithmiques et les risques d'atteinte aux droits fondamentaux",
      "Intégrer l'éthique numérique dans les projets technologiques",
    ],
    modules: [
      { title: "Module 1 — Principes d'Éthique Numérique", description: "Loyauté, transparence et explicabilité des systèmes IA. Cadres réglementaires : RGPD, IA Act (UE), Protection des données en Afrique. Risques : données personnelles, automatisation, surveillance algorithmique." },
      { title: "Module 2 — IA Responsable et Gouvernance", description: "Audit éthique, biais algorithmiques et gouvernance des données. Bonnes pratiques de conception éthique (Privacy by Design). Études de cas : recrutement automatisé, scoring de crédit, reconnaissance faciale." },
      { title: "Module 3 — Projet et Mise en Application", description: "Ateliers d'analyse éthique de projets numériques. Débats sur les dilemmes technologiques contemporains. Évaluation éthique d'un projet IA en santé publique africaine." },
    ],
    targetAudience: "Dirigeants et DSI d'entreprises, responsables innovation et transformation digitale, juristes spécialisés en droit numérique, cadres publics et privés impliqués dans des projets IA.",
    methods: [
      "Études de cas d'IA responsable et irresponsable",
      "Ateliers d'audit éthique de systèmes algorithmiques",
      "Débats structurés sur les dilemmes technologiques",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p32',
    title: 'Initiation à la Médiation Professionnelle en Entreprise',
    slug: 'initiation-mediation-professionnelle',
    description: "Maîtriser les fondamentaux de la médiation et expérimenter les étapes clés d'un processus de médiation professionnelle. Ce programme forme à intervenir comme médiateur neutre dans les conflits d'entreprise.",
    certificateLevel: "Certificat d'Initiation",
    domain: 'Éthique & Médiation',
    duration: '3 jours',
    format: 'Présentiel',
    price: { amount: 325000, currency: 'XOF' },
    nextSession: '2026-09-15',
    enrollmentStatus: 'open',
    badge: 'Nouveau',
    imageGradient: 'from-orange-800 to-slate-900',
    image: '/images/event-team-1.jpg',
    objectives: [
      "Comprendre les principes fondamentaux de la médiation professionnelle",
      "Identifier les situations propices à la médiation en entreprise",
      "Expérimenter les étapes clés d'un processus de médiation",
    ],
    modules: [
      { title: "Module 1 — Fondamentaux de la Médiation", description: "Principes : neutralité, confidentialité, responsabilité et impartialité. Processus de médiation : préparation, entretien préliminaire, séances et accord. Rôle du médiateur vs arbitrage, conciliation et procédure judiciaire." },
      { title: "Module 2 — Cadre Juridique et Déontologie", description: "Cadres juridiques nationaux et déontologie du médiateur. Médiation et qualité de vie au travail (QVT). Analyse de cas de conflits interpersonnels et organisationnels." },
      { title: "Module 3 — Pratique et Simulation", description: "Jeux de rôle de médiation professionnelle. Simulation d'entretien de médiation en entreprise. Débriefings collectifs et retours d'expérience." },
    ],
    targetAudience: "Managers et chefs de service, DRH et responsables des ressources humaines, médiateurs internes, partenaires sociaux, conseillers en organisation et consultants.",
    methods: [
      "Jeux de rôle de médiation en situation réelle",
      "Simulation complète d'un processus de médiation",
      "Analyse de cas de conflits d'entreprise",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p33',
    title: 'Médiation Interne et Prévention des Conflits au Travail',
    slug: 'mediation-interne-prevention-conflits',
    description: "Instaurer un dispositif de médiation préventive au sein de l'organisation pour réguler les tensions avant qu'elles ne deviennent des conflits ouverts. Ce certificat outille les encadrants et médiateurs internes.",
    certificateLevel: 'Certificat de Perfectionnement',
    domain: 'Éthique & Médiation',
    duration: '3 jours',
    format: 'Présentiel',
    price: { amount: 350000, currency: 'XOF' },
    nextSession: '2026-10-15',
    enrollmentStatus: 'open',
    badge: null,
    imageGradient: 'from-red-800 to-slate-900',
    image: '/images/event-training-1.jpg',
    objectives: [
      "Instaurer une politique de gestion préventive des conflits",
      "Mettre en œuvre une démarche de médiation interne structurée",
      "Outiller les encadrants et médiateurs internes pour intervenir efficacement",
    ],
    modules: [
      { title: "Module 1 — Diagnostic des Conflits au Travail", description: "Typologie des conflits au travail : interpersonnel, organisationnel, collectif. Dispositifs de prévention et de résolution existants. Fonctionnement et valeur ajoutée de la médiation interne." },
      { title: "Module 2 — Posture et Protocole du Médiateur", description: "Rôle et posture du médiateur interne. Charte, procédures et confidentialité. Articulation avec médiation externe ou procédure judiciaire. Limites du mandat du médiateur interne." },
      { title: "Module 3 — Mise en Pratique", description: "Conception d'un protocole de médiation interne adapté à l'organisation. Simulations de médiations d'équipe et interservices. Élaboration d'une procédure en contexte de réforme ou restructuration." },
    ],
    targetAudience: "Managers opérationnels, responsables RH et DRH, médiateurs internes désignés, membres des cellules de bien-être ou QVT, délégués du personnel.",
    methods: [
      "Simulation de médiations internes complexes",
      "Conception collaborative d'un protocole de médiation",
      "Études de cas de conflits sociaux en entreprise",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p34',
    title: 'Développer la Qualité Relationnelle au Sein des Équipes',
    slug: 'qualite-relationnelle-equipes',
    description: "Instaurer un climat relationnel favorable à la confiance, la coopération et l'efficacité collective. Ce certificat renforce les compétences relationnelles des managers et coordonnateurs d'équipes.",
    certificateLevel: "Certificat d'Aptitude",
    domain: 'Éthique & Médiation',
    duration: '2 jours',
    format: 'Présentiel',
    price: { amount: 250000, currency: 'XOF' },
    nextSession: '2026-11-01',
    enrollmentStatus: 'open',
    badge: null,
    imageGradient: 'from-lime-800 to-slate-900',
    image: '/images/cert-group-kente.jpeg',
    objectives: [
      "Renforcer la cohésion d'équipe par des pratiques relationnelles constructives",
      "Identifier et désamorcer les comportements relationnels toxiques",
      "Valoriser l'intelligence relationnelle dans la dynamique de groupe",
    ],
    modules: [
      { title: "Module 1 — Piliers de la Qualité Relationnelle", description: "Écoute active, respect, reconnaissance et confiance comme fondements. Identification des freins relationnels : malentendus, jugements hâtifs, rivalités. Postures favorisant l'harmonie relationnelle et la coopération." },
      { title: "Module 2 — Outils et Pratique", description: "Outils de régulation : feedback constructif, réunions relationnelles. Cartographie relationnelle d'une équipe. Atelier de feedback positif et de reconnaissance." },
    ],
    targetAudience: "Managers et chefs de projet, coordinateurs d'équipes pluridisciplinaires, responsables de service, toute personne souhaitant améliorer ses relations de travail.",
    methods: [
      "Cartographie relationnelle d'équipe en temps réel",
      "Ateliers de feedback constructif",
      "Exercices d'intelligence émotionnelle et de coopération",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p35',
    title: 'Management Bienveillant et Leadership Éthique',
    slug: 'management-bienveillant-leadership-ethique',
    description: "Redéfinir les pratiques managériales autour de l'exemplarité, l'écoute et la responsabilité. Ce certificat Executive aide les managers à développer un style fondé sur le respect et la confiance mutuelle.",
    certificateLevel: 'Executive Certificate',
    domain: 'Éthique & Médiation',
    duration: '3 jours',
    format: 'Présentiel',
    price: { amount: 375000, currency: 'XOF' },
    nextSession: '2026-10-01',
    enrollmentStatus: 'open',
    badge: 'Nouveau',
    imageGradient: 'from-teal-700 to-indigo-900',
    image: '/images/founder-speech.jpeg',
    objectives: [
      "Clarifier les concepts de bienveillance, d'autorité éthique et de responsabilité managériale",
      "Développer un style de management fondé sur le respect et l'exemplarité",
      "Favoriser un climat de confiance et de coopération durable",
    ],
    modules: [
      { title: "Module 1 — Définition du Management Éthique", description: "Valeurs, posture et impact du management éthique. Bienveillance managériale : confiance, accompagnement, écoute active. Dilemmes éthiques et prise de décision responsable." },
      { title: "Module 2 — Outils d'Autorité Éthique", description: "Cohérence, engagement et régulation dans le management quotidien. Analyse de pratiques managériales à transformer. Grille de leadership éthique et style managérial." },
      { title: "Module 3 — Mise en Application", description: "Études de cas à fort enjeu relationnel. Ateliers de reformulation managériale bienveillante. Résolution d'un conflit managérial à dimension éthique." },
    ],
    targetAudience: "Cadres et managers opérationnels, chefs de service et responsables hiérarchiques, chefs de projet, toute personne exerçant une autorité dans une organisation.",
    methods: [
      "Coaching collectif de posture managériale",
      "Études de cas de management bienveillant en Afrique et en Europe",
      "Ateliers de reformulation et de communication non violente",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },

  // ============================================================
  // INDUSTRIES EXTRACTIVES — Nouvelles formations (catalogue AYMAR)
  // ============================================================
  {
    id: 'p44',
    title: 'Robotique et Automatisation dans les Industries Extractives',
    slug: 'robotique-automatisation-extractives',
    description: "Concevoir, intégrer et gérer des systèmes robotiques et d'automatisation dans les industries extractives. Ce certificat prépare les ingénieurs et techniciens à piloter la révolution industrielle 4.0 dans le secteur minier et pétrolier.",
    certificateLevel: 'Certificat Professionnel',
    domain: 'Industries extractives',
    duration: '3 mois',
    format: 'Blended',
    price: { amount: 950000, currency: 'XOF' },
    nextSession: '2026-11-01',
    enrollmentStatus: 'coming_soon',
    badge: 'Nouveau',
    imageGradient: 'from-violet-900 to-slate-900',
    image: '/images/expertise-group-full.jpeg',
    objectives: [
      "Comprendre les fondamentaux de la robotique et de l'automatisation industrielle",
      "Maîtriser les systèmes robotiques pour l'exploration et l'exploitation minière",
      "Optimiser les processus grâce à l'automatisation",
      "Développer des compétences en programmation et intégration de systèmes robotiques",
      "Évaluer les impacts de l'automatisation en termes de sécurité et durabilité",
    ],
    modules: [
      { title: "Module 1 — Introduction à la Robotique et Automatisation", description: "Principes fondamentaux de la robotique industrielle. Applications dans le secteur extractif : forage automatisé, convoyeurs, drones. Évolutions technologiques et enjeux pour l'Afrique." },
      { title: "Module 2 — Systèmes Robotiques pour l'Exploration", description: "Technologies robotiques spécifiques à l'exploration minière et pétrolière. Robots sous-marins, drones géophysiques, véhicules autonomes de surface. Intégration et maintenance." },
      { title: "Module 3 — Automatisation des Processus", description: "Solutions d'automatisation pour améliorer l'efficacité opérationnelle. Systèmes SCADA et DCS dans les mines et raffineries. Sécurité des opérations automatisées." },
      { title: "Module 4 — Programmation et Intégration", description: "Programmation des systèmes robotiques en environnements industriels complexes. Langages et interfaces de programmation. Tests, simulation et déploiement." },
      { title: "Module 5 — Sécurité, Durabilité et Impact", description: "Implications sociales et environnementales de l'automatisation. Analyse économique : retour sur investissement et impact emploi. Évolutions réglementaires et perspectives." },
      { title: "Module 6 — Projet de Certification", description: "Projet final intégrant tous les modules. Conception d'un système automatisé pour un cas réel. Examen de certification et soutenance." },
    ],
    targetAudience: "Ingénieurs et techniciens des secteurs miniers et pétroliers, responsables des opérations et managers, consultants en innovation industrielle, étudiants en robotique ou ingénierie industrielle.",
    methods: [
      "Projets pratiques de conception de systèmes automatisés",
      "Études de cas de mines et puits automatisés en Afrique",
      "Simulation sur logiciels de robotique industrielle",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p45',
    title: 'Techniques de Forage Avancées',
    slug: 'techniques-forage-avancees',
    description: "Maîtriser les techniques modernes de forage dans les industries extractives : mines, pétrole et gaz. Ce certificat couvre les équipements de pointe, les méthodes directionnelles et la gestion des risques de forage.",
    certificateLevel: 'Certificat Professionnel',
    domain: 'Industries extractives',
    duration: '3 mois',
    format: 'Blended',
    price: { amount: 900000, currency: 'XOF' },
    nextSession: '2026-12-01',
    enrollmentStatus: 'coming_soon',
    badge: null,
    imageGradient: 'from-orange-900 to-slate-900',
    image: '/images/event-graduation-1.jpg',
    objectives: [
      "Maîtriser les fondamentaux des techniques de forage avancées",
      "Utiliser les équipements et technologies de forage de pointe",
      "Optimiser les performances des opérations de forage",
      "Garantir la sécurité et la conformité environnementale des opérations de forage",
    ],
    modules: [
      { title: "Module 1 — Introduction aux Techniques de Forage", description: "Principes scientifiques du forage. Évolution des méthodologies de forage moderne. Types de forage : rotatif, à percussion, directionnel, horizontal." },
      { title: "Module 2 — Forage en Environnement Minier", description: "Techniques spécifiques aux mines à ciel ouvert et souterraines. Contraintes géologiques et gestion des fluides de forage. Explosifs et fragmentation contrôlée." },
      { title: "Module 3 — Forage Pétrolier et Gazier", description: "Forages en eaux profondes et ultra-profondes. Environnements complexes : HPHT, H2S, zones fracturées. Complétion de puits et stimulation." },
      { title: "Module 4 — Équipements et Technologies Avancées", description: "Outils de forage de dernière génération : PDC, tricônes, moteurs de fond. Logiciels de planification et d'optimisation. Machines de forage modernes et maintenance." },
      { title: "Module 5 — Optimisation et Gestion des Risques", description: "Planification efficace des programmes de forage. Réduction des coûts et délais. Gestion des risques : éruptions, effondrements, pertes de circulation." },
      { title: "Module 6 — Projet de Certification", description: "Simulation ou projet réel de planification d'un programme de forage. Application des normes de sécurité. Évaluation finale et certification." },
    ],
    targetAudience: "Ingénieurs et techniciens des industries minières, pétrolières et gazières, responsables opérationnels de projets de forage, consultants en technologies de forage, étudiants en ingénierie ou géologie.",
    methods: [
      "Simulations de programmation et planification de forages",
      "Études de cas de forages africains (Côte d'Ivoire, Congo, Sénégal)",
      "Exercices sur logiciels de forage directionnel",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p47',
    title: "Stratégies d'Investissement et de Partenariat dans les Industries Extractives",
    slug: 'strategies-investissement-partenariat-extractives',
    description: "Développer des stratégies d'investissement efficaces et gérer les relations avec les parties prenantes dans les industries extractives. Ce certificat couvre la négociation des contrats miniers et la mobilisation des capitaux.",
    certificateLevel: 'Executive Certificate',
    domain: 'Industries extractives',
    duration: '3 mois',
    format: 'Blended',
    price: { amount: 800000, currency: 'XOF' },
    nextSession: '2026-11-01',
    enrollmentStatus: 'coming_soon',
    badge: null,
    imageGradient: 'from-emerald-900 to-slate-900',
    image: '/images/jc-ministers.jpg',
    objectives: [
      "Maîtriser les techniques de négociation des contrats miniers et pétroliers",
      "Évaluer les opportunités d'investissement dans le secteur extractif",
      "Gérer les relations entre entreprises et communautés locales",
      "Construire des partenariats durables avec les investisseurs et les États",
    ],
    modules: [
      { title: "Module 1 — Négociation des Contrats Miniers et Pétroliers", description: "Structures contractuelles : contrats de concession, PSC, JOA. Négociation d'accords équilibrés avec les États et partenaires. Cadres réglementaires africains de la négociation extractive. Étude de cas de contrats emblématiques." },
      { title: "Module 2 — Évaluation des Opportunités d'Investissement", description: "Analyse de rentabilité et des risques : techniques de valorisation (DCF, VAN). Analyse de durabilité et critères ESG pour les investisseurs institutionnels. Modélisation financière des projets extractifs." },
      { title: "Module 3 — Relations Entreprises-Communautés", description: "Approches inclusives de gestion des parties prenantes. Minimisation des conflits sociaux et gestion des attentes communautaires. Cadres FPIC (Consentement Libre, Informé et Préalable). RSE dans les industries extractives africaines." },
    ],
    targetAudience: "Cadres et managers des entreprises extractives, consultants en investissement et partenariat stratégique, représentants des institutions gouvernementales, acteurs des ONG et organisations communautaires.",
    methods: [
      "Simulations de négociation de contrats extractifs",
      "Modélisation financière de projets miniers",
      "Études de cas de partenariats public-privé extractifs en Afrique",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
  {
    id: 'p48',
    title: 'Énergies Renouvelables et Transition Énergétique dans les Industries Extractives',
    slug: 'energies-renouvelables-transition-extractives',
    description: "Comprendre le rôle des industries extractives dans la transition énergétique et intégrer les énergies renouvelables dans les opérations minières. Ce certificat prépare les professionnels aux enjeux du cobalt, du lithium et des minerais stratégiques.",
    certificateLevel: 'Executive Certificate',
    domain: 'Industries extractives',
    duration: '3 mois',
    format: 'Blended',
    price: { amount: 850000, currency: 'XOF' },
    nextSession: '2026-12-01',
    enrollmentStatus: 'coming_soon',
    badge: 'Nouveau',
    imageGradient: 'from-lime-900 to-slate-900',
    image: '/images/event-team-1.jpg',
    objectives: [
      "Analyser le rôle des industries extractives dans la transition énergétique mondiale",
      "Exploiter les minerais stratégiques pour les technologies vertes (cobalt, lithium, graphite)",
      "Intégrer les énergies renouvelables dans les opérations minières",
      "Comprendre les enjeux de décarbonation du secteur extractif",
    ],
    modules: [
      { title: "Module 1 — Industries Extractives et Transition Énergétique", description: "Impact des activités extractives sur le changement climatique. Opportunités de développement durable dans le secteur minier. Cadres réglementaires internationaux : Accord de Paris, taxonomie verte." },
      { title: "Module 2 — Minerais Stratégiques pour les Technologies Vertes", description: "Cobalt, lithium, nickel, graphite et terres rares. Exploration et exploitation responsable de ces minerais. Enjeux géopolitiques et chaînes d'approvisionnement des batteries." },
      { title: "Module 3 — Énergies Renouvelables dans les Opérations Minières", description: "Systèmes d'énergie renouvelable pour les sites miniers isolés. Réduction de l'empreinte carbone des opérations extractives. Financement vert et obligations vertes pour les projets miniers." },
    ],
    targetAudience: "Ingénieurs et techniciens des industries extractives, cadres et gestionnaires en développement durable, consultants en énergies renouvelables, responsables des politiques énergétiques.",
    methods: [
      "Analyse de projets de mines alimentées aux énergies renouvelables",
      "Études de cas sur les minerais stratégiques africains",
      "Ateliers de conception de stratégies de décarbonation",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },

  // ============================================================
  // CAPIMMO — Certificat d'Aptitude aux Professions Immobilières
  // ============================================================
  {
    id: 'capimmo',
    title: "Certificat d'Aptitude aux Professions Immobilières (CAPIMMO)",
    slug: 'capimmo-certificat-aptitude-professions-immobilieres',
    description: "Le CAPIMMO est le certificat phare d'ETHSUN Institute dans le domaine immobilier, reconnu par les professionnels du secteur en Afrique de l'Ouest. Ce programme intensif prépare les participants à exercer avec compétence et éthique dans tous les métiers de l'immobilier : promotion, transaction, gestion, expertise et conseil.",
    certificateLevel: "Certificat d'Aptitude Professionnelle",
    domain: 'Immobilier et BTP',
    duration: '6 mois',
    format: 'Blended',
    price: { amount: 1500000, currency: 'XOF' },
    nextSession: '2026-09-01',
    enrollmentStatus: 'open',
    badge: 'Populaire',
    imageGradient: 'from-blue-900 to-slate-900',
    image: '/images/capimmo-promo.png',
    objectives: [
      "Maîtriser le cadre juridique et réglementaire de l'activité immobilière en Côte d'Ivoire et en zone UEMOA",
      "Comprendre les mécanismes du marché immobilier africain et ses dynamiques sectorielles",
      "Acquérir les techniques de transaction, de gestion locative et d'expertise immobilière",
      "Maîtriser le financement des projets immobiliers et le montage d'opérations",
      "Développer une déontologie professionnelle et une éthique irréprochable",
      "Obtenir l'agrément professionnel et exercer légalement les activités immobilières",
    ],
    modules: [
      { title: "Module 1 — Droit Immobilier et Cadre Réglementaire", description: "Droit de la propriété et régime foncier en Côte d'Ivoire. Loi sur la copropriété et le bail commercial. Procédures d'agrément et obligations légales des agents immobiliers. Réglementation des transactions et pratiques conformes." },
      { title: "Module 2 — Techniques de Transaction Immobilière", description: "Prospection, estimation et valorisation des biens immobiliers. Techniques de négociation et de vente immobilière. Rédaction des compromis, promesses de vente et contrats définitifs. Gestion de la relation client et fidélisation." },
      { title: "Module 3 — Gestion Locative et Administration de Biens", description: "Sélection des locataires et rédaction des baux. Gestion quotidienne du portefeuille locatif. Traitement des impayés et procédures contentieuses. Comptabilité de la gestion locative." },
      { title: "Module 4 — Expertise et Évaluation Immobilière", description: "Méthodes d'évaluation : comparaison directe, revenus capitalisés, coût de remplacement. Rédaction de rapports d'expertise conformes aux standards professionnels. Expertise judiciaire et médiation immobilière." },
      { title: "Module 5 — Promotion et Montage d'Opérations Immobilières", description: "Étude de faisabilité d'une opération de promotion immobilière. Financement : prêts bancaires, fonds propres, investisseurs. Gestion des chantiers et réception des travaux. Marketing immobilier et lancement commercial." },
      { title: "Module 6 — Éthique et Déontologie Professionnelle", description: "Code de déontologie des professions immobilières. Prévention des conflits d'intérêts et des pratiques frauduleuses. Relations avec les clients, les confrères et les organismes professionnels. Gestion des litiges et responsabilité professionnelle." },
    ],
    targetAudience: "Agents immobiliers souhaitant se professionnaliser et obtenir leur agrément, promoteurs et développeurs immobiliers, gestionnaires de patrimoine immobilier, banquiers et financiers du secteur immobilier, juristes spécialisés en droit immobilier.",
    prerequisites: "Diplôme universitaire (Bac+2 minimum) ou expérience professionnelle significative dans le secteur immobilier ou bancaire.",
    methods: [
      "Ateliers pratiques de simulation de transactions immobilières",
      "Visites de chantiers et opérations de promotion immobilière",
      "Études de cas du marché immobilier ivoirien et ouest-africain",
      "Préparation au passage de l'agrément professionnel",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },

  // ============================================================
  // CBA — Executive Certificate of Business Administration
  // ============================================================
  {
    id: 'cba',
    title: 'ETHSUN Global Executive CBA — Certificate of Business Administration',
    slug: 'executive-certificate-business-administration',
    description: "Programme Executive de référence d'ETHSUN Institute, le CBA prépare les dirigeants et cadres supérieurs aux défis mondiaux du management d'entreprise. Dispensé en présentiel à Abidjan et Oxford, ce programme transformant combine rigueur académique et ancrage terrain africain, avec une immersion de 5 jours à Oxford.",
    certificateLevel: 'Executive Certificate of Business Administration',
    domain: 'Banque/Finance/Admin entreprises',
    duration: '12 mois',
    format: 'Blended',
    price: { amount: 2800000, currency: 'XOF' },
    nextSession: '2026-01-01',
    enrollmentStatus: 'open',
    badge: 'Populaire',
    imageGradient: 'from-slate-900 to-blue-900',
    image: '/images/seal-oxford-hd.jpeg',
    objectives: [
      "Acquérir une compréhension approfondie des aspects essentiels de la gestion d'entreprise",
      "Renforcer la capacité à prendre des décisions stratégiques en environnement incertain",
      "Améliorer les compétences en leadership et en management des organisations",
      "Développer une vision globale intégrant économie mondiale, innovation et conformité",
      "Construire un réseau professionnel africain et international solide",
    ],
    modules: [
      { title: "Module 1 — Économie Mondiale et Commerce International", description: "Mécanismes de l'économie globale et dynamiques du commerce international. Stratégies d'internationalisation et zones économiques africaines. Négociations multilatérales et accords commerciaux (AfCFTA, OMC)." },
      { title: "Module 2 — Innovation Marketing et Communication Corporate", description: "Stratégies marketing innovantes et positionnement de marque. Communication d'entreprise à l'ère digitale. Personal branding et influence dans l'écosystème africain." },
      { title: "Module 3 — Achats, Approvisionnement et Gestion de la Chaîne Logistique", description: "Stratégie d'achats et politique de sourcing international. Gestion de la supply chain en contexte africain. Digitalisation des achats et ERP." },
      { title: "Module 4 — Éthique et Conformité en Entreprise", description: "Gouvernance éthique et programmes de conformité (compliance). Prévention de la corruption et des conflits d'intérêts. Réglementation OHADA et droit des affaires en Afrique." },
      { title: "Module 5 — Analyse, Modélisation et Pilotage de la Performance Financière", description: "Analyse des états financiers et modélisation de la performance. Outils de pilotage financier et tableaux de bord. Valorisation d'entreprise et levée de fonds." },
      { title: "Module 6 — Innovation Managériale et Performance des Organisations", description: "Design thinking et méthodologies agiles. Management de l'innovation et transformation organisationnelle. Gestion du changement et leadership transformationnel." },
      { title: "Module 7 — Leadership et Science de la Décision", description: "Sciences comportementales appliquées à la décision stratégique. Leadership en contexte multiculturel africain. Séminaire résidentiel à Oxford : immersion académique et networking international." },
    ],
    targetAudience: "Dirigeants et cadres supérieurs d'entreprises privées et publiques, directeurs généraux et membres de comités de direction, entrepreneurs et chefs d'entreprise, hauts cadres des administrations africaines.",
    prerequisites: "Diplôme universitaire Bac+4 minimum et expérience professionnelle de 5 ans minimum à un niveau managérial.",
    methods: [
      "Séminaires en présentiel à Abidjan et immersion de 5 jours à Oxford",
      "Études de cas d'entreprises africaines et internationales",
      "Coaching individuel et accompagnement personnalisé",
      "Projet de management stratégique encadré par un mentor",
      "Modules e-learning sur la plateforme Neuroklax",
    ],
  },
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
    company: "SGBCI — Côte d'Ivoire",
    initials: 'BN',
    photo: '/images/alumni-boua-adon-noel.jpg',
  },
  {
    quote: "ETHSUN Institute m'a permis d'acquérir une vision globale et structurée du management de projet. Le programme est immédiatement applicable sur le terrain. C'est une formation de référence pour les cadres qui souhaitent avoir un réel impact dans leur organisation.",
    name: 'NEBOUT Etienne',
    title: 'Directeur Exécutif chargé de la Coordination des Projets',
    company: "ONG VIF — Côte d'Ivoire",
    initials: 'NE',
    photo: '/images/alumni-nebout-etienne.jpg',
  },
  {
    quote: "En tant que dirigeant d'entreprise, la formation ETHSUN m'a apporté les clés stratégiques pour structurer mon organisation, optimiser mes processus et développer une vision à long terme. Un investissement qui a directement impacté la performance de mon entreprise.",
    name: "N'GUESSAN KOUASSI Benjamin",
    title: 'Directeur Général',
    company: "RevServices — Côte d'Ivoire",
    initials: 'NB',
    photo: '/images/alumni-nguessan-benjamin.jpg',
  },
  {
    quote: "Grâce à la certification ETHSUN, j'ai pu structurer et professionnaliser ma gestion des ressources humaines. La formation m'a donné les outils concrets pour piloter mon cabinet avec rigueur et créer de la valeur pour mes clients.",
    name: 'BOARE Abibatou',
    title: 'Gérante',
    company: "Juris RH Conseils — Côte d'Ivoire",
    initials: 'BA',
    photo: '/images/alumni-boare-abibatou.jpg',
  },
  {
    quote: "La formation en conformité bancaire et en management d'ETHSUN Institute est d'un niveau exceptionnel. Les modules sont parfaitement adaptés aux réalités du secteur financier africain. Je recommande sans hésitation à tous les cadres du secteur bancaire.",
    name: 'KOUAME KOUAKOU Jean-Jacques',
    title: 'Responsable du Service Formation',
    company: "NSIA Banque — Côte d'Ivoire",
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
  tagline: 'Centre de formation professionnel agréé sous licence ETHSUN Executive Education Oxford',
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

