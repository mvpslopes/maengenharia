import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const whatsappNumber = '5535998599109';
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.';
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/70 z-10"></div>
        <div 
          className="w-full h-[120%] bg-cover bg-center transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
          loading="lazy"
        ></div>
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-2 h-2 bg-brand-yellow/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-brand-yellow/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-40 w-2.5 h-2.5 bg-brand-yellow/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content com animação de texto */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6">
            <span className="inline-block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Construindo{' '}
            </span>
            <span className="inline-block opacity-0 animate-fadeInUp text-brand-yellow" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Espaços Modernos
            </span>
            <span className="inline-block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              {' '}com Precisão & Criatividade
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-4 md:mb-6 max-w-2xl opacity-0 animate-fadeInUp text-contrast" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            Projetamos e construímos espaços que combinam inovação com artesanato. Cada projeto é executado com precisão, criatividade e um profundo compromisso com a qualidade. Sua estrutura dos sonhos começa com nossa expertise.
          </p>

          <div className="mb-6 md:mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-2">Entre em contato:</p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-yellow hover:text-brand-yellow-hover transition-colors break-all relative group"
            >
              +55 (35) 99859-9109
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-brand-yellow text-gray-900 font-semibold rounded-lg hover:bg-brand-yellow-hover transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl text-sm sm:text-base overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Solicitar Orçamento Grátis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            </a>

            <a
              href="#trabalhos"
              className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-brand-yellow hover:bg-brand-yellow hover:text-gray-900 transition-all transform hover:scale-105 text-sm sm:text-base relative overflow-hidden group"
            >
              <span className="relative z-10">Ver Projetos</span>
              <span className="absolute inset-0 bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
