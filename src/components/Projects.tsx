import { ArrowRight } from 'lucide-react';
import { useState, useMemo } from 'react';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'Residencial Moderna',
    category: 'Construção Residencial',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
    description: 'Projeto completo de residência unifamiliar com arquitetura contemporânea.'
  },
  {
    title: 'Edifício Comercial',
    category: 'Construção Comercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Estrutura comercial moderna com múltiplos pavimentos e acabamentos de alto padrão.'
  },
  {
    title: 'Reforma Completa',
    category: 'Reforma & Remodelação',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
    description: 'Transformação completa de espaço residencial com design moderno e funcional.'
  },
  {
    title: 'Casa de Alto Padrão',
    category: 'Construção Residencial',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Residência de alto padrão com projeto arquitetônico exclusivo e acabamentos luxuosos.'
  },
  {
    title: 'Escritório Corporativo',
    category: 'Construção Comercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    description: 'Espaço corporativo moderno com foco em produtividade e bem-estar dos colaboradores.'
  },
  {
    title: 'Ampliação Residencial',
    category: 'Reforma & Remodelação',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
    description: 'Ampliação e modernização de residência existente com integração harmoniosa.'
  }
];

const categories = ['Todos', 'Construção Residencial', 'Construção Comercial', 'Reforma & Remodelação'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  const getCategoryCount = (category: string) => {
    if (category === 'Todos') return projects.length;
    return projects.filter(p => p.category === category).length;
  };
  return (
    <section id="projetos" className="py-16 md:py-24 lg:py-28 bg-gray-50 relative">
      {/* Divisor animado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-4">
            <div className="flex-1">
              <div className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
                [NOSSOS PROJETOS]
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Portfólio de{' '}
                <span className="text-brand-yellow relative">
                  Realizações
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow/20 -z-10"></span>
                </span>
              </h2>
              <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl">
                Conheça alguns dos projetos que desenvolvemos com excelência, qualidade e dedicação.
              </p>
            </div>
            <a
              href="#contato"
              className="group hidden md:flex items-center px-6 py-3 bg-brand-yellow text-gray-900 font-semibold rounded-lg hover:bg-brand-yellow-hover transition-all ripple"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </AnimatedSection>

        {/* Filtros de categoria funcionais */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap gap-3 mb-10 md:mb-16">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              const count = getCategoryCount(category);
              const displayName = category === 'Construção Residencial' ? 'Residencial' :
                                 category === 'Construção Comercial' ? 'Comercial' :
                                 category === 'Reforma & Remodelação' ? 'Reformas' : category;
              
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                    isActive
                      ? 'bg-brand-yellow text-gray-900 shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {displayName}
                  {category !== 'Todos' && (
                    <span className={`ml-2 text-xs ${
                      isActive ? 'text-gray-700' : 'text-gray-500'
                    }`}>
                      ({count})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Grid de projetos filtrados */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-white">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${project.image}')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent group-hover:from-gray-900/95 transition-colors"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-brand-yellow text-gray-900 text-xs font-semibold rounded-full">
                      {project.category.split(' ')[0]}
                    </span>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-yellow transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center text-brand-yellow font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Ver Detalhes</span>
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
            ))
          )}
        </div>

        <div className="md:hidden mt-8 text-center">
          <a
            href="#contato"
            className="inline-flex items-center px-6 py-3 bg-brand-yellow text-gray-900 font-semibold rounded-lg hover:bg-brand-yellow-hover transition-all"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
