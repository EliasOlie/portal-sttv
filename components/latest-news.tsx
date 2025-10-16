import Link from "next/link"
import { Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const latestArticles = [
  {
    id: 8,
    title: "Prefeitura anuncia obras de mobilidade urbana",
    excerpt: "Novo projeto visa melhorar o trânsito e transporte público na região metropolitana.",
    category: "Cidade",
    time: "Há 1 hora",
    image: "/urban-mobility-city.jpg",
  },
  {
    id: 9,
    title: "Startup brasileira recebe investimento milionário",
    excerpt: "Empresa de tecnologia capta recursos para expansão internacional.",
    category: "Negócios",
    time: "Há 2 horas",
    image: "/startup-business-investment.jpg",
  },
  {
    id: 10,
    title: "Exposição de arte contemporânea abre ao público",
    excerpt: "Mostra reúne obras de artistas nacionais e internacionais.",
    category: "Cultura",
    time: "Há 3 horas",
    image: "/contemporary-art-exhibition.png",
  },
  {
    id: 11,
    title: "Pesquisa revela novos hábitos de consumo",
    excerpt: "Estudo mostra mudanças no comportamento dos consumidores pós-pandemia.",
    category: "Economia",
    time: "Há 4 horas",
    image: "/consumer-behavior-shopping.jpg",
  },
  {
    id: 12,
    title: "Atleta brasileiro bate recorde mundial",
    excerpt: "Conquista histórica coloca o país no topo do ranking internacional.",
    category: "Esportes",
    time: "Há 5 horas",
    image: "/athlete-world-record-victory.jpg",
  },
  {
    id: 13,
    title: "Lançamento de novo aplicativo de educação",
    excerpt: "Plataforma promete democratizar acesso ao ensino de qualidade.",
    category: "Educação",
    time: "Há 6 horas",
    image: "/education-app-learning.jpg",
  },
]

export default function LatestNews() {
  return (
    <section className="bg-card py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Últimas Notícias</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {latestArticles.map((article) => (
            <Link key={article.id} href={`/noticia/${article.id}`}>
              <Card className="group overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {article.category}
                  </Badge>
                  <h3 className="font-serif text-xl font-bold mb-2 text-balance group-hover:text-secondary transition-colors">
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
        <div className="text-center">
          <Button size="lg" variant="outline">
            Carregar Mais Notícias
          </Button>
        </div>
      </div>
    </section>
  )
}
