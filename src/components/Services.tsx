import { ArrowRight, X } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useState } from 'react';

const services = [
  {
    title: 'PROJETO ESTRUTURAL',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Desenvolvimento de projetos estruturais completos, utilizando softwares modernos e metodologias consolidadas. Nossos projetos estruturais garantem segurança, viabilidade e otimização de materiais, atendendo todas as normas técnicas vigentes.',
    fullDescription: 'O Projeto Estrutural é a base de qualquer construção. Desenvolvemos projetos estruturais completos utilizando os mais modernos softwares de cálculo estrutural e metodologias consolidadas no mercado. Nossos projetos garantem segurança, viabilidade técnica e otimização de materiais, sempre em conformidade com as normas técnicas brasileiras (NBR). Trabalhamos com estruturas em concreto armado, estruturas metálicas, alvenaria estrutural e outros sistemas construtivos modernos.'
  },
  {
    title: 'PROJETO COMPLEMENTARES HIDROSSANITÁRIO E ELÉTRICO',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    description: 'Projetos complementares de instalações hidrossanitárias e elétricas, integrados ao projeto estrutural. Soluções completas que garantem funcionalidade, eficiência energética e conformidade com as normas técnicas.',
    fullDescription: 'Os Projetos Complementares Hidrossanitário e Elétrico são essenciais para o funcionamento completo de qualquer edificação. Desenvolvemos projetos integrados que trabalham em harmonia com o projeto estrutural, garantindo funcionalidade, eficiência energética e total conformidade com as normas técnicas brasileiras. Nossos projetos incluem dimensionamento de instalações, especificação de materiais, detalhamento de execução e compatibilização com demais projetos da obra.'
  },
  {
    title: 'EXECUÇÃO DE OBRAS',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
    description: 'Execução completa de obras com acompanhamento técnico especializado, garantindo qualidade, cumprimento de prazos e conformidade com os projetos aprovados. Equipe qualificada e processos modernos de gestão.',
    fullDescription: 'A Execução de Obras é realizada com acompanhamento técnico especializado em todas as etapas. Garantimos qualidade, cumprimento rigoroso de prazos e total conformidade com os projetos aprovados. Nossa equipe é altamente qualificada e utilizamos processos modernos de gestão de obras, com controle de qualidade, planejamento detalhado e comunicação constante com o cliente. Trabalhamos com os melhores fornecedores e mão de obra especializada.'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedService(index);
    document.body.style.overflow = 'hidden'; // Previne scroll do body
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="servicos" className="py-16 md:py-24 lg:py-28 bg-white relative">
        {/* Divisor animado */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0}>
            <div className="text-center mb-12 md:mb-16">
              <div className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
                [NOSSOS SERVIÇOS]
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Serviços que Abrangem Todo o{' '}
                <span className="text-brand-yellow relative">
                  Escopo da Engenharia Estrutural
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow/20 -z-10"></span>
                </span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                Soluções completas em engenharia estrutural, desde projetos até execução, com qualidade e comprometimento.
              </p>
            </div>
          </AnimatedSection>

          {/* Grid de cards verticais similar à imagem */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div
                  onClick={() => openModal(index)}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 h-[500px] md:h-[600px]"
                >
                  {/* Imagem de fundo */}
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${service.image}')`
                      }}
                    ></div>
                    {/* Gradiente amarelo apenas na metade inferior */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-yellow/90 via-brand-yellow/60 to-transparent"></div>
                    {/* Overlay escuro sutil na parte inferior */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
                  </div>

                  {/* Conteúdo do card */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center text-white font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Saiba Mais</span>
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contato"
              className="inline-flex items-center px-8 py-4 bg-brand-yellow text-gray-900 font-semibold rounded-xl hover:bg-brand-yellow-hover transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Modal de detalhes do serviço */}
      {selectedService !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Fechar"
            >
              <X size={24} className="text-gray-700" />
            </button>

            {/* Imagem do serviço */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${services[selectedService].image}')`
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  {services[selectedService].title}
                </h3>
              </div>
            </div>

            {/* Conteúdo do modal */}
            <div className="p-6 md:p-8 lg:p-12">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Descrição</h4>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {services[selectedService].fullDescription}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <a
                  href="#contato"
                  onClick={closeModal}
                  className="inline-flex items-center px-6 py-3 bg-brand-yellow text-gray-900 font-semibold rounded-xl hover:bg-brand-yellow-hover transition-all shadow-lg hover:shadow-xl"
                >
                  Solicitar Orçamento para este Serviço
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
