import { Download, FileText, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function BIMTechnology() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Divisor animado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>
      
      {/* Background com imagem desfocada */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Seção Principal */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center mb-8 md:mb-16">
          {/* Texto Principal */}
          <AnimatedSection delay={0}>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
                <span className="text-gray-900">
                  Excelência em{' '}
                </span>
                <span className="text-brand-yellow">
                  Engenharia Estrutural
                </span>
                <span className="text-gray-900 block mt-1 md:mt-2">
                  Voltada para Diversos Segmentos
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                A M.A Engenharia atende às necessidades integrais dos clientes por meio dos mais modernos processos de desenvolvimento de projetos, <strong className="text-gray-900">softwares BIM</strong> e metodologias consolidadas, capacitando constantemente seu corpo técnico.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="#contato"
                  className="group inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 bg-brand-yellow text-gray-900 font-semibold rounded-xl hover:bg-brand-yellow-hover transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                >
                  <Download className="mr-2" size={18} />
                  Solicitar Proposta
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-300 hover:border-brand-yellow hover:bg-gray-50 transition-all shadow-lg text-sm sm:text-base"
                >
                  <FileText className="mr-2" size={18} />
                  Ver Serviços
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Destaque BIM */}
          <AnimatedSection delay={200}>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-yellow/10 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-brand-yellow" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Tecnologia BIM</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Building Information Modeling</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Utilizamos <strong className="text-gray-900">tecnologia BIM</strong> em nossos projetos, garantindo maior precisão, coordenação entre disciplinas e otimização de recursos. O BIM permite visualização 3D, detecção de conflitos, quantitativos automáticos e gestão completa do ciclo de vida do projeto.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-center text-xs sm:text-sm text-gray-700">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-brand-yellow mr-2 flex-shrink-0" />
                  <span>Modelagem 3D</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-700">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-brand-yellow mr-2 flex-shrink-0" />
                  <span>Coordenação Multidisciplinar</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-700">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-brand-yellow mr-2 flex-shrink-0" />
                  <span>Quantitativos Automáticos</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-700">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-brand-yellow mr-2 flex-shrink-0" />
                  <span>Detecção de Conflitos</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Barra Horizontal de Diferenciais - Similar à imagem */}
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-2xl">
            {/* Card 1 - Destaque */}
            <div className="bg-gray-900 text-white p-5 sm:p-6 md:p-8 flex flex-col justify-center min-h-[150px] sm:min-h-[180px]">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 leading-tight">
                Excelência em Engenharia Estrutural
              </h3>
              <div className="w-12 h-1 bg-brand-yellow mt-4"></div>
            </div>

            {/* Card 2 */}
            <div className="bg-brand-yellow text-gray-900 p-5 sm:p-6 md:p-8 flex flex-col justify-center hover:bg-brand-yellow-hover transition-colors min-h-[150px] sm:min-h-[180px]">
              <h3 className="text-sm sm:text-base md:text-lg font-bold leading-tight">
                Especialistas em Diversos Materiais
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-2">
                Concreto, aço, madeira e mais
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-brand-yellow text-gray-900 p-5 sm:p-6 md:p-8 flex flex-col justify-center hover:bg-brand-yellow-hover transition-colors min-h-[150px] sm:min-h-[180px]">
              <h3 className="text-sm sm:text-base md:text-lg font-bold leading-tight">
                Compromisso com Prazo e Qualidade
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-2">
                Entregas pontuais e excelência
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-brand-yellow text-gray-900 p-5 sm:p-6 md:p-8 flex flex-col justify-center hover:bg-brand-yellow-hover transition-colors min-h-[150px] sm:min-h-[180px]">
              <h3 className="text-sm sm:text-base md:text-lg font-bold leading-tight">
                Tecnologia de Ponta
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-2">
                Softwares BIM e metodologias modernas
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-brand-yellow text-gray-900 p-5 sm:p-6 md:p-8 flex flex-col justify-center hover:bg-brand-yellow-hover transition-colors min-h-[150px] sm:min-h-[180px]">
              <h3 className="text-sm sm:text-base md:text-lg font-bold leading-tight">
                Projetos Executivos
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-2">
                Detalhamento completo e exequível
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
