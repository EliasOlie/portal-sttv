import Link from "next/link"
import { Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Main featured article */}
        <Link href="/noticia/1" className="group relative overflow-hidden rounded-lg aspect-[16/10] md:aspect-[4/3]">
          <img
            src="/breaking-news-headline-image.jpg"
            alt="Notícia principal"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <Badge className="mb-3 bg-secondary text-white">Destaque</Badge>
            <h2 className="font-serif text-2xl md:text-4xl font-bold mb-2 text-balance group-hover:text-secondary transition-colors">
              Governo anuncia novo pacote de investimentos em infraestrutura
            </h2>
            <div className="flex items-center gap-2 text-sm text-neutral-light">
              <Clock className="h-4 w-4" />
              <span>Há 2 horas</span>
            </div>
          </div>
        </Link>

        {/* Secondary featured articles */}
        <div className="grid gap-6">
          <Link href="/noticia/2" className="group relative overflow-hidden rounded-lg aspect-[16/9]">
            <img
              src="/technology-news-image.jpg"
              alt="Notícia secundária"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <Badge className="mb-2 bg-accent text-white">Tecnologia</Badge>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-1 text-balance group-hover:text-secondary transition-colors">
                Nova tecnologia promete revolucionar setor de energia
              </h3>
              <div className="flex items-center gap-2 text-xs text-neutral-light">
                <Clock className="h-3 w-3" />
                <span>Há 4 horas</span>
              </div>
            </div>
          </Link>

          <Link href="/noticia/3" className="group relative overflow-hidden rounded-lg aspect-[16/9]">
            <img
              src="/sports-championship-news.jpg"
              alt="Notícia secundária"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <Badge className="mb-2 bg-accent text-white">Esportes</Badge>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-1 text-balance group-hover:text-secondary transition-colors">
                Time brasileiro conquista título internacional
              </h3>
              <div className="flex items-center gap-2 text-xs text-neutral-light">
                <Clock className="h-3 w-3" />
                <span>Há 5 horas</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
