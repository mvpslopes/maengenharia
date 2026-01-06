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
      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
        <span className="absolute w-full h-full bg-red-500 rounded-full animate-ping opacity-75"></span>
        <span className="relative">1</span>
      </div>
    </a>
  );
}

