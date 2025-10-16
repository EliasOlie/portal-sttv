import Link from "next/link"
import { Newspaper, TrendingUp, Trophy, Cpu, Palette, Globe } from "lucide-react"

const categories = [
  {
    name: "Política",
    icon: Newspaper,
    href: "/categoria/politica",
    color: "bg-red-500",
  },
  {
    name: "Economia",
    icon: TrendingUp,
    href: "/categoria/economia",
    color: "bg-green-500",
  },
  {
    name: "Esportes",
    icon: Trophy,
    href: "/categoria/esportes",
    color: "bg-blue-500",
  },
  {
    name: "Tecnologia",
    icon: Cpu,
    href: "/categoria/tecnologia",
    color: "bg-purple-500",
  },
  {
    name: "Cultura",
    icon: Palette,
    href: "/categoria/cultura",
    color: "bg-pink-500",
  },
  {
    name: "Internacional",
    icon: Globe,
    href: "/categoria/internacional",
    color: "bg-orange-500",
  },
]

export default function CategoryGrid() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Explore por Categoria</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Link key={category.name} href={category.href} className="group">
              <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card hover:bg-muted transition-colors">
                <div
                  className={`${category.color} p-4 rounded-full text-white transition-transform group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-medium text-center">{category.name}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
