
import React, { useState } from 'react';
import { Building, User, MessageCircle, Mail, Phone, Linkedin, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState('empresa');
  const [companyForm, setCompanyForm] = useState({ contact: '', method: 'whatsapp' });
  const [candidateForm, setCandidateForm] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    linkedin: ''
  });

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation();
  const { ref: tabRef, isVisible: tabVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const [loadingCompany, setLoadingCompany] = useState(false);
  const [loadingCandidate, setLoadingCandidate] = useState(false);

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingCompany(true);

    const templateParams = {
      contact: companyForm.contact,
      method: companyForm.method,
    };

    emailjs.send(
      'service_jon11wf',
      'template_rqlzmhu',
      templateParams,
      'PW2Z8xWg0IKPHUHsm'
    )
      .then(() => {
        toast({
          title: "Solicitação enviada!",
          description: "Entraremos em contato em breve para discutir suas necessidades.",
        });
        setCompanyForm({ contact: '', method: 'whatsapp' });
      })
      .catch(() => {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente mais tarde.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setLoadingCompany(false);
      });
  };

  const handleCandidateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingCandidate(true);

    const templateParams = {
      nome: candidateForm.nome,
      whatsapp: candidateForm.whatsapp,
      email: candidateForm.email,
      linkedin: candidateForm.linkedin,
    };

    emailjs.send(
      'service_jon11wf',
      'template_p3836qe',
      templateParams,
      'PW2Z8xWg0IKPHUHsm'
    )
      .then(() => {
        toast({
          title: "Solicitação enviada!",
          description: "Entraremos em contato em breve para discutir suas necessidades.",
        });
        setCandidateForm({
          nome: '',
          whatsapp: '',
          email: '',
          linkedin: '',
        });
      })
      .catch(() => {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente mais tarde.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoadingCandidate(false);
      });
  };


  return (
    <section id="contato" className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div
            ref={titleRef}
            className={`scroll-fade-in ${titleVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-4"></div>
          </div>

          <div
            ref={descRef}
            className={`scroll-fade-in-delay ${descVisible ? 'visible' : ''}`}
          >
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para ajudar sua empresa a encontrar os melhores talentos tech
              ou para registrar seu perfil profissional. Entre em contato conosco e
              descubra como podemos transformar seu processo de recrutamento.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Tab Navigation */}
          <div
            ref={tabRef}
            className={`flex justify-center mb-6 scroll-fade-in ${tabVisible ? 'visible' : ''}`}
          >
            <div className="bg-gray-100 p-1 rounded-full flex">
              <button
                onClick={() => setActiveTab('empresa')}
                className={`px-5 py-2 rounded-full flex items-center gap-2 transition-all text-sm ${activeTab === 'empresa'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:text-black'
                  }`}
              >
                <Building size={16} />
                Empresa
              </button>
              <button
                onClick={() => setActiveTab('candidato')}
                className={`px-5 py-2 rounded-full flex items-center gap-2 transition-all text-sm ${activeTab === 'candidato'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:text-black'
                  }`}
              >
                <User size={16} />
                Candidatos
              </button>
            </div>
          </div>

          {/* Company Form */}
          {activeTab === 'empresa' && (
            <div
              ref={formRef}
              className={`bg-gray-50 p-6 rounded-xl max-w-xl mx-auto scroll-fade-in-delay ${formVisible ? 'visible' : ''}`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Formulário para Empresas
              </h3>
              <form onSubmit={handleCompanySubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Método de Contato Preferido
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center text-sm">
                      <input
                        type="radio"
                        value="whatsapp"
                        checked={companyForm.method === 'whatsapp'}
                        onChange={(e) => setCompanyForm({ ...companyForm, method: e.target.value })}
                        className="mr-2"
                      />
                      WhatsApp
                    </label>
                    <label className="flex items-center text-sm">
                      <input
                        type="radio"
                        value="email"
                        checked={companyForm.method === 'email'}
                        onChange={(e) => setCompanyForm({ ...companyForm, method: e.target.value })}
                        className="mr-2"
                      />
                      Email
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {companyForm.method === 'whatsapp' ? 'WhatsApp' : 'Email'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {companyForm.method === 'whatsapp' ?
                        <MessageCircle className="h-4 w-4 text-gray-400" /> :
                        <Mail className="h-4 w-4 text-gray-400" />
                      }
                    </div>
                    <input
                      type={companyForm.method === 'whatsapp' ? 'tel' : 'email'}
                      value={companyForm.contact}
                      onChange={(e) => setCompanyForm({ ...companyForm, contact: e.target.value })}
                      placeholder={companyForm.method === 'whatsapp' ? '+55 (11) 99999-9999' : 'empresa@email.com'}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loadingCompany}
                  className={`w-full bg-black text-white py-2 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2 text-sm${loadingCompany ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'}`}>
                  {loadingCompany ? (
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitação</span>
                    </>
                  )}
                </button>


              </form>
            </div>
          )}

          {/* Candidate Form */}
          {activeTab === 'candidato' && (
            <div
              ref={formRef}
              className={`bg-gray-50 p-6 rounded-xl max-w-xl mx-auto scroll-fade-in-delay ${formVisible ? 'visible' : ''}`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Formulário para Candidatos
              </h3>
              <form onSubmit={handleCandidateSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={candidateForm.nome}
                      onChange={(e) => setCandidateForm({ ...candidateForm, nome: e.target.value })}
                      placeholder="Seu nome completo"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      value={candidateForm.whatsapp}
                      onChange={(e) => setCandidateForm({ ...candidateForm, whatsapp: e.target.value })}
                      placeholder="+55 (11) 99999-9999"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={candidateForm.email}
                      onChange={(e) => setCandidateForm({ ...candidateForm, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Linkedin className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      value={candidateForm.linkedin}
                      onChange={(e) => setCandidateForm({ ...candidateForm, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/seuperfil"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loadingCandidate}
                  className={`w-full ${loadingCandidate ? 'bg-gray-600' : 'bg-black hover:bg-gray-800'} text-white py-2 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2 text-sm`}>
                  {loadingCandidate ? (
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Cadastrar Perfil</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
