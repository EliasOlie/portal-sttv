import { PostDetailSkeleton } from "@/components/post-skeleton";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Header simplificado */}
      <Header />

      {/* Conteúdo do Post com Skeleton */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <PostDetailSkeleton />
        </div>
      </section>

      {/* Footer simplificado */}
      <Footer />
    </main>
  );
}
