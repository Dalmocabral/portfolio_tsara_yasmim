import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ParallaxBackground from './components/ParallaxBackground';
import ParallaxBanner from './components/ParallaxBanner';
import MesaCigana3D from './components/MesaCigana3D';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { mysticAudio } from './utils/audio';
import { Sparkles, Shield, Users, ArrowDown, BookOpen, HeartHandshake } from 'lucide-react';

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
    <div className="min-h-screen text-slate-100 selection:bg-amber-400 selection:text-purple-950 flex flex-col justify-between relative">
      {/* Camadas Místicas de Fundo com Efeito Parallax */}
      <ParallaxBackground />

      {/* Barra de Navegação */}
      <Navbar isAudioPlaying={isAudioPlaying} onToggleAudio={toggleAudio} />

      <main id="topo" className="pt-24 flex-grow relative z-10">
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
                <span>Centro Espírita Cigano • Tarot & Formações</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-cinzel tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200 leading-[1.15] mb-5">
                Desvende seus Caminhos com a Sabedoria Cigana
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans max-w-2xl mx-auto">
                Templo de acolhimento espiritual, caridade e ensinamento sob o manto de Santa Sara Kali. Tire uma carta agora na mesa sagrada interativa e receba a revelação para o seu dia.
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

            {/* Badges de Confiança, Credenciais e Alcance */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
              <div className="p-4 rounded-2xl glass-panel text-center flex flex-col items-center justify-center">
                <Users className="w-6 h-6 text-amber-400 mb-1" />
                <span className="font-cinzel text-lg font-bold text-amber-200">+2.500</span>
                <span className="text-[11px] text-gray-300">Vidas Orientadas</span>
              </div>

              <div className="p-4 rounded-2xl glass-panel text-center flex flex-col items-center justify-center">
                <BookOpen className="w-6 h-6 text-amber-400 mb-1" />
                <span className="font-cinzel text-lg font-bold text-amber-200">+800 Alunos</span>
                <span className="text-[11px] text-gray-300">Presenciais & Online</span>
              </div>

              <div className="p-4 rounded-2xl glass-panel text-center flex flex-col items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-amber-400 mb-1" />
                <span className="font-cinzel text-lg font-bold text-amber-200">Giras & Passes</span>
                <span className="text-[11px] text-gray-300">Caridade Espiritual</span>
              </div>

              <div className="p-4 rounded-2xl glass-panel text-center flex flex-col items-center justify-center">
                <Shield className="w-6 h-6 text-amber-400 mb-1" />
                <span className="font-cinzel text-lg font-bold text-amber-200">100% Sigilo</span>
                <span className="text-[11px] text-gray-300">Ética e Respeito</span>
              </div>
            </div>

            {/* Seta Indicativa para Rolar com Efeito Bounce */}
            <div className="flex justify-center mt-12">
              <a
                href="#sobre"
                onClick={() => mysticAudio.playClickSound()}
                className="flex flex-col items-center gap-1.5 text-xs text-purple-300 hover:text-amber-300 transition-colors animate-bounce"
              >
                <span>Conheça o Centro Espírita & Cursos</span>
                <ArrowDown className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>
        </section>

        {/* Seção Sobre o Centro Espírita Tsara Yasmim */}
        <AboutSection />

        {/* Banner com Efeito Parallax Místico #1 */}
        <ParallaxBanner
          badge="Iniciação & Sabedoria"
          title="Aprenda a Linguagem dos Oráculos com Quem Vive a Tradição"
          quote="“Quando você abre uma carta do Baralho Cigano ou do Tarot, você não prevê um futuro cego: você ilumina a melhor trilha para sua alma caminhar.”"
          buttonText="Explorar Cursos Presenciais & Online"
          buttonHref="#cursos"
        />

        {/* Seção de Cursos Presenciais e Online */}
        <CoursesSection />

        {/* Seção de Consultas e Atendimentos Oraculares */}
        <ServicesSection />

        {/* Banner com Efeito Parallax Místico #2 */}
        <ParallaxBanner
          badge="Proteção de Santa Sara Kali"
          title="“Que o Fogo Sagrado Queime Toda Dor e a Chama Dourada Abra seus Caminhos”"
          quote="“Optchá! O Povo Cigano caminha ao lado daqueles que buscam a verdade, a caridade e a evolução espiritual.”"
          buttonText="Agendar Consulta ou Visita"
          buttonHref="#contato"
        />

        {/* Seção de Depoimentos de Consulentes e Alunos */}
        <TestimonialsSection />

        {/* Seção de Contatos e Localização do Centro Espírita */}
        <ContactSection />

        {/* Seção de FAQ (Perguntas Frequentes) */}
        <FAQSection />
      </main>

      {/* Rodapé Completo */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
