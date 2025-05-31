
import React, { useState } from 'react';
import { Code, Database, Globe, Smartphone, Cloud, Cpu, UserPlus, Zap, Wifi, Terminal, Laptop, Server, BrainCircuit } from 'lucide-react';
import CompanyModal from './CompanyModal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();

  const techIcons = [
    { Icon: Code, position: 'top-20 left-10' },
    { Icon: Database, position: 'top-40 right-10' },
    { Icon: Globe, position: 'top-60 left-20' },
    { Icon: Smartphone, position: 'bottom-40 right-20' },
    { Icon: Cloud, position: 'bottom-20 left-16' },
    { Icon: Cpu, position: 'top-32 right-32' },
    { Icon: Zap, position: 'top-16 right-16' },
    { Icon: Wifi, position: 'bottom-32 left-32' },
    { Icon: Terminal, position: 'top-72 left-8' },
    { Icon: Laptop, position: 'bottom-16 right-8' },
    { Icon: Server, position: 'top-48 left-32' },
  ];

  return (
    <>
      <section id="sobre" className="min-h-screen bg-black text-white relative overflow-hidden flex items-center pt-16">
        {/* Enhanced Parallax Background Icons - Smaller size */}
        <div className="absolute inset-0 pointer-events-none">
          {techIcons.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} opacity-30 text-white tech-float`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <item.Icon size={48} />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <div
              ref={titleRef}
              className={`scroll-fade-in ${titleVisible ? 'visible' : ''}`}>
              <h1 className="text-5xl md:text-8xl font-bold mb-4 leading-tight tech-text">
                Focus<br />
                <span className="text-red-500 tech-glow"> Tech Recruitment</span>
              </h1>
            </div>

            <div
              ref={descRef}
              className={`scroll-fade-in-delay ${descVisible ? 'visible' : ''}`}
            >
              <p className="text-xl sm:text-2xl md:text-3xl mb-10 text-gray-200 leading-relaxed max-w-4xl mx-auto text-center">
                Consultoria especializada em recrutamento tech, 100% remota e personalizada.
                Atendemos empresas de todo o Brasil, focados em encontrar profissionais com
                as competências técnicas e comportamentais ideais.
              </p>

            </div>

            <div
              ref={buttonRef}
              className={`scroll-fade-in-delay ${buttonVisible ? 'visible' : ''}`}
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
              >
                <UserPlus className="w-4 h-4" />
                <span>Quero um recrutamento especializado</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <CompanyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
