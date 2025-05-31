import React, { useState } from 'react';
import { X, Building, MessageCircle, Mail, Send, User, MailPlus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';


interface CompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ contact: '', method: 'whatsapp' });
  const [loadingCompanyModal, setLoadingCompanyModal] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingCompanyModal(true)
    const templateParams = {
      method: form.method,
      contact: form.contact,
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
        setForm({ contact: '', method: 'whatsapp' });
        onClose();
      })
      .catch(() => {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente mais tarde.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setLoadingCompanyModal(false);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl p-8 m-4 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
            <MailPlus className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">Solicitar Recrutamento</h3>
          <p className="text-gray-600 mt-2">Vamos conversar sobre suas necessidades</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Método de Contato Preferido</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="whatsapp"
                  checked={form.method === 'whatsapp'}
                  onChange={(e) => setForm({ ...form, method: e.target.value })}
                  className="mr-2"
                />
                WhatsApp
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="email"
                  checked={form.method === 'email'}
                  onChange={(e) => setForm({ ...form, method: e.target.value })}
                  className="mr-2"
                />
                Email
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {form.method === 'whatsapp' ? 'WhatsApp' : 'Email'}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {form.method === 'whatsapp' ? (
                  <MessageCircle className="h-5 w-5 text-gray-400" />
                ) : (
                  <Mail className="h-5 w-5 text-gray-400" />
                )}
              </div>
              <input
                type={form.method === 'whatsapp' ? 'tel' : 'email'}
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                placeholder={form.method === 'whatsapp' ? '+55 (11) 99999-9999' : 'empresa@email.com'}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loadingCompanyModal}
              className={`w-full bg-black text-white py-2 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2 text-sm
    ${loadingCompanyModal ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'}`}>
              {loadingCompanyModal ? (
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
          </div>
        </form>
      </div>
    </div>
  );
};
export default CompanyModal;
