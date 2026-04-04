'use client';

import { MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/mock';

export default function WhatsAppButton() {
  return (
    <a
      href={companyInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
