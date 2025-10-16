import Link from "next/link"
import { Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredArticles = [
  {
    id: 4,
    title: "Mercado financeiro reage positivamente a novas medidas econômicas",
    category: "Economia",
    time: "Há 3 horas",
    image: "/financial-market-economy.jpg",
  },
  {
    id: 5,
    title: "Descoberta científica pode mudar tratamento de doenças",
    category: "Ciência",
    time: "Há 6 horas",
    image: "/scientific-discovery-laboratory.jpg",
  },
  {
    id: 6,
    title: "Festival cultural atrai milhares de visitantes",
    category: "Cultura",
    time: "Há 8 horas",
    image: "/cultural-festival-crowd.jpg",
  },
  {
    id: 7,
    title: "Novas políticas ambientais entram em vigor",
    category: "Meio Ambiente",
    time: "Há 10 horas",
    image: "/environment-nature-green.jpg",
  },
]

export default function FeaturedNews() {
  return (
    <section className="bg-card py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Notícias em Destaque</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.map((article) => (
            <Link key={article.id} href={`/noticia/${article.id}`}>
              <Card className="group overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
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
                  <h3 className="font-serif text-lg font-bold mb-2 text-balance group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{article.time}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
