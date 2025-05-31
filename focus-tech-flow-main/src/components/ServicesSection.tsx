
import React from 'react';
import { Search, Users, Target, MessageCircle, FileText, Calendar, CheckCircle, MapPin, Truck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicesSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();

  const services = [
    {
      icon: Search,
      title: "Mapeamento das necessidades do cliente",
      description: "Análise detalhada das necessidades específicas da sua empresa"
    },
    {
      icon: Target,
      title: "Alinhamento do perfil da vaga",
      description: "Definição precisa do perfil ideal para cada posição"
    },
    {
      icon: Users,
      title: "Hunting ativo",
      description: "Busca proativa dos melhores talentos do mercado"
    },
    {
      icon: MessageCircle,
      title: "Entrevistas comportamentais e técnicas",
      description: "Avaliação completa de competências técnicas e comportamentais"
    },
    {
      icon: FileText,
      title: "Elaboração de parecer detalhado",
      description: "Relatório completo sobre cada candidato avaliado"
    },
    {
      icon: Calendar,
      title: "Agendamento de entrevistas",
      description: "Organização e coordenação de todas as etapas do processo"
    },
    {
      icon: CheckCircle,
      title: "Acompanhamento do processo seletivo",
      description: "Suporte completo até a contratação do candidato ideal"
    },
    {
      icon: MapPin,
      title: "Candidatos de todo o Brasil",
      description: "Acesso a profissionais qualificados em todas as regiões do país"
    },
    {
      icon: Truck,
      title: "Entrega contínua",
      description: "Processo ágil e eficiente com entregas constantes de resultados"
    }
  ];

  return (
    <section id="servicos" className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div 
            ref={titleRef}
            className={`scroll-fade-in ${titleVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-4"></div>
          </div>
          
          <div 
            ref={descRef}
            className={`scroll-fade-in-delay ${descVisible ? 'visible' : ''}`}
          >
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Oferecemos um processo completo de recrutamento tech, desde o mapeamento inicial 
              até o acompanhamento pós-contratação. Nossa metodologia garante a identificação 
              dos profissionais ideais para sua empresa.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const { ref, isVisible } = useScrollAnimation();
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`bg-gray-50 p-6 rounded-xl card-hover cursor-pointer border border-gray-200 scroll-fade-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
