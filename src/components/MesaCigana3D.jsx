import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import confetti from 'canvas-confetti';
import { mysticAudio } from '../utils/audio';
import { CARTAS_BARALHO } from '../data/baralhoCigano';
import { Sparkles, RotateCcw, Eye, ArrowRight } from 'lucide-react';

export default function MesaCigana3D({ onSelectCard, selectedCard, onReset }) {
  const mountRef = useRef(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [revealedCard, setRevealedCard] = useState(null);
  const sceneRef = useRef({});

  // Gera textura procedural para cartas que não possuem imagem estática
  const createCardFrontTexture = (carta) => {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 900;
    const ctx = canvas.getContext('2d');

    // Fundo pergaminho místico escuro
    const grad = ctx.createLinearGradient(0, 0, 600, 900);
    grad.addColorStop(0, '#1c102a');
    grad.addColorStop(0.5, '#2e1845');
    grad.addColorStop(1, '#11091b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 900);

    // Moldura Dourada Ornamentada
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 14;
    ctx.strokeRect(20, 20, 560, 860);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.lineWidth = 4;
    ctx.strokeRect(36, 36, 528, 828);

    // Cantos decorativos
    const drawCorner = (x, y) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = '#f5d77f';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 28, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };
    drawCorner(50, 50);
    drawCorner(550, 50);
    drawCorner(50, 850);
    drawCorner(550, 850);

    // Número no topo
    ctx.fillStyle = '#f5d77f';
    ctx.font = 'bold 56px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${carta.numero}`, 300, 110);

    // Símbolo Central Específico
    ctx.save();
    ctx.translate(300, 440);

    // Halo místico
    const haloGrad = ctx.createRadialGradient(0, 0, 20, 0, 0, 220);
    haloGrad.addColorStop(0, `${carta.corAura}66`);
    haloGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = haloGrad;
    ctx.beginPath();
    ctx.arc(0, 0, 220, 0, Math.PI * 2);
    ctx.fill();

    // Desenho do Ícone Central
    ctx.fillStyle = '#f5d77f';
    ctx.strokeStyle = '#f5d77f';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (carta.iconeTipo === 'heart') {
      // Coração místico
      ctx.beginPath();
      ctx.moveTo(0, 50);
      ctx.bezierCurveTo(-140, -70, -140, -180, 0, -110);
      ctx.bezierCurveTo(140, -180, 140, -70, 0, 50);
      ctx.fillStyle = '#e11d48';
      ctx.fill();
      ctx.stroke();
    } else if (carta.iconeTipo === 'key') {
      // Chave dourada
      ctx.beginPath();
      ctx.arc(0, -90, 60, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillRect(-15, -30, 30, 190);
      ctx.fillRect(0, 100, 60, 25);
      ctx.fillRect(0, 60, 45, 25);
    } else if (carta.iconeTipo === 'clover') {
      // Trevo de 4 folhas
      const leaf = (angle) => {
        ctx.save();
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.arc(0, -75, 45, 0, Math.PI * 2);
        ctx.fillStyle = '#10b981';
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      };
      leaf(0);
      leaf(Math.PI / 2);
      leaf(Math.PI);
      leaf(-Math.PI / 2);
      // Haste
      ctx.beginPath();
      ctx.arc(0, 120, 60, Math.PI, Math.PI * 1.5);
      ctx.stroke();
    } else if (carta.iconeTipo === 'star') {
      // Estrela de 8 pontas
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        const r1 = 130;
        const r2 = 50;
        ctx.lineTo(Math.cos(angle) * r1, Math.sin(angle) * r1);
        const midAngle = angle + Math.PI / 8;
        ctx.lineTo(Math.cos(midAngle) * r2, Math.sin(midAngle) * r2);
      }
      ctx.closePath();
      ctx.fillStyle = '#a855f7';
      ctx.fill();
      ctx.stroke();
    }
    ctx.restore();

    // Faixa com Nome da Carta no rodapé
    ctx.fillStyle = 'rgba(10, 5, 20, 0.85)';
    ctx.fillRect(70, 720, 460, 90);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.strokeRect(70, 720, 460, 90);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 38px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.fillText(carta.nome.toUpperCase(), 300, 780);

    return new THREE.CanvasTexture(canvas);
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Cena
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0515, 0.05);

    // 2. Câmera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    const isMobile = width < 768;
    camera.position.set(0, isMobile ? 5.2 : 4.4, isMobile ? 5.5 : 4.8);
    camera.lookAt(0, 0.2, 0);

    // 3. Renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 4. Luzes Místicas
    const ambientLight = new THREE.AmbientLight(0x432874, 1.6);
    scene.add(ambientLight);

    const candleSpot = new THREE.SpotLight(0xffdf9e, 4.5);
    candleSpot.position.set(0, 8, 2);
    candleSpot.angle = Math.PI / 3.5;
    candleSpot.penumbra = 0.8;
    candleSpot.castShadow = true;
    candleSpot.shadow.mapSize.width = 1024;
    candleSpot.shadow.mapSize.height = 1024;
    scene.add(candleSpot);

    const purpleGlow = new THREE.PointLight(0xa855f7, 3, 10);
    purpleGlow.position.set(-3, 2, -1);
    scene.add(purpleGlow);

    const goldGlow = new THREE.PointLight(0xf59e0b, 3, 10);
    goldGlow.position.set(3, 2, 1);
    scene.add(goldGlow);

    // 5. Mesa de Veludo Mística (Tampo)
    const tableGeo = new THREE.CylinderGeometry(4.8, 5.0, 0.4, 64);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0x140a24,
      roughness: 0.85,
      metalness: 0.15,
    });
    const tableMesh = new THREE.Mesh(tableGeo, tableMat);
    tableMesh.position.y = -0.25;
    tableMesh.receiveShadow = true;
    scene.add(tableMesh);

    // Mandala Dourada na toalha
    const mandalaCanvas = document.createElement('canvas');
    mandalaCanvas.width = 1024;
    mandalaCanvas.height = 1024;
    const mctx = mandalaCanvas.getContext('2d');
    mctx.translate(512, 512);
    mctx.strokeStyle = 'rgba(212, 175, 55, 0.28)';
    mctx.lineWidth = 4;
    mctx.beginPath();
    mctx.arc(0, 0, 460, 0, Math.PI * 2);
    mctx.stroke();
    mctx.beginPath();
    mctx.arc(0, 0, 380, 0, Math.PI * 2);
    mctx.stroke();
    mctx.beginPath();
    mctx.arc(0, 0, 240, 0, Math.PI * 2);
    mctx.stroke();

    for (let i = 0; i < 12; i++) {
      mctx.save();
      mctx.rotate((i * Math.PI) / 6);
      mctx.beginPath();
      mctx.moveTo(0, 240);
      mctx.lineTo(0, 460);
      mctx.stroke();
      mctx.restore();
    }
    const mandalaTexture = new THREE.CanvasTexture(mandalaCanvas);
    const mandalaGeo = new THREE.PlaneGeometry(8, 8);
    const mandalaMat = new THREE.MeshBasicMaterial({
      map: mandalaTexture,
      transparent: true,
      opacity: 0.65,
    });
    const mandalaMesh = new THREE.Mesh(mandalaGeo, mandalaMat);
    mandalaMesh.rotation.x = -Math.PI / 2;
    mandalaMesh.position.y = -0.04;
    scene.add(mandalaMesh);

    // 6. Campo de Partículas / Poeira de Estrelas
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = Math.random() * 5;
      positions[i + 2] = (Math.random() - 0.5) * 10;
      scales[i / 3] = Math.random() * 0.08 + 0.02;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xf5d77f,
      size: 0.08,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Texturas das Cartas
    const textureLoader = new THREE.TextureLoader();
    const backTexture = textureLoader.load('./images/card-back.jpg');
    backTexture.colorSpace = THREE.SRGBColorSpace;

    const solTexture = textureLoader.load('./images/card-o-sol.jpg');
    solTexture.colorSpace = THREE.SRGBColorSpace;

    // Criar as 5 cartas do leque
    const cardMeshes = [];
    const cardWidth = isMobile ? 0.95 : 1.15;
    const cardHeight = cardWidth * 1.55;
    const cardGeometry = new THREE.BoxGeometry(cardWidth, cardHeight, 0.015);

    CARTAS_BARALHO.forEach((carta, index) => {
      let frontTexture = carta.imagem ? solTexture : createCardFrontTexture(carta);

      // Materiais dos lados: [direita, esquerda, topo, base, FRENTE, VERSO]
      const sideMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.8, roughness: 0.3 });
      const frontMat = new THREE.MeshStandardMaterial({
        map: frontTexture,
        roughness: 0.4,
        metalness: 0.1,
      });
      const backMat = new THREE.MeshStandardMaterial({
        map: backTexture,
        roughness: 0.35,
        metalness: 0.3,
      });

      const materials = [sideMat, sideMat, sideMat, sideMat, frontMat, backMat];
      const card = new THREE.Mesh(cardGeometry, materials);
      card.castShadow = true;
      card.receiveShadow = true;

      // Cálculo da posição no leque
      const totalCards = CARTAS_BARALHO.length;
      const spreadAngle = 0.55; // Abertura em radianos
      const angle = (index - (totalCards - 1) / 2) * (spreadAngle / (totalCards - 1));
      const radius = 3.2;

      // Posição base (voltada com o verso para o consulente, virada em 180° no eixo Y para esconder a frente)
      const basePos = new THREE.Vector3(
        Math.sin(angle) * (radius * (isMobile ? 0.85 : 1.1)),
        0.05 + index * 0.005,
        -Math.cos(angle) * 0.4 + (isMobile ? 1.4 : 1.0)
      );

      // Rotação inicial: deitada levemente na mesa
      const baseRot = new THREE.Euler(-Math.PI / 2.8, 0, -angle * 0.7);

      card.position.copy(basePos);
      card.rotation.copy(baseRot);

      // Metadados para controle de animação
      card.userData = {
        index,
        carta,
        basePos,
        baseRot,
        isFlipped: false,
        isTarget: false,
      };

      scene.add(card);
      cardMeshes.push(card);
    });

    sceneRef.current = {
      scene,
      camera,
      renderer,
      cardMeshes,
      particles,
      isMobile,
    };

    // 8. Raycasting e Interatividade
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    let targetCameraX = 0;
    let targetCameraY = camera.position.y;

    const handlePointerMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      targetCameraX = mouse.x * 0.35;
      targetCameraY = (isMobile ? 5.2 : 4.4) - mouse.y * 0.2;
    };

    const handlePointerClick = () => {
      if (isFlipping || revealedCard) return;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cardMeshes);

      if (intersects.length > 0) {
        const clickedCard = intersects[0].object;
        revealCard(clickedCard);
      }
    };

    const canvasElem = renderer.domElement;
    canvasElem.addEventListener('mousemove', handlePointerMove);
    canvasElem.addEventListener('click', handlePointerClick);

    // 9. Loop de Animação
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Suave ondulação das partículas
      const posAttr = particles.geometry.attributes.position;
      for (let i = 1; i < particleCount * 3; i += 3) {
        posAttr.array[i] += Math.sin(time + i) * 0.003;
        if (posAttr.array[i] > 6) posAttr.array[i] = 0.1;
      }
      posAttr.needsUpdate = true;

      // Parallax suave da câmera
      camera.position.x += (targetCameraX - camera.position.x) * 0.05;
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;
      camera.lookAt(0, 0.2, 0);

      // Verificação de hover quando nenhuma carta está aberta
      if (!revealedCard && !isFlipping) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(cardMeshes);

        let activeIdx = null;
        if (intersects.length > 0) {
          const hovered = intersects[0].object;
          activeIdx = hovered.userData.index;
          document.body.style.cursor = 'pointer';
        } else {
          document.body.style.cursor = 'default';
        }
        setHoveredCardIndex(activeIdx);

        // Animação de elevação no hover
        cardMeshes.forEach((card, idx) => {
          const isHovered = idx === activeIdx;
          const targetY = isHovered ? card.userData.basePos.y + 0.35 : card.userData.basePos.y;
          const targetZ = isHovered ? card.userData.basePos.z + 0.25 : card.userData.basePos.z;

          card.position.y += (targetY - card.position.y) * 0.15;
          card.position.z += (targetZ - card.position.z) * 0.15;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Responsividade
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvasElem.removeEventListener('mousemove', handlePointerMove);
      canvasElem.removeEventListener('click', handlePointerClick);
      document.body.style.cursor = 'default';
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Animação de Revelação da Carta em 3D
  const revealCard = (cardMesh) => {
    setIsFlipping(true);
    mysticAudio.playCardFlipSound();

    const carta = cardMesh.userData.carta;
    const targetPos = new THREE.Vector3(0, 2.3, 2.2);

    // Efeito de explosão de confetes e faíscas douradas
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f5d77f', '#d4af37', '#e11d48', '#8b5cf6'],
    });

    // Animação suave com interpolação
    const startTime = performance.now();
    const duration = 1200; // ms

    const initialPos = cardMesh.position.clone();
    const initialRot = cardMesh.rotation.clone();

    const flipStep = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing cúbico suave
      const ease = 1 - Math.pow(1 - progress, 3);

      // Interpolar posição
      cardMesh.position.lerpVectors(initialPos, targetPos, ease);

      // Virar a carta: rotação em torno de Y e alinhamento com a câmera
      cardMesh.rotation.x = THREE.MathUtils.lerp(initialRot.x, -0.05, ease);
      cardMesh.rotation.y = THREE.MathUtils.lerp(initialRot.y, Math.PI, ease); // Vira a face para a frente!
      cardMesh.rotation.z = THREE.MathUtils.lerp(initialRot.z, 0, ease);

      // Escalar ligeiramente para destacar
      const scale = THREE.MathUtils.lerp(1, 1.25, ease);
      cardMesh.scale.set(scale, scale, scale);

      if (progress < 1) {
        requestAnimationFrame(flipStep);
      } else {
        setIsFlipping(false);
        setRevealedCard(carta);
        if (onSelectCard) onSelectCard(carta);
      }
    };

    requestAnimationFrame(flipStep);
  };

  // Resetar a mesa e voltar as cartas para a posição original
  const handleResetTable = () => {
    const { cardMeshes } = sceneRef.current;
    if (!cardMeshes) return;

    mysticAudio.playClickSound();
    setRevealedCard(null);

    cardMeshes.forEach((card) => {
      card.scale.set(1, 1, 1);
      card.position.copy(card.userData.basePos);
      card.rotation.copy(card.userData.baseRot);
    });

    if (onReset) onReset();
  };

  return (
    <div className="relative w-full h-[580px] md:h-[680px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#080410] via-[#120722] to-[#080410] border border-amber-500/20 shadow-2xl shadow-purple-950/40">
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Dica Flutuante no Topo */}
      {!revealedCard && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none text-center px-4 py-2 rounded-full bg-purple-950/60 backdrop-blur-md border border-amber-400/30 text-amber-200 text-xs md:text-sm font-cinzel tracking-wider flex items-center gap-2 animate-pulse">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Toque ou clique em uma carta para revelar a mensagem do seu dia</span>
        </div>
      )}

      {/* Botão de Reembaralhar */}
      {revealedCard && (
        <button
          onClick={handleResetTable}
          className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2.5 rounded-full bg-purple-900/80 hover:bg-purple-800 border border-amber-400/40 text-amber-100 font-cinzel text-xs md:text-sm shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <RotateCcw className="w-4 h-4 text-amber-400" />
          <span>Embaralhar Novamente</span>
        </button>
      )}

      {/* Modal / Card Informativo da Carta Revelada */}
      {revealedCard && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-xl z-20 animate-fade-in-up">
          <div className="relative p-6 rounded-2xl bg-[#140b25]/95 backdrop-blur-xl border-2 border-amber-500/40 shadow-2xl shadow-purple-950">
            {/* Tag e Número */}
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
                Carta {revealedCard.numero} • {revealedCard.elemento}
              </span>
              <span className="text-xs text-purple-300 italic font-serif">
                Oráculo Lenormand
              </span>
            </div>

            {/* Título da Carta */}
            <h3 className="text-2xl md:text-3xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 mb-2">
              {revealedCard.nome}
            </h3>

            {/* Palavras-chave */}
            <div className="flex flex-wrap gap-2 mb-3">
              {revealedCard.palavrasChave.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-0.5 rounded-md bg-purple-900/60 text-purple-200 border border-purple-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Mensagem Espiritual */}
            <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-3">
              {revealedCard.mensagem}
            </p>

            {/* Conselho */}
            <div className="p-3 rounded-xl bg-amber-500/10 border-l-4 border-amber-400 text-xs md:text-sm text-amber-100 italic mb-4">
              <strong>Conselho do Baralho:</strong> {revealedCard.conselho}
            </div>

            {/* Botão de Agendamento Direto no WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-2 border-t border-purple-800/40">
              <a
                href={`https://wa.me/5511999999999?text=${encodeURIComponent(
                  `Olá Yasmim! Tirei a carta "${revealedCard.nome}" na sua mesa de Baralho Cigano e senti de aprofundar em uma consulta completa. Como funciona para agendarmos?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-purple-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Aprofundar em Consulta Completa</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleResetTable}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-700/50 text-gray-300 text-xs transition-colors"
              >
                Ver outra carta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
