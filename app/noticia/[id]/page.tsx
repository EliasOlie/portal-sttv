import Header from "@/components/header"
import Footer from "@/components/footer"
import ArticleContent from "@/components/article-content"
import RelatedArticles from "@/components/related-articles"

export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ArticleContent articleId={params.id} />
        <RelatedArticles />
      </main>
      <Footer />
    </div>
  )
}
