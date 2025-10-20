import { Post } from "@/app/actions/posts";
import { Badge, Clock } from "lucide-react";
import Link from "next/link";

interface Props {
  post: Post;
}

export default function HomeNewsPost(props: Props) {
  const postDate = new Date(props.post.publishDate);

  return (
    <Link
      href={`/noticia/${props.post.slug}`}
      className="group relative overflow-hidden rounded-lg aspect-[16/10] md:aspect-[4/3]"
    >
      <img
        src={props.post.coverImage || "/placeholder.svg"}
        alt="Notícia principal"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <Badge className="mb-3 bg-secondary text-white">Destaque</Badge>
        <h2 className="font-serif text-2xl md:text-4xl font-bold mb-2 text-balance group-hover:text-secondary transition-colors">
          {props.post.title}
        </h2>
        <div className="flex items-center gap-2 text-sm text-neutral-light">
          <Clock className="h-4 w-4" />
          <span>
            {(() => {
              const now = new Date();
              const diffSeconds =
                Math.floor(
                  (props.post.publishDate
                    ? postDate.getTime()
                    : now.getTime()) - now.getTime()
                ) / 1000;
              // compute seconds difference (postDate - now)
              const seconds = Math.floor(
                (postDate.getTime() - now.getTime()) / 1000
              );
              const rtf = new Intl.RelativeTimeFormat("pt", {
                numeric: "auto",
              });
              const divisions: {
                amount: number;
                unit: Intl.RelativeTimeFormatUnit;
              }[] = [
                { amount: 60, unit: "second" },
                { amount: 60, unit: "minute" },
                { amount: 24, unit: "hour" },
                { amount: 7, unit: "day" },
                { amount: 4.34524, unit: "week" },
                { amount: 12, unit: "month" },
                { amount: Infinity, unit: "year" },
              ];
              let value = seconds;
              for (const { amount, unit } of divisions) {
                if (Math.abs(value) < amount || amount === Infinity) {
                  return rtf.format(Math.round(value), unit);
                }
                value = Math.round(value / amount);
              }
              return "";
            })()}
          </span>
        </div>
      </div>
    </Link>
  );
}
