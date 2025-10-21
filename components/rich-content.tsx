"use client";

import { useEffect, useState } from "react";

interface RichContentProps {
  html: string;
}

export default function RichContent({ html }: RichContentProps) {
  const [content, setContent] = useState(html);

  useEffect(() => {
    const container = document.createElement("div");
    container.innerHTML = html;

    // Processa todos os links
    container.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href") || "";

      // Detecta links do YouTube
      const youtubeMatch = href.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/
      );

      if (youtubeMatch) {
        const videoId = youtubeMatch[1];

        const iframeWrapper = document.createElement("div");
        iframeWrapper.className =
          "my-8 aspect-video rounded-lg shadow-md overflow-hidden";

        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.title = "YouTube video";
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        );
        iframe.allowFullscreen = true;
        iframe.className = "w-full h-full";

        iframeWrapper.appendChild(iframe);

        // Insere o iframe **após o link** sem remover conteúdo original
        link.parentNode?.insertBefore(iframeWrapper, link.nextSibling);
      } else {
        // Links normais
        link.classList.add("text-blue-600", "hover:underline", "break-words");
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });

    // Mantém todo o HTML original intacto
    setContent(container.innerHTML);
  }, [html]);

  return (
    <article
      className="prose prose-lg max-w-none leading-relaxed"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
