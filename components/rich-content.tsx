"use client";

import { useEffect, useState } from "react";

// Função utilitária para converter links em iframes quando aplicável
function enhanceContent(html: string) {
  // Cria um container temporário
  const container = document.createElement("div");
  container.innerHTML = html;

  // Seleciona todos os links do conteúdo
  const links = container.querySelectorAll("a[href]");

  links.forEach((link) => {
    const href = link.getAttribute("href") || "";

    // YouTube
    const youtubeMatch = href.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/
    );
    if (youtubeMatch) {
      const videoId = youtubeMatch[1];
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.title = "YouTube video";
      iframe.className = "w-full h-full rounded-lg shadow-md";
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      iframe.setAttribute("allowfullscreen", "true");

      const wrapper = document.createElement("div");
      wrapper.className = "my-8 aspect-video";
      wrapper.appendChild(iframe);

      link.parentElement?.replaceWith(wrapper);
      return;
    }

    // Caso contrário: deixa o link normal, mas estilizado
    link.classList.add("text-blue-600", "hover:underline");
  });

  return container.innerHTML;
}

interface RichContentProps {
  html: string;
}

export default function RichContent({ html }: RichContentProps) {
  const [content, setContent] = useState(html);

  useEffect(() => {
    // Só roda no client
    setContent(enhanceContent(html));
  }, [html]);

  return (
    <div
      className="
        prose prose-lg max-w-none
        prose-headings:text-[#563536]
        prose-a:text-blue-600 hover:prose-a:underline
        prose-strong:text-[#222]
        prose-img:rounded-lg
        prose-p:leading-relaxed
        prose-h1:mb-4 prose-h2:mb-3 prose-h3:mb-2
      "
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
