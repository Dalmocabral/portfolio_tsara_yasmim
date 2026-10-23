import React from 'react';
import { SERVICOS_YASMIM } from '../data/baralhoCigano';
import { Sparkles, Compass, Flame, HelpCircle, Check, ArrowRight, Clock, Video } from 'lucide-react';
import { mysticAudio } from '../utils/audio';

const iconMap = {
  Sparkles: Sparkles,
  Compass: Compass,
  Flame: Flame,
  HelpCircle: HelpCircle,
};

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            Consultas & Rituais
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200 mt-4 mb-3">
            Serviços & Atendimentos
          </h2>
          <div className="ornament-line">
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Escolha o formato que melhor ressoa com o seu momento atual. Todos os atendimentos são realizados com sigilo absoluto, respeito e conexão espiritual genuína.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICOS_YASMIM.map((servico) => {
            const Icon = iconMap[servico.icone] || Sparkles;

            return (
              <div
                key={servico.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 ${
                  servico.destaque
                    ? 'glass-panel border-2 border-amber-400/60 shadow-2xl shadow-amber-500/10 bg-gradient-to-b from-[#1c0c36] to-[#0e041f]'
                    : 'glass-panel border border-amber-500/20 hover:border-amber-400/40 bg-[#120724]/75'
                }`}
              >
                {/* Badge de Destaque */}
                {servico.destaque && (
                  <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Mais Procurada</span>
                  </div>
                )}

                <div>
                  {/* Ícone e Cabeçalho do Card */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        servico.destaque
                          ? 'bg-amber-500 text-purple-950 shadow-lg shadow-amber-500/30'
                          : 'bg-purple-900/60 border border-amber-400/30 text-amber-300'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-cinzel text-xl md:text-2xl font-bold text-amber-100">
                        {servico.titulo}
                      </h3>
                      <p className="text-xs md:text-sm text-purple-300 font-sans mt-0.5">
                        {servico.subtitulo}
                      </p>
                    </div>
                  </div>

                  {/* Informações Rápidas (Duração e Tipo) */}
                  <div className="flex flex-wrap gap-3 mb-6 text-xs text-gray-300">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-800/60">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{servico.duracao}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-800/60">
                      <Video className="w-3.5 h-3.5 text-amber-400" />
                      <span>{servico.tipo}</span>
                    </span>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {servico.descricao}
                  </p>

                  {/* O que está incluso */}
                  <div className="space-y-2.5 mb-8">
                    <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                      O que está incluído:
                    </p>
                    {servico.inclui.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-200">
                        <div className="p-0.5 rounded-full bg-amber-500/20 text-amber-400 mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão de Agendamento */}
                <a
                  href={`https://wa.me/5511999999999?text=${encodeURIComponent(servico.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => mysticAudio.playClickSound()}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                    servico.destaque
                      ? 'btn-gold shadow-amber-500/20'
                      : 'btn-secondary'
                  }`}
                >
                  <span>Agendar este Atendimento</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
