import { MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '5535998599109';

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-6">Informações de Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-gray-400 hover:text-brand-yellow transition-colors"
                >
                  <MessageCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-white">WhatsApp</p>
                    <p>+55 (35) 99859-9109</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@maengenhariaintegrada.com.br"
                  className="flex items-start text-gray-400 hover:text-brand-yellow transition-colors"
                >
                  <Mail className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-white">E-mail</p>
                    <p>contato@maengenhariaintegrada.com.br</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-white">Localização</p>
                  <p>Minas Gerais, Brasil</p>
                </div>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <div className="mb-6">
              <img 
                src="/logo/logo-branco.png" 
                alt="M.A Engenharia & Construção" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Responsabilidade técnica, qualidade e segurança em cada etapa da obra.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#quem-somos" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#trabalhos" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Trabalhos
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Construção Residencial
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Construção Comercial
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Reforma & Remodelação
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Arquitetura & Design
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Gestão de Projetos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Engenharia Estrutural
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>© {currentYear} Todos os direitos reservados</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-brand-yellow transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-brand-yellow transition-colors">Termos e Condições</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
