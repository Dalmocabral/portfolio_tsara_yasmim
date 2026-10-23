import React from 'react';
import { Sparkles, MessageCircle, Mail, MapPin, Heart } from 'lucide-react';
import { mysticAudio } from '../utils/audio';

export default function Footer() {
  return (
    <footer id="contato" className="relative pt-20 pb-12 border-t border-amber-500/20 bg-[#06020c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Coluna 1: Marca & Missão */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-purple-600 p-[1.5px]">
                <div className="w-full h-full rounded-full bg-[#110521] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </div>
              </div>
              <div>
                <span className="block font-cinzel text-xl font-bold tracking-widest text-amber-100">
                  TSARA YASMIM
                </span>
                <span className="block text-xs tracking-widest text-purple-300 uppercase">
                  Baralho Cigano & Magia Natural
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Atendimento oracular humanizado, rituais com ervas de poder e alinhamento vibracional para clarear seu destino com a bênção de Santa Sara Kali.
            </p>

            <div className="p-4 rounded-xl bg-purple-950/40 border border-amber-500/20 text-xs italic text-amber-200/90 font-serif max-w-md">
              “Optchá! Que o brilho da lua cheia e a força do fogo sagrado aqueçam seu coração e abram seus caminhos.”
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <a
                  href="#mesa"
                  onClick={() => mysticAudio.playClickSound()}
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Mesa 3D do Baralho
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={() => mysticAudio.playClickSound()}
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Quem é Tsara Yasmim
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={() => mysticAudio.playClickSound()}
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Serviços e Consultas
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  onClick={() => mysticAudio.playClickSound()}
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={() => mysticAudio.playClickSound()}
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato & Redes */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-widest mb-4">
              Contato Direto
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-300 hover:text-amber-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: (11) 99999-9999</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-300 hover:text-amber-300 transition-colors"
                >
                  <svg className="w-4 h-4 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>@tsarayasmim.cigana</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@tsarayasmim.com.br"
                  className="flex items-center gap-2.5 text-gray-300 hover:text-amber-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>contato@tsarayasmim.com.br</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Atendimentos Online (Brasil & Exterior)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="pt-8 border-t border-purple-900/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <p>© {new Date().getFullYear()} Tsara Yasmim. Todos os direitos reservados.</p>
          <p className="text-center md:text-right max-w-xl text-[11px] text-gray-300">
            *Aviso Ético: As leituras de Baralho Cigano são ferramentas de autoconhecimento, clareza e orientação espiritual. Não substituem tratamentos médicos, psicológicos ou jurídicos.
          </p>
        </div>
      </div>
    </footer>
  );
}
