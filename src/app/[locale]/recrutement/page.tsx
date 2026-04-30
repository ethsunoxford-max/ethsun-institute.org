'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Clock, Briefcase, ArrowRight, CheckCircle2,
  Globe, BookOpen, Users, Mail, X, Upload, CheckCircle, Send, MessageCircle
} from 'lucide-react';

const jobs = [
  {
    id: 'JOB-001',
    title: 'Concepteur(trice) de Programme de Formation en Ligne',
    type: 'CDI / Freelance',
    location: 'Abidjan (Côte d\'Ivoire) / Télétravail partiel',
    department: 'Ingénierie Pédagogique & E-Learning',
    badge: 'bg-blue-100 text-blue-800',
    level: 'Confirmé(e)',
    languages: ['Français (courant)', 'Anglais (professionnel apprécié)'],
    deadline: '30 juin 2026',
    context: `ETHSUN Institute développe activement sa plateforme e-learning Neuroklax, destinée à offrir des programmes certifiants en ligne accessibles aux professionnels africains et internationaux. Dans le cadre de son expansion digitale, ETHSUN recherche un(e) Concepteur(trice) de Programme de Formation en Ligne pour rejoindre son équipe pédagogique.`,
    missions: [
      'Concevoir et structurer des programmes de formation en ligne (parcours pédagogiques, modules, activités)',
      'Élaborer les supports de formation : présentations, vidéos pédagogiques, quiz, fiches de synthèse',
      'Rédiger les cahiers des charges pédagogiques et scénariser les modules e-learning',
      'Collaborer avec les formateurs experts pour la validation du contenu',
      'Assurer l\'intégration des contenus sur la plateforme Neuroklax (LMS)',
      'Mettre en place des évaluations et outils de mesure des acquis',
      'Veiller à la qualité pédagogique, à l\'ergonomie et à l\'accessibilité des formations',
      'Contribuer à la mise à jour et à l\'amélioration continue du catalogue e-learning',
    ],
    profile: [
      'Diplôme Bac+3/5 en ingénierie pédagogique, sciences de l\'éducation, formation professionnelle ou équivalent',
      'Expérience minimale de 2 ans en conception pédagogique ou e-learning',
      'Maîtrise des outils de création de contenus (Articulate, Canva, PowerPoint avancé, etc.)',
      'Connaissance d\'au moins un LMS (Moodle, Teachable, ou équivalent)',
      'Capacité à vulgariser des contenus techniques et à les adapter à différents niveaux',
      'Sens de l\'organisation, rigueur, créativité et autonomie',
      'Intérêt pour les domaines couverts par ETHSUN : management, immobilier, gouvernance, IA, banque/finance',
    ],
    offer: [
      'Intégrer une institution de formation en pleine croissance internationale',
      'Contribution directe au développement de la plateforme e-learning ETHSUN',
      'Environnement de travail stimulant et projets à impact réel',
      'Rémunération attractive selon profil et expérience',
      'Possibilité de télétravail partiel',
    ],
  },
  {
    id: 'JOB-002',
    title: 'Learning Project Manager — Bilingue Anglais/Français',
    type: 'CDI',
    location: 'Abidjan (Côte d\'Ivoire) / Oxford (Royaume-Uni) — Mobilité internationale requise',
    department: 'Coordination Internationale & Développement des Programmes',
    badge: 'bg-emerald-100 text-emerald-800',
    level: 'Senior',
    languages: ['Anglais (courant — niveau C1/C2)', 'Français (courant — niveau C1/C2)'],
    deadline: '30 juin 2026',
    context: `Dans le cadre du déploiement de ses programmes à l'international (Oxford, Maurice, Genève, Singapour), ETHSUN Institute recherche un(e) Learning Project Manager bilingue Anglais/Français pour coordonner le développement et la gestion opérationnelle des programmes de formation à l'échelle internationale.`,
    missions: [
      'Piloter le cycle complet de développement des programmes de formation (conception, production, déploiement, évaluation)',
      'Coordonner les équipes pédagogiques, les formateurs et les parties prenantes internationales',
      'Gérer les plannings de sessions, la logistique pédagogique et les relations avec les hubs (Oxford, Maurice, Genève, Singapour)',
      'Assurer la liaison entre les équipes Abidjan et Oxford',
      'Développer et maintenir les partenariats institutionnels et académiques',
      'Rédiger les documents de cadrage pédagogique, les rapports d\'avancement et les supports de communication',
      'Veiller à la conformité des programmes avec les standards ETHSUN et les exigences réglementaires locales',
      'Contribuer à l\'amélioration continue des process de gestion des formations',
    ],
    profile: [
      'Diplôme Bac+4/5 en gestion de projet, ingénierie pédagogique, management international ou équivalent',
      'Expérience de 3 à 5 ans minimum en gestion de projets de formation, idéalement dans un contexte international',
      'Parfaitement bilingue Anglais/Français (oral et écrit) — niveau C1/C2 exigé dans les deux langues',
      'Excellentes compétences en communication, coordination et gestion des priorités',
      'Maîtrise des outils de gestion de projet (Notion, Asana, ou équivalent)',
      'Capacité à travailler en autonomie sur des projets complexes multi-parties prenantes',
      'Disponibilité pour des déplacements internationaux (Oxford, Maurice, Genève)',
      'Sensibilité aux enjeux de la formation professionnelle en Afrique et à l\'international',
    ],
    offer: [
      'Poste stratégique avec un périmètre international réel (5 pays)',
      'Collaboration directe avec la direction générale d\'ETHSUN Institute',
      'Accès à un réseau professionnel de haut niveau (Oxford, UEMOA, institutions internationales)',
      'Package de rémunération attractif selon profil, incluant avantages liés aux déplacements',
      'Opportunité d\'évolution vers un rôle de Directeur(trice) des Programmes à terme',
    ],
  },
];

const ContactOxford = [
  { label: 'Adresse', value: 'Wood Centre for Innovation, Quarry Road, Headington, Oxford OX3 8SB' },
  { label: 'Email candidature', value: 'rh@ethsun-oxford.uk' },
  { label: 'WhatsApp RH', value: '+447424201585' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const emptyForm = { nom: '', prenom: '', email: '', telephone: '', poste: '' };

export default function RecrutementPage() {
  const [applyJob, setApplyJob] = useState<typeof jobs[0] | null>(null);
  const [formData, setFormData] = useState(emptyForm);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [lettreFile, setLettreFile] = useState<File | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const cvRef = useRef<HTMLInputElement>(null);
  const lettreRef = useRef<HTMLInputElement>(null);

  const openModal = (job: typeof jobs[0]) => {
    setApplyJob(job);
    setFormData({ ...emptyForm, poste: job.title });
    setCvFile(null);
    setLettreFile(null);
    setSent(false);
  };

  const closeModal = () => {
    setApplyJob(null);
    setSent(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData();
    fd.append('nom', formData.nom);
    fd.append('prenom', formData.prenom);
    fd.append('email', formData.email);
    fd.append('telephone', formData.telephone);
    fd.append('poste', formData.poste);
    if (cvFile) fd.append('cv', cvFile);
    if (lettreFile) fd.append('lettre', lettreFile);
    try {
      await fetch('/api/apply', { method: 'POST', body: fd });
    } catch {
      // fail silently
    } finally {
      setSending(false);
      setSent(true);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Modal candidature */}
      <AnimatePresence>
        {applyJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            >
              {/* Modal header */}
              <div className="bg-gradient-to-r from-ethsun-navy to-ethsun-blue p-6 rounded-t-2xl flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-ethsun-gold font-bold tracking-widest mb-1">POSTULER</p>
                  <h2 className="font-serif text-lg font-bold text-white leading-snug">{applyJob.title}</h2>
                </div>
                <button onClick={closeModal} className="text-white/60 hover:text-white transition-colors flex-shrink-0">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-6 gap-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-ethsun-navy">Candidature envoyée !</h3>
                      <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                        Votre candidature a bien été envoyée. Notre équipe RH l&apos;étudiera et vous recontactera dans les meilleurs délais.
                      </p>
                      <a
                        href="https://wa.me/447424201585"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Contacter RH sur WhatsApp
                      </a>
                      <button onClick={closeModal} className="text-sm text-ethsun-blue font-semibold hover:underline">
                        Fermer
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Prénom *</label>
                          <input type="text" required value={formData.prenom}
                            onChange={e => setFormData(p => ({...p, prenom: e.target.value}))}
                            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom *</label>
                          <input type="text" required value={formData.nom}
                            onChange={e => setFormData(p => ({...p, nom: e.target.value}))}
                            className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                        <input type="email" required value={formData.email}
                          onChange={e => setFormData(p => ({...p, email: e.target.value}))}
                          className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Téléphone</label>
                        <input type="tel" value={formData.telephone}
                          onChange={e => setFormData(p => ({...p, telephone: e.target.value}))}
                          className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Poste souhaité *</label>
                        <select value={formData.poste}
                          onChange={e => setFormData(p => ({...p, poste: e.target.value}))}
                          className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue bg-white">
                          {jobs.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                          <option value="Candidature spontanée">Candidature spontanée</option>
                        </select>
                      </div>

                      {/* CV upload */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">CV (PDF, DOC)</label>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          ref={cvRef}
                          className="hidden"
                          onChange={e => setCvFile(e.target.files?.[0] || null)}
                        />
                        <button
                          type="button"
                          onClick={() => cvRef.current?.click()}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border text-sm transition-all ${
                            cvFile ? 'border-green-300 bg-green-50 text-green-700' : 'border-dashed border-gray-300 hover:border-ethsun-blue text-gray-500 hover:text-ethsun-blue'
                          }`}
                        >
                          {cvFile ? <CheckCircle className="w-4 h-4 flex-shrink-0" /> : <Upload className="w-4 h-4 flex-shrink-0" />}
                          <span className="truncate">{cvFile ? cvFile.name : 'Déposer ou cliquer pour choisir un fichier'}</span>
                        </button>
                      </div>

                      {/* Lettre de motivation upload */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Lettre de motivation (PDF, DOC)</label>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          ref={lettreRef}
                          className="hidden"
                          onChange={e => setLettreFile(e.target.files?.[0] || null)}
                        />
                        <button
                          type="button"
                          onClick={() => lettreRef.current?.click()}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border text-sm transition-all ${
                            lettreFile ? 'border-green-300 bg-green-50 text-green-700' : 'border-dashed border-gray-300 hover:border-ethsun-blue text-gray-500 hover:text-ethsun-blue'
                          }`}
                        >
                          {lettreFile ? <CheckCircle className="w-4 h-4 flex-shrink-0" /> : <Upload className="w-4 h-4 flex-shrink-0" />}
                          <span className="truncate">{lettreFile ? lettreFile.name : 'Déposer ou cliquer pour choisir un fichier'}</span>
                        </button>
                      </div>

                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold py-3.5 rounded-lg text-sm transition-all shadow-md disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        {sending ? 'Envoi en cours...' : 'Envoyer ma candidature'}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-[0.25em] text-ethsun-gold mb-5">RECRUTEMENT</p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Rejoignez l&apos;équipe ETHSUN
            </h1>
            <p className="text-base lg:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
              Construisez une carrière à impact en contribuant au développement de la formation professionnelle en Afrique et à l&apos;international.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-ethsun-gold" />
                <span>5 hubs internationaux</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-ethsun-gold" />
                <span>Équipe internationale</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-ethsun-gold" />
                <span>Impact réel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job count */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm font-semibold text-ethsun-navy">
            <span className="text-ethsun-gold text-lg font-bold">{jobs.length}</span> postes à pourvoir
          </p>
          <a href="mailto:rh@ethsun-oxford.uk" className="inline-flex items-center gap-2 text-xs font-semibold text-ethsun-blue hover:text-ethsun-gold transition-colors">
            <Mail className="w-4 h-4" />
            Candidature spontanée : rh@ethsun-oxford.uk
          </a>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              variants={fadeUp} custom={i} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Job header */}
              <div className="bg-gradient-to-r from-ethsun-navy to-ethsun-blue p-6 lg:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${job.badge}`}>
                        {job.department}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white">
                        {job.type}
                      </span>
                      <span className="text-xs font-mono px-2 py-1 rounded bg-white/15 text-white/70">
                        {job.id}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl lg:text-2xl font-bold text-white">{job.title}</h2>
                  </div>
                  <div className="bg-ethsun-gold text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Niveau : {job.level}
                  </div>
                </div>
                <div className="flex flex-wrap gap-5 mt-4 text-sm text-white/75">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-ethsun-gold" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-ethsun-gold" />
                    <span>{job.languages.join(' / ')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-ethsun-gold" />
                    <span>Candidature avant le {job.deadline}</span>
                  </div>
                </div>
              </div>

              {/* Job content */}
              <div className="p-6 lg:p-8 space-y-8">
                <div>
                  <h3 className="font-serif text-lg font-bold text-ethsun-navy mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-ethsun-gold" />
                    Contexte
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{job.context}</p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-ethsun-navy mb-3">Vos missions</h3>
                  <ul className="space-y-2">
                    {job.missions.map((m, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-ethsun-gold flex-shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-ethsun-navy mb-3">Profil recherché</h3>
                  <ul className="space-y-2">
                    {job.profile.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-ethsun-gold flex-shrink-0 mt-2" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-ethsun-navy/5 rounded-xl p-5">
                  <h3 className="font-serif text-lg font-bold text-ethsun-navy mb-3">Ce que nous offrons</h3>
                  <ul className="space-y-2">
                    {job.offer.map((o, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => openModal(job)}
                    className="inline-flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-6 py-3 rounded-lg text-sm transition-all shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    Postuler à ce poste
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="https://wa.me/447424201585"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp RH
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact RH */}
      <section className="py-12 lg:py-16 bg-ethsun-navy-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs font-bold tracking-widest text-ethsun-gold mb-4">CONTACT RH</p>
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Candidature spontanée</h2>
            <p className="text-white/70 text-sm mb-8 max-w-xl mx-auto">
              Vous ne trouvez pas un poste correspondant à votre profil ? Envoyez-nous votre CV et lettre de motivation. Nous étudions toutes les candidatures sérieuses.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {ContactOxford.map((c) => (
                <div key={c.label} className="bg-white/10 rounded-xl p-4 text-sm">
                  <p className="text-ethsun-gold/80 text-xs mb-1">{c.label}</p>
                  <p className="text-white font-medium">{c.value}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => { setFormData({ ...emptyForm, poste: 'Candidature spontanée' }); setApplyJob({ id: 'SPON', title: 'Candidature spontanée', type: '', location: '', department: '', badge: '', level: '', languages: [], deadline: '', context: '', missions: [], profile: [], offer: [] }); }}
              className="inline-flex items-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-7 py-3.5 rounded-lg text-sm transition-all shadow-lg"
            >
              <Mail className="w-4 h-4" />
              Envoyer ma candidature
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
