import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturedNews from "@/components/featured-news"
import CategoryGrid from "@/components/category-grid"
import LatestNews from "@/components/latest-news"
import Footer from "@/components/footer"
import AdBanner from "@/components/ad-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 py-6">
          <AdBanner size="leaderboard" />
        </div>
        <FeaturedNews />
        <div className="container mx-auto px-4 py-6 md:hidden">
          <AdBanner size="mobile" />
        </div>
        <CategoryGrid />
        <div className="container mx-auto px-4 py-6">
          <AdBanner size="leaderboard" />
        </div>
        <LatestNews />
      </main>
      <Footer />
    </div>
  )
}
