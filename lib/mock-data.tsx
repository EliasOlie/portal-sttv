import type { NewsArticle, Category, Advertisement } from "./types"

export const mockCategories: Category[] = [
  {
    id: "1",
    name: "Política",
    slug: "politica",
    description: "Notícias sobre política nacional e internacional",
  },
  {
    id: "2",
    name: "Economia",
    slug: "economia",
    description: "Análises e notícias do mundo econômico",
  },
  {
    id: "3",
    name: "Esportes",
    slug: "esportes",
    description: "Cobertura completa do mundo esportivo",
  },
  {
    id: "4",
    name: "Tecnologia",
    slug: "tecnologia",
    description: "Inovações e tendências tecnológicas",
  },
]

export const mockNews: NewsArticle[] = [
  {
    id: "1",
    slug: "nova-lei-aprovada-congresso",
    title: "Nova lei é aprovada no Congresso Nacional",
    excerpt: "Projeto de lei que tramitava há anos finalmente foi aprovado por unanimidade.",
    content: "<p>O Congresso Nacional aprovou hoje uma importante lei...</p>",
    image: "/congresso-nacional-brasil.jpg",
    author: "João Silva",
    date: "2025-10-15",
    category: "Política",
    categorySlug: "politica",
    featured: true,
  },
  {
    id: "2",
    slug: "mercado-financeiro-alta",
    title: "Mercado financeiro registra alta histórica",
    excerpt: "Bolsa de valores atinge novo recorde com otimismo dos investidores.",
    content: "<p>O mercado financeiro brasileiro...</p>",
    image: "/bolsa-valores-grafico.jpg",
    author: "Maria Santos",
    date: "2025-10-15",
    category: "Economia",
    categorySlug: "economia",
    featured: true,
  },
  {
    id: "3",
    slug: "time-local-vence-campeonato",
    title: "Time local vence campeonato estadual",
    excerpt: "Após 10 anos, equipe conquista título importante.",
    content: "<p>Em uma partida emocionante...</p>",
    image: "/futebol-comemoracao-trofeu.jpg",
    author: "Pedro Costa",
    date: "2025-10-14",
    category: "Esportes",
    categorySlug: "esportes",
  },
  {
    id: "4",
    slug: "nova-tecnologia-ia",
    title: "Nova tecnologia de IA revoluciona setor",
    excerpt: "Startup brasileira desenvolve solução inovadora com inteligência artificial.",
    content: "<p>Uma startup brasileira...</p>",
    image: "/inteligencia-artificial-tecnologia.jpg",
    author: "Ana Lima",
    date: "2025-10-14",
    category: "Tecnologia",
    categorySlug: "tecnologia",
  },
]

export const mockAds: Advertisement[] = [
  {
    id: "1",
    image: "/banner-publicidade.jpg",
    link: "#",
    position: "header",
    alt: "Publicidade",
  },
  {
    id: "2",
    image: "/banner-publicidade-vertical.jpg",
    link: "#",
    position: "sidebar",
    alt: "Publicidade",
  },
]
