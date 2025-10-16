export interface NewsArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  categorySlug: string
  featured?: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
}

export interface Advertisement {
  id: string
  image: string
  link: string
  position: "header" | "sidebar" | "inline" | "footer"
  alt: string
}
