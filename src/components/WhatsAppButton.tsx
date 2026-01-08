import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '5535998599109';
  const whatsappMessage = 'Olá! Gostaria de mais informações sobre os serviços.';

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 sm:p-4 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 group"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp: +55 (35) 99859-9109"
    >
      <MessageCircle size={24} className="sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
    </a>
  );
}

