
import React from 'react';
import { Star, Zap, TrendingDown, DollarSign, MapPin, Headphones, Clock, Target, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BenefitsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: Star,
      title: "Acesso a talentos qualificados",
      description: "Conectamos você aos melhores profissionais do mercado tech"
    },
    {
      icon: Zap,
      title: "Agilidade no processo seletivo",
      description: "Processos otimizados para contratar mais rapidamente"
    },
    {
      icon: TrendingDown,
      title: "Redução de turnover",
      description: "Seleção criteriosa que garante maior retenção de talentos"
    },
    {
      icon: DollarSign,
      title: "Custo-Benefício otimizado",
      description: "Trabalhamos vagas com taxa de serviço no sucesso, ou seja, pagamento após contratação do candidato ideal"
    },
    {
      icon: MapPin,
      title: "Vagas remotas e presenciais",
      description: "Flexibilidade total na modalidade de trabalho"
    },
    {
      icon: Headphones,
      title: "Atendimento remoto",
      description: "Consultoria 100% digital, sem limitações geográficas"
    },
    {
      icon: Clock,
      title: "Atendimento a qualquer horário",
      description: "Suporte disponível quando você precisar"
    },
    {
      icon: Target,
      title: "Assertividade",
      description: "Precisão na identificação e seleção dos melhores candidatos"
    },
    {
      icon: TrendingUp,
      title: "Melhoria da Produtividade",
      description: "Profissionais qualificados que aumentam a performance da equipe"
    }
  ];

  return (
    <section id="beneficios" className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div 
            ref={titleRef}
            className={`scroll-fade-in ${titleVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefícios
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
          </div>
          
          <div 
            ref={descRef}
            className={`scroll-fade-in-delay ${descVisible ? 'visible' : ''}`}
          >
            <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Trabalhando conosco, sua empresa terá acesso a uma série de vantagens 
              competitivas que transformarão seu processo de recrutamento e seleção, 
              garantindo os melhores resultados.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { ref, isVisible } = useScrollAnimation();
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`bg-gray-950 p-6 rounded-xl card-hover cursor-pointer border border-gray-900 scroll-fade-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-300 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
