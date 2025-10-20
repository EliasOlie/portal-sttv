import { NextResponse } from "next/server";
import { getFeaturedPosts } from "@/app/actions/posts";

export async function GET() {
  try {
    const posts = await getFeaturedPosts(5);
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Erro ao buscar posts em destaque:", error);
    return NextResponse.json(
      { error: "Falha ao buscar posts em destaque" },
      { status: 500 }
    );
  }
}
