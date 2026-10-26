// Conteúdo central da landing Cidev.
const assetMap = import.meta.glob(
  [
    '../assets/*.{png,webp,jpg,jpeg}',
    '../assets/works/{pgae,pgae-2,chatbot,nutricionista,impeto,impeto-2,vetor,vetor-2,neuralautom,neuralautom-2,incubadora,incubadora-2}.webp',
  ],
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
)
const asset = (f) =>
  assetMap[`../assets/${f}`] ?? (import.meta.env.DEV && console.warn('asset ausente:', f), undefined)

export const clients = [
  'Sebrae',
  'Incubadora de Empresas',
  'IFCE',
]

export const services = [
  {
    id: 1,
    number: '01',
    icon: 'Code2',
    title: 'Desenvolvimento Web',
    desc: 'Aplicações web rápidas, acessíveis e prontas para escalar — do MVP ao produto maduro.',
    tags: ['React', 'Next.js', 'Node.js'],
    span: 'md:col-span-2',
  },
  {
    id: 2,
    number: '02',
    icon: 'PenTool',
    title: 'UI/UX Design',
    desc: 'Interfaces intuitivas. Pesquisa, protótipo e design system num só fluxo.',
    tags: ['Figma', 'Design System', 'Protótipos'],
    span: 'md:col-span-1',
  },
  {
    id: 3,
    number: '03',
    icon: 'Smartphone',
    title: 'Apps Mobile',
    desc: 'Apps nativos e multiplataforma com performance de verdade.',
    tags: ['React Native', 'iOS', 'Android'],
    span: 'md:col-span-1',
  },
  {
    id: 4,
    number: '04',
    icon: 'LayoutDashboard',
    title: 'Produtos SaaS',
    desc: 'Arquitetura multi-tenant, cobrança e painéis. SaaS construído para crescer sem dívida técnica.',
    tags: ['Multi-tenant', 'Billing', 'Dashboards'],
    span: 'md:col-span-2',
  },
  {
    id: 5,
    number: '05',
    icon: 'Plug',
    title: 'APIs & Integrações',
    desc: 'Conectamos seu produto ao resto do mundo com contratos claros e observáveis.',
    tags: ['REST', 'GraphQL', 'Webhooks'],
    span: 'md:col-span-1',
  },
  {
    id: 6,
    number: '06',
    icon: 'Cpu',
    title: 'IA Aplicada',
    desc: 'Colocamos inteligência onde ela gera valor: RAG, agentes e automações sob medida.',
    tags: ['OpenAI', 'LangChain', 'RAG'],
    span: 'md:col-span-1',
  },
  {
    id: 7,
    number: '07',
    icon: 'Cloud',
    title: 'Cloud & DevOps',
    desc: 'Infraestrutura como código, CI/CD e observabilidade desde o primeiro deploy.',
    tags: ['AWS', 'Docker', 'CI/CD'],
    span: 'md:col-span-2',
  },
  {
    id: 8,
    number: '08',
    icon: 'LifeBuoy',
    title: 'Suporte & Evolução',
    desc: 'Não sumimos depois do lançamento. Seu produto evolui com acompanhamento contínuo.',
    tags: ['SLA', 'Monitoramento', 'Roadmap'],
    span: 'md:col-span-2',
  },
]

export const processSteps = [
  {
    title: 'Diagnóstico',
    tagline: 'Entendemos o problema antes do código',
    desc: 'Uma conversa direta sobre objetivos, restrições e o que realmente importa. Sem enrolação, sem jargão.',
    duration: 'Dia 0',
  },
  {
    title: 'Arquitetura',
    tagline: 'O plano que evita retrabalho',
    desc: 'Mapeamos jornadas, decidimos a stack e desenhamos a fundação técnica do produto.',
    duration: 'Semana 1',
  },
  {
    title: 'Design Sprint',
    tagline: 'Interfaces intuitivas',
    desc: 'Sprints semanais, arquivos abertos e feedback em ciclos curtos. Você acompanha tudo de perto.',
    duration: 'Semanas 2–3',
  },
  {
    title: 'Construção',
    tagline: 'Sprints curtas, entregas visíveis',
    desc: 'Código em staging desde cedo. Você testa enquanto a gente constrói — sem surpresas no fim.',
    duration: 'Semanas 3–8',
  },
  {
    title: 'Lançamento',
    tagline: 'No ar sem drama',
    desc: 'Deploy orquestrado, monitoramento ativo e métricas configuradas desde o primeiro minuto.',
    duration: 'Semana 8',
  },
  {
    title: 'Evolução',
    tagline: 'O produto nunca para',
    desc: 'Acompanhamento contínuo, roadmap vivo e melhorias guiadas por dados reais de uso.',
    duration: 'Contínuo',
  },
]

export const heroProducts = [
  { title: 'Raízes Bank', link: '#trabalho', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=70' },
  { title: 'Mandacaru Health', link: '#trabalho', thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=70' },
  { title: 'Orbe Log', link: '#trabalho', thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=70' },
  { title: 'Feira Digital', link: '#trabalho', thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=70' },
  { title: 'Vertentes', link: '#trabalho', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=70' },
  { title: 'Cangaço Labs', link: '#trabalho', thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=70' },
  { title: 'São Francisco Cloud', link: '#trabalho', thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=70' },
  { title: 'Cerrado Ágil', link: '#trabalho', thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=70' },
  { title: 'Sertão Shop', link: '#trabalho', thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=70' },
  { title: 'Brisa Analytics', link: '#trabalho', thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=70' },
]

export const caseStudies = [
  {
    id: 1,
    company: 'PGAE',
    industry: 'Educação',
    result: 'IFCE Acopiara',
    home: true,
    desc: 'Sistema de gerenciamento do lanche universitário do IFCE Acopiara. Controla pedidos, filas e a merenda no campus — do balcão ao aluno.',
    challenge: 'A merenda do campus rodava no papel e no boca a boca. Pedido, fila e estoque não conversavam — o aluno não sabia se tinha lanche, o balcão não sabia a demanda.',
    solution: 'Sistema web para o IFCE Acopiara: o aluno pede pelo celular, o balcão vê a fila em tempo real e a gestão acompanha o que saiu e o que falta.',
    outcome: 'Um fluxo só, do pedido à entrega. Menos fila, menos desperdício, merenda visível para quem serve e para quem come.',
    services: ['Web', 'Gestão', 'Campus'],
    alt: 'Tela de login da plataforma PGAE, de gerenciamento da alimentação estudantil do IFCE Acopiara',
    alts: [
      'Tela de login da plataforma PGAE, de gerenciamento da alimentação estudantil do IFCE Acopiara',
      'Painel de gerenciamento de agendamentos da PGAE',
    ],
    images: [asset('works/pgae.webp'), asset('works/pgae-2.webp')],
  },
  {
    id: 5,
    company: 'Ímpeto',
    industry: 'Logística',
    result: 'Logística ferroviária',
    home: true,
    url: 'https://logistica-impeto.vercel.app/',
    desc: 'Landing para uma operadora de logística ferroviária. Visual de impacto, proposta direta e um único caminho: solicitar cotação.',
    challenge: 'Logística parece commodity: todo mundo promete prazo e preço. Faltava uma presença que mostrasse força de operação antes da primeira conversa.',
    solution: 'Landing de impacto com fotografia ferroviária em tela cheia, promessa direta e diferenciais objetivos: ponto único de contato e visibilidade total da cadeia. CTA de cotação.',
    outcome: 'Quem chega entende o diferencial em segundos e tem um caminho curto até pedir cotação.',
    services: ['Landing', 'Marca', 'Conversão'],
    alt: 'Landing page da Ímpeto Logística com trem de carga em tela cheia e botão de solicitar cotação',
    alts: [
      'Landing page da Ímpeto Logística com trem de carga em tela cheia e botão de solicitar cotação',
      'Seção de serviços da Ímpeto Logística por tipo de carga',
    ],
    images: [asset('works/impeto.webp'), asset('works/impeto-2.webp')],
  },
  {
    id: 6,
    company: 'NeuralAutom',
    industry: 'Robótica',
    result: 'Landing institucional',
    home: false,
    url: 'https://neural-autom.vercel.app/',
    desc: 'A NeuralAutom projeta robótica e automação como um único sistema: hardware preciso, inteligência cognitiva e adaptação em tempo real. Do chão de fábrica ao laboratório, a mesma disciplina.',
    challenge: 'Robótica e IA soam abstratas para quem decide a compra. A marca precisava parecer tão precisa quanto o produto.',
    solution: 'Landing minimalista e editorial, com o produto como protagonista, tipografia limpa e narrativa curta do hardware à inteligência.',
    outcome: 'Uma tecnologia difícil de explicar vira uma página que se entende rápido e passa confiança.',
    services: ['Landing', 'Marca', 'Design'],
    alt: 'Landing page da NeuralAutom com mão robótica e a chamada Um sistema, zero limites',
    alts: [
      'Landing page da NeuralAutom com mão robótica e a chamada Um sistema, zero limites',
      'Página de contato da NeuralAutom',
    ],
    images: [asset('works/neuralautom.webp'), asset('works/neuralautom-2.webp')],
  },
  {
    id: 7,
    company: 'Vetor Agência',
    industry: 'Publicidade',
    result: 'Agência de propaganda',
    home: false,
    url: 'https://agencia-vetor-six.vercel.app/',
    desc: 'Agência de publicidade e propaganda guiada por estratégia. A Vetor une estratégia, criação e mídia em um só time. Cada campanha parte de um objetivo de negócio claro e é medida por ele.',
    challenge: 'Site de agência costuma ser vitrine bonita sem objetivo de negócio. Era preciso mostrar estratégia antes de mostrar criação.',
    solution: 'Landing que organiza estratégia, criação e mídia como um time só, com chamada clara para iniciar um projeto logo na primeira dobra.',
    outcome: 'O visitante entende como a agência trabalha e tem um caminho direto para pedir proposta.',
    services: ['Landing', 'Marca', 'Conversão'],
    alt: 'Landing page da Vetor Agência com a chamada Campanhas que fazem sua marca ser lembrada',
    alts: [
      'Landing page da Vetor Agência com a chamada Campanhas que fazem sua marca ser lembrada',
      'Seção de processo da Vetor Agência, do briefing à campanha',
    ],
    images: [asset('works/vetor.webp'), asset('works/vetor-2.webp')],
  },
  {
    id: 3,
    company: 'Chatbot acadêmico',
    industry: 'Educação',
    result: 'IFCE Acopiara',
    home: true,
    desc: 'Atendimento automatizado e humanizado do IFCE Acopiara. Responde dúvidas acadêmicas 24h, com tom de quem está no campus.',
    challenge: 'Secretaria e coordenação repetiam as mesmas dúvidas o dia inteiro — e de noite o aluno ficava sem resposta. Calendário, matrícula, documentos.',
    solution: 'Chatbot com o tom do campus, treinado nas perguntas reais do IFCE Acopiara. Responde 24h e encaminha o que precisa de gente.',
    outcome: 'Dúvida comum não trava mais a fila da secretaria. O aluno resolve sozinho; o atendimento humano fica para o que importa.',
    services: ['Chatbot', 'IA', 'Campus'],
    alt: 'Chatbot acadêmico do IFCE Acopiara: atendimento automatizado e humanizado',
    images: [asset('works/chatbot.webp')],
  },
  {
    id: 4,
    company: 'Nutricionista',
    industry: 'Saúde',
    result: 'Presença digital',
    home: true,
    desc: 'Landing page para nutricionista: agenda, autoridade e captação de pacientes. Página limpa, feita para converter visita em consulta.',
    challenge: 'A profissional dependia de indicação. Sem um lugar claro para mostrar o trabalho e marcar consulta, o paciente novo não encontrava caminho.',
    solution: 'Página limpa com posicionamento, prova de ofício e chamada para a agenda. Feita para o celular, feita para converter.',
    outcome: 'Quem chega pelo Instagram ou pelo Google encontra autoridade e um botão de consulta — visita vira paciente.',
    services: ['Landing', 'Marca', 'Conversão'],
    alt: 'Landing page da nutricionista Victória Lêda com foto, WhatsApp e atendimento remoto',
    images: [asset('works/nutricionista.webp')],
  },
  {
    id: 8,
    company: 'Incubadora de Empresas',
    industry: 'Educação',
    result: 'IFCE Acopiara',
    home: false,
    url: 'https://incubadora-acopiara.vercel.app/',
    desc: 'Site da Incubadora de Empresas do IFCE Campus Acopiara: apoia estudantes a transformar ideias em negócios, com acompanhamento próximo em cada etapa.',
    challenge: 'O estudante com ideia não sabia que a incubadora existia nem como entrar. O caminho da ideação à incubação não estava claro em lugar nenhum.',
    solution: 'Site institucional que explica as etapas (ideação, pré-incubação, incubação), apresenta as empresas e leva ao contato.',
    outcome: 'O estudante entende o caminho do início ao fim e sabe a quem falar.',
    services: ['Web', 'Institucional', 'Campus'],
    alt: 'Site da Incubadora de Empresas do IFCE Campus Acopiara, Ideias que viram empresas',
    alts: [
      'Site da Incubadora de Empresas do IFCE Campus Acopiara, Ideias que viram empresas',
      'Seção Como funciona da Incubadora, com as etapas de ideação, pré-incubação e incubação',
    ],
    images: [asset('works/incubadora.webp'), asset('works/incubadora-2.webp')],
  },
  {
    id: 9,
    company: 'RATE',
    industry: 'Dados',
    result: 'Business intelligence',
    home: false,
    desc: 'RATE (Research Academic Technology Events): pesquisa e coleta automática de eventos acadêmicos de tecnologia, com raspagem de dados e repositórios online integrados, milhares de dados atualizados diariamente.',
    challenge: 'Congressos, mostras e editais de bolsa estão espalhados em dezenas de sites, com prazos que mudam. Acompanhar na mão significa perder inscrição.',
    solution: 'Coleta automática por raspagem e integração com repositórios, painel com filtros (região, tipo, prazo, aderência ao IFCE) e destaque de urgência por prazo.',
    outcome: 'Tudo o que está aberto, em breve ou encerrado num só lugar, e uma base atualizada diariamente que serve de matéria-prima para inteligência de negócio.',
    services: ['Dados', 'Scraping', 'BI'],
    card: asset('print_rate_card.png'),
    images: [asset('print_rate.png')],
  },
]

export const stats = [
  { num: 15, suffix: '+', label: 'Projetos feitos' },
  { num: 99.9, suffix: '%', decimals: 1, label: 'Tempo no ar' },
  { num: 4.9, decimals: 1, label: 'Avaliação dos clientes' },
  { num: 5, label: 'Anos de experiência' },
  { num: 4, label: 'Setores atendidos' },
  { num: 100, suffix: '%', label: 'Código é seu' },
]

export const stackGroups = [
  { cat: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'] },
  { cat: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'] },
  { cat: 'Cloud', items: ['AWS', 'Docker', 'Kubernetes', 'Vercel'] },
  { cat: 'Dados & IA', items: ['OpenAI', 'LangChain', 'pgvector', 'dbt'] },
  { cat: 'Mobile', items: ['React Native', 'Expo', 'Swift'] },
]

export const testimonials = [
  {
    quote: 'A Cidev pegou uma ideia solta e transformou em produto que os clientes usam todo dia.',
    author: 'CEO',
    company: 'Raízes Bank',
  },
  {
    quote: 'Entregaram antes do prazo e com uma clareza que a gente não via há anos.',
    author: 'CTO',
    company: 'Orbe Log',
  },
  {
    quote: 'Pensam como sócios, não como fornecedor. Isso muda tudo.',
    author: 'Fundadora',
    company: 'Mandacaru Health',
  },
  {
    quote: 'O onboarding novo dobrou nossa conversão. Melhor investimento do ano.',
    author: 'Product Lead',
    company: 'Feira Digital',
  },
  {
    quote: 'Código limpo, documentado e nosso. Exatamente como deveria ser.',
    author: 'Head de Engenharia',
    company: 'Vertentes',
  },
]

export const values = [
  {
    number: '01',
    title: 'Raiz',
    desc: 'Contexto antes de tecnologia. Entendemos o seu negócio de verdade antes de escrever a primeira linha.',
  },
  {
    number: '02',
    title: 'Ofício',
    desc: 'Código limpo, testado e documentado. Feito por gente que se importa com o que entrega.',
  },
  {
    number: '03',
    title: 'Escala',
    desc: 'Arquitetura pensada para crescer sem virar dívida técnica no primeiro pico de uso.',
  },
]
