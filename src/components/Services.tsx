import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    title: 'Construção Residencial',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
    description: 'Projetos e execução de residências personalizadas com qualidade e atenção aos detalhes.'
  },
  {
    title: 'Construção Comercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Edifícios comerciais modernos e funcionais para empresas de todos os portes.'
  },
  {
    title: 'Reforma & Remodelação',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
    description: 'Transformação de espaços existentes com design contemporâneo e funcionalidade.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-12 md:py-20 bg-white relative">
      {/* Divisor animado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4">
            <div className="flex-1">
              <div className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
                [NOSSOS SERVIÇOS]
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                De Ideias à{' '}
                <span className="text-brand-yellow relative">
                  Realidade Concreta
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow/20 -z-10"></span>
                </span>
              </h2>
            </div>
            <a
              href="#contato"
              className="group hidden md:flex items-center px-6 py-3 bg-brand-yellow text-gray-900 font-semibold rounded-lg hover:bg-brand-yellow-hover transition-all ripple"
            >
              Ver Mais
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${service.image}')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-colors"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-brand-yellow transition-colors">{service.title}</h3>
                  <p className="text-gray-200 text-xs sm:text-sm">{service.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <a
            href="#contato"
            className="inline-flex items-center px-6 py-3 bg-brand-yellow text-gray-900 font-semibold rounded-lg hover:bg-brand-yellow-hover transition-all"
          >
            Ver Mais
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
