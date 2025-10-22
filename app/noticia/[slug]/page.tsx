import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Eye } from "lucide-react";
import { getPostBySlug } from "@/app/actions/posts";
import { formatPublishDate } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import RichContent from "@/components/rich-content";

interface PostPageProps {
  params: {
    slug: string;
  };
}

// Gerar metadados dinâmicos baseados no post
export async function generateMetadata({ params }: PostPageProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.portalsttv.com.br";
  const slug = await params.slug;
  const post = await getPostBySlug(decodeURIComponent(slug));

  if (!post) {
    return {
      title: "Post não encontrado | STTV",
      description: "O artigo que você está procurando não foi encontrado.",
    };
  }

  const imageUrl = post?.coverImage?.startsWith("http")
    ? post.coverImage
    : `${baseUrl}${post?.coverImage}`;

  return {
    title: post?.title,
    description: post?.seoDescription,
    openGraph: {
      title: post?.seoTitle || post?.title,
      description: post?.seoDescription,
      type: "article",
      publishedTime: post?.publishDate,
      modifiedTime: post?.updatedDate,
      authors: [post?.authorId],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post?.title,
        },
      ],
      tags: post?.tags?.map((tag) => tag.tagId),
    },
    twitter: {
      card: "summary_large_image",
      title: post?.seoTitle || post?.title,
      description: post?.seoDescription,
      images: [imageUrl],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const slug = await params.slug;
  const post = await getPostBySlug(decodeURIComponent(slug));

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Header simplificado */}
      <Header />
      {/* Conteúdo do Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#563536] mb-4 text-center">
              {post?.title}
            </h1>
            <div className="flex justify-center items-center gap-6 text-gray-500 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatPublishDate(post?.publishDate || "")}</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                <span>{post?.viewCount} visualizações</span>
              </div>
            </div>

            <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={
                  post?.coverImage || "/placeholder.svg?height=400&width=800"
                }
                alt={post?.title || ""}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <RichContent html={post?.content || ""} />
          </div>
        </div>
      </section>

      {/* Footer simplificado */}
      <Footer />
    </main>
  );
}
