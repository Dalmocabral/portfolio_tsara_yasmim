import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { mysticAudio } from '../utils/audio';

export default function Navbar({ isAudioPlaying, onToggleAudio }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    mysticAudio.playClickSound();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#080312]/85 backdrop-blur-xl border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Mística */}
        <a
          href="#topo"
          onClick={() => mysticAudio.playClickSound()}
          className="flex items-center gap-3 group text-decoration-none"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-purple-600 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#110521] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
            </div>
          </div>
          <div>
            <span className="block font-cinzel text-lg md:text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200">
              TSARA YASMIM
            </span>
            <span className="block text-[10px] tracking-widest text-purple-300 font-sans uppercase">
              Baralho Cigano & Magia
            </span>
          </div>
        </a>

        {/* Links Desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => handleNavClick('#mesa')}
            className="text-gray-300 hover:text-amber-300 transition-colors cursor-pointer bg-transparent border-0 font-medium"
          >
            A Mesa Oracular
          </button>
          <button
            onClick={() => handleNavClick('#sobre')}
            className="text-gray-300 hover:text-amber-300 transition-colors cursor-pointer bg-transparent border-0 font-medium"
          >
            Quem é Tsara
          </button>
          <button
            onClick={() => handleNavClick('#servicos')}
            className="text-gray-300 hover:text-amber-300 transition-colors cursor-pointer bg-transparent border-0 font-medium"
          >
            Serviços & Rituais
          </button>
          <button
            onClick={() => handleNavClick('#depoimentos')}
            className="text-gray-300 hover:text-amber-300 transition-colors cursor-pointer bg-transparent border-0 font-medium"
          >
            Depoimentos
          </button>
          <button
            onClick={() => handleNavClick('#faq')}
            className="text-gray-300 hover:text-amber-300 transition-colors cursor-pointer bg-transparent border-0 font-medium"
          >
            Dúvidas
          </button>
        </nav>

        {/* Ações: Controle de Som e WhatsApp */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Botão de Som Místico */}
          <button
            onClick={onToggleAudio}
            title={isAudioPlaying ? 'Silenciar música ambiente' : 'Ativar música ambiente mística'}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 hover:bg-purple-900/80 border border-amber-500/30 text-amber-300 text-xs transition-all duration-300 cursor-pointer"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
                <span className="text-[11px] font-sans">Som Ativo</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-gray-400" />
                <span className="text-[11px] font-sans text-gray-400">Som Mudo</span>
              </>
            )}
          </button>

          {/* CTA Agendamento */}
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%20Yasmim!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20e%20agendar%20uma%20consulta%20de%20Baralho%20Cigano."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => mysticAudio.playClickSound()}
            className="btn-gold px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 text-decoration-none shadow-md shadow-amber-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar Consulta</span>
          </a>
        </div>

        {/* Botão Mobile Menu Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleAudio}
            className="p-2 rounded-lg bg-purple-950 border border-amber-500/30 text-amber-300"
          >
            {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-purple-950 border border-amber-500/30 text-amber-300"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0c051a] border-b border-amber-500/20 px-6 py-6 animate-fade-in-up">
          <div className="flex flex-col gap-4 text-base font-medium">
            <button
              onClick={() => handleNavClick('#mesa')}
              className="text-left text-gray-200 hover:text-amber-300 py-1 border-0 bg-transparent"
            >
              A Mesa Oracular
            </button>
            <button
              onClick={() => handleNavClick('#sobre')}
              className="text-left text-gray-200 hover:text-amber-300 py-1 border-0 bg-transparent"
            >
              Quem é Tsara
            </button>
            <button
              onClick={() => handleNavClick('#servicos')}
              className="text-left text-gray-200 hover:text-amber-300 py-1 border-0 bg-transparent"
            >
              Serviços & Rituais
            </button>
            <button
              onClick={() => handleNavClick('#depoimentos')}
              className="text-left text-gray-200 hover:text-amber-300 py-1 border-0 bg-transparent"
            >
              Depoimentos
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="text-left text-gray-200 hover:text-amber-300 py-1 border-0 bg-transparent"
            >
              Dúvidas Frequentes
            </button>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%20Yasmim!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-2 py-3 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
