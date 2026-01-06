import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';

export default function About() {
  return (
    <section id="quem-somos" className="py-12 md:py-20 bg-gray-900 relative overflow-hidden">
      {/* Divisor animado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* Image Section */}
          <AnimatedSection delay={0} className="relative order-2 md:order-1">
            <div 
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
              }}
            ></div>
            <div className="absolute right-0 top-0 bottom-0 w-1 md:w-2 bg-brand-yellow shadow-lg shadow-brand-yellow/50"></div>
          </AnimatedSection>

          {/* Content Section */}
          <AnimatedSection delay={200} className="bg-gray-900 p-6 sm:p-8 md:p-12 lg:p-16 order-1 md:order-2">
            <div className="space-y-4 md:space-y-6">
              <div className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                [QUEM SOMOS]
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Seu Parceiro de{' '}
                <span className="text-brand-yellow relative">
                  Construção
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-yellow/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>{' '}
                Confiável
              </h2>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                A <strong className="text-white">M.A Engenharia e Construção</strong> é uma empresa que atua no ramo de projetos de engenharia e execução de obras, oferecendo soluções completas, técnicas e personalizadas para cada cliente.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Nosso foco está na <strong className="text-white">qualidade, segurança e viabilidade das obras</strong>, desde a concepção do projeto até a sua execução final. A empresa é liderada por <strong className="text-white">Marco Antônio</strong>, engenheiro civil com sólida formação acadêmica e especialização em Estruturas e projetos complementares de edificações.
              </p>

              {/* Statistics com contadores animados */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4 md:pt-8">
                <AnimatedSection delay={400}>
                  <div>
                    <AnimatedCounter 
                      end={150} 
                      suffix="+" 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2"
                    />
                    <div className="text-gray-400 text-xs sm:text-sm">Projetos Concluídos</div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={600}>
                  <div>
                    <AnimatedCounter 
                      end={98} 
                      suffix="%" 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2"
                    />
                    <div className="text-gray-400 text-xs sm:text-sm">Satisfação do Cliente</div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={800}>
                  <div>
                    <AnimatedCounter 
                      end={10} 
                      suffix="+" 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2"
                    />
                    <div className="text-gray-400 text-xs sm:text-sm">Anos de Experiência</div>
                  </div>
                </AnimatedSection>
              </div>

              <a
                href="#servicos"
                className="group relative inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-brand-yellow text-gray-900 font-semibold rounded-lg hover:bg-brand-yellow-hover transition-all mt-4 md:mt-6 text-sm sm:text-base overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Saiba Mais
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-yellow-hover to-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
