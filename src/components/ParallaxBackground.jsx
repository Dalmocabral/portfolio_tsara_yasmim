import React, { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Camada 1: Nebulosas Cósmicas com Parallax Lento */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[140px] opacity-25 bg-gradient-to-tr from-purple-900 via-indigo-900 to-amber-600/30"
        style={{
          top: '-10%',
          left: '20%',
          transform: `translate3d(${mousePos.x * 0.5}px, ${scrollY * 0.08 + mousePos.y * 0.5}px, 0)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 bg-gradient-to-br from-amber-600 via-purple-950 to-emerald-900/20"
        style={{
          top: '40%',
          right: '-5%',
          transform: `translate3d(${-mousePos.x * 0.6}px, ${-scrollY * 0.12 - mousePos.y * 0.6}px, 0)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[150px] opacity-15 bg-purple-700/30"
        style={{
          top: '75%',
          left: '-10%',
          transform: `translate3d(${mousePos.x * 0.4}px, ${scrollY * 0.06}px, 0)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Camada 2: Símbolos Sagrados Flutuantes em Parallax Intermediário */}
      {/* Roda Cigana (16 raios) flutuando no topo direito */}
      <div
        className="absolute top-32 right-12 md:right-28 opacity-15"
        style={{
          transform: `translate3d(${mousePos.x * 1.2}px, ${scrollY * 0.22}px, 0) rotate(${scrollY * 0.04}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <svg width="180" height="180" viewBox="0 0 100 100" className="text-amber-400">
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {[...Array(16)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 40 * Math.cos((i * Math.PI) / 8)}
              y2={50 + 40 * Math.sin((i * Math.PI) / 8)}
              stroke="currentColor"
              strokeWidth="0.9"
            />
          ))}
        </svg>
      </div>

      {/* Lua Crescente e Estrela Cigana no lado esquerdo */}
      <div
        className="absolute top-[48%] left-8 md:left-20 opacity-20"
        style={{
          transform: `translate3d(${-mousePos.x * 1.5}px, ${scrollY * 0.18}px, 0) rotate(${-scrollY * 0.03}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber-300">
          <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
          <path d="M19 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor" stroke="none" />
        </svg>
      </div>

      {/* Mandala Oracular no rodapé direito */}
      <div
        className="absolute top-[78%] right-10 md:right-24 opacity-15"
        style={{
          transform: `translate3d(${mousePos.x * 1.1}px, ${scrollY * 0.25}px, 0) rotate(${scrollY * 0.05}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <svg width="220" height="220" viewBox="0 0 100 100" className="text-amber-300">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <polygon points="50,6 90,75 10,75" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <polygon points="50,94 90,25 10,25" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Camada 3: Orbes e Fagulhas Douradas com Parallax Rápido */}
      <div
        className="absolute top-[25%] left-[15%] w-3 h-3 rounded-full bg-amber-400 blur-[1px] opacity-60 shadow-[0_0_12px_#f59e0b]"
        style={{
          transform: `translate3d(${mousePos.x * 2}px, ${scrollY * 0.35}px, 0)`
        }}
      />
      <div
        className="absolute top-[38%] right-[18%] w-2.5 h-2.5 rounded-full bg-amber-300 blur-[1px] opacity-70 shadow-[0_0_10px_#fde68a]"
        style={{
          transform: `translate3d(${-mousePos.x * 2.2}px, ${scrollY * 0.42}px, 0)`
        }}
      />
      <div
        className="absolute top-[65%] left-[22%] w-2 h-2 rounded-full bg-purple-400 blur-[1px] opacity-60 shadow-[0_0_8px_#c084fc]"
        style={{
          transform: `translate3d(${mousePos.x * 1.8}px, ${scrollY * 0.38}px, 0)`
        }}
      />
      <div
        className="absolute top-[85%] right-[30%] w-3 h-3 rounded-full bg-amber-400 blur-[1px] opacity-50 shadow-[0_0_10px_#f59e0b]"
        style={{
          transform: `translate3d(${-mousePos.x * 2.5}px, ${scrollY * 0.45}px, 0)`
        }}
      />
    </div>
  );
}
