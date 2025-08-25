const navLinks = [
  {
    name: "Trabalhos",
    link: "#work",
  },
  {
    name: "Experiência",
    link: "#experience",
  },
  {
    name: "Habilidades",
    link: "#skills",
  },
  {
    name: "Formação",
    link: "#formacao",
  },
];

const words = [
  { text: "Ideias", imgPath: "/images/ui/ideas.svg" },
  { text: "Conceitos", imgPath: "/images/ui/concepts.svg" },
  { text: "Designs", imgPath: "/images/ui/designs.svg" },
  { text: "Código", imgPath: "/images/ui/code.svg" },
  { text: "Ideias", imgPath: "/images/ui/ideas.svg" },
  { text: "Conceitos", imgPath: "/images/ui/concepts.svg" },
  { text: "Designs", imgPath: "/images/ui/designs.svg" },
  { text: "Código", imgPath: "/images/ui/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Anos de Experiência" },
  { value: 25, suffix: "+", label: "Projetos Entregues" },
  { value: 35, suffix: "+", label: "Certificações" },
  { value: 98, suffix: "%", label: "Satisfação do Cliente" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/ui/seo.png",
    title: "Foco na Qualidade",
    desc: "Entregando resultados de alta qualidade mantendo atenção a cada detalhe.",
  },
  {
    imgPath: "/images/ui/chat.png",
    title: "Comunicação Confiável",
    desc: "Mantendo você atualizado a cada passo para garantir transparência e clareza.",
  },
  {
    imgPath: "/images/ui/time.png",
    title: "Entrega no Prazo",
    desc: "Garantindo que os projetos sejam concluídos no cronograma, com qualidade e atenção aos detalhes.",
  },
];



const techStackIcons = [
  {
    name: "Desenvolvedor React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Desenvolvedor Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Desenvolvedor Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0] as [number, number, number],
  },
  {
    name: "Desenvolvedor Interativo",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0] as [number, number, number],
  },
  {
    name: "Gerente de Projeto",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0] as [number, number, number],
  },
];

const expCards = [
  {
    review: "Durante minha experiência na InfoAlto, tive a oportunidade de desenvolver aplicações web completas usando FlutterFlow, onde aprendi a criar interfaces dinâmicas e responsivas, além de integrar autenticação de usuários e trabalhar com bancos de dados. Essa experiência me permitiu crescer tanto no frontend quanto no backend.",
    imgPath: "/images/experience/exp1.png",
    logoPath: "/images/ui/logo1.png",
    title: "Desenvolvedor Fullstack Trainee",
    date: "Fevereiro 2025 - Agosto 2025",
    responsibilities: [
      "Desenvolvi e mantive funcionalidades voltadas ao usuário para o site, desenvolvendo telas baseadas no figma usando FlutterFlow e integrando autenticação de usuario.",
      "Colaborei com Manutenção e desenvolvimento do banco de dados Usando SupaBase e PostgreSQL.",
      "Otimizou aplicações web para máxima velocidade e escalabilidade.",
    ],
  },
  {
    review: "Como desenvolvedor freelancer Aprendi Muito com Projetos voltado a resolver problemas reais das pessoas usando a Programação. Através de projetos diversificados, aprimorei minhas habilidades técnicas,e desenvolvi uma forte capacidade de comunicação com clientes. Essa experiência me permitiu crescer tanto profissionalmente quanto pessoalmente.",
    imgPath: "/images/experience/exp2.png",
    logoPath: "/images/ui/logo2.png",
    title: "Freelancer Full Stack",
    date: "Junho 2022 - Presente",
    responsibilities: [
      "Desenvolveu aplicações web modernas usando Next.js, React e TypeScript com foco em performance e SEO",
      "Criou APIs RESTful e integrou serviços backend usando Node.js, Express e MongoDB",
      "Implementou autenticação de usuários, dashboards interativos e integrações com APIs de terceiros em Eccomerces e Plataformas de Pagamento como Stripe e MercadoPago.",
    ],
  },
  {
    review: "Na SM Celulares, atuo como técnico especializado em soluções de software e hardware para dispositivos móveis. Meu trabalho envolve principalmente desbloqueios de software, remoção de contas e senhas, além de reparos técnicos. Esta experiência me proporcionou um profundo conhecimento sobre sistemas operacionais móveis e segurança de software.",
    imgPath: "/images/experience/exp3.png",
    logoPath: "/images/ui/logo3.png",
    title: "Assistente Técnico",
    date: "Janeiro 2025 - Presente",
    responsibilities: [
      "Desbloqueio de Software em Dispositivos Móveis",
      "Remoção de Contas e Senhas",
      "Reparos Técnicos",
    ],
  },
];



const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Não posso dizer coisas boas o suficiente sobre Gildair. Ele foi capaz de pegar nossos requisitos complexos de projeto e transformá-los em um site funcional e perfeito. Suas habilidades de resolução de problemas são excepcionais.",
    imgPath: "/images/clients/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Trabalhar com Gildair foi uma experiência fantástica. Ele transformou nosso site desatualizado em uma plataforma moderna e amigável ao usuário. Sua atenção aos detalhes e compromisso com a qualidade são incomparáveis. Recomendo altamente para qualquer projeto de desenvolvimento web.",
    imgPath: "/images/clients/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Colaborar com Gildair foi um prazer absoluto. Seu profissionalismo, pontualidade e dedicação em entregar resultados excepcionais foram evidentes durante todo nosso projeto. O entusiasmo de Gildair por cada aspecto do desenvolvimento realmente se destaca. Se você está buscando elevar seu site e sua marca, Gildair é o parceiro ideal.",
    imgPath: "/images/clients/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Gildair foi um prazer trabalhar. Ele transformou nosso site desatualizado em uma plataforma fresca e intuitiva que é moderna e fácil de navegar. Trabalho fantástico no geral.",
    imgPath: "/images/clients/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "A expertise de Gildair em desenvolvimento web é verdadeiramente impressionante. Ele entregou uma solução robusta e escalável para nosso site de e-commerce, e nossas vendas online aumentaram significativamente desde o lançamento. Ele é um verdadeiro profissional!",
    imgPath: "/images/clients/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Gildair foi um prazer trabalhar. Ele entendeu nossos requisitos perfeitamente e entregou um site que superou nossas expectativas. Suas habilidades tanto em desenvolvimento frontend quanto backend são de primeira linha.",
    imgPath: "/images/clients/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/social/github.png",
    link: "https://github.com/gildairmoreira/"
  },
  {
    name: "linkedin",
    imgPath: "/images/social/linkedin.png",
    link: "https://www.linkedin.com/in/gildair-moreira/"
  },
  {
    name: "instagram",
    imgPath: "/images/social/insta.png",
    link: "https://www.instagram.com/gildairmoreira/"
  },
  {
    name: "x",
    imgPath: "/images/social/x.png",
    link: "https://x.com/Ligeiro1102"
  },
];

const projects = [
  {
    id: 1,
    title: "JobFlashAI",
    description: "Gerador de currículo rápido e personalizado com AI. Crie currículos profissionais em minutos com inteligência artificial.",
    image: "/images/projects/project1.png",
    repository: "https://github.com/gildairmoreira/JobFlashAI",
    deploy: "https://jobflash.netlify.app/",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Gemini API", "Prisma", "Clerk", "Zustand", "ShadCN/UI"]
  },
  {
    id: 2,
    title: "Crypto Dash",
    description: "Painel de preços de criptomoedas em tempo real com gráficos interativos. ⚠️ Limitado a poucos usuários simultâneos devido aos limites da API.",
    image: "/images/projects/project2.png",
    repository: "https://github.com/gildairmoreira/crypto-dash",
    deploy: "https://cryptos-dash.netlify.app",
    technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "HeroUI", "Zustand", "TanStack Query", "ApexCharts"]
  },
  {
    id: 3,
    title: "Traduz AI",
    description: "Tradutor inteligente que traduz com contexto da conversa usando IA. Suporte a reconhecimento de voz.",
    image: "/images/projects/project3.png",
    repository: "https://github.com/gildairmoreira/traduz-ai",
    deploy: "https://traduz-ai.vercel.app",
    technologies: ["Next.js", "TypeScript", "Gemini API", "React Speech Recognition", "Tailwind CSS"]
  },
  {
    id: 4,
    title: "Reaper Quest",
    description: "Jogo desenvolvido para a matéria de POO na faculdade, seguindo conceitos de orientação a objetos em Python.",
    image: "/images/projects/project4.png",
    repository: "https://github.com/HypPedroic/jogo-trabalho-POO",
    deploy: null,
    technologies: ["Python", "Pygame", "POO"]
  },
  {
    id: 5,
    title: "SM E-commerce",
    description: "E-commerce completo para loja de assistência técnica com gateway de pagamento e CMS.",
    image: "/images/projects/project5.png",
    repository: "https://github.com/gildairmoreira/sm-ecommerce",
    deploy: "Em breve",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Mercado Pago", "Sanity CMS", "Clerk"]
  },
  {
    id: 6,
    title: "App Vai Chover",
    description: "App Android para consultar previsão do tempo baseado na localização do usuário (Latitude/Longitude).",
    image: "/images/projects/project6.jpg",
    repository: "https://github.com/gildairmoreira/app-vai-Chuve",
    deploy: "APK disponível em breve",
    technologies: ["Kotlin", "Jetpack Compose", "OpenWeather API"]
  },
  {
    id: 7,
    title: "Landing Page Advogada",
    description: "Landing page institucional para escritório de advocacia com design moderno e responsivo.",
    image: "/images/projects/project7.png",
    repository: "https://github.com/gildairmoreira/site-grasielle",
    deploy: "https://site-grasielle.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  navLinks,
  projects,
};
