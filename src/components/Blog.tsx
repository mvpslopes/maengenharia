import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const blogPosts = [
  {
    title: 'Como a Tecnologia Moderna de Construção Está Mudando Tudo',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
    featured: true
  },
  {
    title: 'Por que a Arquitetura Minimalista É o Futuro',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    featured: false
  },
  {
    title: 'Passo a Passo: O Que Acontece Durante a Construção de uma Casa?',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    featured: false
  },
  {
    title: 'Reforma vs. Reconstrução: O Que É Melhor para Sua Casa?',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
    featured: false
  }
];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-white relative">
      {/* Divisor animado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-4">
            <div>
              <div className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
                [BLOG]
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Insights de Construção
              </h2>
            </div>
            <a
              href="#blog"
              className="group hidden md:flex items-center px-6 py-3 bg-brand-yellow text-gray-900 font-semibold rounded-lg hover:bg-brand-yellow-hover transition-all ripple"
            >
              Ver Mais
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Featured Post */}
          {featuredPost && (
            <AnimatedSection delay={200} className="md:col-span-2">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1">
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${featuredPost.image}')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent group-hover:from-gray-900 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight group-hover:text-brand-yellow transition-colors">
                      {featuredPost.title}
                    </h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Regular Posts */}
          <div className="space-y-4 md:space-y-6">
            {regularPosts.map((post, index) => (
              <AnimatedSection key={index} delay={300 + index * 100}>
                <div className="flex gap-3 md:gap-4 group cursor-pointer hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden bg-white border border-gray-100 p-3 transform hover:-translate-y-1 shadow-md">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${post.image}')`
                      }}
                    ></div>
                  </div>
                  <div className="flex-1 flex items-center">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 leading-tight group-hover:text-brand-yellow transition-colors underline-animated">
                      {post.title}
                    </h4>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="md:hidden mt-8 text-center">
          <a
            href="#blog"
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

