"use client"

import { Clock, User, Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import AdBanner from "@/components/ad-banner"

// Mock data - in a real app, this would come from an API or database
const getArticleData = (id: string) => {
  return {
    id,
    title: "Governo anuncia novo pacote de investimentos em infraestrutura",
    subtitle: "Medida visa impulsionar economia e gerar milhares de empregos em todo o país",
    category: "Política",
    author: "Maria Silva",
    publishedAt: "15 de outubro de 2025",
    readTime: "5 min de leitura",
    image: "/breaking-news-headline-image.jpg",
    content: `
      <p>O governo federal anunciou nesta terça-feira um ambicioso pacote de investimentos em infraestrutura que promete transformar o cenário econômico do país nos próximos anos. O programa, batizado de "Brasil em Movimento", prevê investimentos de R$ 500 bilhões em obras de transporte, energia e saneamento básico.</p>

      <p>Segundo o ministro da Economia, o pacote foi estruturado para gerar impacto imediato na economia, com a criação de aproximadamente 2 milhões de empregos diretos e indiretos. "Este é um momento histórico para o Brasil. Estamos lançando as bases para um desenvolvimento sustentável e inclusivo", afirmou o ministro durante coletiva de imprensa.</p>

      <h2>Principais áreas de investimento</h2>

      <p>O programa está dividido em três eixos principais: transporte, energia e saneamento. No setor de transportes, serão investidos R$ 250 bilhões na construção e recuperação de rodovias, ferrovias e portos. A expectativa é que essas obras reduzam significativamente os custos logísticos do país.</p>

      <p>Na área de energia, R$ 150 bilhões serão destinados à expansão da matriz energética, com foco em fontes renováveis como solar e eólica. O objetivo é aumentar a capacidade de geração em 30% nos próximos cinco anos, garantindo segurança energética e reduzindo a dependência de fontes não renováveis.</p>

      <p>O saneamento básico receberá R$ 100 bilhões, com meta de universalizar o acesso à água tratada e coleta de esgoto até 2030. Atualmente, cerca de 35 milhões de brasileiros ainda não têm acesso a esses serviços essenciais.</p>

      <h2>Reação do mercado</h2>

      <p>O anúncio foi bem recebido pelo mercado financeiro. A bolsa de valores registrou alta de 2,5% logo após a divulgação do pacote, e o dólar apresentou queda de 1,8%. Analistas econômicos destacam que a medida pode impulsionar o PIB em até 2 pontos percentuais nos próximos anos.</p>

      <p>"É um plano robusto e bem estruturado. Se for executado conforme o planejado, teremos um impacto muito positivo na economia", avaliou o economista João Santos, da consultoria Econômica Brasil.</p>

      <h2>Desafios e críticas</h2>

      <p>Apesar do otimismo, especialistas alertam para os desafios na execução do programa. A capacidade de implementação das obras dentro do prazo e orçamento previstos é uma preocupação recorrente, considerando o histórico de atrasos em grandes projetos de infraestrutura no país.</p>

      <p>A oposição também manifestou ressalvas quanto ao financiamento do pacote. Parlamentares questionam se os recursos estão devidamente garantidos no orçamento e pedem transparência na execução dos projetos.</p>

      <p>O governo garante que o programa conta com fontes de financiamento diversificadas, incluindo recursos do orçamento federal, parcerias público-privadas e financiamento de organismos internacionais. Um comitê de acompanhamento será criado para monitorar a execução das obras e garantir a transparência dos investimentos.</p>
    `,
  }
}

export default function ArticleContent({ articleId }: { articleId: string }) {
  const article = getArticleData(articleId)

  const handleShare = (platform: string) => {
    // In a real app, this would implement actual sharing functionality
    console.log(`Sharing on ${platform}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8 max-w-7xl mx-auto">
        {/* Main content */}
        <article>
          {/* Category and metadata */}
          <div className="mb-6">
            <Badge className="mb-4 bg-secondary text-primary hover:bg-accent hover:text-white">
              {article.category}
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">{article.title}</h1>
            {article.subtitle && <p className="text-xl text-muted-foreground mb-6 text-pretty">{article.subtitle}</p>}

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.publishedAt}</span>
              </div>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>

            {/* Share buttons */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-sm font-medium mr-2">Compartilhar:</span>
              <Button size="sm" variant="outline" onClick={() => handleShare("facebook")}>
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleShare("twitter")}>
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleShare("linkedin")}>
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleShare("copy")}>
                <LinkIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Featured image */}
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <Separator className="mb-8" />

          {/* Article content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <Separator className="my-12" />

          {/* Author info */}
          <div className="flex items-start gap-4 p-6 bg-card border-2 border-secondary/20 rounded-lg">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
              {article.author.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{article.author}</h3>
              <p className="text-sm text-muted-foreground">
                Jornalista especializada em política e economia, com mais de 10 anos de experiência cobrindo os
                principais acontecimentos do país.
              </p>
            </div>
          </div>
        </article>

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
