import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Simula o carregamento e remove a splash após 2.5 segundos
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 500); // Tempo da animação de fade out
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-500 ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Logo com animação de fade in e scale */}
        <div
          className={`transform transition-all duration-1000 ${
            isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <img
            src="/logo/logo.png"
            alt="M.A Engenharia & Construção"
            className="h-28 sm:h-32 md:h-40 lg:h-48 w-auto object-contain"
          />
        </div>

        {/* Barra de progresso sutil */}
        <div className="mt-8 w-48 sm:w-56 md:w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-yellow loading-bar"
            style={{
              animation: 'loading 2.5s ease-in-out forwards'
            }}
          ></div>
        </div>

        {/* Efeito de brilho sutil */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

