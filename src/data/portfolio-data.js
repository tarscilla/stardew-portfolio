export const PROJECTS = [
  {
    id: 'couch-coop-finder',
    number: '01',
    category: 'WEB APP',
    title: 'Couch Co-op Finder',
    iconType: 'sofa',
    summary:
      'Catálogo interativo para descobrir e filtrar jogos cooperativos locais e de tela dividida por plataforma e assinatura.',
    description:
      'Aplicação web desenvolvida em React para facilitar a escolha de jogos multiplayer locais no sofá, permitindo filtrar títulos por número de jogadores, modo de tela, console e disponibilidade em serviços como PS Plus e Game Pass.',
    highlights: [
      'Filtros combinados em tempo real por plataforma, assinatura e quantidade de jogadores',
      'Componentização limpa em React com renderização dinâmica do catálogo',
      'Interface responsiva inspirada em catálogos modernos de jogos'
    ],
    stack: ['React', 'JavaScript', 'Vite', 'CSS'],
    repoUrl: 'https://github.com/tarscilla/couch-coop-finder',
    liveUrl: ''
  },
  {
    id: 'aura-mobile-app',
    number: '02',
    category: 'MOBILE',
    title: 'AURA Mobile App',
    iconType: 'potion',
    summary:
      'Aplicativo mobile multiplataforma voltado para saúde e bem-estar feminino com autenticação integrada.',
    description:
      'Projeto mobile construído em Flutter e Dart com foco em acompanhamento de bem-estar, organização de rotina e experiência acolhedora, contando com fluxo completo de cadastro e login via Firebase.',
    highlights: [
      'Autenticação segura com e-mail/senha e conta Google via Firebase',
      'Navegação fluida entre telas e arquitetura organizada em Dart',
      'Desenvolvido em equipe para projeto acadêmico de Engenharia de Software'
    ],
    stack: ['Flutter', 'Dart', 'Firebase'],
    repoUrl: 'https://github.com/tarscilla',
    liveUrl: ''
  },
  {
    id: 'horrorflix',
    number: '03',
    category: 'FULL-STACK',
    title: 'Horrorflix',
    iconType: 'tv',
    summary:
      'Plataforma de streaming temática de terror com integração à API do TMDB, cache em Redis e votação de intensidade de medo.',
    description:
      'Catálogo interativo dedicado a filmes e séries de terror, consumindo dados atualizados da API do TMDB e permitindo que usuários avaliem o nível de susto de cada título.',
    highlights: [
      'Consumo e filtragem dinâmica de catálogo pela API do TMDB',
      'Sistema de votação interativa de intensidade de medo por título',
      'Back-end em Node.js com autenticação de usuários e banco MongoDB'
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis'],
    repoUrl: 'https://github.com/tarscilla/horrorflix',
    liveUrl: ''
  },
  {
    id: 'didactis',
    number: '04',
    category: 'IA & EDUCAÇÃO',
    title: 'Didactis',
    iconType: 'book',
    summary:
      'Plataforma pedagógica com assistente de IA para gerar avaliações, relatórios descritivos e capas em PDF.',
    description:
      'Ferramenta criada para apoiar docentes do ensino fundamental na geração de avaliações alinhadas à BNCC, relatórios individuais e capas personalizadas prontas para impressão em PDF.',
    highlights: [
      'Geração de questões com ou sem gabarito integrada à API do Gemini',
      'Exportação automática de documentos e capas formatadas em PDF',
      'Salvamento local de rascunhos no navegador para agilizar o uso diário'
    ],
    stack: ['Node.js', 'Express', 'Groq API', 'PDF'],
    repoUrl: 'https://github.com/tarscilla',
    liveUrl: 'https://tarscilla.github.io/didactis/'
  }
];

export const SKILLS = [
  {
    id: 'react',
    name: 'React',
    level: 'Foco Principal',
    usage: 'Criação de interfaces componentizadas, gerenciamento de estado e integração com APIs.'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    level: 'Foco Principal',
    usage: 'Lógica de interface, manipulação de dados, fetch assíncrono e interatividade.'
  },
  {
    id: 'html-css',
    name: 'HTML & CSS',
    level: 'Foco Principal',
    usage: 'Layouts responsivos com Grid e Flexbox, variáveis de tema e animações leves.'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    level: 'Uso Diário',
    usage: 'Versionamento de código, organização de repositórios e deploy no GitHub Pages.'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    level: 'Em Aprendizado',
    usage: 'Criação de rotas e APIs REST básicas com Express para conectar meus projetos web.'
  },
  {
    id: 'flutter',
    name: 'Flutter',
    level: 'Estudando na Faculdade',
    usage: 'Desenvolvimento de telas e navegação em aplicativos mobile com Dart.'
  },
  {
    id: 'databases',
    name: 'Mongo & Redis',
    level: 'Prática Acadêmica',
    usage: 'Noções de persistência NoSQL, cache em memória e uso com Docker Compose.'
  },
  {
    id: 'python',
    name: 'Python',
    level: 'Estudando na Faculdade',
    usage: 'Análise exploratória de dados e scripts acadêmicos com Pandas e Scikit-Learn.'
  }
];