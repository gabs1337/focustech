
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-300 mb-2">
            © 2025 Focus Tech Recruitment - Todos os direitos reservados
          </p>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Mail className="h-5 w-5 text-gray-400" />
            <p className="text-gray-400">
              contato@focustechrecruitment.com
            </p>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="https://linkedin.com/company/focustechrecruitment" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
