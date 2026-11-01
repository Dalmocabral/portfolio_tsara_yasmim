import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import heroCardsImg from './assets/hero-cards.png'
import numerologiaCardsImg from './assets/numerologia-cards.png'
import aboutTsaraImg from './assets/about-tsara.jpg'
import orientadoraImg from './assets/orientadora.jpg'
import cert1Img from './assets/certificado-1.jpg'
import cert2Img from './assets/certificado-2.jpg'
import cert3Img from './assets/certificado-3.jpg'
import cert4Img from './assets/certificado-4.jpg'
import './App.css'

const CERTIFICADOS = [
  {
    id: 'cigano-basico-44h',
    img: cert4Img,
    badge: 'Baralho Cigano',
    title: 'Petit Lenormand (Básico)',
    hours: '44 Horas',
    institution: 'Ministrado por Ana Cléa Candido da Silva',
    date: 'Rio de Janeiro',
  },
  {
    id: 'numerologia-avancado-30h',
    img: cert2Img,
    badge: 'Numerologia Sagrada',
    title: 'Numerologia do Básico ao Avançado',
    hours: '30 Horas',
    institution: 'Biblioteca Nacional RDA (Chave 73459BR) & ABRATH',
    date: '03/04/2022',
  },
  {
    id: 'numerologia-workshop-4h',
    img: cert3Img,
    badge: 'Numerologia',
    title: 'Workshop de Numerologia',
    hours: '4 Horas',
    institution: 'Biblioteca Nacional RDA (Chave 52783BR)',
    date: '15/03/2020',
  },
  {
    id: 'numerologia-registro-oficial',
    img: cert1Img,
    badge: 'Certificação Registrada',
    title: 'Formação em Numerologia com Registro',
    hours: '30 Horas',
    institution: 'Registro RDA Biblioteca Nacional & ABRATH',
    date: 'Chave 73459BR',
  },
]

const GOOGLE_REVIEWS = [
  {
    id: 1,
    name: 'Mariana Silveira',
    avatar: 'M',
    avatarColor: '#b89a64',
    time: 'há 3 semanas',
    rating: 5,
    text: 'A consulta com a Aretha foi um verdadeiro divisor de águas na minha vida. O acolhimento, a clareza e a precisão do Baralho Cigano me trouxeram muita paz e discernimento para tomar decisões difíceis. Saí da consulta renovada! Gratidão imensa pelo carinho e respeito.',
  },
  {
    id: 2,
    name: 'Carlos Eduardo M.',
    avatar: 'C',
    avatarColor: '#5c7080',
    time: 'há 1 mês',
    rating: 5,
    text: 'Ambiente de pura luz, seriedade e respeito à cultura cigana. A Aretha conduz a leitura com uma sensibilidade impressionante. Ela não só esclareceu todas as minhas dúvidas com clareza como me deu direcionamentos valiosos. Recomendo de olhos fechados!',
  },
  {
    id: 3,
    name: 'Patrícia Rezende',
    avatar: 'P',
    avatarColor: '#8a624a',
    time: 'há 2 meses',
    rating: 5,
    text: 'Fiz o atendimento online por videochamada e a energia foi tão forte, próxima e acolhedora quanto se estivesse no presencial. A leitura do Petit Lenormand foi certeira e muito esclarecedora. Dá para sentir a verdade e o amor naquilo que ela faz.',
  },
  {
    id: 4,
    name: 'Juliana Freitas',
    avatar: 'J',
    avatarColor: '#7b5c80',
    time: 'há 3 meses',
    rating: 5,
    text: 'Experiência maravilhosa na Tsara Manuche Yasmim! A Aretha é uma orientadora iluminada, com uma escuta atenta, ética e uma sabedoria única. As orientações que recebi abriram caminhos e clarearam minha mente. Nota mil!',
  },
]

function App() {
  const [modalData, setModalData] = useState(null)
  const [activeHeroVisual, setActiveHeroVisual] = useState('cigano') // 'cigano' | 'numerologia'
  const [isHovered, setIsHovered] = useState(false)

  // Alterna suavemente entre as cartas e a numerologia a cada 5 segundos
  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      setActiveHeroVisual((prev) => (prev === 'cigano' ? 'numerologia' : 'cigano'))
    }, 5000)

    return () => clearInterval(timer)
  }, [isHovered, activeHeroVisual])

  const handleToggleHeroVisual = () => {
    setActiveHeroVisual((prev) => (prev === 'cigano' ? 'numerologia' : 'cigano'))
  }

  // Fecha o modal ao pressionar a tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModalData(null)
      }
    }
    if (modalData) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalData])

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        {/* ========================================================
            SEÇÃO 1: HOME (HERO)
        ======================================================== */}
        <section id="home" className="section hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <span className="section-eyebrow">Baralho Cigano & Numerologia Cabalística</span>
              <h1 className="hero-title">
                Online ou<br />Presencial
              </h1>

              <div className="hero-description">
                <p>
                  Encontre clareza para suas dúvidas, compreenda melhor os desafios da vida e descubra novos horizontes através de uma consulta com o <strong>Baralho Cigano Petit Lenormand</strong> ou da elaboração do seu <strong>Mapa Numerológico Cabalístico</strong>.
                </p>
                <p>
                  Criamos o seu <strong>Mapa Numerológico Cabalístico</strong> completo e individualizado, decodificando as vibrações sagradas da sua data de nascimento e nome para revelar sua missão de alma, potenciais, desafios e ciclos evolutivos.
                </p>
                <p>
                  Escolha entre o <strong>atendimento online</strong>, por videochamada, ou <strong>presencial</strong>. Em ambas as modalidades, você terá um atendimento acolhedor, dedicado e com total sigilo.
                </p>
              </div>

              <div className="hero-actions">
                <a href="#contatos" className="btn-primary">
                  Agendar Consulta
                </a>
                <a href="#sobre" className="btn-secondary">
                  Saiba Mais
                </a>
              </div>
            </div>

            {/* Transição Suave entre Baralho Cigano e Numerologia Cabalística */}
            <div className="hero-visual">
              <div
                className="cards-crossfade-container"
                onClick={handleToggleHeroVisual}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                title="Clique para alternar entre Baralho Cigano e Mapa Numerológico Cabalístico"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleToggleHeroVisual()
                  }
                }}
              >
                {/* Baralho Cigano Petit Lenormand */}
                <div
                  className={`crossfade-item ${activeHeroVisual === 'cigano' ? 'active' : ''}`}
                >
                  <img
                    src={heroCardsImg}
                    alt="Cartas do Baralho Cigano Petit Lenormand"
                    className="hero-cards-img"
                    width="450"
                    height="574"
                  />
                </div>

                {/* Numerologia Cabalística */}
                <div
                  className={`crossfade-item ${activeHeroVisual === 'numerologia' ? 'active' : ''}`}
                >
                  <img
                    src={numerologiaCardsImg}
                    alt="Mapa Numerológico Cabalístico - Números Sagrados"
                    className="hero-cards-img"
                    width="450"
                    height="574"
                  />
                </div>
              </div>

              {/* Indicadores de transição com pontos (sem texto) */}
              <div className="crossfade-dots-bar" role="tablist" aria-label="Indicadores de transição">
                <button
                  type="button"
                  role="tab"
                  aria-label="Baralho Cigano"
                  aria-selected={activeHeroVisual === 'cigano'}
                  className={`crossfade-dot ${activeHeroVisual === 'cigano' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveHeroVisual('cigano')
                  }}
                  title="Exibir Baralho Cigano"
                />
                <button
                  type="button"
                  role="tab"
                  aria-label="Mapa Numerológico Cabalístico"
                  aria-selected={activeHeroVisual === 'numerologia'}
                  className={`crossfade-dot ${activeHeroVisual === 'numerologia' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveHeroVisual('numerologia')
                  }}
                  title="Exibir Mapa Numerológico Cabalístico"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEÇÃO 2: SOBRE
        ======================================================== */}
        <section id="sobre" className="section sobre-section">
          <div className="section-container">
            <div className="sobre-grid">
              {/* Coluna de Texto */}
              <div className="sobre-text-col">
                <span className="section-eyebrow">Tradição & Ancestralidade</span>
                <h2 className="section-title">Sobre a Tsara Manuche Yasmim</h2>

                <div className="sobre-paragraphs">
                  <p>
                    A Tsara Manuche Yasmim é um espaço dedicado à espiritualidade, ao autoconhecimento e à preservação da cultura e da ancestralidade do povo cigano. Por meio da sabedoria do Baralho Cigano (Petit Lenormand) e da Numerologia, oferecemos consultas e orientações que auxiliam na reflexão, na compreensão de questões pessoais e na descoberta de novas perspectivas para a vida.
                  </p>

                  <p>
                    Além das consultas, oferecemos cursos de Baralho Cigano (Petit Lenormand), presenciais e online, destinados tanto a quem deseja dar os primeiros passos nessa prática quanto àqueles que buscam aprofundar seus conhecimentos e desenvolver sua conexão com as cartas.
                  </p>

                  <p>
                    Nosso trabalho é guiado pelo respeito, pelo amor e pela valorização dos ensinamentos transmitidos entre gerações. Acreditamos que preservar a cultura cigana é também reconhecer sua história, sua identidade, sua espiritualidade e sua contribuição para a sociedade.
                  </p>

                  <div className="about-mocao-card">
                    <div className="mocao-header">
                      <span className="mocao-seal-badge">🏛️ Reconhecimento Oficial</span>
                      <h3 className="mocao-title">Moção de Louvor da Câmara Municipal do Rio de Janeiro</h3>
                    </div>
                    <p>
                      Esse compromisso com a valorização e a divulgação da cultura cigana foi reconhecido pela Câmara Municipal do Rio de Janeiro, por meio de uma Moção de Louvor, Congratulações e Aplausos concedida à Tsara Espiritualista Estrela do Oriente Manouche Yasmin, com destaque para o trabalho sacerdotal de Aretha Equiavone Costa. Essa homenagem representa um reconhecimento público da dedicação à preservação das tradições, da ancestralidade e dos valores culturais e espirituais do povo cigano.
                    </p>
                  </div>

                  <p>
                    Mais do que oferecer consultas e cursos, a Tsara Manuche Yasmim busca manter viva uma tradição, compartilhar conhecimentos e acolher cada pessoa em sua jornada de autoconhecimento, sempre com respeito à história e à riqueza da cultura cigana.
                  </p>
                </div>
              </div>

              {/* Coluna da Imagem Oficial ao Lado do Texto */}
              <div className="sobre-image-col">
                <div
                  className="about-certificate-wrapper"
                  onClick={() =>
                    setModalData({
                      src: aboutTsaraImg,
                      title: 'Moção de Louvor — Câmara Municipal do Rio de Janeiro',
                      caption: 'Moção de Louvor, Congratulações e Aplausos concedida à Tsara Espiritualista Estrela do Oriente Manouche Yasmin e à Sacerdote Aretha Equiavone Costa.',
                    })
                  }
                  title="Clique para ampliar a Moção de Louvor"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setModalData({
                        src: aboutTsaraImg,
                        title: 'Moção de Louvor — Câmara Municipal do Rio de Janeiro',
                        caption: 'Moção de Louvor, Congratulações e Aplausos concedida à Tsara Espiritualista Estrela do Oriente Manouche Yasmin e à Sacerdote Aretha Equiavone Costa.',
                      })
                    }
                  }}
                >
                  <div className="certificate-frame">
                    <img
                      src={aboutTsaraImg}
                      alt="Moção de Louvor, Congratulações e Aplausos da Câmara Municipal do Rio de Janeiro concedida à Tsara Espiritualista Estrela do Oriente Manouche Yasmin"
                      className="about-certificate-img"
                      loading="lazy"
                    />
                    <div className="certificate-overlay-hint">
                      <span className="hint-pill">🔍 Clique para ampliar</span>
                    </div>
                  </div>
                  <div className="certificate-caption-box">
                    <span className="certificate-caption-tag">Documento Oficial</span>
                    <p className="certificate-caption-text">
                      Moção de Louvor, Congratulações e Aplausos — Câmara Municipal do Rio de Janeiro
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divisor Elegante */}
            <div className="section-divider">
              <span className="divider-line"></span>
              <span className="divider-icon">✦</span>
              <span className="divider-line"></span>
            </div>

            {/* ========================================================
                SUBSEÇÃO: A ORIENTADORA (ARETHA EQUIAVONE COSTA)
            ======================================================== */}
            <div className="orientadora-grid">
              {/* Foto da Orientadora */}
              <div className="orientadora-image-col">
                <div
                  className="orientadora-photo-card"
                  onClick={() =>
                    setModalData({
                      src: orientadoraImg,
                      title: 'Aretha Equiavone Costa',
                      caption: 'Sacerdote da Tsara Manuche Yasmim, Oraculista & Numeróloga',
                    })
                  }
                  title="Clique para ampliar a foto"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setModalData({
                        src: orientadoraImg,
                        title: 'Aretha Equiavone Costa',
                        caption: 'Sacerdote da Tsara Manuche Yasmim, Oraculista & Numeróloga',
                      })
                    }
                  }}
                >
                  <div className="orientadora-photo-frame">
                    <img
                      src={orientadoraImg}
                      alt="Aretha Equiavone Costa - Sacerdote da Tsara Manuche Yasmim"
                      className="orientadora-img"
                      loading="lazy"
                    />
                    <div className="certificate-overlay-hint">
                      <span className="hint-pill">🔍 Clique para ampliar</span>
                    </div>
                  </div>
                  <div className="orientadora-badge-footer">
                    <span className="orientadora-name">Aretha Equiavone Costa</span>
                    <span className="orientadora-sub">Sacerdote & Orientadora Espiritual</span>
                  </div>
                </div>
              </div>

              {/* Texto de Apresentação da Orientadora */}
              <div className="orientadora-text-col">
                <span className="section-eyebrow">Sacerdócio & Sensibilidade</span>
                <h3 className="section-title">Aretha Equiavone Costa</h3>
                <span className="orientadora-role-tag">Sacerdote da Tsara Manuche Yasmim • Oraculista & Numeróloga</span>

                <div className="sobre-paragraphs">
                  <p>
                    Com mais de 10 anos de trajetória dedicada à espiritualidade, ao autoconhecimento e à valorização da cultura cigana, <strong>Aretha Equiavone Costa</strong> atua como sacerdotisa e orientadora espiritual à frente da <strong>Tsara Manuche Yasmim</strong>. Sua caminhada é marcada pelo compromisso com a sabedoria ancestral, o acolhimento e a transmissão de conhecimentos que atravessam gerações.
                  </p>

                  <p>
                    Especialista na leitura do <strong>Baralho Cigano (Petit Lenormand)</strong> e em <strong>Numerologia</strong>, Aretha realiza consultas individuais com sensibilidade, ética e respeito à história de cada pessoa. Seu trabalho busca oferecer orientação, clareza e novas perspectivas diante dos desafios da vida, incentivando o autoconhecimento e a reflexão sobre os caminhos e as possibilidades de cada consulente.
                  </p>

                  <p>
                    Além dos atendimentos, dedica-se à formação de novos alunos por meio de <strong>cursos de Baralho Cigano (Petit Lenormand)</strong>, presenciais e online, compartilhando seus conhecimentos e contribuindo para a continuidade dessa prática oracular com responsabilidade, dedicação e respeito às tradições.
                  </p>

                  <p>
                    Sua atuação também se destaca pela divulgação e preservação da cultura, da espiritualidade e da ancestralidade do povo cigano. Esse compromisso recebeu reconhecimento da <strong>Câmara Municipal do Rio de Janeiro</strong>, que concedeu à Tsara Espiritualista Estrela do Oriente Manouche Yasmin uma <strong>Moção de Louvor, Congratulações e Aplausos</strong>, destacando o trabalho sacerdotal de Aretha e sua dedicação à preservação dos valores culturais e espirituais ciganos.
                  </p>

                  <p>
                    Mais do que uma profissão, sua trajetória representa uma jornada de dedicação, aprendizado e compromisso com a espiritualidade, mantendo viva a riqueza das tradições ciganas e compartilhando seus ensinamentos com respeito, amor e responsabilidade.
                  </p>

                  <div className="orientadora-pills">
                    <span className="feature-pill">✦ Atendimento Humanizado</span>
                    <span className="feature-pill">✦ Ética & Sigilo</span>
                    <span className="feature-pill">✦ Tradição Ancestral</span>
                    <span className="feature-pill">✦ Formação Registrada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divisor Elegante */}
            <div className="section-divider">
              <span className="divider-line"></span>
              <span className="divider-icon">✦</span>
              <span className="divider-line"></span>
            </div>

            {/* ========================================================
                SUBSEÇÃO: CURSOS E CERTIFICAÇÕES
            ======================================================== */}
            <div className="cursos-certificados-block">
              <div className="section-header" style={{ marginBottom: '36px' }}>
                <span className="section-eyebrow">Qualificação & Tradição</span>
                <h3 className="section-title">Cursos & Certificações</h3>
                <p className="section-subtitle">
                  O trabalho de Aretha Equiavone Costa é fundamentado em estudos contínuos, formações registradas e aprofundamento constante na sabedoria oracular e na Numerologia Sagrada.
                </p>
              </div>

              <div className="certificados-grid">
                {CERTIFICADOS.map((cert) => (
                  <div
                    key={cert.id}
                    className="certificado-card"
                    onClick={() =>
                      setModalData({
                        src: cert.img,
                        title: cert.title,
                        caption: `${cert.hours ? cert.hours + ' • ' : ''}${cert.institution} (${cert.date})`,
                      })
                    }
                    role="button"
                    tabIndex={0}
                    title={`Clique para ampliar o certificado: ${cert.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setModalData({
                          src: cert.img,
                          title: cert.title,
                          caption: `${cert.hours ? cert.hours + ' • ' : ''}${cert.institution} (${cert.date})`,
                        })
                      }
                    }}
                  >
                    <div className="certificado-thumb-frame">
                      <img
                        src={cert.img}
                        alt={cert.title}
                        className="certificado-thumb-img"
                        loading="lazy"
                      />
                      <div className="certificate-overlay-hint">
                        <span className="hint-pill">🔍 Ampliar</span>
                      </div>
                    </div>

                    <div className="certificado-card-body">
                      <span className="cert-tag">{cert.badge}</span>
                      <h4 className="cert-title">{cert.title}</h4>
                      {cert.hours && <span className="cert-hours">⏱ Carga horária: {cert.hours}</span>}
                      <p className="cert-institution">{cert.institution}</p>
                      <span className="cert-link">Ver certificado ➔</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEÇÃO 3: DEPOIMENTOS (AVALIAÇÕES GOOGLE MEU NEGÓCIO)
        ======================================================== */}
        <section id="depoimentos" className="section depoimentos-section">
          <div className="section-container">
            <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 28px' }}>
              <span className="section-eyebrow">Experiências Reais & Confiança</span>
              <h2 className="section-title">O Que Dizem Nossos Consulentes</h2>
              <p className="section-subtitle">
                Acolhimento, respeito e clareza. Confira os depoimentos de quem já passou por consultas e vivenciou a energia da Tsara Manuche Yasmim.
              </p>
            </div>

            {/* Selo Resumo do Google */}
            <div className="google-badge-container">
              <div className="google-rating-badge">
                <div className="google-icon-wrap">
                  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>
                <div className="google-badge-info">
                  <div className="stars-row">
                    <span className="google-score">5.0</span>
                    <span className="stars-icons">★★★★★</span>
                  </div>
                  <span className="google-badge-sub">Classificação excelente no Google Meu Negócio</span>
                </div>
              </div>
            </div>

            {/* Grid de Avaliações */}
            <div className="reviews-grid">
              {GOOGLE_REVIEWS.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-card-header">
                    <div
                      className="review-avatar"
                      style={{ backgroundColor: review.avatarColor }}
                    >
                      {review.avatar}
                    </div>

                    <div className="review-author-meta">
                      <span className="review-author-name">{review.name}</span>
                      <div className="review-rating-line">
                        <span className="review-stars">★★★★★</span>
                        <span className="review-time">• {review.time}</span>
                      </div>
                    </div>

                    <div className="review-google-icon" title="Avaliação verificada no Google">
                      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                    </div>
                  </div>

                  <p className="review-text">"{review.text}"</p>

                  <div className="review-footer">
                    <span className="verified-badge">✓ Avaliação verificada no Google</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Ação para agendar consulta */}
            <div className="reviews-cta">
              <a
                href="#contatos"
                className="btn-primary"
                title="Agende sua consulta e venha viver essa experiência"
              >
                Agende Sua Consulta
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEÇÃO 4: CONTATOS (EXCLUSIVO VIA WHATSAPP)
        ======================================================== */}
        <section id="contatos" className="section contatos-section">
          <div className="section-container">
            <div className="whatsapp-contact-wrapper">
              <div className="whatsapp-contact-card">
                <div className="whatsapp-badge-pill">
                  <span className="wa-dot"></span>
                  <span>Canal Exclusivo de Atendimento</span>
                </div>

                <div className="whatsapp-icon-large">
                  <svg viewBox="0 0 32 32" width="60" height="60" fill="currentColor">
                    <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.195-2.115c2.355 1.285 5.022 1.962 7.805 1.962 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.333c-2.493 0-4.933-0.669-7.067-1.933l-0.507-0.3-5.253 1.357 1.403-5.12-0.333-0.533c-1.393-2.22-2.133-4.787-2.133-7.471 0-7.351 5.983-13.333 13.333-13.333s13.333 5.983 13.333 13.333c0 7.351-5.983 13.333-13.333 13.333zM23.293 19.347c-0.4-0.2-2.367-1.167-2.733-1.3s-0.633-0.2-0.9 0.2c-0.267 0.4-1.033 1.3-1.267 1.567s-0.467 0.3-0.867 0.1c-0.4-0.2-1.689-0.623-3.217-1.985-1.189-1.060-1.992-2.369-2.225-2.769s-0.025-0.616 0.175-0.815c0.18-0.179 0.4-0.467 0.6-0.7 0.2-0.233 0.267-0.4 0.4-0.667 0.133-0.267 0.067-0.5-0.033-0.7s-0.9-2.167-1.233-2.967c-0.325-0.779-0.655-0.673-0.9-0.685-0.233-0.012-0.5-0.015-0.767-0.015s-0.7 0.1-1.067 0.5c-0.367 0.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c0.2 0.267 2.822 4.309 6.837 6.042 0.955 0.412 1.701 0.659 2.283 0.844 0.959 0.305 1.832 0.262 2.522 0.159 0.769-0.115 2.367-0.967 2.7-1.9 0.333-0.933 0.333-1.733 0.233-1.9s-0.367-0.267-0.767-0.467z" />
                  </svg>
                </div>

                <h2 className="whatsapp-card-title">Agendamentos & Informações</h2>
                <p className="whatsapp-card-subtitle">
                  Nosso atendimento é realizado <strong>exclusivamente via WhatsApp</strong>. Entre em contato diretamente com a <strong>Aretha</strong> para agendar sua consulta (online ou presencial), tirar dúvidas sobre valores e saber mais sobre os cursos.
                </p>

                <div className="whatsapp-phone-display">
                  <span className="phone-label">WhatsApp Oficial:</span>
                  <a
                    href="https://wa.me/5521966397864"
                    target="_blank"
                    rel="noreferrer"
                    className="phone-number-link"
                  >
                    (21) 96639-7864
                  </a>
                </div>

                <div className="whatsapp-action-area">
                  <a
                    href="https://wa.me/5521966397864?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20e%20cursos%20na%20Tsara%20Manuche%20Yasmim."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp-primary"
                  >
                    <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor">
                      <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.195-2.115c2.355 1.285 5.022 1.962 7.805 1.962 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.333c-2.493 0-4.933-0.669-7.067-1.933l-0.507-0.3-5.253 1.357 1.403-5.12-0.333-0.533c-1.393-2.22-2.133-4.787-2.133-7.471 0-7.351 5.983-13.333 13.333-13.333s13.333 5.983 13.333 13.333c0 7.351-5.983 13.333-13.333 13.333zM23.293 19.347c-0.4-0.2-2.367-1.167-2.733-1.3s-0.633-0.2-0.9 0.2c-0.267 0.4-1.033 1.3-1.267 1.567s-0.467 0.3-0.867 0.1c-0.4-0.2-1.689-0.623-3.217-1.985-1.189-1.060-1.992-2.369-2.225-2.769s-0.025-0.616 0.175-0.815c0.18-0.179 0.4-0.467 0.6-0.7 0.2-0.233 0.267-0.4 0.4-0.667 0.133-0.267 0.067-0.5-0.033-0.7s-0.9-2.167-1.233-2.967c-0.325-0.779-0.655-0.673-0.9-0.685-0.233-0.012-0.5-0.015-0.767-0.015s-0.7 0.1-1.067 0.5c-0.367 0.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c0.2 0.267 2.822 4.309 6.837 6.042 0.955 0.412 1.701 0.659 2.283 0.844 0.959 0.305 1.832 0.262 2.522 0.159 0.769-0.115 2.367-0.967 2.7-1.9 0.333-0.933 0.333-1.733 0.233-1.9s-0.367-0.267-0.767-0.467z" />
                    </svg>
                    <span>Iniciar Conversa no WhatsApp</span>
                  </a>
                </div>

                <div className="whatsapp-features-list">
                  <div className="wa-feature-item">
                    <span className="wa-check">✓</span>
                    <span>Atendimento Online por Chamada de Vídeo (Brasil e Exterior)</span>
                  </div>
                  <div className="wa-feature-item">
                    <span className="wa-check">✓</span>
                    <span>Atendimento Presencial no Rio de Janeiro</span>
                  </div>
                  <div className="wa-feature-item">
                    <span className="wa-check">✓</span>
                    <span>Inscrições e Informações sobre Cursos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================
          RODAPÉ (FOOTER)
      ======================================================== */}
      <footer className="footer">
        <div className="footer-container">
          <span className="footer-logo">Tsara Manuche Yasmim</span>
          <p className="footer-phone">
            WhatsApp:{' '}
            <a
              href="https://wa.me/5521966397864"
              target="_blank"
              rel="noreferrer"
              className="footer-phone-link"
            >
              (21) 96639-7864
            </a>
          </p>
          <p className="footer-copy">
            © 2026 Tsara Manuche Yasmim. Baralho Cigano & Numerologia. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.me/5521966397864?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20e%20cursos%20na%20Tsara%20Manuche%20Yasmim."
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-btn"
        title="Falar no WhatsApp (21) 96639-7864"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.195-2.115c2.355 1.285 5.022 1.962 7.805 1.962 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.333c-2.493 0-4.933-0.669-7.067-1.933l-0.507-0.3-5.253 1.357 1.403-5.12-0.333-0.533c-1.393-2.22-2.133-4.787-2.133-7.471 0-7.351 5.983-13.333 13.333-13.333s13.333 5.983 13.333 13.333c0 7.351-5.983 13.333-13.333 13.333zM23.293 19.347c-0.4-0.2-2.367-1.167-2.733-1.3s-0.633-0.2-0.9 0.2c-0.267 0.4-1.033 1.3-1.267 1.567s-0.467 0.3-0.867 0.1c-0.4-0.2-1.689-0.623-3.217-1.985-1.189-1.060-1.992-2.369-2.225-2.769s-0.025-0.616 0.175-0.815c0.18-0.179 0.4-0.467 0.6-0.7 0.2-0.233 0.267-0.4 0.4-0.667 0.133-0.267 0.067-0.5-0.033-0.7s-0.9-2.167-1.233-2.967c-0.325-0.779-0.655-0.673-0.9-0.685-0.233-0.012-0.5-0.015-0.767-0.015s-0.7 0.1-1.067 0.5c-0.367 0.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c0.2 0.267 2.822 4.309 6.837 6.042 0.955 0.412 1.701 0.659 2.283 0.844 0.959 0.305 1.832 0.262 2.522 0.159 0.769-0.115 2.367-0.967 2.7-1.9 0.333-0.933 0.333-1.733 0.233-1.9s-0.367-0.267-0.767-0.467z" />
        </svg>
        <span className="floating-tooltip">WhatsApp: (21) 96639-7864</span>
      </a>

      {/* Modal Lightbox para visualização de Certificados e Fotos em alta resolução */}
      {modalData && (
        <div
          className="certificate-modal-backdrop"
          onClick={() => setModalData(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setModalData(null)}
              aria-label="Fechar visualização"
            >
              ✕
            </button>
            <img
              src={modalData.src}
              alt={modalData.title || 'Documento em alta resolução'}
              className="modal-certificate-img"
            />
            {modalData.title && (
              <h4 className="modal-title">{modalData.title}</h4>
            )}
            {modalData.caption && (
              <p className="modal-caption-text">{modalData.caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
