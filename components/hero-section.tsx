"use client";

import { useEffect, useState } from "react";
import HomeNewsPost from "./home-news-post";
import { Post } from "@/app/actions/posts";

export default function HeroSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data: Post[] = await response.json();

        // limita a 8 posts
        setPosts(data.slice(0, 8));
      } catch (err) {
        console.error("Erro ao buscar posts:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center text-muted-foreground">
          Carregando notícias...
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center text-muted-foreground">
          Nenhuma notícia encontrada.
        </div>
      </section>
    );
  }

  const [mainPost, ...secondaryPosts] = posts;

  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Main featured article */}
        {mainPost && <HomeNewsPost post={mainPost} />}

        {/* Secondary featured articles */}
        <div className="grid gap-6">
          {secondaryPosts.map((post) => (
            <HomeNewsPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
