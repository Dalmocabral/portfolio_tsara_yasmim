import React from 'react';
import { Sparkles, HeartHandshake, BookOpen } from 'lucide-react';
import { mysticAudio } from '../utils/audio';

export default function ParallaxBanner({
  badge = 'Bênçãos de Santa Sara Kali',
  title = 'O Encontro Entre a Tradição Ancestral e o Autoconhecimento',
  quote = '“Aonde quer que seus pés caminhem, que a tenda cigana acolha sua alma e os oráculos iluminem suas escolhas.”',
  buttonText = 'Conhecer os Cursos & Formações',
  buttonHref = '#cursos'
}) {
  return (
    <section className="relative py-20 my-10 overflow-hidden border-y border-amber-500/20 bg-gradient-to-r from-[#120625] via-[#1c0a38] to-[#120625]">
      {/* Luz Parallax central */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-purple-900/10 to-transparent pointer-events-none" />

      {/* Linhas de geometria sagrada decorativas */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-5 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>{badge}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-200 mb-5 leading-snug">
          {title}
        </h3>

        <p className="text-base sm:text-xl text-gray-200 font-serif italic max-w-3xl mx-auto mb-8 leading-relaxed">
          {quote}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={buttonHref}
            onClick={() => mysticAudio.playClickSound()}
            className="btn-gold px-7 py-3 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-transform hover:scale-105"
          >
            <BookOpen className="w-4 h-4" />
            <span>{buttonText}</span>
          </a>

          <a
            href="#contato"
            onClick={() => mysticAudio.playClickSound()}
            className="btn-secondary px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
          >
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span>Visitar o Centro Espírita</span>
          </a>
        </div>
      </div>
    </section>
  );
}
