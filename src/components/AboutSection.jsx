import React from 'react';
import { Heart, Sparkles, ShieldCheck, Sun, Moon, Feather } from 'lucide-react';
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
            Conexão & Ancestralidade
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200 mt-4 mb-3">
            Quem é Tsara Yasmim
          </h2>
          <div className="ornament-line">
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-gray-300 font-serif text-lg md:text-xl italic">
            “O Baralho Cigano não existe para prever um destino estático, mas sim para acender a tocha que ilumina suas melhores escolhas.”
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
                  alt="Tsara Yasmim - Taróloga e Terapeuta Holística"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradiente escuro no rodapé da imagem com legenda */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090314] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-purple-950/80 backdrop-blur-md border border-amber-400/30">
                  <p className="font-cinzel text-amber-200 text-sm font-bold">Tsara Yasmim</p>
                  <p className="text-xs text-purple-300">Guardada sob o manto de Santa Sara Kali</p>
                </div>
              </div>
            </div>
          </div>

          {/* Biografia e Missão */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-4 text-gray-200 leading-relaxed text-sm md:text-base">
              <p>
                Com raízes firmadas na espiritualidade cigana e consagrada na energia do povo do Oriente e de Santa Sara Kali, atuo como canal de luz, clareza e transformação na vida daqueles que buscam respostas sinceras.
              </p>
              <p>
                Minha missão não é o misticismo do medo ou de falsas promessas, mas o <strong className="text-amber-300 font-semibold">atendimento oracular terapêutico</strong>. Cada carta do Baralho Cigano funciona como um mapa energético do seu momento, revelando caminhos abertos, desfazendo dúvidas no amor e nas finanças, e apontando os melhores rituais naturais para desbloquear seu fluxo de prosperidade.
              </p>
              <p>
                Ao longo de mais de 8 anos de caminhada com os oráculos e terapias holísticas, já conduzi centenas de pessoas no Brasil e no exterior ao reencontro com sua própria força e soberania de alma.
              </p>
            </div>

            {/* Pilares / Diferenciais */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-panel border border-amber-500/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-amber-200">Ética e Sigilo</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Espaço 100% seguro, acolhedor e livre de julgamentos.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-amber-500/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-amber-200">Oráculo Terapêutico</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Foco em soluções práticas para sua evolução pessoal.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-amber-500/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Feather className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-amber-200">Magia Natural</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Ervas sagradas, cristais e rituais alinhados às luas.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-amber-500/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-amber-200">Acolhimento Real</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Atendimento personalizado com amor e escuta atenta.</p>
                </div>
              </div>
            </div>

            {/* Chamada para conversa */}
            <div className="pt-2">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%20Yasmim!%20Li%20sobre%20sua%20hist%C3%B3ria%20e%20gostaria%20de%20conversar%20sobre%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => mysticAudio.playClickSound()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-gold text-sm font-bold tracking-wide shadow-lg"
              >
                <span>Conhecer Atendimentos Disponíveis</span>
                <Sparkles className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
