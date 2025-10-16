"use client"

import Link from "next/link"
import { Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import AdBanner from "@/components/ad-banner"

// Mock data - in a real app, this would come from an API or database
const getCategoryData = (slug: string) => {
  const categories: Record<string, { name: string; description: string }> = {
    politica: {
      name: "Política",
      description: "Acompanhe as principais notícias e análises sobre o cenário político nacional e internacional.",
    },
    economia: {
      name: "Economia",
      description: "Fique por dentro das últimas novidades do mercado financeiro, negócios e economia.",
    },
    esportes: {
      name: "Esportes",
      description: "Resultados, análises e bastidores do mundo esportivo.",
    },
    tecnologia: {
      name: "Tecnologia",
      description: "Inovações, lançamentos e tendências do universo tecnológico.",
    },
    cultura: {
      name: "Cultura",
      description: "Arte, música, cinema, literatura e entretenimento.",
    },
    internacional: {
      name: "Internacional",
      description: "Notícias e análises sobre acontecimentos ao redor do mundo.",
    },
  }

  return categories[slug] || { name: "Categoria", description: "Notícias desta categoria" }
}

const getMockArticles = (category: string) => {
  return [
    {
      id: 17,
      title: `Principais acontecimentos em ${category} desta semana`,
      excerpt: "Resumo dos fatos mais importantes que marcaram os últimos dias.",
      time: "Há 1 hora",
      image: "/breaking-news-headline-image.jpg",
    },
    {
      id: 18,
      title: `Análise: O que esperar para ${category} nos próximos meses`,
      excerpt: "Especialistas avaliam tendências e fazem projeções para o futuro.",
      time: "Há 3 horas",
      image: "/technology-news-image.jpg",
    },
    {
      id: 19,
      title: `Entrevista exclusiva sobre ${category}`,
      excerpt: "Conversa com especialista revela bastidores e perspectivas.",
      time: "Há 5 horas",
      image: "/sports-championship-news.jpg",
    },
    {
      id: 20,
      title: `Novidades importantes em ${category}`,
      excerpt: "Mudanças significativas prometem impactar o setor.",
      time: "Há 7 horas",
      image: "/financial-market-economy.jpg",
    },
    {
      id: 21,
      title: `Debate: Os desafios de ${category} no Brasil`,
      excerpt: "Discussão aprofundada sobre os principais obstáculos e oportunidades.",
      time: "Há 9 horas",
      image: "/scientific-discovery-laboratory.jpg",
    },
    {
      id: 22,
      title: `Retrospectiva: Os destaques de ${category} em 2025`,
      excerpt: "Relembre os momentos mais marcantes do ano.",
      time: "Há 1 dia",
      image: "/cultural-festival-crowd.jpg",
    },
    {
      id: 23,
      title: `Opinião: O futuro de ${category}`,
      excerpt: "Colunista analisa tendências e faz previsões para os próximos anos.",
      time: "Há 15 horas",
      image: "/environment-nature-green.jpg",
    },
    {
      id: 24,
      title: `Reportagem especial sobre ${category}`,
      excerpt: "Investigação revela detalhes inéditos sobre o tema.",
      time: "Há 18 horas",
      image: "/urban-mobility-city.jpg",
    },
    {
      id: 25,
      title: `Dados revelam crescimento em ${category}`,
      excerpt: "Pesquisa mostra evolução positiva nos últimos meses.",
      time: "Há 1 dia",
      image: "/startup-business-investment.jpg",
    },
  ]
}

export default function CategoryContent({ categorySlug }: { categorySlug: string }) {
  const category = getCategoryData(categorySlug)
  const articles = getMockArticles(category.name)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        {/* Main content */}
        <div>
          {/* Category header */}
          <div className="mb-12">
            <Badge className="mb-4 text-base px-4 py-2 bg-secondary text-primary hover:bg-accent hover:text-white">
              {category.name}
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">{category.description}</p>
          </div>

          {/* Featured article */}
          <div className="mb-12">
            <Link href={`/noticia/${articles[0].id}`} className="group">
              <div className="grid md:grid-cols-2 gap-6 bg-card border-2 border-secondary/20 rounded-lg overflow-hidden hover:shadow-lg hover:border-secondary transition-all">
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={articles[0].image || "/placeholder.svg"}
                    alt={articles[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <Badge variant="secondary" className="mb-3 w-fit bg-accent text-white">
                    Destaque
                  </Badge>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-balance group-hover:text-secondary transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{articles[0].excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{articles[0].time}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="mb-12">
            <AdBanner size="leaderboard" />
          </div>

          {/* Articles grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {articles.slice(1).map((article) => (
              <Link key={article.id} href={`/noticia/${article.id}`}>
                <Card className="group overflow-hidden h-full border-2 border-border hover:border-secondary hover:shadow-lg transition-all">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-serif text-lg font-bold mb-2 text-balance group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{article.time}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load more button */}
          <div className="text-center">
            <Button size="lg" className="bg-secondary text-primary hover:bg-accent hover:text-white font-semibold">
              Carregar Mais Notícias
            </Button>
          </div>
        </div>

        {/* Sidebar with ads */}
        <aside className="hidden lg:block space-y-6">
          <div className="sticky top-24 space-y-6">
            <AdBanner size="rectangle" />
            <AdBanner size="rectangle" />
            <AdBanner size="rectangle" />
          </div>
        </aside>
      </div>

      <div className="mt-8 lg:hidden">
        <AdBanner size="mobile" />
      </div>
    </div>
  )
}
