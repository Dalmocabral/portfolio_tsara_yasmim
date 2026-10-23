// Dados das cartas tradicionais do Baralho Cigano (Lenormand) para a experiência 3D interativa

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

export const SERVICOS_YASMIM = [
  {
    id: 'consulta-completa',
    titulo: 'Consulta Completa de Baralho Cigano',
    subtitulo: 'Amor, Finanças, Carreira e Missão Espiritual',
    duracao: '60 a 75 minutos',
    tipo: 'Online (Vídeo ou Áudio)',
    destaque: true,
    icone: 'Sparkles',
    descricao: 'Tiragem aprofundada com a Mandala Astrológica Cigana. Mapeamos os próximos meses da sua vida, revelamos bloqueios inconscientes e encontramos clareza em todas as áreas.',
    inclui: [
      'Análise afetiva completa e energias da outra pessoa',
      'Direcionamento financeiro e caminhos de trabalho',
      'Diagnóstico espiritual e proteção pessoal',
      'Conselho de Santa Sara Kali e Ervas de Poder',
      'Gravação ou síntese em áudio para você ouvir quando quiser'
    ],
    whatsappMsg: 'Olá Yasmim! Gostaria de agendar a Consulta Completa de Baralho Cigano. Como estão seus horários?'
  },
  {
    id: 'mesa-radionica',
    titulo: 'Mesa Radiônica & Harmonização de Chakras',
    subtitulo: 'Alinhamento Energético e Limpeza Áurica',
    duracao: 'Sessão à distância com devolutiva',
    tipo: 'Atendimento Energético',
    destaque: false,
    icone: 'Compass',
    descricao: 'Trabalho quântico e espiritual com o pêndulo sagrado para desbloquear frequências de estagnação, cortar laços energéticos nocivos e restaurar sua vitalidade.',
    inclui: [
      'Alinhamento dos 7 centros de força (Chakras)',
      'Limpeza de miasmas e energias densas',
      'Potencialização da frequência da prosperidade',
      'Áudio explicativo detalhado pós-ativação'
    ],
    whatsappMsg: 'Olá Yasmim! Sinto necessidade de fazer a Mesa Radiônica e Harmonização. Gostaria de saber os próximos passos!'
  },
  {
    id: 'banhos-magia-natural',
    titulo: 'Banhos de Ervas & Magia Natural',
    subtitulo: 'Abertura de Caminhos e Atração',
    duracao: 'Prescrição personalizada',
    tipo: 'Consultoria Espiritual & Ritualística',
    destaque: false,
    icone: 'Flame',
    descricao: 'Receituário ancestral de ervas sagradas preparadas no ciclo lunar ideal para seu propósito (atrativo amoroso, proteção, descarrego ou prosperidade material).',
    inclui: [
      'Seleção minuciosa das ervas certas para o seu campo',
      'Passo a passo ritualístico de preparo e consagração',
      'Oração e evocação mística exclusiva'
    ],
    whatsappMsg: 'Olá Yasmim! Gostaria de saber mais sobre os Banhos de Ervas e Rituais de Magia Natural.'
  },
  {
    id: 'perguntas-diretas',
    titulo: 'Tiragem Express (Perguntas Objetivas)',
    subtitulo: 'Respostas rápidas para decisões pontuais',
    duracao: 'Envio em até 24h',
    tipo: 'Áudio via WhatsApp',
    destaque: false,
    icone: 'HelpCircle',
    descricao: 'Ideal para momentos de dúvida súbita: 3 perguntas específicas respondidas com franqueza, precisão e aconselhamento imediato do oráculo.',
    inclui: [
      '3 perguntas objetivas à sua escolha',
      'Análise oracular minuciosa de cada questão',
      'Áudios completos com orientações claras'
    ],
    whatsappMsg: 'Olá Yasmim! Gostaria de fazer a Tiragem Express de 3 perguntas objetivas no Baralho Cigano.'
  }
];

export const DEPOIMENTOS = [
  {
    nome: 'Mariana Duarte',
    cidade: 'São Paulo - SP',
    texto: 'A Yasmim tem uma sensibilidade surreal. Na consulta de Baralho Cigano ela descreveu situações da minha vida que eu nunca havia contado a ninguém. Os conselhos me trouxeram paz e direcionamento.',
    servico: 'Consulta Completa',
    estrelas: 5
  },
  {
    nome: 'Carlos Eduardo',
    cidade: 'Rio de Janeiro - RJ',
    texto: 'Fiz o alinhamento com a Mesa Radiônica e o banho indicado por ela. A sensação de peso nas costas desapareceu em 2 dias e uma proposta de trabalho travada há meses finalmente andou!',
    servico: 'Mesa Radiônica & Banhos',
    estrelas: 5
  },
  {
    nome: 'Juliana Vasconcelos',
    cidade: 'Belo Horizonte - MG',
    texto: 'O carinho, respeito e ética com que ela trata o Baralho Cigano é admirável. Não é adivinhação rasa, é uma terapia para a alma. Já é minha terceira consulta e sempre recomendo.',
    servico: 'Consulta Completa',
    estrelas: 5
  }
];

export const FAQ_ITEMS = [
  {
    pergunta: 'Como funciona a consulta online de Baralho Cigano?',
    resposta: 'A consulta pode ser feita por chamada de vídeo (WhatsApp/Google Meet) ou por áudios gravados na hora com fotos das cartas tiradas para você. A energia não é limitada pela distância física: o oráculo se conecta ao seu campo vibracional onde quer que você esteja.'
  },
  {
    pergunta: 'O Baralho Cigano define o meu destino de forma imutável?',
    resposta: 'Não! O Baralho Cigano é um oráculo de direcionamento e livre-arbítrio. Ele revela as tendências energéticas e o que está por vir se você mantiver a trajetória atual, mostrando como você pode transformar obstáculos em vitórias.'
  },
  {
    pergunta: 'Qual a diferença entre Baralho Cigano e Tarot Tradicional?',
    resposta: 'O Tarot Tradicional foca profundamente em arquétipos e processos psicológicos universais. O Baralho Cigano (sistema Lenormand) é conhecido por ser direto, claro, objetivo e conectado à vida prática (cotidiano, sentimentos imediatos, decisões e caminhos materiais).'
  },
  {
    pergunta: 'Preciso preparar algo antes do nosso atendimento?',
    resposta: 'Apenas estar em um ambiente tranquilo, onde você possa se concentrar. Recomendo ter em mãos um copo com água fresca e, se desejar, acender uma vela branca ou incenso para se conectar com a sua espiritualidade.'
  }
];
