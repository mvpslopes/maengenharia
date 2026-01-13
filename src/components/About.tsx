import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';

export default function About() {
  return (
    <section id="quem-somos" className="py-16 md:py-24 lg:py-28 bg-gray-900 relative overflow-hidden">
      {/* Divisor animado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 items-start">
          {/* Coluna Esquerda - Apenas Imagem */}
          <AnimatedSection delay={0} className="relative order-2 md:order-1 pt-6 sm:pt-8 md:pt-12 lg:pt-16">
            <div 
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: `url('/quem-somos.jpg')`
              }}
            ></div>
          </AnimatedSection>

          {/* Coluna Direita - Título + Texto alinhados com a imagem */}
          <AnimatedSection delay={200} className="bg-gray-900 p-6 sm:p-8 md:p-12 lg:p-16 order-1 md:order-2">
            <div className="space-y-5 md:space-y-7">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="text-brand-yellow">Quem Somos</span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 text-justify">
                Fundada em 2021, a <strong className="text-white">M.A ENGENHARIA</strong> atua na área de engenharia estrutural, atendendo diversos segmentos e oferecendo soluções completas às necessidades de seus clientes. A empresa utiliza modernos processos de desenvolvimento de projetos, aliados a softwares atualizados e metodologias consolidadas, investindo continuamente na capacitação de seu corpo técnico.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 text-justify">
                O sucesso de cada projeto é resultado de um trabalho pautado no <strong className="text-white">comprometimento, na competência técnica</strong> e na constante preocupação com a satisfação do cliente, que orienta todo o seu foco de atuação.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify">
                A <strong className="text-white">M.A ENGENHARIA</strong> mantém o compromisso permanente com a melhoria dos seus processos de desenvolvimento de projetos, buscando sempre a atualização técnica, tecnológica e metodológica. Com esse objetivo, desde sua fundação passou a atuar com um escopo completo que abrange toda a engenharia estrutural, atendendo de forma integral às demandas dos clientes, tanto em edificações quanto em outros segmentos da engenharia.
              </p>

              {/* Statistics com contadores animados */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4 md:pt-8">
                <AnimatedSection delay={400}>
                  <div>
                    <AnimatedCounter 
                      end={88} 
                      suffix="" 
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
                    <div className="text-gray-400 text-xs sm:text-sm">Satisfação dos Clientes</div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={800}>
                  <div>
                    <AnimatedCounter 
                      end={10} 
                      suffix="" 
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
