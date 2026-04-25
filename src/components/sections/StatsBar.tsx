'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

const hubs = [
  { flag: '🇨🇮', label: 'Abidjan', href: '/programmes' },
  { flag: '🇬🇧', label: 'Oxford', href: 'https://www.ethsun-oxford.uk' },
  { flag: '🇲🇺', label: 'Maurice', href: '/international/maurice' },
  { flag: '🇸🇬', label: 'Singapour', href: '/international/singapour' },
  { flag: '🇨🇭', label: 'Genève', href: '/international/geneve' },
];

export default function StatsBar() {
  const t = useTranslations('stats');

  const stats = [
    { number: '73+', label: t('programmes') },
    { number: '9', label: t('domains') },
    { number: '500+', label: t('alumni') },
  ];

  return (
    <section className="bg-white py-10 lg:py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <p className="text-3xl lg:text-4xl font-bold text-ethsun-blue font-serif">
                {stat.number}
              </p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}

          {/* 4th column — hubs with flags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center px-4 col-span-2 lg:col-span-1"
          >
            <p className="text-3xl lg:text-4xl font-bold text-ethsun-blue font-serif mb-1">5</p>
            <p className="text-sm text-gray-500 mb-3">{t('campuses')}</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {hubs.map((hub) =>
                hub.href.startsWith('http') ? (
                  <a
                    key={hub.label}
                    href={hub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={hub.label}
                    className="group flex flex-col items-center gap-0.5 hover:scale-110 transition-transform"
                  >
                    <span className="text-2xl">{hub.flag}</span>
                    <span className="text-[10px] text-gray-400 group-hover:text-ethsun-gold transition-colors">{hub.label}</span>
                  </a>
                ) : (
                  <Link
                    key={hub.label}
                    href={hub.href}
                    title={hub.label}
                    className="group flex flex-col items-center gap-0.5 hover:scale-110 transition-transform"
                  >
                    <span className="text-2xl">{hub.flag}</span>
                    <span className="text-[10px] text-gray-400 group-hover:text-ethsun-gold transition-colors">{hub.label}</span>
                  </Link>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
