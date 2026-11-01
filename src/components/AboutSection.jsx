import React from 'react';
import { Heart, Sparkles, ShieldCheck, Sun, BookOpen, MapPin } from 'lucide-react';
import { mysticAudio } from '../utils/audio';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            Conexão, Tradição & Ancestralidade
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200 mt-4 mb-3">
            O Centro Espírita Cigano & Tsara Yasmim
          </h2>
          <div className="ornament-line">
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-gray-300 font-serif text-lg md:text-xl italic">
            “O Baralho Cigano e o Tarot não existem para aprisionar destinos, mas para acender a tocha da consciência e despertar sua força interior sob as bênçãos de Santa Sara Kali.”
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Foto Artística com Moldura Mística */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              {/* Brilho Dourado e Ametista atrás da foto */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/40 via-purple-600/40 to-emerald-500/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse-slow" />
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl shadow-purple-950/80 bg-[#120824]">
                <img
                  src="./images/tsara-yasmim.jpg"
                  alt="Tsara Yasmim - Centro Espírita Cigano, Taróloga e Mentora"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradiente escuro no rodapé da imagem com legenda */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090314] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-purple-950/85 backdrop-blur-md border border-amber-400/30">
                  <p className="font-cinzel text-amber-200 text-sm font-bold">Tsara Yasmim</p>
                  <p className="text-xs text-purple-300">Sacerdotisa, Taróloga & Mentora Espiritual</p>
                  <p className="text-[11px] text-amber-400/80 mt-0.5">Guardada sob o manto de Santa Sara Kali</p>
                </div>
              </div>
            </div>
          </div>

          {/* Biografia, Templo e Missão */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-4 text-gray-200 leading-relaxed text-sm md:text-base">
              <p>
                A <strong className="text-amber-300 font-semibold">Tsara Yasmim</strong> nasceu como um templo sagrado de acolhimento espiritual, caridade e conexão com os mentores da linha cigana e a Falange do Oriente. Sob a proteção constante de Santa Sara Kali, nosso espaço físico e digital atua como um refúgio de paz para quem busca respostas sinceras e cura da alma.
              </p>
              <p>
                Além das <strong className="text-amber-200">giras espirituais fraternas e passes magnéticos</strong>, dedico minha trajetória à arte oracular terapêutica do <strong className="text-amber-200">Tarot e Baralho Cigano</strong> — orientando pessoas no Brasil e no exterior através de leituras aprofundadas que desatam nós energéticos e abrem caminhos afetivos e materiais.
              </p>
              <p>
                Como educadora espiritual, ministro <strong className="text-amber-300">cursos presenciais na Tsara e formações completas online</strong>, capacitando centenas de alunos a decifrarem as lâminas sagradas com autonomia, fundamentação técnica e profunda ética mediúnica.
              </p>
            </div>

            {/* Pilares / Diferenciais da Tsara */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-panel border border-amber-500/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-amber-200">Ética & Sigilo Absoluto</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Espaço 100% seguro, acolhedor e livre de qualquer julgamento.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-amber-500/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-amber-200">Tarot Terapêutico</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Foco em soluções práticas e direcionamento para sua soberania.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-amber-500/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-amber-200">Cursos Presenciais & Online</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Metodologia prática, baralho consagrado e certificado oficial.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-amber-500/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-amber-200">Caridade & Passes</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Giras públicas gratuitas e assistência espiritual fraterna.</p>
                </div>
              </div>
            </div>

            {/* Chamada para conversa e cursos */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#cursos"
                onClick={() => mysticAudio.playClickSound()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-gold text-xs sm:text-sm font-bold tracking-wide shadow-lg"
              >
                <span>Ver Cursos Disponíveis</span>
                <Sparkles className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%20Yasmim!%20Li%20a%20hist%C3%B3ria%20da%20Tsara%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20giras%20e%20atendimentos."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => mysticAudio.playClickSound()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-secondary text-xs sm:text-sm font-bold tracking-wide"
              >
                <span>Conhecer o Centro Espírita</span>
                <MapPin className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
