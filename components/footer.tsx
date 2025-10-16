import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

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
              Seu portal de notícias atualizado e confiável. Informação de qualidade, sempre.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4 text-[#D4A017]">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categoria/politica" className="text-gray-300 hover:text-[#D4A017] transition-colors">
                  Política
                </Link>
              </li>
              <li>
                <Link href="/categoria/economia" className="text-gray-300 hover:text-[#D4A017] transition-colors">
                  Economia
                </Link>
              </li>
              <li>
                <Link href="/categoria/esportes" className="text-gray-300 hover:text-[#D4A017] transition-colors">
                  Esportes
                </Link>
              </li>
              <li>
                <Link href="/categoria/tecnologia" className="text-gray-300 hover:text-[#D4A017] transition-colors">
                  Tecnologia
                </Link>
              </li>
              <li>
                <Link href="/categoria/cultura" className="text-gray-300 hover:text-[#D4A017] transition-colors">
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
                <Link href="/sobre" className="text-gray-300 hover:text-[#D4A017] transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-gray-300 hover:text-[#D4A017] transition-colors">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-[#D4A017] transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/anuncie" className="text-gray-300 hover:text-[#D4A017] transition-colors">
                  Anuncie Conosco
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-300 hover:text-[#D4A017] transition-colors">
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#D4A017] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#D4A017] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#D4A017] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#D4A017] transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Mail className="h-4 w-4" />
              <a href="mailto:contato@sttv.com.br" className="hover:text-[#D4A017] transition-colors">
                contato@sttv.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} STTV - Portal de Notícias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
