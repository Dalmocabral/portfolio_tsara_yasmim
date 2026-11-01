// Dados completos da Tsara Yasmim: Centro Espírita Cigano, Tarot & Cursos Presenciais e Online

export const CARTAS_BARALHO = [
  {
    id: 'sol',
    numero: 31,
    nome: 'O Sol',
    palavrasChave: ['Clareza', 'Vitalidade', 'Vitória', 'Prosperidade'],
    elemento: 'Fogo',
    imagem: './images/card-o-sol.jpg',
    corAura: '#f59e0b',
    mensagem: 'A luz do Sol dissipa todas as névoas e incertezas do seu caminho. Este é um momento de clareza mental absoluta, cura energética e reconhecimento dos seus talentos.',
    conselho: 'Confie na sua luz própria. Não hesite em dar o próximo passo, pois as forças cósmicas estão alinhadas a favor das suas realizações.',
    citacao: '“Assim como o sol não pede licença para brilhar, sua verdade não precisa de permissão para existir.”'
  },
  {
    id: 'coracao',
    numero: 24,
    nome: 'O Coração',
    palavrasChave: ['Amor Verdadeiro', 'Sentimento', 'Perdão', 'Harmonia'],
    elemento: 'Água',
    imagem: null,
    iconeTipo: 'heart',
    corAura: '#ec4899',
    mensagem: 'O amor é a chave de cura para todas as suas inquietações. Esta carta indica aberturas profundas nas relações, reconciliação e reencontro com o que realmente faz sua alma vibrar.',
    conselho: 'Ouça o que o seu coração sussurra antes de tomar decisões importantes. Deixe de lado a mágoa e acolha novas conexões com leveza.',
    citacao: '“Onde mora o amor sincero, nenhum medo encontra morada.”'
  },
  {
    id: 'chave',
    numero: 33,
    nome: 'A Chave',
    palavrasChave: ['Solução', 'Destino', 'Portas Abertas', 'Autonomia'],
    elemento: 'Éter / Ar',
    imagem: null,
    iconeTipo: 'key',
    corAura: '#10b981',
    mensagem: 'A resposta que você tanto buscava já está ao seu alcance. A Chave representa o destrancar de portas profissionais, financeiras e emocionais que pareciam impenetráveis.',
    conselho: 'A ação depende de você: tome a iniciativa. O universo colocou a ferramenta em suas mãos, basta ter coragem para abrir a porta.',
    citacao: '“Não existem portas fechadas para quem aprendeu a arte de girar a própria chave.”'
  },
  {
    id: 'trevo',
    numero: 2,
    nome: 'O Trevo',
    palavrasChave: ['Sorte Inesperada', 'Oportunidade', 'Superação', 'Otimismo'],
    elemento: 'Terra',
    imagem: null,
    iconeTipo: 'clover',
    corAura: '#10b981',
    mensagem: 'Pequenos obstáculos passageiros estão sendo dissolvidos agora. Uma surpresa agradável ou uma virada de sorte inesperada se aproxima no horizonte.',
    conselho: 'Mantenha o bom humor e a fé. O que parecia um tropeço revelará ser o atalho para uma grande bênção.',
    citacao: '“A sorte não é acaso: é o encontro da sua fé com a bênção dos ancestrais.”'
  },
  {
    id: 'estrela',
    numero: 16,
    nome: 'A Estrela',
    palavrasChave: ['Guia Espiritual', 'Esperança', 'Intuição', 'Proteção'],
    elemento: 'Ar & Luz',
    imagem: null,
    iconeTipo: 'star',
    corAura: '#8b5cf6',
    mensagem: 'Você está sob o manto protetor de Santa Sara Kali e de seus guias espirituais. Seus dons intuitivos estão amplificados e sua bússola interior aponta o caminho certo.',
    conselho: 'Preste atenção aos seus sonhos e pressentimentos. Reserve um momento de silêncio para agradecer e renovar seus votos de fé.',
    citacao: '“Mesmo na noite mais escura, a estrela do seu destino nunca deixa de brilhar.”'
  }
];

export const CURSOS_TSARA = [
  {
    id: 'formacao-baralho-cigano',
    titulo: 'Formação Completa em Baralho Cigano (Lenormand)',
    subtitulo: 'Do Iniciante ao Profissional • Presencial & Online',
    modalidade: 'Híbrido (Presencial ou Online)',
    categoria: 'ambos',
    duracao: '40 Horas / 8 Encontros',
    destaque: true,
    icone: 'Layers',
    descricao: 'Aprenda a decifrar a sabedoria ancestral das 36 cartas ciganas com método prático, intuitivo e terapêutico, sem depender de decoreba.',
    presencialInfo: 'Imersão presencial na Tsara com prática supervisionada e consagração ritualística do seu baralho no altar de Santa Sara.',
    onlineInfo: 'Acesso vitalício à plataforma com videoaulas em 4K, encontros ao vivo de tiragens e mentoria direta via WhatsApp.',
    itensInclusos: [
      'Baralho Cigano consagrado no altar da Tsara',
      'Apostila ilustrada completa (PDF + Impressa para presencial)',
      'Método da Mesa Real Cigana e Mandalas Afetivas',
      'Rituais de limpeza e consagração de lâminas',
      'Certificado de Terapeuta Oraculista com selo da Tsara',
      'Grupo VIP de alunos para trocas e tiragens supervisionadas'
    ],
    whatsappMsg: 'Olá Tsara Yasmim! Gostaria de me inscrever na Formação Completa em Baralho Cigano. Quais são as próximas turmas presenciais e online?'
  },
  {
    id: 'formacao-tarot-terapeutico',
    titulo: 'Tarot de Marselha & Rider Waite: O Caminho do Autoconhecimento',
    subtitulo: 'Arcanos Maiores e Menores na Visão Terapêutica',
    modalidade: 'Híbrido (Presencial ou Online)',
    categoria: 'ambos',
    duracao: '50 Horas / 10 Encontros',
    destaque: false,
    icone: 'Compass',
    descricao: 'Domine a linguagem arquetípica dos 78 arcanos para aconselhamento terapêutico profundo, tomada de decisões e desbloqueio pessoal.',
    presencialInfo: 'Aulas práticas no templo com dinâmicas de atendimento real e leitura intuitiva entre alunos.',
    onlineInfo: 'Aulas ao vivo gravadas para rever quando quiser, plantão de dúvidas semanal e biblioteca de tiragens gravadas.',
    itensInclusos: [
      'Estudo aprofundado dos 22 Arcanos Maiores e 56 Menores',
      'Mandala Astrológica e Cruz Celta aplicadas à terapia',
      'Ética oracular, acolhimento e postura do tarólogo',
      'Supervisão de casos e atendimentos reais',
      'Certificado de Formação em Tarot Terapêutico'
    ],
    whatsappMsg: 'Olá Tsara Yasmim! Tenho interesse no Curso de Tarot Terapêutico. Como funcionam as modalidades presencial e online?'
  },
  {
    id: 'magia-natural-cigana',
    titulo: 'Magia Cigana Natural, Ervas Sagradas & Cristais',
    subtitulo: 'Abertura de Caminhos, Prosperidade & Harmonização',
    modalidade: 'Presencial na Tsara & Workshop Online',
    categoria: 'presencial',
    duracao: '16 Horas / Final de Semana Imersivo',
    destaque: false,
    icone: 'Flame',
    descricao: 'Conhecimento prático das forças elementais: manipulação de ervas sagradas, óleos aromáticos, cristais e as fases lunares para rituais ciganos de cura e prosperidade.',
    presencialInfo: 'Vivência prática direta no espaço sagrado da Tsara, com defumação, fogueira ritualística e manipulação dos elementos.',
    onlineInfo: 'Transmissão interativa ao vivo com envio do manual ritualístico e lista de elementos naturais.',
    itensInclusos: [
      'Farmácia viva cigana: propriedades mágicas das ervas',
      'Receitas de banhos de atração, descarrego e proteção',
      'Montagem e consagração do seu Altar Cigano',
      'Rituais de Lua Cheia e Lua Nova para prosperidade',
      'Apostila com orações e receitas ancestrais'
    ],
    whatsappMsg: 'Olá Yasmim! Quero participar da Imersão em Magia Cigana Natural e Banhos de Ervas. Quando será o próximo encontro?'
  },
  {
    id: 'desenvolvimento-espiritual',
    titulo: 'Desenvolvimento Mediúnico & Espiritualidade Cigana',
    subtitulo: 'Conexão com Guias Ciganos e Falange do Oriente',
    modalidade: 'Presencial no Centro Espírita (com suporte online)',
    categoria: 'presencial',
    duracao: 'Ciclo Contínuo / Encontros Semanais',
    destaque: false,
    icone: 'Sparkles',
    descricao: 'Desenvolva sua sensibilidade mediúnica e conexão espiritual em um ambiente seguro, ético e fundamentado no amor, na caridade e no respeito aos mentores ciganos.',
    presencialInfo: 'Participação nas giras doutrinárias, passes magnéticos, cantos sagrados e sintonia com os guias de luz na Tsara.',
    onlineInfo: 'Aulas teóricas gravadas sobre a doutrina espiritual cigana, karma, reencarnação e alinhamento dos chakras.',
    itensInclusos: [
      'Estudo da linha espiritual cigana e Santa Sara Kali',
      'Exercícios de proteção energética e ancoramento',
      'Treinamento da intuição, clariaudiência e vidência',
      'Acompanhamento individual da mentora Yasmim',
      'Acolhimento fraterno e desenvolvimento na caridade'
    ],
    whatsappMsg: 'Olá Tsara Yasmim! Gostaria de informações sobre o Desenvolvimento Mediúnico e as Giras Espirituais no Centro.'
  }
];

export const SERVICOS_YASMIM = [
  {
    id: 'consulta-completa',
    titulo: 'Consulta de Baralho Cigano & Tarot',
    subtitulo: 'Amor, Finanças, Carreira e Espiritualidade',
    duracao: '60 a 75 minutos',
    tipo: 'Presencial na Tsara ou Online (Vídeo)',
    destaque: true,
    icone: 'Sparkles',
    descricao: 'Tiragem aprofundada com a Mandala Astrológica Cigana. Mapeamos os próximos meses da sua vida, revelamos bloqueios inconscientes e encontramos direcionamento claro para suas escolhas.',
    inclui: [
      'Atendimento presencial no templo com incensos e velas OU por videochamada privada',
      'Análise afetiva completa e energias das relações',
      'Direcionamento financeiro e caminhos de trabalho',
      'Diagnóstico espiritual e proteção pessoal',
      'Conselho de Santa Sara Kali e recomendação de banhos de ervas'
    ],
    whatsappMsg: 'Olá Yasmim! Gostaria de agendar uma Consulta de Baralho Cigano/Tarot. Pode me passar os horários disponíveis?'
  },
  {
    id: 'mesa-radionica',
    titulo: 'Mesa Radiônica Cigana & Alinhamento de Chakras',
    subtitulo: 'Desbloqueio Energético e Corte de Laços Nocivos',
    duracao: 'Sessão completa com áudio explicativo',
    tipo: 'Atendimento Energético (Presencial ou À Distância)',
    destaque: false,
    icone: 'Compass',
    descricao: 'Trabalho quântico e oracular com pêndulo sagrado na mesa radiônica cigana para dissolver energias densas, estagnação financeira e restaurar sua vitalidade.',
    inclui: [
      'Harmonização completa dos 7 Chakras principais',
      'Limpeza de miasmas, inveja e cortes energéticos',
      'Potencialização da vibração de prosperidade e saúde',
      'Relatório detalhado em áudio e fotos das frequências ativadas'
    ],
    whatsappMsg: 'Olá Yasmim! Gostaria de agendar a Mesa Radiônica Cigana para harmonização e limpeza energética.'
  },
  {
    id: 'passes-acolhimento',
    titulo: 'Gira Espiritual & Passe Magnético Cigano',
    subtitulo: 'Acolhimento Fraterno, Oração e Caridade Espiritual',
    duracao: 'Sessões quinzenais',
    tipo: 'Presencial no Centro Espírita Cigano',
    destaque: false,
    icone: 'Flame',
    descricao: 'Nossos trabalhos públicos de caridade espiritual: orações, cânticos sagrados ciganos, passes de descarrego e acolhimento para todos que buscam paz no coração.',
    inclui: [
      'Entrada aberta ao público (agendamento fraterno prévio)',
      'Passe magnético espiritual com a linha cigana',
      'Bênção das águas e flores de Santa Sara Kali',
      'Momento de oração coletiva e elevação vibracional'
    ],
    whatsappMsg: 'Olá Tsara Yasmim! Gostaria de saber os dias e horários das próximas Giras Espirituais e Passes no Centro.'
  },
  {
    id: 'perguntas-diretas',
    titulo: 'Tiragem Express (Perguntas Objetivas)',
    subtitulo: 'Respostas rápidas para momentos de decisão',
    duracao: 'Envio em até 24 horas',
    tipo: 'Áudio & Fotos via WhatsApp',
    destaque: false,
    icone: 'HelpCircle',
    descricao: 'Ideal para momentos de dúvida pontual: 3 perguntas específicas respondidas com franqueza, precisão e aconselhamento das cartas.',
    inclui: [
      '3 perguntas objetivas à sua escolha',
      'Fotos detalhadas de cada tiragem',
      'Áudios explicativos com orientações práticas'
    ],
    whatsappMsg: 'Olá Yasmim! Gostaria de fazer a Tiragem Express de 3 perguntas objetivas no Baralho Cigano.'
  }
];

export const DEPOIMENTOS = [
  {
    nome: 'Mariana Duarte',
    cidade: 'São Paulo - SP',
    texto: 'Fiz o curso presencial de Baralho Cigano na Tsara Yasmim e foi uma virada de chave na minha espiritualidade. O ambiente do centro espírita é pura paz e a Yasmim ensina com uma generosidade linda!',
    servico: 'Aluna do Curso Presencial',
    estrelas: 5
  },
  {
    nome: 'Carlos Eduardo',
    cidade: 'Rio de Janeiro - RJ',
    texto: 'Moro em outro estado e fiz a formação online de Tarot. Achei que por ser online seria distante, mas a mentoria no WhatsApp e as tiragens ao vivo me deram segurança para começar a atender profissionalmente.',
    servico: 'Aluno do Curso Online',
    estrelas: 5
  },
  {
    nome: 'Juliana Vasconcelos',
    cidade: 'Belo Horizonte - MG',
    texto: 'A consulta de Tarot e a passagem pela Tsara mudaram minha perspectiva. Não é adivinhação rasa, é uma terapia para a alma com muito respeito, ética e a força linda de Santa Sara Kali.',
    servico: 'Consulta Oracular & Gira',
    estrelas: 5
  }
];

export const FAQ_ITEMS = [
  {
    pergunta: 'Como funcionam os Cursos Presenciais na Tsara Yasmim?',
    resposta: 'Os cursos presenciais acontecem em nosso espaço sagrado em turmas reduzidas, proporcionando contato direto com o altar de Santa Sara Kali, manuseio dos elementos da natureza e consagração ritualística do seu próprio baralho. Todos os alunos recebem material impresso e suporte continuado.'
  },
  {
    pergunta: 'Os Cursos Online oferecem certificado e suporte com a Yasmim?',
    resposta: 'Sim! Nossos cursos online possuem certificado com reconhecimento profissional de terapeuta oraculista. Você tem acesso vitalício às aulas gravadas em alta resolução, encontros de tiragem ao vivo e canal direto de mentoria com a Yasmim pelo WhatsApp para tirar dúvidas.'
  },
  {
    pergunta: 'Qual a diferença entre o Centro Espírita Cigano e as Consultas Particulares?',
    resposta: 'O Centro Espírita Cigano (a Tsara) realiza trabalhos públicos de caridade espiritual, passes magnéticos, preces e giras de acolhimento fraterno abertas à comunidade. Já as Consultas de Tarot e Baralho Cigano são atendimentos individuais, com foco em diagnóstico oracular, autoconhecimento, sigilo absoluto e aconselhamento terapêutico profundo.'
  },
  {
    pergunta: 'Nunca tive contato com cartas ou espiritualidade, posso fazer os cursos?',
    resposta: 'Com certeza! Nosso método foi desenvolvido tanto para quem está dando os primeiros passos do absoluto zero quanto para quem já lê cartas e deseja aprofundar sua intuição, aprender a Mesa Real Cigana e dominar a ética oracular com segurança.'
  },
  {
    pergunta: 'Como é feito o agendamento de consultas presenciais ou online?',
    resposta: 'O agendamento é feito diretamente pelo nosso WhatsApp. Você escolhe a modalidade (presencial na Tsara ou por videochamada privada) e recebe as instruções para o momento da leitura.'
  }
];
