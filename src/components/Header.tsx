import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = '5535998599109';
  const whatsappMessage = 'Olá! Gostaria de solicitar um orçamento.';

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center">
            <img 
              src="/logo/logo.png" 
              alt="M.A Engenharia & Construção" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors font-medium underline-animated">
              Início
            </a>
            <a href="#quem-somos" className="text-gray-700 hover:text-gray-900 transition-colors font-medium underline-animated">
              Quem Somos
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-gray-900 transition-colors font-medium underline-animated">
              Serviços
            </a>
            <a href="#trabalhos" className="text-gray-700 hover:text-gray-900 transition-colors font-medium underline-animated">
              Trabalhos
            </a>
            <a href="#contato" className="text-gray-700 hover:text-gray-900 transition-colors font-medium underline-animated">
              Contato
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-brand-yellow transition-colors text-sm font-medium"
            >
              <span>+55 (35) 99859-9109</span>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-2 bg-brand-yellow text-gray-900 font-semibold rounded-lg hover:bg-brand-yellow-hover transition-all overflow-hidden ripple"
            >
              <span className="relative z-10">Solicitar Orçamento</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 shadow-lg">
            <nav className="px-4 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <a
                href="#home"
                className="block py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium rounded-lg px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#quem-somos"
                className="block py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium rounded-lg px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </a>
              <a
                href="#servicos"
                className="block py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium rounded-lg px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#trabalhos"
                className="block py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium rounded-lg px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Trabalhos
              </a>
              <a
                href="#contato"
                className="block py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium rounded-lg px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-3 text-gray-700 hover:text-brand-yellow transition-colors font-medium rounded-lg px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">📞</span>
                  <span>+55 (35) 99859-9109</span>
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 bg-brand-yellow text-gray-900 font-semibold rounded-lg hover:bg-brand-yellow-hover transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solicitar Orçamento
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
