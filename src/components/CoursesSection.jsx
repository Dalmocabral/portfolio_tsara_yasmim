import React, { useState } from 'react';
import { CURSOS_TSARA } from '../data/baralhoCigano';
import {
  Sparkles,
  BookOpen,
  Award,
  Video,
  MapPin,
  Check,
  ArrowRight,
  Clock,
  Users,
  Compass,
  Layers,
  Flame,
  MessageCircle
} from 'lucide-react';
import { mysticAudio } from '../utils/audio';

const iconMap = {
  Layers: Layers,
  Compass: Compass,
  Flame: Flame,
  Sparkles: Sparkles,
};

export default function CoursesSection() {
  const [filter, setFilter] = useState('todos');

  const filteredCourses = CURSOS_TSARA.filter((curso) => {
    if (filter === 'presencial') return curso.categoria === 'presencial' || curso.categoria === 'ambos';
    if (filter === 'online') return curso.categoria === 'online' || curso.categoria === 'ambos';
    return true;
  });

  return (
    <section id="cursos" className="py-24 relative overflow-hidden">
      {/* Luz mística de fundo */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-lg">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Escola de Oráculos & Espiritualidade Cigana</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200 mb-3">
            Cursos Presenciais & Online
          </h2>

          <div className="ornament-line">
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Formações completas para quem deseja desenvolver a intuição, dominar a leitura do Baralho Cigano e do Tarot, ou aprender a magia natural dos rituais e ervas com fundamentação ética e espiritual.
          </p>
        </div>

        {/* Filtros Interativos de Cursos */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-14">
          <button
            onClick={() => {
              mysticAudio.playClickSound();
              setFilter('todos');
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-cinzel font-bold tracking-wider transition-all duration-300 cursor-pointer ${
              filter === 'todos'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 shadow-lg shadow-amber-500/25 scale-105 border border-amber-300'
                : 'glass-panel text-gray-300 hover:text-amber-300 hover:border-amber-400/40'
            }`}
          >
            Todos os Cursos ({CURSOS_TSARA.length})
          </button>

          <button
            onClick={() => {
              mysticAudio.playClickSound();
              setFilter('presencial');
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-cinzel font-bold tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              filter === 'presencial'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 shadow-lg shadow-amber-500/25 scale-105 border border-amber-300'
                : 'glass-panel text-gray-300 hover:text-amber-300 hover:border-amber-400/40'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>🏛️ Presencial na Tsara</span>
          </button>

          <button
            onClick={() => {
              mysticAudio.playClickSound();
              setFilter('online');
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-cinzel font-bold tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
              filter === 'online'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 shadow-lg shadow-amber-500/25 scale-105 border border-amber-300'
                : 'glass-panel text-gray-300 hover:text-amber-300 hover:border-amber-400/40'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>🌐 Online (Ao Vivo & Plataforma)</span>
          </button>
        </div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredCourses.map((curso) => {
            const Icon = iconMap[curso.icone] || BookOpen;

            return (
              <div
                key={curso.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 ${
                  curso.destaque
                    ? 'glass-panel border-2 border-amber-400/60 shadow-2xl shadow-purple-950/80 bg-gradient-to-b from-[#1c0c36] to-[#0e041f]'
                    : 'glass-panel border border-amber-500/20 hover:border-amber-400/40 bg-[#120724]/80'
                }`}
              >
                {/* Badge Destaque */}
                {curso.destaque && (
                  <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Mais Procurado</span>
                  </div>
                )}

                <div>
                  {/* Cabeçalho do Card */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                        curso.destaque
                          ? 'bg-amber-500 text-purple-950 shadow-lg shadow-amber-500/30'
                          : 'bg-purple-900/60 border border-amber-400/30 text-amber-300'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-950 border border-purple-700/60 text-[11px] font-semibold text-amber-300 mb-1.5">
                        <Award className="w-3 h-3 text-amber-400" />
                        <span>{curso.modalidade}</span>
                      </div>
                      <h3 className="font-cinzel text-xl md:text-2xl font-bold text-amber-100 leading-snug">
                        {curso.titulo}
                      </h3>
                      <p className="text-xs md:text-sm text-purple-300 font-sans mt-1">
                        {curso.subtitulo}
                      </p>
                    </div>
                  </div>

                  {/* Informações de Carga Horária e Turma */}
                  <div className="flex flex-wrap gap-2.5 mb-5 text-xs text-gray-300">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-800/60">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{curso.duracao}</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-800/60">
                      <Users className="w-3.5 h-3.5 text-amber-400" />
                      <span>Turmas Reduzidas</span>
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-800/60">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>Certificado Incluso</span>
                    </span>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    {curso.descricao}
                  </p>

                  {/* Detalhes Presencial vs Online */}
                  <div className="space-y-3 p-4 rounded-2xl bg-purple-950/50 border border-amber-500/15 mb-6 text-xs text-gray-300">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-200">Experiência Presencial:</strong> {curso.presencialInfo}
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 pt-2 border-t border-purple-800/30">
                      <Video className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-purple-200">Experiência Online:</strong> {curso.onlineInfo}
                      </div>
                    </div>
                  </div>

                  {/* O que inclui */}
                  <div className="space-y-2 mb-8">
                    <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                      Conteúdo & Benefícios Inclusos:
                    </p>
                    {curso.itensInclusos.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-200">
                        <div className="p-0.5 rounded-full bg-amber-500/20 text-amber-400 mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botões de Inscrição */}
                <div className="pt-4 border-t border-purple-800/40 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/5511999999999?text=${encodeURIComponent(curso.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => mysticAudio.playClickSound()}
                    className={`flex-1 py-3.5 px-5 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                      curso.destaque
                        ? 'btn-gold shadow-amber-500/20'
                        : 'btn-secondary'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Garantir Vaga / Tirar Dúvidas</span>
                  </a>

                  <a
                    href="#contato"
                    onClick={() => mysticAudio.playClickSound()}
                    className="px-4 py-3.5 rounded-xl bg-purple-950/70 hover:bg-purple-900 border border-purple-700/50 text-gray-300 text-xs font-medium text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Formulário</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pilares da Escola Tsara Yasmim */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl glass-panel text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-amber-200 mb-1">
              Certificação Reconhecida
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Certificado emitido pela Tsara Yasmim com habilitação para atendimentos oraculares éticos e terapêuticos.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400 mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-amber-200 mb-1">
              Mentoria Direta com a Yasmim
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Você não fica sozinho(a): tire dúvidas diretamente com a professora durante as aulas e no grupo VIP.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-cinzel text-base font-bold text-amber-200 mb-1">
              Material Consagrado
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Baralho ritualizado no altar de Santa Sara Kali com instruções passo a passo para sua conexão oracular.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
