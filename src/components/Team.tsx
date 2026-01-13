import { GraduationCap, Award, Briefcase, BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Team() {
  return (
    <section id="equipe" className="py-16 md:py-24 lg:py-28 bg-white relative">
      {/* Divisor animado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0}>
          <div className="text-center mb-12 md:mb-16">
            <div className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
              [NOSSA EQUIPE]
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              <span className="text-brand-yellow relative">
                Engenheiro Responsável
                <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow/20 -z-10"></span>
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Conheça o profissional que lidera a M.A Engenharia com expertise e dedicação.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Foto do Engenheiro */}
          <AnimatedSection delay={200} className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/engenheiro.jpg" 
                  alt="Marco Antônio - Engenheiro Civil" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decoração */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-yellow/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-yellow/5 rounded-full blur-3xl -z-10"></div>
            </div>
          </AnimatedSection>

          {/* Informações do Engenheiro */}
          <AnimatedSection delay={400} className="order-1 md:order-2">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Marco Antônio
                </h3>
                <p className="text-xl sm:text-2xl text-brand-yellow font-semibold mb-4">
                  Engenheiro Civil
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Engenheiro civil com <strong className="text-gray-900">sólida formação acadêmica</strong> e especialização em <strong className="text-gray-900">Estruturas e projetos complementares de edificações</strong>.
                </p>
              </div>

              {/* Formação e Especializações */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-brand-yellow w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Formação Acadêmica</h4>
                    <p className="text-gray-600 text-sm">
                      PUC Minas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                    <Award className="text-brand-yellow w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Especialização</h4>
                    <p className="text-gray-600 text-sm">
                      Pós-Graduação em Engenharia de Estruturas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-brand-yellow w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Experiência</h4>
                    <p className="text-gray-600 text-sm">
                      Mais de 10 anos de experiência no ramo da Engenharia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-brand-yellow w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Áreas de Atuação</h4>
                    <p className="text-gray-600 text-sm">
                      Projetos de Engenharia, Gerenciamento e Coordenação de Obras
                    </p>
                  </div>
                </div>
              </div>

              {/* Texto pessoal - espaço para o engenheiro falar sobre si */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
                  {/* Espaço para texto pessoal do engenheiro */}
                  "Minha paixão pela engenharia estrutural me levou a fundar a M.A Engenharia, com o objetivo de oferecer soluções técnicas de excelência e construir projetos que transformem ideias em realidade."
                </p>
                <p className="text-sm text-gray-500 mt-2">— Marco Antônio</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
