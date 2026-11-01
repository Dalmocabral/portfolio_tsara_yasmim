import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { mysticAudio } from '../utils/audio';
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Send,
  CheckCircle,
  Calendar,
  ShieldCheck
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    interesse: 'curso-presencial',
    mensagem: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mysticAudio.playCardFlipSound();

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f5d77f', '#d4af37', '#8b5cf6', '#10b981'],
    });

    setIsSubmitted(true);

    // Formata mensagem para o WhatsApp
    const interesseLabels = {
      'curso-presencial': 'Curso Presencial na Tsara',
      'curso-online': 'Curso Online (Ao Vivo & Plataforma)',
      'consulta-individual': 'Consulta de Baralho Cigano / Tarot',
      'gira-centro': 'Gira Espiritual & Passe Magnético no Centro',
      'magia-ervas': 'Magia Natural & Banhos de Ervas',
      'outro': 'Outras Informações'
    };

    const textoFormatado = `Olá Tsara Yasmim! Meu nome é *${formData.nome}*.
Gostaria de saber mais sobre: *${interesseLabels[formData.interesse] || formData.interesse}*.
Meu WhatsApp: ${formData.whatsapp}
Meu E-mail: ${formData.email || 'Não informado'}
Mensagem: ${formData.mensagem || 'Gostaria de mais informações e disponibilidade de horários/turmas.'}`;

    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(textoFormatado)}`;

    // Aguarda breve animação e abre o WhatsApp
    setTimeout(() => {
      window.open(url, '_blank');
    }, 1200);
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            Fale Conosco & Localização
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200 mt-4 mb-3">
            Atendimento, Cursos & Visitas
          </h2>
          <div className="ornament-line">
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Venha conhecer nosso Centro Espírita Cigano presencialmente ou entre em contato para garantir sua vaga nos cursos e agendar suas consultas oraculares.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Coluna da Esquerda: Informações do Centro e Canais (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card Localização do Centro Espírita */}
            <div className="glass-panel rounded-3xl p-7 border border-amber-500/25 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-amber-100">
                    Centro Espírita Cigano Tsara Yasmim
                  </h4>
                  <p className="text-xs text-purple-300">Templo Sagrado de Santa Sara Kali</p>
                </div>
              </div>

              <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-4">
                Nosso espaço é preparado com ervas sagradas, cristais, incensos naturais e velas consagradas para acolher você com paz, respeito e energia curativa.
              </p>

              <div className="space-y-3 pt-3 border-t border-purple-800/40 text-xs text-gray-200">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Endereço:</strong> Rua das Estrelas Sagradas, 108 — Bairro Acolhedor, São Paulo - SP
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Giras Espirituais & Passes:</strong> 1º e 3º Sábado de cada mês, às 19h00 (Entrada fraterna com nome na lista).
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cursos e Consultas Presenciais:</strong> Terça a Sábado com horário previamente agendado.
                  </span>
                </div>
              </div>
            </div>

            {/* Card de Canais Rápidos */}
            <div className="glass-panel rounded-3xl p-7 border border-amber-500/20 space-y-4">
              <h4 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-widest">
                Canais Oficiais de Atendimento
              </h4>

              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%20Yasmim!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Centro%20Esp%C3%ADrita%20e%20os%20Cursos."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => mysticAudio.playClickSound()}
                className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-emerald-200">WhatsApp Oficial</span>
                    <span className="block text-[11px] text-gray-300">(11) 99999-9999</span>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Falar Agora →
                </span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => mysticAudio.playClickSound()}
                className="flex items-center justify-between p-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-purple-200">Instagram da Tsara</span>
                    <span className="block text-[11px] text-gray-300">@tsarayasmim.cigana</span>
                  </div>
                </div>
                <span className="text-xs text-pink-400 group-hover:translate-x-1 transition-transform">
                  Seguir →
                </span>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-purple-950/30 border border-amber-500/15">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-amber-200">E-mail Institucional</span>
                  <span className="block text-[11px] text-gray-300">contato@tsarayasmim.com.br</span>
                </div>
              </div>
            </div>

            {/* Aviso Fraterno */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>
                Para visitas às giras públicas do Centro Espírita, solicitamos o uso de roupas claras e postura de respeito ao solo sagrado. Optchá!
              </span>
            </div>
          </div>

          {/* Coluna da Direita: Formulário de Contato / Inscrição (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border-2 border-amber-500/30 shadow-2xl shadow-purple-950/60 bg-gradient-to-b from-[#180a2f] to-[#0f051e]">
              <div className="mb-6">
                <h3 className="font-cinzel text-2xl font-bold text-amber-100 mb-1">
                  Envie sua Mensagem ou Solicitação de Vaga
                </h3>
                <p className="text-xs md:text-sm text-gray-300">
                  Preencha o formulário abaixo. Nossa equipe responderá em até poucas horas pelo WhatsApp ou E-mail.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-cinzel text-xl font-bold text-amber-200">
                    Mensagem Preparada com Sucesso!
                  </h4>
                  <p className="text-sm text-gray-200 max-w-md mx-auto leading-relaxed">
                    Você está sendo redirecionado para o WhatsApp da Tsara Yasmim para envio direto da sua mensagem.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary px-5 py-2.5 rounded-xl text-xs font-bold mt-4"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nome */}
                    <div>
                      <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Ex: Maria Clara"
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-amber-500/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                        WhatsApp (com DDD) *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-amber-500/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* E-mail */}
                    <div>
                      <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                        Seu E-mail (Opcional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-amber-500/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    {/* Tipo de Interesse */}
                    <div>
                      <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                        Qual é o seu interesse? *
                      </label>
                      <select
                        name="interesse"
                        value={formData.interesse}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#170a2a] border border-amber-500/30 text-amber-100 text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                      >
                        <option value="curso-presencial">🏛️ Curso Presencial na Tsara</option>
                        <option value="curso-online">🌐 Curso Online (Ao Vivo & Plataforma)</option>
                        <option value="consulta-individual">🔮 Consulta de Baralho Cigano / Tarot</option>
                        <option value="gira-centro">🕊️ Gira Espiritual & Passe no Centro</option>
                        <option value="magia-ervas">🌿 Magia Natural & Banhos de Ervas</option>
                        <option value="outro">✨ Outras Dúvidas ou Informações</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                      Sua Mensagem ou Dúvida
                    </label>
                    <textarea
                      name="mensagem"
                      rows="4"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Conte um pouco sobre suas expectativas, disponibilidade de horários ou o que busca com o oráculo..."
                      className="w-full px-4 py-3 rounded-xl bg-purple-950/60 border border-amber-500/30 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Botão de Envio */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl btn-gold text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-transform hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem & Iniciar Conversa</span>
                  </button>

                  <p className="text-center text-[11px] text-gray-400">
                    Seus dados estão protegidos com total sigilo espiritual e ética oracular.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
