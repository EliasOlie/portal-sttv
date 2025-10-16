import Link from "next/link"
import { Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const relatedArticles = [
  {
    id: 14,
    title: "Especialistas analisam impacto do novo pacote econômico",
    category: "Economia",
    time: "Há 1 hora",
    image: "/financial-market-economy.jpg",
  },
  {
    id: 15,
    title: "Obras de infraestrutura devem começar no próximo trimestre",
    category: "Política",
    time: "Há 2 horas",
    image: "/urban-mobility-city.jpg",
  },
  {
    id: 16,
    title: "Setor de construção civil celebra anúncio de investimentos",
    category: "Economia",
    time: "Há 3 horas",
    image: "/startup-business-investment.jpg",
  },
]

export default function RelatedArticles() {
  return (
    <section className="bg-card py-12">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Notícias Relacionadas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
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
