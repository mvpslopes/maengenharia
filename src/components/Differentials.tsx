import { CheckCircle, Clock, Award, Code, FileText } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const differentials = [
  {
    icon: Code,
    title: 'Tecnologia de Ponta',
    description: 'Utilizamos os softwares mais modernos do mercado e trabalhamos com tecnologia BIM para garantir precisão e eficiência em nossos projetos.'
  },
  {
    icon: Clock,
    title: 'Compromisso com Prazo',
    description: 'Cumprimento rigoroso de prazos estabelecidos, garantindo que seu projeto seja entregue no tempo acordado sem comprometer a qualidade.'
  },
  {
    icon: Award,
    title: 'Qualidade Garantida',
    description: 'Projetos executivos detalhados e meticulosos, com enorme preocupação em garantir que nossas estruturas sejam exequíveis e de alta qualidade.'
  },
  {
    icon: CheckCircle,
    title: 'Especialistas em Materiais',
    description: 'Experiência em concreto armado, estruturas metálicas, alvenaria estrutural e diversos outros materiais construtivos modernos.'
  },
  {
    icon: FileText,
    title: 'Projetos Executivos',
    description: 'Detalhamento meticuloso de todas as estruturas, garantindo que nossos projetos sejam totalmente exequíveis e de fácil compreensão.'
  }
];

export default function Differentials() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gray-50 relative">
      {/* Divisor animado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0}>
          <div className="text-center mb-12 md:mb-16">
            <div className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
              [NOSSOS DIFERENCIAIS]
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Por que escolher a{' '}
              <span className="text-brand-yellow relative">
                M.A Engenharia
                <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow/20 -z-10"></span>
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Excelência em engenharia estrutural voltada para diversos segmentos, com processos modernos e equipe altamente qualificada.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-yellow/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-300">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-yellow transition-colors">
                    {differential.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
