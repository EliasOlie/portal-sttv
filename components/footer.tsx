import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t-4 border-[#D4A017]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4 bg-white/5 p-3 rounded-lg inline-block">
              <Image
                src="/sttv-logo.png"
                alt="STTV Logo"
                width={140}
                height={140}
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-gray-300 text-sm">
              Seu portal de notícias atualizado e confiável. Informação de
              qualidade, sempre.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4 text-[#D4A017]">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categoria/politica"
                  className="text-gray-300 hover:text-[#D4A017] transition-colors"
                >
                  Política
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/economia"
                  className="text-gray-300 hover:text-[#D4A017] transition-colors"
                >
                  Economia
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/esportes"
                  className="text-gray-300 hover:text-[#D4A017] transition-colors"
                >
                  Esportes
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/tecnologia"
                  className="text-gray-300 hover:text-[#D4A017] transition-colors"
                >
                  Tecnologia
                </Link>
              </li>
              <li>
                <Link
                  href="/categoria/cultura"
                  className="text-gray-300 hover:text-[#D4A017] transition-colors"
                >
                  Cultura
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold mb-4 text-[#D4A017]">Institucional</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-300 hover:text-[#D4A017] transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/equipe"
                  className="text-gray-300 hover:text-[#D4A017] transition-colors"
                >
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-300 hover:text-[#D4A017] transition-colors"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/anuncie"
                  className="text-gray-300 hover:text-[#D4A017] transition-colors"
                >
                  Anuncie Conosco
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="text-gray-300 hover:text-[#D4A017] transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-[#D4A017]">Redes Sociais</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.facebook.com/share/1FVYKkf2Gh/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#D4A017] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://kwai-video.com/u/@sttvwebtv/vCar9Vtt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#D4A017] transition-colors"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-white"
                >
                  <title>Kuaishou</title>
                  <path d="M18.315 12.264c2.33 0 4.218 1.88 4.218 4.2V19.8c0 2.32-1.888 4.2-4.218 4.2h-6.202a4.218 4.218 0 0 1-4.023-2.938l-3.676 1.833a2.04 2.04 0 0 1-2.731-.903 2.015 2.015 0 0 1-.216-.907v-5.94a2.03 2.03 0 0 1 2.035-2.024 2.044 2.044 0 0 1 .919.218l3.673 1.85a4.218 4.218 0 0 1 4.02-2.925zm-.062 2.162h-6.078c-1.153 0-2.09.921-2.108 2.065v3.247c0 1.148.925 2.081 2.073 2.1h6.113c1.153 0 2.09-.922 2.109-2.065v-3.247a2.104 2.104 0 0 0-2.074-2.1zM4.18 15.72a.554.554 0 0 0-.555.542v3.734a.556.556 0 0 0 .798.496l.01-.004 3.463-1.756V17.51l-3.467-1.73a.557.557 0 0 0-.249-.06zM9.28 0a5.667 5.667 0 0 1 4.98 2.965 4.921 4.921 0 0 1 3.36-1.317c2.714 0 4.913 2.177 4.913 4.863 0 2.686-2.2 4.863-4.912 4.863a4.921 4.921 0 0 1-3.996-2.034 5.651 5.651 0 0 1-4.345 2.034c-3.131 0-5.67-2.546-5.67-5.687C3.61 2.546 6.149 0 9.28 0Zm8.34 3.926c-1.441 0-2.61 1.157-2.61 2.585s1.169 2.585 2.61 2.585c1.443 0 2.612-1.157 2.612-2.585s-1.169-2.585-2.611-2.585zM9.28 2.287a3.395 3.395 0 0 0-3.39 3.4c0 1.877 1.518 3.4 3.39 3.4a3.395 3.395 0 0 0 3.39-3.4c0-1.878-1.518-3.4-3.39-3.4z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sttvwebtv"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#D4A017] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@sttv1990"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#D4A017] transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:contato@sttv.com.br"
                className="hover:text-[#D4A017] transition-colors"
              >
                contato@sttv.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} STTV - Portal de Notícias. Todos
            os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
