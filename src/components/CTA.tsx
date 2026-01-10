import AnimatedSection from './AnimatedSection';
import ContactForm from './ContactForm';

export default function CTA() {
  const whatsappNumber = '5535998599109';
  const whatsappMessage = 'Olá! Gostaria de agendar uma consulta gratuita.';

  return (
    <section id="contato" className="py-16 md:py-24 lg:py-28 bg-brand-yellow relative overflow-hidden">
      {/* Gradiente dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow via-brand-yellow to-brand-yellow-hover opacity-90"></div>
      
      {/* Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
      </div>

      {/* Formas geométricas decorativas */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <AnimatedSection delay={0}>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
                Comece Seu Projeto Conosco
              </h2>
              <p className="text-base sm:text-lg text-white/95 mb-4 md:mb-6 leading-relaxed drop-shadow">
                Transforme suas ideias em realidade com nossa expertise em engenharia e construção. Oferecemos soluções personalizadas que combinam qualidade, inovação e comprometimento.
              </p>
              <div className="mb-4 md:mb-6">
                <p className="text-sm sm:text-base text-white/90 mb-2 font-semibold">Ou entre em contato direto:</p>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-gray-100 transition-colors break-all relative group inline-block"
                >
                  (35) 99859-9109
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl text-sm sm:text-base overflow-hidden ripple"
              >
                <span className="relative z-10">Falar no WhatsApp</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Envie sua Mensagem</h3>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
