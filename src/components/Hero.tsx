import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// Array de imagens do carousel - adicione mais imagens aqui conforme necessário
const heroImages = [
  '/hero.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
];

const SLIDE_DURATION = 5000; // 5 segundos

export default function Hero() {
  const whatsappNumber = '5535998599109';
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.';
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  // Preload das imagens
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = heroImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Erro ao carregar imagens:', error);
        setImagesLoaded(true); // Continua mesmo se houver erro
      }
    };

    loadImages();
  }, []);

  // Efeito parallax no scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navegação por teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentImageIndex, isPlaying]);

  // Funções de navegação
  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    setProgress(0);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
    setProgress(0);
  };

  // Transição automática das imagens com barra de progresso
  useEffect(() => {
    if (heroImages.length <= 1 || !imagesLoaded) return;

    // Limpa intervalos anteriores
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    if (isPlaying && !isHovered) {
      // Barra de progresso
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            goToNext();
            return 0;
          }
          return prev + (100 / (SLIDE_DURATION / 100));
        });
      }, 100);

      // Transição de slides
      intervalRef.current = setInterval(() => {
        goToNext();
      }, SLIDE_DURATION);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isPlaying, isHovered, currentImageIndex, imagesLoaded]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Loading State */}
      {!imagesLoaded && (
        <div className="absolute inset-0 z-30 bg-gray-900 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-brand-yellow border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white text-lg">Carregando imagens...</p>
          </div>
        </div>
      )}

      {/* Background Images Carousel with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 via-gray-900/30 to-gray-900/20 z-10"></div>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-[120%] bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              transform: `translateY(${scrollY * 0.5}px) ${index === currentImageIndex ? 'scale(1)' : 'scale(1.05)'}`,
              zIndex: index === currentImageIndex ? 1 : 0
            }}
          ></div>
        ))}
      </div>

      {/* Gradiente escuro da esquerda até o meio para destacar o texto */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900/60 via-gray-900/30 to-transparent pointer-events-none"></div>

      {/* Controles de navegação (setas) */}
      {heroImages.length > 1 && imagesLoaded && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all transform hover:scale-110 group"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6 group-hover:text-brand-yellow transition-colors" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all transform hover:scale-110 group"
            aria-label="Próximo slide"
          >
            <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6 group-hover:text-brand-yellow transition-colors" />
          </button>
        </>
      )}

      {/* Botão Play/Pause */}
      {heroImages.length > 1 && imagesLoaded && (
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all transform hover:scale-110 group"
          aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
        >
          {isPlaying ? (
            <Pause className="text-white w-5 h-5 group-hover:text-brand-yellow transition-colors" />
          ) : (
            <Play className="text-white w-5 h-5 group-hover:text-brand-yellow transition-colors" />
          )}
        </button>
      )}

      {/* Barra de progresso */}
      {heroImages.length > 1 && imagesLoaded && isPlaying && !isHovered && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-yellow transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {/* Indicadores de slide */}
      {heroImages.length > 1 && imagesLoaded && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'w-8 bg-brand-yellow'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}

      {/* Partículas decorativas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-2 h-2 bg-brand-yellow/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-brand-yellow/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-40 w-2.5 h-2.5 bg-brand-yellow/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content com animação de texto */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3)' }}>
            <span className="inline-block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Engenharia{' '}
            </span>
            <span className="inline-block opacity-0 animate-fadeInUp text-brand-yellow" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              com Responsabilidade
            </span>
            <span className="inline-block opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              {' '}e Excelência
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-4 md:mb-6 max-w-2xl opacity-0 animate-fadeInUp text-contrast" style={{ animationDelay: '0.7s', animationFillMode: 'forwards', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4), 0 0 8px rgba(0, 0, 0, 0.3)' }}>
            Projetamos e construímos espaços onde inovação e excelência técnica se encontram. Cada projeto é desenvolvido com precisão, criatividade e alto padrão de qualidade, refletindo nosso compromisso com resultados duradouros. O Seu projeto começa com a nossa expertise.
          </p>

          <div className="mb-6 md:mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-3 font-medium">Entre em contato:</p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-yellow hover:text-brand-yellow-hover transition-all transform hover:scale-105 relative group"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(245, 169, 0, 0.3)' }}
            >
              (35) 99859-9109
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-brand-yellow group-hover:w-full transition-all duration-300"></span>
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
              href="#servicos"
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
