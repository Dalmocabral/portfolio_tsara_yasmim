import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MesaCigana3D from './components/MesaCigana3D';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { mysticAudio } from './utils/audio';
import { Sparkles, Compass, Shield, Users, ArrowDown, Star } from 'lucide-react';

export default function App() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleAudio = () => {
    const muted = mysticAudio.toggleMute();
    setIsAudioPlaying(!muted);
  };

  const handleCardSelected = (carta) => {
    setSelectedCard(carta);
  };

  const handleResetCard = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen text-slate-100 selection:bg-amber-400 selection:text-purple-950 flex flex-col justify-between">
      {/* Barra de Navegação */}
      <Navbar isAudioPlaying={isAudioPlaying} onToggleAudio={toggleAudio} />

      <main id="topo" className="pt-24 flex-grow">
        {/* Seção Hero: Abertura Mística + Mesa 3D do Baralho Cigano */}
        <section id="mesa" className="relative pt-8 pb-20 overflow-hidden">
          {/* Luzes cósmicas de fundo */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-700/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Título Principal e Introdução */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                <span>Oráculo Cigano Interativo</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-cinzel tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200 leading-[1.15] mb-5">
                Desvende seus Caminhos com a Sabedoria Cigana
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans max-w-2xl mx-auto">
                Conecte-se com o seu campo energético agora. Toque em uma das cartas abaixo na mesa sagrada e receba a revelação espiritual do seu dia.
              </p>
            </div>

            {/* A Experiência Interativa 3D: Tridimensional Gypsy Deck Table */}
            <div className="w-full max-w-5xl mx-auto mb-12">
              <MesaCigana3D
                onSelectCard={handleCardSelected}
                selectedCard={selectedCard}
                onReset={handleResetCard}
              />
            </div>

            {/* Badges de Confiança e Credenciais */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
              <div className="p-4 rounded-2xl glass-panel text-center flex flex-col items-center justify-center">
                <Users className="w-6 h-6 text-amber-400 mb-1" />
                <span className="font-cinzel text-lg font-bold text-amber-200">+2.500</span>
                <span className="text-[11px] text-gray-300">Vidas Orientadas</span>
              </div>

              <div className="p-4 rounded-2xl glass-panel text-center flex flex-col items-center justify-center">
                <Star className="w-6 h-6 text-amber-400 mb-1" />
                <span className="font-cinzel text-lg font-bold text-amber-200">5.0 Estrelas</span>
                <span className="text-[11px] text-gray-300">Avaliações Reais</span>
              </div>

              <div className="p-4 rounded-2xl glass-panel text-center flex flex-col items-center justify-center">
                <Shield className="w-6 h-6 text-amber-400 mb-1" />
                <span className="font-cinzel text-lg font-bold text-amber-200">100% Sigilo</span>
                <span className="text-[11px] text-gray-300">Espaço Seguro e Ético</span>
              </div>

              <div className="p-4 rounded-2xl glass-panel text-center flex flex-col items-center justify-center">
                <Compass className="w-6 h-6 text-amber-400 mb-1" />
                <span className="font-cinzel text-lg font-bold text-amber-200">Online Global</span>
                <span className="text-[11px] text-gray-300">Atendimento Mundial</span>
              </div>
            </div>

            {/* Seta Indicativa para Rolar */}
            <div className="flex justify-center mt-12">
              <a
                href="#sobre"
                onClick={() => mysticAudio.playClickSound()}
                className="flex flex-col items-center gap-1.5 text-xs text-purple-300 hover:text-amber-300 transition-colors animate-bounce"
              >
                <span>Conheça Tsara Yasmim</span>
                <ArrowDown className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>
        </section>

        {/* Seção Sobre Tsara Yasmim */}
        <AboutSection />

        {/* Seção de Serviços e Rituais */}
        <ServicesSection />

        {/* Seção de Depoimentos */}
        <TestimonialsSection />

        {/* Seção de FAQ (Perguntas Frequentes) */}
        <FAQSection />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
