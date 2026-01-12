import { useState } from 'react';
import { Send, Loader2, User, Mail, Phone, FileText, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  acceptPrivacy: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    acceptPrivacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const projectTypes = [
    'Construção Residencial',
    'Construção Comercial',
    'Reforma & Remodelação',
    'Projeto Estrutural',
    'Consultoria',
    'Outro'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // URL da API PHP na Hostinger
      // IMPORTANTE: Após fazer upload do arquivo PHP, atualize esta URL
      const API_URL = import.meta.env.VITE_API_URL || 'https://maengenhariaintegrada.com.br/api/send-email.php';

      // Envia os dados para o endpoint PHP
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        
        // Limpa o formulário após sucesso
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            projectType: '',
            message: '',
            acceptPrivacy: false
          });
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error(result.message || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
            Nome Completo *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all"
              placeholder="Seu nome completo"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
            E-mail *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all"
              placeholder="seu@email.com"
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
            Telefone *
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all"
              placeholder="(35) 99999-9999"
            />
          </div>
        </div>
        <div>
          <label htmlFor="projectType" className="block text-sm font-semibold text-white mb-2">
            Tipo de Projeto *
          </label>
          <div className="relative">
            <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            <select
              id="projectType"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/95 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all appearance-none"
            >
              <option value="">Selecione o tipo de projeto...</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
          Mensagem *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all resize-none"
            placeholder="Conte-nos sobre seu projeto, prazos, orçamento disponível e qualquer informação relevante..."
          />
        </div>
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="acceptPrivacy"
          name="acceptPrivacy"
          required
          checked={formData.acceptPrivacy}
          onChange={handleChange}
          className="mt-1 w-4 h-4 text-gray-900 bg-white border-gray-300 rounded focus:ring-2 focus:ring-white"
        />
        <label htmlFor="acceptPrivacy" className="ml-2 text-sm text-white/90">
          Aceito receber comunicações via e-mail e concordo com a{' '}
          <a href="#" className="underline hover:text-white transition-colors">
            Política de Privacidade
          </a>
          . *
        </label>
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/90 text-white rounded-lg">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/90 text-white rounded-lg">
          Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full group relative inline-flex items-center justify-center px-8 py-5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 animate-spin" size={20} />
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <span className="relative z-10 flex items-center">
              Enviar Mensagem
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          </>
        )}
      </button>
    </form>
  );
}
