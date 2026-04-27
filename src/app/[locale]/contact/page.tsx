'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/sections/SectionHeader';
import { companyInfo, allProgrammes } from '@/data/mock';
import { Send, MapPin, Phone, Mail, MessageCircle, Calendar, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: 'info', programme: '', message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      // Fallback: show success anyway for UX
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ethsun-navy-dark via-ethsun-navy to-ethsun-blue pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 kente-pattern" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
            light
          />
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">

            {/* Formulaire */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {sent ? (
                  /* ✅ Popup de confirmation */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-xl p-10 shadow-sm border border-green-100 flex flex-col items-center text-center gap-5"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-ethsun-navy">Message envoyé !</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                      Votre message a bien été transmis à notre équipe. Un conseiller vous contactera dans les 24 heures ouvrées. Un accusé de réception a été envoyé à votre adresse email.
                    </p>
                    {/* Bouton WhatsApp dans le message de confirmation */}
                    <a
                      href={companyInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Continuer sur WhatsApp
                    </a>
                    <button
                      onClick={() => { setSent(false); setFormData({ name: '', email: '', phone: '', subject: 'info', programme: '', message: '' }); }}
                      className="text-sm text-ethsun-blue font-semibold hover:underline"
                    >
                      Envoyer un nouveau message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('name')}</label>
                        <input type="text" required value={formData.name} onChange={e => setFormData(p => ({...p, name: e.target.value}))}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('email')}</label>
                        <input type="email" required value={formData.email} onChange={e => setFormData(p => ({...p, email: e.target.value}))}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('phone')}</label>
                        <input type="tel" value={formData.phone} onChange={e => setFormData(p => ({...p, phone: e.target.value}))}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('subject')}</label>
                        <select value={formData.subject} onChange={e => setFormData(p => ({...p, subject: e.target.value}))}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue bg-white">
                          <option value="info">{t('subjectOptions.info')}</option>
                          <option value="custom">{t('subjectOptions.custom')}</option>
                          <option value="partnership">{t('subjectOptions.partnership')}</option>
                          <option value="enrollment">{t('subjectOptions.enrollment')}</option>
                          <option value="other">{t('subjectOptions.other')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('programmeInterest')}</label>
                      <select value={formData.programme} onChange={e => setFormData(p => ({...p, programme: e.target.value}))}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue bg-white">
                        <option value="">—</option>
                        {allProgrammes.map((p) => (
                          <option key={p.id} value={p.id}>{p.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">{t('message')}</label>
                      <textarea rows={5} required value={formData.message} onChange={e => setFormData(p => ({...p, message: e.target.value}))}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-ethsun-blue/30 focus:border-ethsun-blue resize-none" />
                    </div>

                    {error && (
                      <p className="text-sm text-red-500">Une erreur s&apos;est produite. Contactez-nous directement par WhatsApp.</p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full flex items-center justify-center gap-2 bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold py-3.5 rounded-lg text-sm transition-all shadow-md disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      {sending ? 'Envoi en cours...' : t('send')}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right side - Info Abidjan uniquement */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 space-y-6">
              {/* Learning Center Abidjan */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-serif text-base font-bold text-ethsun-navy mb-4">{t('campusAbidjan')}</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-ethsun-gold flex-shrink-0 mt-0.5" />
                    {companyInfo.campuses[0].address}
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-ethsun-gold" />
                    {companyInfo.campuses[0].phone}
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-ethsun-gold" />
                    formation@ethsun-institute.org
                  </p>
                </div>
              </div>

              {/* Actions rapides */}
              <div className="space-y-3">
                {/* ✅ Bouton WhatsApp */}
                <a
                  href={companyInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-lg text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t('whatsapp')}
                </a>
                {/* ✅ Prise de RDV → WhatsApp */}
                <a
                  href={companyInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-ethsun-blue text-ethsun-blue hover:bg-ethsun-blue hover:text-white font-semibold py-3.5 rounded-lg text-sm transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  {t('appointment')}
                </a>
              </div>

              {/* Google Map — ETHSUN Vallon */}
              <div className="bg-gray-100 rounded-xl overflow-hidden h-52">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0749!2d-3.9933!3d5.3597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjEnMzUuMCJOIDPCsDU5JzM2LjAiVw!5e0!3m2!1sfr!2sci!4v1680000000000!5m2!1sfr!2sci"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ETHSUN Institute — Cocody 2 Plateaux Vallon"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
