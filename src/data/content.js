// Conteúdo institucional e comercial da HWS Consultores & Auditores
// Síntese executiva orientada a serviços e tomada de decisão

export const nav = [
  { path: '/', label: 'Início' },
  { path: '/sobre', label: 'Sobre nós' },
  { path: '/servicos', label: 'Serviços' },
  { path: '/sectores', label: 'Sectores' },
  { path: '/contactos', label: 'Contactos' },
];

export const heroFacts = [
  { icon: 'pin', title: 'Sede em Maputo', text: 'Consultoria sénior com actuação em Moçambique e na região.' },
  { icon: 'fin', title: 'Soluções Integradas', text: 'Consultoria financeira, risco prudencial, governação e Outsourced CFO.' },
  { icon: 'users', title: 'Público-Alvo', text: 'PMEs, instituições financeiras, grandes empresas e sector público.' },
];

export const pillars = [
  { title: 'Especialização Financeira', text: 'Planeamento, modelação e análise de desempenho com rigor técnico.' },
  { title: 'Know-How Bancário', text: 'Experiência prática no sector financeiro e regulatório moçambicano.' },
  { title: 'Gestão de Risco & Prudencial', text: 'Programas de risco, ICAAP/ILAAP e conformidade regulamentar.' },
  { title: 'Governação Corporativa', text: 'Modelos que promovem transparência, eficiência e controlo interno.' },
  { title: '100% Independência', text: 'Pareceres isentos, sem conflitos de interesse e fundamentados em dados.' },
  { title: 'Soluções Sob Medida', text: 'Abordagem prática desenhada para a realidade específica de cada cliente.' },
];

export const areas = [
  {
    n: '01',
    icon: 'fin',
    title: 'Tomada de Decisão Financeira',
    big: true,
    href: '/servicos',
    desc: 'Informação financeira estruturada para apoiar a gestão executiva, da orçamentação à análise de rentabilidade.',
    tags: ['Planeamento financeiro', 'Orçamentação', 'Modelação financeira', 'Gestão de tesouraria'],
  },
  {
    n: '02',
    icon: 'risk',
    title: 'Risco, Regulação e Compliance',
    href: '/servicos',
    solution: 3,
    desc: 'Gestão de risco prudencial, indicadores de liquidez e capital, stress testing e apoio regulatório.',
    tags: ['ICAAP & ILAAP', 'Stress Testing', 'Apoio Regulatório (BdM)', 'Gestão de Capital'],
  },
  {
    n: '03',
    icon: 'gov',
    title: 'Governação e Controlo Interno',
    href: '/servicos',
    solution: 4,
    desc: 'Estruturação de governação, comités de auditoria e políticas de controlo interno alinhadas a boas práticas.',
    tags: ['Governação Corporativa', 'Controlo Interno', 'Políticas & Manuais'],
  },
  {
    n: '04',
    icon: 'aud',
    title: 'Auditoria Interna e Assurance',
    href: '/servicos',
    solution: 5,
    desc: 'Auditorias baseadas no risco e avaliações independentes de processos e controlos operacionais críticos.',
    tags: ['Auditoria Baseada no Risco', 'Avaliação de Processos', 'Assurance'],
  },
  {
    n: '05',
    icon: 'book',
    title: 'Desenvolvimento de Competências',
    href: '/servicos',
    solution: 7,
    desc: 'Capacitação executiva e workshops práticos em gestão financeira e contabilidade bancária.',
    tags: ['Formação Executiva', 'Finanças para Gestores', 'IFRS / NIRF'],
  },
];

export const solutions = [
  {
    id: 'consultoria',
    title: 'Consultoria Financeira',
    summary: 'Diagnóstico, planeamento financeiro, tesouraria e apoio à tomada de decisão estratégica.',
    points: [
      'Diagnóstico financeiro e avaliação de desempenho',
      'Planeamento orçamental e controlo de gestão',
      'Gestão de tesouraria e projecções de liquidez',
      'Planos de negócio e modelação financeira',
      'Dashboards e relatórios executivos para a administração',
    ],
  },
  {
    id: 'cfo',
    title: 'Outsourced CFO',
    summary: 'Direcção financeira sénior e contínua para empresas que pretendem crescer com controlo financeiro.',
    points: [
      'Supervisão e estratégia financeira de topo',
      'Acompanhamento mensal de tesouraria e margens',
      'Reuniões executivas com os sócios e administração',
      'Preparação para captação de investimento ou crédito bancário',
      'Optimização da estrutura de custos operacionais',
    ],
  },
  {
    id: 'diagnostico',
    title: 'Diagnósticos Financeiros',
    summary: 'Avaliação profunda da saúde financeira da empresa com recomendações directas de melhoria.',
    points: [
      'Análise de liquidez, rentabilidade e endividamento',
      'Identificação de fugas de margem e custos desnecessários',
      'Plano de acção imediato para recuperação ou expansão',
      'Relatório executivo claro e sem jargões desnecessários',
    ],
  },
  {
    id: 'risco',
    title: 'Risco, Regulamentação e Compliance',
    summary: 'Programas de risco prudencial e conformidade com as normas do Banco de Moçambique.',
    points: [
      'Programas de Gestão de Risco Integrado',
      'Apoio técnico a ALCO, ICAAP e ILAAP',
      'Stress testing e planos de recuperação',
      'Monitoria de rácios prudenciais e adequação de capital',
    ],
  },
  {
    id: 'governacao',
    title: 'Governação Corporativa e Controlo Interno',
    summary: 'Desenho de processos, comités de auditoria e políticas de controlo que protegem o negócio.',
    points: [
      'Estruturação de modelos de governação corporativa',
      'Mapeamento e reforço de controlos internos',
      'Elaboração de políticas, manuais e procedimentos',
      'Prevenção de fraudes e mitigação de riscos operacionais',
    ],
  },
  {
    id: 'auditoria',
    title: 'Auditoria Interna',
    summary: 'Avaliações independentes dos controlos e processos da empresa com foco em mitigação de riscos.',
    points: [
      'Auditorias internas operacionais e financeiras',
      'Avaliação da eficácia dos controlos internos',
      'Revisão de processos críticos de negócio',
      'Relatórios com recomendações práticas e prioritárias',
    ],
  },
  {
    id: 'contabilidade',
    title: 'Assessoria Contabilística Especializada',
    summary: 'Suporte técnico em IFRS, encerramento de contas e conformidade fiscal de alto rigor.',
    points: [
      'Apoio técnico ao encerramento e reporte em IFRS / NIRF',
      'Reconciliações e revisão de contas complexas',
      'Assessoria na conformidade fiscal corporativa',
      'Apoio em processos de due diligence financeira',
    ],
  },
  {
    id: 'formacao',
    title: 'Capacitação & Formação Executiva',
    summary: 'Workshops práticos para administradores e equipas técnicas em finanças e controlo.',
    points: [
      'Finanças para gestores não financeiros',
      'Interpretação prática de demonstrações financeiras',
      'Gestão orçamental e controlo de custos',
      'Contabilidade bancária e normas prudenciais',
    ],
  },
];

export const cfoPoints = [
  'Estratégia financeira sénior sob medida',
  'Planeamento orçamental e tesouraria contínua',
  'Reporting claro para tomada de decisão',
  'Preparação para bancos e investidores',
  'Acompanhamento directo por sócios executivos',
];

export const differentials = [
  { icon: 'bank', title: 'Experiência Big 4 & Banca', text: 'Vivência prática em firmas globais de auditoria e na direcção financeira de bancos.' },
  { icon: 'risk', title: '100% Independência', text: 'Pareceres técnicos isentos, sem conflitos de interesse e fundamentados em dados reais.' },
  { icon: 'chart', title: 'Pragmatismo & Resultados', text: 'Foco em soluções que geram impacto directo na rentabilidade e segurança da empresa.' },
];

export const steps = [
  { title: '1. Diagnóstico', text: 'Compreendemos a situação financeira, processos e prioridades do negócio.' },
  { title: '2. Plano de Acção', text: 'Estruturamos recomendações claras, cronogramas e entregáveis concretos.' },
  { title: '3. Execução', text: 'Apoiamos a implementação das soluções junto da equipa da sua empresa.' },
  { title: '4. Resultados', text: 'Acompanhamos os indicadores de desempenho e a sustentabilidade financeira.' },
];

export const sectors = [
  {
    id: 'banca',
    title: 'Instituições Financeiras & Banca',
    featured: true,
    text: 'Apoio especializado em risco prudencial, regulação do Banco de Moçambique, ICAAP/ILAAP, governação e auditoria interna.',
    details: 'Adequação regulatória, stress testing, monitoria de liquidez e fortalecimento de comités executivos.',
  },
  {
    id: 'pmes',
    title: 'Pequenas e Médias Empresas',
    text: 'Estruturação de tesouraria, margens operacionais e Direcção Financeira (Outsourced CFO) para acelerar o crescimento com segurança.',
    details: 'Controlo de caixa, orçamentos, relatórios mensais e preparação para financiamento bancário.',
  },
  {
    id: 'startups',
    title: 'Startups & Empresas em Expansão',
    text: 'Modelação económico-financeira, controlo de burn rate e métricas essenciais para captação de investimento.',
    details: 'Planos de negócio, projecções financeiras e suporte estratégico a fundadores.',
  },
  {
    id: 'corporates',
    title: 'Grandes Empresas & Grupos',
    text: 'Governação corporativa, reforço de controlos internos e auditorias especializadas em operações complexas.',
    details: 'Desenho de políticas internas, avaliação de riscos operacionais e suporte a comités de auditoria.',
  },
  {
    id: 'ongs',
    title: 'Organizações Não Governamentais (ONGs)',
    text: 'Rigor e transparência na prestação de contas, gestão de fundos de doadores e conformidade de projectos.',
    details: 'Auditoria de projectos financiados, relatórios financeiros para doadores e controlo orçamental.',
  },
  {
    id: 'publico',
    title: 'Sector Público & Instituições',
    text: 'Apoio na modernização da governação financeira, controlo orçamental e capacitação técnica de equipas.',
    details: 'Avaliação de processos, conformidade institucional e programas de formação especializada.',
  },
];

export const leader = {
  name: 'Hermenegildo Cofe',
  role: 'Managing Partner',
  bio: 'Mais de 25 anos de experiência em finanças, auditoria e gestão de risco, com histórico em firmas internacionais de auditoria (Big 4: EY e PwC) e cargos de CFO no sector bancário e empresarial.',
  stats: [
    { v: '25+', l: 'anos em finanças e auditoria' },
    { v: '15+', l: 'anos como CFO executivo' },
  ],
  tags: ['Experiência EY e PwC', 'Governação Corporativa', 'Gestão de Risco Prudencial', 'Outsourced CFO', 'Formador Executivo'],
};

export const faqs = [
  {
    q: 'Que tipo de organizações a HWS apoia?',
    a: 'Apoiamos PMEs, startups em expansão, grandes corporações, instituições financeiras, ONGs e entidades do sector público.',
  },
  {
    q: 'O que é o serviço de Outsourced CFO?',
    a: 'É a disponibilização de uma direcção financeira sénior sob medida. A sua empresa beneficia de estratégia financeira de alto nível, controlo de tesouraria e suporte executivo sem os custos de um CFO a tempo inteiro.',
  },
  {
    q: 'Como é feito o primeiro contacto?',
    a: 'Agendamos uma conversa inicial confidencial (presencial ou por videochamada) para entender os seus desafios e apresentar uma proposta adaptada à sua dimensão.',
  },
];

