import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryContent from "@/components/category-content"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CategoryContent categorySlug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}
