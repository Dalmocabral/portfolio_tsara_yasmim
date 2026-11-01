import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/baralhoCigano';
import { ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { mysticAudio } from '../utils/audio';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    mysticAudio.playClickSound();
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            Esclarecimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200 mt-4 mb-3">
            Dúvidas Frequentes
          </h2>
          <div className="ornament-line">
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Tudo o que você precisa saber sobre o funcionamento dos cursos presenciais e online, as giras do Centro Espírita e as consultas de Tarot.
          </p>
        </div>

        {/* Lista Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="glass-panel rounded-2xl overflow-hidden border border-amber-500/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer bg-transparent border-0"
                >
                  <span className="font-cinzel text-base md:text-lg font-bold text-amber-100">
                    {item.pergunta}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-purple-900/60 text-amber-300 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-500 text-purple-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray-200 text-sm md:text-base leading-relaxed border-t border-purple-800/30">
                    <p>{item.resposta}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dúvida adicional CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-purple-950/40 border border-amber-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-cinzel text-amber-200 font-bold text-base">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-gray-300 mt-0.5">Fale diretamente com Tsara Yasmim pelo WhatsApp para esclarecer antes de agendar ou matricular-se.</p>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%20Yasmim!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20antes%20de%20agendar%20ou%20me%20matricular."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => mysticAudio.playClickSound()}
            className="btn-secondary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
