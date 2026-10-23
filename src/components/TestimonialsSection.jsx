import React from 'react';
import { DEPOIMENTOS } from '../data/baralhoCigano';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            Experiências Reais
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200 mt-4 mb-3">
            O que dizem os consulentes
          </h2>
          <div className="ornament-line">
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Depoimentos espontâneos de quem encontrou clareza, alívio e novos caminhos através das leituras e rituais de Tsara Yasmim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEPOIMENTOS.map((item, index) => (
            <div
              key={index}
              className="glass-panel rounded-3xl p-8 flex flex-col justify-between border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Ícone de Aspas decorativo */}
              <div className="absolute top-6 right-6 text-purple-600/30">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Estrelas */}
                <div className="flex gap-1 mb-5">
                  {[...Array(item.estrelas)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-gray-200 text-sm md:text-base leading-relaxed italic mb-6">
                  “{item.texto}”
                </p>
              </div>

              {/* Autor e Serviço */}
              <div className="pt-4 border-t border-purple-800/40 flex items-center justify-between">
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-amber-200">{item.nome}</h4>
                  <p className="text-xs text-purple-300">{item.cidade}</p>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-purple-900/60 text-amber-300 border border-purple-700/50">
                  {item.servico}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
