import React, { useState } from 'react';
import { MessageCircle, Sparkles, X } from 'lucide-react';
import { mysticAudio } from '../utils/audio';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Tooltip de Boas-vindas */}
      {showTooltip && (
        <div className="relative p-3.5 rounded-2xl bg-[#180a30]/95 backdrop-blur-md border border-amber-400/30 text-amber-100 shadow-xl max-w-[240px] animate-fade-in-up">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-purple-300 hover:text-amber-300"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-xs font-cinzel text-amber-300 mb-1">
            <Sparkles className="w-3 h-3" />
            <span>Precisa de orientação?</span>
          </div>
          <p className="text-[11px] text-gray-200 leading-tight">
            Clique para falar direto com Yasmim no WhatsApp e tirar suas dúvidas!
          </p>
        </div>
      )}

      {/* Botão Flutuante */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1%20Yasmim!%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultas%20de%20Baralho%20Cigano."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => mysticAudio.playClickSound()}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Falar no WhatsApp"
        aria-label="Falar no WhatsApp com Tsara Yasmim"
      >
        {/* Anel de Pulso Místico */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping opacity-75 pointer-events-none" />

        <MessageCircle className="w-7 h-7" />

        {/* Ponto de status Online */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-[#120824]" />
      </a>
    </div>
  );
}
