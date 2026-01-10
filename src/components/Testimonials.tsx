import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    quote: 'Excelente trabalho! A equipe foi muito profissional e entregou o projeto dentro do prazo e orçamento.',
    name: 'Carlos Silva',
    role: 'Proprietário',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    quote: 'Superou todas as expectativas. A qualidade da construção é excepcional e o atendimento foi impecável.',
    name: 'Maria Santos',
    role: 'Gerente de Projetos',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    quote: 'Profissionais competentes e dedicados. Recomendo sem hesitação para qualquer projeto de engenharia.',
    name: 'João Oliveira',
    role: 'Arquiteto',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    quote: 'Trabalho de alta qualidade técnica. Ficamos muito satisfeitos com o resultado final do projeto.',
    name: 'Ana Costa',
    role: 'Diretora',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    quote: 'A melhor escolha que fizemos. Profissionalismo, qualidade e comprometimento em cada etapa.',
    name: 'Roberto Lima',
    role: 'Empresário',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    quote: 'Experiência incrível do início ao fim. Projeto entregue com excelência e atenção aos detalhes.',
    name: 'Fernanda Alves',
    role: 'Proprietária',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  }
];

export default function Testimonials() {
  return (
    <section id="trabalhos" className="py-16 md:py-24 lg:py-28 bg-white relative">
      {/* Divisor animado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0}>
          <div className="text-center mb-10 md:mb-16">
            <div className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
              [DEPOIMENTOS]
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Histórias de{' '}
              <span className="text-brand-yellow">Sucesso</span> dos Clientes
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group glass-dark bg-white/80 backdrop-blur-sm p-5 md:p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50">
                <p className="text-gray-800 mb-4 leading-relaxed font-medium">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3 ring-2 ring-brand-yellow/20 group-hover:ring-brand-yellow/40 transition-all"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-brand-yellow transition-colors">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

