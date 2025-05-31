
import React, { useState } from 'react';
import { Menu, X, Users, BrainCircuit } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button 
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-2xl font-bold text-black hover:opacity-80 transition-opacity">
          <BrainCircuit className="w-6 h-6" />
          <span>FOCUS</span>
        </button>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 justify-center flex-1">
          <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-black transition-colors">
            Sobre
          </button>
          <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-black transition-colors">
            Serviços
          </button>
          <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 hover:text-black transition-colors">
            Benefícios
          </button>
          <button onClick={() => scrollToSection('contato')} className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-semibold">
            Contato
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col py-4">
            <button onClick={() => scrollToSection('sobre')} className="px-4 py-3 text-left text-gray-700 hover:bg-gray-100">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="px-4 py-3 text-left text-gray-700 hover:bg-gray-100">
              Serviços
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="px-4 py-3 text-left text-gray-700 hover:bg-gray-100">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('contato')} className="mx-4 my-2 bg-black text-white px-4 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold text-center">
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
