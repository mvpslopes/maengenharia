import { Clock, User, Shield, Trophy, Cpu } from 'lucide-react';

const differentials = [
  {
    icon: Clock,
    title: 'Compromisso com prazos e transparência',
    description: 'Gestão eficiente e comunicação clara em todas as etapas do projeto'
  },
  {
    icon: User,
    title: 'Atendimento personalizado',
    description: 'Cada cliente recebe soluções específicas para suas necessidades'
  },
  {
    icon: Shield,
    title: 'Soluções técnicas modernas e seguras',
    description: 'Aplicação de normas técnicas e melhores práticas da engenharia'
  },
  {
    icon: Trophy,
    title: 'Experiência em obras de alta exigência',
    description: 'Equipe preparada para projetos complexos e desafiadores'
  },
  {
    icon: Cpu,
    title: 'Tecnologias avançadas de projeto',
    description: 'Uso de ferramentas modernas como BIM e modelagem 3D'
  }
];

export default function Differentials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-1 w-20 bg-brand-yellow mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a M.A Engenharia?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Diferenciais que garantem a excelência dos nossos serviços
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-brand-yellow transition-all hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-brand-yellow rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <differential.icon className="text-gray-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {differential.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
